---
api_reference: true
id: assigned-multi-product-reference-attribute
title: AssignedMultiProductReferenceAttribute
---

Represents multi product reference attribute.

Added in Saleor 3.22.

```graphql
type AssignedMultiProductReferenceAttribute implements AssignedAttribute {
  attribute: Attribute!
  value(limit: PositiveInt = 100): [Product!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AssignedMultiProductReferenceAttribute</code>.<code class="gqlmd-mdx-entity-name">attribute</code></span>](#attribute)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Attribute!</code></span>](/api-reference/attributes/objects/attribute) \{#attribute\}

Attribute assigned to an object.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AssignedMultiProductReferenceAttribute</code>.<code class="gqlmd-mdx-entity-name">value</code></span>](#value)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[Product!]!</code></span>](/api-reference/products/objects/product) \{#value\}

List of assigned product references.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AssignedMultiProductReferenceAttribute.value</code>.<code class="gqlmd-mdx-entity-name">limit</code></span>](#assigned-multi-product-reference-attribute-value-limit)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveInt</code></span>](/api-reference/miscellaneous/scalars/positive-int) \{#assigned-multi-product-reference-attribute-value-limit\}

Maximum number of referenced products to return. Default is 100.

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AssignedAttribute</code></span>](/api-reference/attributes/interfaces/assigned-attribute)

Represents an attribute assigned to an object.

Added in Saleor 3.22.
