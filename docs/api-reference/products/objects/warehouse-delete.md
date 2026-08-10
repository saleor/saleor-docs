---
api_reference: true
id: warehouse-delete
title: WarehouseDelete
---

Deletes selected warehouse.

Requires one of the following permissions: MANAGE_PRODUCTS.

Triggers the following webhook events:

- WAREHOUSE_DELETED (async): A warehouse is deleted.
- PRODUCT_VARIANT_OUT_OF_STOCK (async): A product variant stock is removed together with the deleted warehouse.
- PRODUCT_VARIANT_OUT_OF_STOCK_IN_CHANNEL (async): A product variant is out of stock in a channel (non click-and-collect warehouses).

Note: Triggered only when the `useLegacyShippingZoneStockAvailability` shop setting is disabled.

- PRODUCT_VARIANT_OUT_OF_STOCK_FOR_CLICK_AND_COLLECT (async): A product variant is out of stock in a channel (click-and-collect warehouses).

Note: Triggered only when the `useLegacyShippingZoneStockAvailability` shop setting is disabled.

```graphql
type WarehouseDelete {
  warehouseErrors: [WarehouseError!]! @deprecated
  errors: [WarehouseError!]!
  warehouse: Warehouse
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WarehouseDelete</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[WarehouseError!]!</code></span>](/api-reference/products/objects/warehouse-error) \{#errors\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WarehouseDelete</code>.<code class="gqlmd-mdx-entity-name">warehouse</code></span>](#warehouse)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Warehouse</code></span>](/api-reference/products/objects/warehouse) \{#warehouse\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WarehouseDelete</code>.<code class="gqlmd-mdx-entity-name">warehouseErrors</code></span>](#warehouse-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[WarehouseError!]!</code></span>](/api-reference/products/objects/warehouse-error) \{#warehouse-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`deleteWarehouse`](/api-reference/products/mutations/delete-warehouse) <mark class="gqlmd-mdx-badge">mutation</mark>
