# Saleor Stock Availability Modes (3.23+)

How Saleor decides whether a product is purchasable, and how that computation changed in 3.23. This rule covers backend mechanics, server queryset dispatch, Dashboard UI rules, webhook trigger conditions, and migration footguns.

> **Source**: `saleor/site/migrations/0048_sitesettings_include_shipping_zones_in_stock_availability.py`, `saleor/warehouse/managers.py`, `saleor/webhook/event_types.py`, `saleor/graphql/schema.graphql`. Dashboard references in `saleor-dashboard/src/products/`, `src/extensions/`, `src/siteSettings/`.

## TL;DR

Saleor 3.23 introduced a per-shop boolean **`Shop.useLegacyShippingZoneStockAvailability`** that switches the entire stock-availability computation between two semantically different modes:

- **Legacy mode** (`true`): visibility is filtered through both the **warehouse-channel** link AND an **active shipping zone covering the destination**. This is the pre-3.23 behavior.
- **Direct mode** (`false`): visibility is filtered through the **warehouse-channel** link only. Shipping zones become a separate concern that only affects which shipping methods are offered at checkout.

**Defaults**:

- New installations: `false` (direct).
- Existing installations: `true` (legacy), preserved by migration `0048` via `db_default=True`.

Both modes are supported in 3.23 and the flag is the only way to switch between them. Admins must opt into direct mode explicitly via the site-settings page. Treat both modes as live until Saleor announces a deprecation — don't assume legacy mode will be removed on any particular timeline.

## The conceptual model

In direct mode, two concerns that were entangled before 3.23 become **orthogonal**:

| Concern | Meaning | Driven by |
|---|---|---|
| **Purchasability** | Can a customer add this variant to cart? | Channel publication, channel listing, variant pricing, warehouse-channel link, stock quantity |
| **Shippability** | Can a customer complete checkout for a shippable order? | Shipping zones, shipping methods, destination |

In legacy mode the two are entangled: a missing shipping zone hides the product entirely, so "shippability problems" cause "purchasability problems". In direct mode they are independent: a product can be purchasable but unshippable, or have stock but no covering shipping zone. **Any feature that diagnoses, displays, or computes availability must respect this distinction.**

This orthogonality is the single most important insight when refactoring around 3.23.

## The flag

### GraphQL surface

```graphql
type Shop {
  id: ID!
  useLegacyShippingZoneStockAvailability: Boolean!
}

input ShopSettingsInput {
  useLegacyShippingZoneStockAvailability: Boolean
}
```

The flag is on `Shop`, not `Channel` — it's shop-wide, not per-channel. There is no plan (as of 3.23.3) to make it per-channel.

### Where to fetch the flag (Dashboard pattern)

A tiny per-page or per-component query, fetching only `shop { id useLegacyShippingZoneStockAvailability }`, is usually the right default. Apollo dedupes identical concurrent queries, so co-locating the query with the consuming component costs at most one extra request per session.

Adding the flag to the global `ShopInfo` query that backs the dashboard's `useShop` context is a viable alternative if many surfaces end up needing it, but it bloats a query consumed on virtually every page for a flag only a handful of surfaces care about — pay that cost only when justified.

Examples in saleor-dashboard:

- `channelDiagnosticsQuery` in `src/products/queries.ts` — used by the product doctor's diagnostic hook.
- `stockVisibilityModeQuery` in `src/products/queries.ts` — used by the variant page's `StockVisibilityHint` component.

```graphql
query StockVisibilityMode {
  shop {
    id
    useLegacyShippingZoneStockAvailability
  }
}
```

The `id` is required for Apollo cache normalization — `Shop` implements `ObjectWithMetadata`, and the `@graphql-eslint/require-selections` rule will flag a missing `id`.

### Where the flag is toggled

`/site-settings` page. The literal toggle label is **"Use legacy shipping zone stock availability"**. Always quote that exact phrase in copy that points admins to the setting — otherwise they look at the page and don't recognize what they're supposed to find.

## Server-side computation rules

These rules govern how the backend computes stock visibility and `quantityAvailable`. They are the single source of truth — Dashboard logic must mirror them, not invent its own.

### Legacy mode (`useLegacyShippingZoneStockAvailability=true`)

A `Stock` row counts toward customer-visible availability for `(channel, address)` iff:

1. The stock's warehouse is assigned to the channel, AND
2. The stock's warehouse is assigned to a shipping zone, AND
3. That shipping zone covers the destination address's country, AND
4. The shipping zone is associated with the channel.

