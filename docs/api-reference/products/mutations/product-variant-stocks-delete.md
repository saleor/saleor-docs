---
api_reference: true
id: product-variant-stocks-delete
title: productVariantStocksDelete
---

Deletes stocks from product variant.

Requires one of the following permissions: MANAGE_PRODUCTS.

Triggers the following webhook events:

- PRODUCT_VARIANT_OUT_OF_STOCK (async): A product variant stock is deleted from a warehouse.
- PRODUCT_VARIANT_OUT_OF_STOCK_IN_CHANNEL (async): A product variant is out of stock in a channel (non click-and-collect warehouses).

Note: Triggered only when the `useLegacyShippingZoneStockAvailability` shop setting is disabled.

- PRODUCT_VARIANT_OUT_OF_STOCK_FOR_CLICK_AND_COLLECT (async): A product variant is out of stock in a channel (click-and-collect warehouses).

Note: Triggered only when the `useLegacyShippingZoneStockAvailability` shop setting is disabled.

```graphql
productVariantStocksDelete(
  sku: String
  variantId: ID
  warehouseIds: [ID!]
): ProductVariantStocksDelete
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productVariantStocksDelete</code>.<code class="gqlmd-mdx-entity-name">sku</code></span>](#sku)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#sku\}

SKU of product variant for which stocks will be deleted.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productVariantStocksDelete</code>.<code class="gqlmd-mdx-entity-name">variantId</code></span>](#variant-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#variant-id\}

ID of product variant for which stocks will be deleted.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productVariantStocksDelete</code>.<code class="gqlmd-mdx-entity-name">warehouseIds</code></span>](#warehouse-ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#warehouse-ids\}

Input list of warehouse IDs.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductVariantStocksDelete</code></span>](/api-reference/products/objects/product-variant-stocks-delete)

Deletes stocks from product variant.

Requires one of the following permissions: MANAGE_PRODUCTS.

Triggers the following webhook events:

- PRODUCT_VARIANT_OUT_OF_STOCK (async): A product variant stock is deleted from a warehouse.
- PRODUCT_VARIANT_OUT_OF_STOCK_IN_CHANNEL (async): A product variant is out of stock in a channel (non click-and-collect warehouses).

Note: Triggered only when the `useLegacyShippingZoneStockAvailability` shop setting is disabled.

- PRODUCT_VARIANT_OUT_OF_STOCK_FOR_CLICK_AND_COLLECT (async): A product variant is out of stock in a channel (click-and-collect warehouses).

Note: Triggered only when the `useLegacyShippingZoneStockAvailability` shop setting is disabled.
