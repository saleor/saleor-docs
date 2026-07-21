---
api_reference: true
id: warehouse-shipping-zone-unassign
title: WarehouseShippingZoneUnassign
---

Remove shipping zone from given warehouse.

Requires one of the following permissions: MANAGE_PRODUCTS.

```graphql
type WarehouseShippingZoneUnassign {
  warehouseErrors: [WarehouseError!]! @deprecated
  errors: [WarehouseError!]!
  warehouse: Warehouse
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WarehouseShippingZoneUnassign</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[WarehouseError!]!</code></span>](/api-reference/products/objects/warehouse-error) \{#errors\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WarehouseShippingZoneUnassign</code>.<code class="gqlmd-mdx-entity-name">warehouse</code></span>](#warehouse)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Warehouse</code></span>](/api-reference/products/objects/warehouse) \{#warehouse\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WarehouseShippingZoneUnassign</code>.<code class="gqlmd-mdx-entity-name">warehouseErrors</code></span>](#warehouse-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[WarehouseError!]!</code></span>](/api-reference/products/objects/warehouse-error) \{#warehouse-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`unassignWarehouseShippingZone`](/api-reference/products/mutations/unassign-warehouse-shipping-zone) <mark class="gqlmd-mdx-badge">mutation</mark>
