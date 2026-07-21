---
api_reference: true
id: product-variant-bulk-create
title: ProductVariantBulkCreate
---

Creates product variants for a given product.

Requires one of the following permissions: MANAGE_PRODUCTS.

```graphql
type ProductVariantBulkCreate {
  count: Int!
  productVariants: [ProductVariant!]!
  results: [ProductVariantBulkResult!]!
  bulkProductErrors: [BulkProductError!]! @deprecated
  errors: [BulkProductError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantBulkCreate</code>.<code class="gqlmd-mdx-entity-name">count</code></span>](#count)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span>](/api-reference/miscellaneous/scalars/int) \{#count\}

Returns how many objects were created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantBulkCreate</code>.<code class="gqlmd-mdx-entity-name">productVariants</code></span>](#product-variants)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ProductVariant!]!</code></span>](/api-reference/products/objects/product-variant) \{#product-variants\}

List of the created variants.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantBulkCreate</code>.<code class="gqlmd-mdx-entity-name">results</code></span>](#results)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ProductVariantBulkResult!]!</code></span>](/api-reference/products/objects/product-variant-bulk-result) \{#results\}

List of the created variants.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantBulkCreate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[BulkProductError!]!</code></span>](/api-reference/products/objects/bulk-product-error) \{#errors\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantBulkCreate</code>.<code class="gqlmd-mdx-entity-name">bulkProductErrors</code></span>](#bulk-product-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[BulkProductError!]!</code></span>](/api-reference/products/objects/bulk-product-error) \{#bulk-product-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`productVariantBulkCreate`](/api-reference/products/mutations/product-variant-bulk-create) <mark class="gqlmd-mdx-badge">mutation</mark>
