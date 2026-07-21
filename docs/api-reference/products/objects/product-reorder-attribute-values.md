---
api_reference: true
id: product-reorder-attribute-values
title: ProductReorderAttributeValues
---

Reorder product attribute values.

Requires one of the following permissions: MANAGE_PRODUCTS.

```graphql
type ProductReorderAttributeValues {
  product: Product
  productErrors: [ProductError!]! @deprecated
  errors: [ProductError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductReorderAttributeValues</code>.<code class="gqlmd-mdx-entity-name">product</code></span>](#product)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Product</code></span>](/api-reference/products/objects/product) \{#product\}

Product from which attribute values are reordered.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductReorderAttributeValues</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ProductError!]!</code></span>](/api-reference/products/objects/product-error) \{#errors\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductReorderAttributeValues</code>.<code class="gqlmd-mdx-entity-name">productErrors</code></span>](#product-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ProductError!]!</code></span>](/api-reference/products/objects/product-error) \{#product-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`productReorderAttributeValues`](/api-reference/products/mutations/product-reorder-attribute-values) <mark class="gqlmd-mdx-badge">mutation</mark>
