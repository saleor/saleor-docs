---
api_reference: true
id: attribute-sorting-input
title: AttributeSortingInput
---

No description

```graphql
input AttributeSortingInput {
  direction: OrderDirection!
  field: AttributeSortField!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeSortingInput</code>.<code class="gqlmd-mdx-entity-name">direction</code></span>](#direction)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderDirection!</code></span>](/api-reference/miscellaneous/enums/order-direction) \{#direction\}

Specifies the direction in which to sort attributes.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeSortingInput</code>.<code class="gqlmd-mdx-entity-name">field</code></span>](#field)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AttributeSortField!</code></span>](/api-reference/attributes/enums/attribute-sort-field) \{#field\}

Sort attributes by the selected field.

### Member Of

[`attributes`](/api-reference/attributes/queries/attributes) <mark class="gqlmd-mdx-badge">query</mark>
