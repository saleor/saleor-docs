---
api_reference: true
id: product-variant-stocks-create
title: productVariantStocksCreate
---

Creates stocks for product variant.

Requires one of the following permissions: MANAGE_PRODUCTS.

Triggers the following webhook events:

- PRODUCT_VARIANT_BACK_IN_STOCK (async): A product variant stock is created in a warehouse.
- PRODUCT_VARIANT_BACK_IN_STOCK_IN_CHANNEL (async): A product variant is back in stock in a channel (non click-and-collect warehouses).

Note: Triggered only when the `useLegacyShippingZoneStockAvailability` shop setting is disabled.

- PRODUCT_VARIANT_BACK_IN_STOCK_FOR_CLICK_AND_COLLECT (async): A product variant is back in stock in a channel (click-and-collect warehouses).

Note: Triggered only when the `useLegacyShippingZoneStockAvailability` shop setting is disabled.

```graphql
productVariantStocksCreate(
  stocks: [StockInput!]!
  variantId: ID!
): ProductVariantStocksCreate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productVariantStocksCreate</code>.<code class="gqlmd-mdx-entity-name">stocks</code></span>](#stocks)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[StockInput!]!</code></span>](/api-reference/products/inputs/stock-input) \{#stocks\}

Input list of stocks to create.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productVariantStocksCreate</code>.<code class="gqlmd-mdx-entity-name">variantId</code></span>](#variant-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#variant-id\}

ID of a product variant for which stocks will be created.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductVariantStocksCreate</code></span>](/api-reference/products/objects/product-variant-stocks-create)

Creates stocks for product variant.

Requires one of the following permissions: MANAGE_PRODUCTS.

Triggers the following webhook events:

- PRODUCT_VARIANT_BACK_IN_STOCK (async): A product variant stock is created in a warehouse.
- PRODUCT_VARIANT_BACK_IN_STOCK_IN_CHANNEL (async): A product variant is back in stock in a channel (non click-and-collect warehouses).

Note: Triggered only when the `useLegacyShippingZoneStockAvailability` shop setting is disabled.

- PRODUCT_VARIANT_BACK_IN_STOCK_FOR_CLICK_AND_COLLECT (async): A product variant is back in stock in a channel (click-and-collect warehouses).

Note: Triggered only when the `useLegacyShippingZoneStockAvailability` shop setting is disabled.