Without a destination address, conservative behavior: only stocks in warehouses with at least *some* shipping-zone coverage in that channel count. Practically: no shipping zones in the channel → product is invisible to customers.

### Direct mode (`useLegacyShippingZoneStockAvailability=false`)

A `Stock` row counts toward customer-visible availability for `(channel, address)` iff:

1. The stock's warehouse is assigned to the channel.

That's it. Shipping zones do not enter the visibility computation. They are still required for **shipping methods at checkout**, but they no longer gate visibility. `quantityAvailable` becomes well-defined without a destination address.

### Practical consequences

- In direct mode, an admin can have a perfectly purchasable product (warehouse linked to channel, stock present) that **cannot be shipped** (no shipping zone covers any country). The customer adds to cart; checkout fails when no shipping methods are available.
- In direct mode, the diagnostic check "warehouse with stock is not covered by any shipping zone in this channel" produces **false positives** for purchasability. It's still meaningful for shippability, but must not block the "is this purchasable?" answer.

### Reading the flag in queryset filters

The `Stock` queryset has methods like `for_channel_and_country` (legacy) and `for_channel` (direct-mode-friendly). The choice of which to call belongs at the query/resolver layer, not inside the `Stock` model. **Mode dispatch happens at the boundary**, not deep in the data layer.

## Webhook events affected by the mode

### Four channel-scoped events that fire only in direct mode

```
PRODUCT_VARIANT_BACK_IN_STOCK_FOR_CLICK_AND_COLLECT
PRODUCT_VARIANT_BACK_IN_STOCK_IN_CHANNEL
PRODUCT_VARIANT_OUT_OF_STOCK_FOR_CLICK_AND_COLLECT
PRODUCT_VARIANT_OUT_OF_STOCK_IN_CHANNEL
```

These were introduced in 3.23 and fire **only when `useLegacyShippingZoneStockAvailability=false`**. The schema docstring on each is `Note: Only triggered when the useLegacyShippingZoneStockAvailability shop setting is disabled.`

**Footgun**: a shop in legacy mode can subscribe to these events with no error and no deliveries. Any UI that exposes the events to admins must surface this prerequisite at subscription time. The dashboard's webhook event picker shows a "Direct stock mode only" advisory chip with a tooltip explaining the requirement and linking to the site-settings page.

### Pre-3.23 events that keep firing in both modes

```
PRODUCT_VARIANT_BACK_IN_STOCK
PRODUCT_VARIANT_OUT_OF_STOCK
```

These are warehouse-level, not channel-scoped. They are NOT mode-conditional and keep their semantics from before 3.23.

### Webhook subscription queries

The new channel-scoped events expose `channel` in their payload. Subscriptions querying for `channel { ... }` will succeed only after the shop is in direct mode AND the event actually fires. Test against a direct-mode dev fixture, otherwise the subscription's GraphQL query may parse but never deliver.

### Webhook trigger conditions in backend code

Channel-scoped stock events check `useLegacyShippingZoneStockAvailability` at the dispatch site. Don't write tests asserting they fire in legacy-mode fixtures — they won't, by design.

## Dashboard UI rules

### Diagnostic / "doctor" tooling

Categorize availability issues into two orthogonal buckets:

- **`purchasability`**: channel-inactive, no-variants, no-variant-in-channel, no-variant-priced, no-warehouses, no-stock, stock-outside-channel-warehouses.
- **`shipping`**: no-shipping-zones, warehouse-not-in-zone.

Centralize the categorization at the dispatch site (where checks are run), not in each check function — keeps individual checks focused on detection.

Mode-conditional check behavior:

- `checkNoShippingZones`: `warning` in legacy mode (blocks visibility), `info` in direct mode (only blocks shipping). Use different message text per mode so the consequence is accurate.
- `checkWarehouseNotInShippingZone`: skip entirely in direct mode (false positive).
- `checkStockOutsideChannelWarehouses`: `info` advisory in both modes; particularly useful for direct-mode onboarding.

Always render a visible **mode indicator** (banner/chip) in the diagnostic UI so admins know which ruleset they're seeing.

### Public-API verification badges

Where the dashboard verifies "is this purchasable?" against the live API and shows a result, the *reassurance text* below the result should be **mode-aware**: explain what "Purchasable" means under the active mode (e.g. "Customers in this channel can buy this — direct mode visibility comes from the warehouse-channel link") so the admin understands the precondition that produced the answer.

### Copy rules (these are bug magnets)

