---
api_reference: true
id: product-variant-stocks-update
title: productVariantStocksUpdate
---

Updates stocks for product variant.

Requires one of the following permissions: MANAGE_PRODUCTS.

Triggers the following webhook events:

- PRODUCT_VARIANT_STOCK_UPDATED (async): A product variant stock is updated.
- PRODUCT_VARIANT_BACK_IN_STOCK (async): A product variant stock transitioned from no availability to available quantity.
- PRODUCT_VARIANT_OUT_OF_STOCK (async): A product variant stock transitioned from available quantity to no availability.
- PRODUCT_VARIANT_BACK_IN_STOCK_IN_CHANNEL (async): A product variant is back in stock in a channel (non click-and-collect warehouses).

Note: Triggered only when the `useLegacyShippingZoneStockAvailability` shop setting is disabled.

- PRODUCT_VARIANT_OUT_OF_STOCK_IN_CHANNEL (async): A product variant is out of stock in a channel (non click-and-collect warehouses).

Note: Triggered only when the `useLegacyShippingZoneStockAvailability` shop setting is disabled.

- PRODUCT_VARIANT_BACK_IN_STOCK_FOR_CLICK_AND_COLLECT (async): A product variant is back in stock in a channel (click-and-collect warehouses).

Note: Triggered only when the `useLegacyShippingZoneStockAvailability` shop setting is disabled.

- PRODUCT_VARIANT_OUT_OF_STOCK_FOR_CLICK_AND_COLLECT (async): A product variant is out of stock in a channel (click-and-collect warehouses).

Note: Triggered only when the `useLegacyShippingZoneStockAvailability` shop setting is disabled.

```graphql
productVariantStocksUpdate(
  sku: String
  stocks: [StockInput!]!
  variantId: ID
): ProductVariantStocksUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productVariantStocksUpdate</code>.<code class="gqlmd-mdx-entity-name">sku</code></span>](#sku)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#sku\}

SKU of product variant for which stocks will be updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productVariantStocksUpdate</code>.<code class="gqlmd-mdx-entity-name">stocks</code></span>](#stocks)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[StockInput!]!</code></span>](/api-reference/products/inputs/stock-input) \{#stocks\}

Input list of stocks to create or update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productVariantStocksUpdate</code>.<code class="gqlmd-mdx-entity-name">variantId</code></span>](#variant-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#variant-id\}

ID of a product variant for which stocks will be updated.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductVariantStocksUpdate</code></span>](/api-reference/products/objects/product-variant-stocks-update)

Updates stocks for product variant.

Requires one of the following permissions: MANAGE_PRODUCTS.

Triggers the following webhook events:

- PRODUCT_VARIANT_STOCK_UPDATED (async): A product variant stock is updated.
- PRODUCT_VARIANT_BACK_IN_STOCK (async): A product variant stock transitioned from no availability to available quantity.
- PRODUCT_VARIANT_OUT_OF_STOCK (async): A product variant stock transitioned from available quantity to no availability.
- PRODUCT_VARIANT_BACK_IN_STOCK_IN_CHANNEL (async): A product variant is back in stock in a channel (non click-and-collect warehouses).

Note: Triggered only when the `useLegacyShippingZoneStockAvailability` shop setting is disabled.

- PRODUCT_VARIANT_OUT_OF_STOCK_IN_CHANNEL (async): A product variant is out of stock in a channel (non click-and-collect warehouses).

Note: Triggered only when the `useLegacyShippingZoneStockAvailability` shop setting is disabled.

- PRODUCT_VARIANT_BACK_IN_STOCK_FOR_CLICK_AND_COLLECT (async): A product variant is back in stock in a channel (click-and-collect warehouses).

Note: Triggered only when the `useLegacyShippingZoneStockAvailability` shop setting is disabled.

- PRODUCT_VARIANT_OUT_OF_STOCK_FOR_CLICK_AND_COLLECT (async): A product variant is out of stock in a channel (click-and-collect warehouses).

Note: Triggered only when the `useLegacyShippingZoneStockAvailability` shop setting is disabled.
