---
api_reference: true
id: product-variant-sorting-input
title: ProductVariantSortingInput
---

No description

```graphql
input ProductVariantSortingInput {
  direction: OrderDirection!
  field: ProductVariantSortField!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantSortingInput</code>.<code class="gqlmd-mdx-entity-name">direction</code></span>](#direction)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderDirection!</code></span>](/api-reference/miscellaneous/enums/order-direction) \{#direction\}

Specifies the direction in which to sort productVariants.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantSortingInput</code>.<code class="gqlmd-mdx-entity-name">field</code></span>](#field)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductVariantSortField!</code></span>](/api-reference/products/enums/product-variant-sort-field) \{#field\}

Sort productVariants by the selected field.

### Member Of

[`productVariants`](/api-reference/products/queries/product-variants) <mark class="gqlmd-mdx-badge">query</mark>
