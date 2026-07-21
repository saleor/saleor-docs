---
api_reference: true
id: product-type-sorting-input
title: ProductTypeSortingInput
---

No description

```graphql
input ProductTypeSortingInput {
  direction: OrderDirection!
  field: ProductTypeSortField!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductTypeSortingInput</code>.<code class="gqlmd-mdx-entity-name">direction</code></span>](#direction)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderDirection!</code></span>](/api-reference/miscellaneous/enums/order-direction) \{#direction\}

Specifies the direction in which to sort product types.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductTypeSortingInput</code>.<code class="gqlmd-mdx-entity-name">field</code></span>](#field)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductTypeSortField!</code></span>](/api-reference/products/enums/product-type-sort-field) \{#field\}

Sort product types by the selected field.

### Member Of

[`productTypes`](/api-reference/products/queries/product-types) <mark class="gqlmd-mdx-badge">query</mark>
