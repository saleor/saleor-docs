---
api_reference: true
id: object-with-attributes
title: ObjectWithAttributes
---

An object with attributes.

Added in Saleor 3.22.

```graphql
interface ObjectWithAttributes {
  assignedAttribute(slug: String!): AssignedAttribute
  assignedAttributes(limit: PositiveInt = 100): [AssignedAttribute!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ObjectWithAttributes</code>.<code class="gqlmd-mdx-entity-name">assignedAttribute</code></span>](#assigned-attribute)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AssignedAttribute</code></span>](/api-reference/attributes/interfaces/assigned-attribute) \{#assigned-attribute\}

Get a single attribute attached to the object by attribute slug.

Added in Saleor 3.22.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ObjectWithAttributes.assignedAttribute</code>.<code class="gqlmd-mdx-entity-name">slug</code></span>](#object-with-attributes-assigned-attribute-slug)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#object-with-attributes-assigned-attribute-slug\}

Slug of the attribute

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ObjectWithAttributes</code>.<code class="gqlmd-mdx-entity-name">assignedAttributes</code></span>](#assigned-attributes)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AssignedAttribute!]!</code></span>](/api-reference/attributes/interfaces/assigned-attribute) \{#assigned-attributes\}

List of attributes assigned to the object.

Added in Saleor 3.22.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ObjectWithAttributes.assignedAttributes</code>.<code class="gqlmd-mdx-entity-name">limit</code></span>](#object-with-attributes-assigned-attributes-limit)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveInt</code></span>](/api-reference/miscellaneous/scalars/positive-int) \{#object-with-attributes-assigned-attributes-limit\}

Maximum number of attributes to return. Default is 100.

### Implemented By

[`Page`](/api-reference/pages/objects/page) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`Product`](/api-reference/products/objects/product) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariant`](/api-reference/products/objects/product-variant) <mark class="gqlmd-mdx-badge">object</mark>
