---
api_reference: true
id: product-variant-stocks-update
title: ProductVariantStocksUpdate
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
type ProductVariantStocksUpdate {
  productVariant: ProductVariant
  bulkStockErrors: [BulkStockError!]! @deprecated
  errors: [BulkStockError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantStocksUpdate</code>.<code class="gqlmd-mdx-entity-name">productVariant</code></span>](#product-variant)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductVariant</code></span>](/api-reference/products/objects/product-variant) \{#product-variant\}

Updated product variant.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantStocksUpdate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[BulkStockError!]!</code></span>](/api-reference/products/objects/bulk-stock-error) \{#errors\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantStocksUpdate</code>.<code class="gqlmd-mdx-entity-name">bulkStockErrors</code></span>](#bulk-stock-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[BulkStockError!]!</code></span>](/api-reference/products/objects/bulk-stock-error) \{#bulk-stock-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`productVariantStocksUpdate`](/api-reference/products/mutations/product-variant-stocks-update) <mark class="gqlmd-mdx-badge">mutation</mark>
