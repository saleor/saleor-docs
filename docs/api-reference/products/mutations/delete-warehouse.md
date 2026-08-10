---
api_reference: true
id: delete-warehouse
title: deleteWarehouse
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
deleteWarehouse(
  id: ID!
): WarehouseDelete
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">deleteWarehouse</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of a warehouse to delete.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">WarehouseDelete</code></span>](/api-reference/products/objects/warehouse-delete)

Deletes selected warehouse.

Requires one of the following permissions: MANAGE_PRODUCTS.

Triggers the following webhook events:

- WAREHOUSE_DELETED (async): A warehouse is deleted.
- PRODUCT_VARIANT_OUT_OF_STOCK (async): A product variant stock is removed together with the deleted warehouse.
- PRODUCT_VARIANT_OUT_OF_STOCK_IN_CHANNEL (async): A product variant is out of stock in a channel (non click-and-collect warehouses).

Note: Triggered only when the `useLegacyShippingZoneStockAvailability` shop setting is disabled.

- PRODUCT_VARIANT_OUT_OF_STOCK_FOR_CLICK_AND_COLLECT (async): A product variant is out of stock in a channel (click-and-collect warehouses).

Note: Triggered only when the `useLegacyShippingZoneStockAvailability` shop setting is disabled.
