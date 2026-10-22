# Config Schema

`config.yml` is the single source of truth for your Saleor store. Each top-level key maps to an entity type. All sections are optional — omit a section to leave that part of the store unchanged.

## Top-Level Structure

```yaml
shop:               # Global store settings (singleton)
channels:           # Sales channels
taxClasses:         # Tax classifications
productTypes:       # Product templates
pageTypes:          # CMS page templates
productAttributes:  # Attributes for products and variants
contentAttributes:  # Attributes for CMS pages
categories:         # Product category hierarchy
collections:        # Product groupings
warehouses:         # Fulfillment locations
shippingZones:      # Geographic shipping rules
products:           # Product catalog
menus:              # Navigation menus
models:             # Custom data models
```

## Key Rules

- **Deploy is additive only** — Configurator does not delete entities; it only creates and updates
- **Omitted and empty sections are both ignored** — neither causes any remote changes
- **Cross-references use the target entity's identifier** — products reference `productType` by name, `category` by slug (see `identity-strategies`)
- **Validation runs before any mutations** — duplicate slugs/names or broken references abort the deploy

## Minimal Example

```yaml
shop:
  name: "My Store"
  defaultCurrency: USD
  defaultCountry: US

productTypes:
  - name: "Physical Product"
    kind: NORMAL

categories:
  - name: "Electronics"
    slug: "electronics"
```

## Full Schema Reference

- **Schema docs**: [SCHEMA.md](https://github.com/saleor/configurator/blob/main/SCHEMA.md)
- **JSON schema**: [schema.json](https://github.com/saleor/configurator/blob/main/schema.json)
- **Full example**: [example.yml](https://github.com/saleor/configurator/blob/main/example.yml)

## Anti-Patterns

❌ Don't mix up cross-reference identifier types — see `identity-strategies` for which entity uses slug vs name

❌ Don't use `attributes:` — it was removed. Use `productAttributes:` for product/variant attributes and `contentAttributes:` for CMS page attributes

❌ Don't use `type:` for attribute input type — the correct field is `inputType:` (e.g. `inputType: DROPDOWN`)

❌ Don't reference attributes in `productTypes` as plain strings — use `- attribute: "Name"` object syntax

❌ Don't omit `address` on warehouses — it is required (needs at least `streetAddress1`, `city`, `postalCode`, `country`)
