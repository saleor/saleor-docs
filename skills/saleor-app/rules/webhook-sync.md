# Sync Webhooks

Sync webhooks execute within Saleor's request/response cycle. The app's response directly affects the API result. Use for: tax calculation, shipping method filtering, payment processing, transaction handling.

> **Docs**: [Sync Events](https://docs.saleor.io/developer/extending/webhooks/synchronous-events/overview)

---

## Protocol

```
Saleor (during request processing) → POST https://my-app.com/api/webhooks/calculate-taxes

Headers: same as async (saleor-event, saleor-signature, saleor-api-url, etc.)
Body: JSON shaped by subscription query

Expected response: HTTP 200 with JSON body matching event-specific schema
```

### Difference from Async

| | Async | Sync |
|---|---|---|
| Timing | After processing | During processing |
| Response | 200 OK (body ignored) | 200 OK + JSON response body |
| Impact | None on caller | Directly affects API result |
| Timeout | 20s | 20s (but compounds with other sync webhooks) |

---

## Performance

Sync webhooks compound — if Saleor sends the same request to multiple sync webhook apps, their times add up. The entire HTTP round trip must complete within 20 seconds (2s connection + 18s response).

**Optimize**:
- Minimize cold starts (keep warm, use Edge runtimes)
- Cache expensive lookups
- Keep handler logic fast — no external API calls if possible
- Consider background processing + caching for data that doesn't change per-request

---

## Categories

| Category | Events | Response Contains |
|----------|--------|-------------------|
| Tax | `CHECKOUT_CALCULATE_TAXES`, `ORDER_CALCULATE_TAXES` | Tax line items |
| Shipping | `CHECKOUT_FILTER_SHIPPING_METHODS`, `ORDER_FILTER_SHIPPING_METHODS` | Excluded method IDs |
| Payment | `PAYMENT_GATEWAY_INITIALIZE_SESSION`, etc. | Payment session data |
| Transaction | `TRANSACTION_CHARGE_REQUESTED`, etc. | Transaction result |

See [Saleor Docs](https://docs.saleor.io/developer/extending/webhooks/synchronous-events/overview) for full event list and response schemas.

---

## SDK Pattern

```typescript
import { SaleorSyncWebhook } from "@saleor/app-sdk/handlers/next";

export const filterShippingWebhook =
  new SaleorSyncWebhook<OrderFilterShippingMethodsPayloadFragment>({
    name: "Filter Shipping Methods",
    webhookPath: "api/webhooks/order-filter-shipping-methods",
    event: "ORDER_FILTER_SHIPPING_METHODS",
    apl: saleorApp.apl,
    query: OrderFilterShippingMethodsSubscriptionDocument,
  });

export default filterShippingWebhook.createHandler((req, res, ctx) => {
  const { payload } = ctx;

  // Return excluded shipping methods
  return res.status(200).json({
    excluded_methods: [
      {
        id: "some-shipping-method-id",
        reason: "Not available for this order",
      },
    ],
  });
});

export const config = { api: { bodyParser: false } };
```

### Response Format

Each sync event type has a specific response schema. The response is returned directly to Saleor and affects the API result. Consult the docs for the exact schema per event type.

---

## Without SDK

Same as async webhook handling (raw body, signature verification), but return a JSON response body matching the event's expected schema instead of empty 200.

```typescript
export async function handleSyncWebhook(request: Request) {
  // ... verify signature (same as async)

  const payload = JSON.parse(rawBody);

  // Return event-specific response
  return new Response(
    JSON.stringify({ excluded_methods: [] }),
    { status: 200, headers: { "content-type": "application/json" } }
  );
}
```

---

## Anti-patterns

- **Don't do slow I/O in sync handlers** — you block Saleor's response to the client
- **Don't ignore the timeout** — 20s total, shared with other sync webhooks on the same request
- **Don't return wrong response schema** — Saleor silently ignores malformed responses
- **Don't use sync webhooks for side effects only** — use async if you don't need to return data to Saleor
