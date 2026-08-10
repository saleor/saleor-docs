---
api_reference: true
id: product-attribute-assign-input
title: ProductAttributeAssignInput
---

No description

```graphql
input ProductAttributeAssignInput {
  id: ID!
  type: ProductAttributeType!
  variantSelection: Boolean
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductAttributeAssignInput</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of the attribute to assign.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductAttributeAssignInput</code>.<code class="gqlmd-mdx-entity-name">type</code></span>](#type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductAttributeType!</code></span>](/api-reference/products/enums/product-attribute-type) \{#type\}

The attribute type to be assigned as.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductAttributeAssignInput</code>.<code class="gqlmd-mdx-entity-name">variantSelection</code></span>](#variant-selection)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#variant-selection\}

Whether attribute is allowed in variant selection. Allowed types are: ['dropdown', 'boolean', 'swatch', 'numeric'].

### Member Of

[`productAttributeAssign`](/api-reference/products/mutations/product-attribute-assign) <mark class="gqlmd-mdx-badge">mutation</mark>