1. **Don't say "available" when you mean "listed".** Counting channel listings is not the same as counting "channels where customers can buy this". The dashboard had a "Available in N out of M" subtitle on the variant channel availability card that was actually counting *listings* — silently misleading post-3.23. Replace with "Listed in N of M channels" or similar non-stock-flavored phrasing.

2. **"Available", "in stock", "purchasable", "visible to customers"** are now **mode-conditional** terms. If a string uses one of them, it should either be (a) accurate in both modes, or (b) explicitly conditional on the mode.

3. **"Stock"** alone is unambiguous (raw quantity in a warehouse). Use it freely. The ambiguity starts when you tie stock to customer experience.

4. **When linking admins to a setting, quote the literal toggle label** in the link/tooltip text so they recognize it on the destination page. Saleor's setting label is **"Use legacy shipping zone stock availability"**.

## Test fixtures for mode-dependent logic

Every test that asserts on `quantityAvailable`, `isAvailable`, `Stock` filtering, or one of the four new webhook events must explicitly fixture **both modes** when the behavior diverges. Don't rely on the `db_default` — be explicit:

```python
@pytest.fixture
def shop_in_direct_mode(site_settings):
    site_settings.use_legacy_shipping_zone_stock_availability = False
    site_settings.save()
    return site_settings
```

Pre-3.23 tests assumed legacy semantics implicitly. When touching such tests, audit whether the behavior is actually mode-independent or just legacy-only.

## Migration footguns

1. **Existing installations stay on legacy by default.** Don't assume an upgraded shop is in direct mode. Code paths must support both modes for as long as the flag exists.

2. **Toggling the mode does NOT republish products or refresh stock visibility caches.** If the dashboard renders cached `isAvailable` data, a toggle in site settings won't immediately propagate. Apollo cache or any client-side state derived from the flag must be invalidated.

3. **Existing webhook subscriptions to the four channel-scoped events on a legacy-mode shop are silent.** Saving the subscription succeeds — but the webhook is dormant until the flag flips. Surface this at subscription time, not at delivery time.

4. **Test data**: fixtures created before 3.23 are typically in legacy mode. New tests that exercise direct-mode behavior need explicit setup.

5. **Cross-channel reasoning**: in legacy mode, a warehouse-channel-shipping-zone triplet had a uniform answer for any customer destination in that channel's countries. In direct mode, you no longer need a destination at all — but the same warehouse may produce different shipping outcomes per customer. Don't carry over assumptions.

## Reference points

### Saleor backend
- Migration: `saleor/site/migrations/0048_sitesettings_include_shipping_zones_in_stock_availability.py`
- Schema: `saleor/graphql/schema.graphql`, search for `useLegacyShippingZoneStockAvailability`
- Stock querysets: `saleor/warehouse/managers.py` (mode dispatch lives at call sites)
- Webhook events: `saleor/webhook/event_types.py`, search for `Note: Only triggered when`

### saleor-dashboard
- Mode flag fetch: `src/products/queries.ts` → `channelDiagnosticsQuery`, `stockVisibilityModeQuery`
- Diagnostic categorization: `src/products/components/ProductDoctor/utils/availabilityChecks.ts`, `src/products/components/ProductDoctor/utils/types.ts` (`AvailabilityIssueCategory`)
- Mode indicator banner: `src/products/components/ProductDoctor/AvailabilityCard.tsx` → `StockAvailabilityModeIndicator`
- Mode-aware variant stock hint: `src/products/components/ProductStocks/StockVisibilityHint.tsx`
- Webhook event picker badge: `src/extensions/components/WebhookDetailsPage/components/WebhookEvents/utils.ts` → `DIRECT_STOCK_MODE_ONLY_EVENTS`
- Site-settings toggle: `src/siteSettings/components/SiteSettingsPage/SiteSettingsPage.tsx`, message key `sectionStockAvailabilityHeader`

## Anti-patterns

❌ **Don't treat "channel listing exists" as equivalent to "purchasable in that channel"** — Listing is necessary, not sufficient  
❌ **Don't write diagnostic copy that uses "available" without specifying which sense** — It's mode-conditional now  
❌ **Don't let an admin subscribe to a channel-scoped stock webhook without warning** — Legacy mode silently disables the four new events  
❌ **Don't skip the warehouse-not-in-shipping-zone check in legacy mode** — It's still a real visibility blocker there  
❌ **Don't show the warehouse-not-in-shipping-zone check as `warning` in direct mode** — It's only a shipping concern, drop to `info`  
❌ **Don't hardcode test fixtures to legacy mode** — Audit and exercise both modes when behavior diverges 