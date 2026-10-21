# Entity Identity Strategies

Every entity has exactly **one** identification strategy. Using the wrong one causes mismatches between local config and remote state.

## Strategy Matrix

| Entity        | Strategy  | Field  | Example               |
| ------------- | --------- | ------ | --------------------- |
| Categories    | slug      | `slug` | `smartphones`         |
| Channels      | slug      | `slug` | `default-channel`     |
| Collections   | slug      | `slug` | `summer-sale`         |
| Menus         | slug      | `slug` | `main-navigation`     |
| Products      | slug      | `slug` | `iphone-15-pro`       |
| Warehouses    | slug      | `slug` | `us-east-warehouse`   |
| ProductTypes  | name      | `name` | `Physical Product`    |
| PageTypes     | name      | `name` | `Blog Post`           |
| TaxClasses    | name      | `name` | `Standard Rate`       |
| ShippingZones | name      | `name` | `North America`       |
| Attributes    | name      | `name` | `Color`               |
| Shop          | singleton | N/A    | (only one per store)  |

## Slug Rules

- Lowercase alphanumeric with hyphens only: `/^[a-z0-9-]+$/`
- Recommended length: 1–50 characters
- **Case-sensitive**: `Default-Channel` ≠ `default-channel`
- Slugs are permanent identifiers — changing a slug is treated as delete + create

```yaml
# ✅ Valid slugs
slug: "iphone-15-pro"
slug: "default-channel"
slug: "us-east"

# ❌ Invalid slugs
slug: "iPhone 15 Pro"    # spaces not allowed
slug: "US_East"          # underscores not allowed
slug: "Default Channel"  # uppercase + spaces
```

## Name Rules

- Any printable characters allowed
- Recommended length: 1–100 characters
- **Case-sensitive and exact**: `Physical Product` ≠ `physical product`
- Uniqueness required within entity type

```yaml
# ✅ Valid names
name: "Physical Product"
name: "North America"
name: "Standard Rate"

# ❌ Problematic — will create a second entity, not update
name: "physical product"   # when "Physical Product" already exists remotely
```

## Cross-Reference Consistency

When entities reference each other, the reference must use the correct strategy of the **target** entity:

```yaml
products:
  - name: "My Product"
    slug: "my-product"
    productType: "Physical Product"   # ProductType is name-based → use name
    category: "electronics"           # Category is slug-based → use slug

warehouses:
  - name: "My Warehouse"
    slug: "my-warehouse"
    shippingZones:
      - "North America"               # ShippingZone is name-based → use name

menus:
  - slug: "main-nav"
    items:
      - category: "electronics"       # Category is slug-based → use slug
        collection: "summer-sale"     # Collection is slug-based → use slug
```

## Why Two Strategies Exist

**Slug-based entities** are customer-facing (URLs, storefronts) — slugs must be stable and URL-safe.

**Name-based entities** are internal configuration (product templates, tax rules) — names are human-readable identifiers not exposed in URLs.

## Changing Identifiers

**Changing a slug or name** is a destructive operation — the Configurator treats it as:
1. Delete the old entity (by old slug/name)
2. Create a new entity (with new slug/name)

If you need to rename, do it in the Saleor Dashboard and then re-introspect to sync your `config.yml`.

## Anti-Patterns

❌ **Don't use name when slug is expected** — `category: "Electronics"` instead of `category: "electronics"` will fail reference validation

❌ **Don't change slugs casually** — downstream links (storefronts, menus) break if URL slugs change

❌ **Don't assume case-insensitive matching** — all comparisons are exact and case-sensitive
