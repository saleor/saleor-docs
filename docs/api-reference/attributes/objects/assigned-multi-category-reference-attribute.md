---
api_reference: true
id: assigned-multi-category-reference-attribute
title: AssignedMultiCategoryReferenceAttribute
---

Represents multi category reference attribute.

Added in Saleor 3.22.

```graphql
type AssignedMultiCategoryReferenceAttribute implements AssignedAttribute {
  attribute: Attribute!
  value(limit: PositiveInt = 100): [Category!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AssignedMultiCategoryReferenceAttribute</code>.<code class="gqlmd-mdx-entity-name">attribute</code></span>](#attribute)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Attribute!</code></span>](/api-reference/attributes/objects/attribute) \{#attribute\}

Attribute assigned to an object.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AssignedMultiCategoryReferenceAttribute</code>.<code class="gqlmd-mdx-entity-name">value</code></span>](#value)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[Category!]!</code></span>](/api-reference/products/objects/category) \{#value\}

List of assigned category references.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AssignedMultiCategoryReferenceAttribute.value</code>.<code class="gqlmd-mdx-entity-name">limit</code></span>](#assigned-multi-category-reference-attribute-value-limit)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveInt</code></span>](/api-reference/miscellaneous/scalars/positive-int) \{#assigned-multi-category-reference-attribute-value-limit\}

Maximum number of referenced categories to return. Default is 100.

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AssignedAttribute</code></span>](/api-reference/attributes/interfaces/assigned-attribute)

Represents an attribute assigned to an object.

Added in Saleor 3.22.
