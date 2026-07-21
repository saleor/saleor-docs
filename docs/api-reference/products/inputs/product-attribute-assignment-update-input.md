---
api_reference: true
id: product-attribute-assignment-update-input
title: ProductAttributeAssignmentUpdateInput
---

No description

```graphql
input ProductAttributeAssignmentUpdateInput {
  id: ID!
  variantSelection: Boolean!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductAttributeAssignmentUpdateInput</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of the attribute to assign.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductAttributeAssignmentUpdateInput</code>.<code class="gqlmd-mdx-entity-name">variantSelection</code></span>](#variant-selection)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#variant-selection\}

Whether attribute is allowed in variant selection. Allowed types are: ['dropdown', 'boolean', 'swatch', 'numeric'].

### Member Of

[`productAttributeAssignmentUpdate`](/api-reference/products/mutations/product-attribute-assignment-update) <mark class="gqlmd-mdx-badge">mutation</mark>
