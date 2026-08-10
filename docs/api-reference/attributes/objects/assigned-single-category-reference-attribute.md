---
api_reference: true
id: assigned-single-category-reference-attribute
title: AssignedSingleCategoryReferenceAttribute
---

Represents single category reference attribute.

Added in Saleor 3.22.

```graphql
type AssignedSingleCategoryReferenceAttribute implements AssignedAttribute {
  attribute: Attribute!
  value: Category
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AssignedSingleCategoryReferenceAttribute</code>.<code class="gqlmd-mdx-entity-name">attribute</code></span>](#attribute)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Attribute!</code></span>](/api-reference/attributes/objects/attribute) \{#attribute\}

Attribute assigned to an object.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AssignedSingleCategoryReferenceAttribute</code>.<code class="gqlmd-mdx-entity-name">value</code></span>](#value)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Category</code></span>](/api-reference/products/objects/category) \{#value\}

The assigned category reference.

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AssignedAttribute</code></span>](/api-reference/attributes/interfaces/assigned-attribute)

Represents an attribute assigned to an object.

Added in Saleor 3.22.
