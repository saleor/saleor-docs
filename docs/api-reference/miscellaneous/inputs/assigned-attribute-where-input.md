---
api_reference: true
id: assigned-attribute-where-input
title: AssignedAttributeWhereInput
---

No description

```graphql
input AssignedAttributeWhereInput {
  slug: String
  value: AssignedAttributeValueInput
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AssignedAttributeWhereInput</code>.<code class="gqlmd-mdx-entity-name">slug</code></span>](#slug)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#slug\}

Filter by attribute slug.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AssignedAttributeWhereInput</code>.<code class="gqlmd-mdx-entity-name">value</code></span>](#value)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AssignedAttributeValueInput</code></span>](/api-reference/miscellaneous/inputs/assigned-attribute-value-input) \{#value\}

Filter by value of the attribute. Only one value input field is allowed. If provided more than one, the error will be raised.

### Member Of

[`PageWhereInput`](/api-reference/pages/inputs/page-where-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariantWhereInput`](/api-reference/products/inputs/product-variant-where-input) <mark class="gqlmd-mdx-badge">input</mark>
