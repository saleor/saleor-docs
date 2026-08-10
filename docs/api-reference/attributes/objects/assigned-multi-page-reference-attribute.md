---
api_reference: true
id: assigned-multi-page-reference-attribute
title: AssignedMultiPageReferenceAttribute
---

Represents multi page reference attribute.

Added in Saleor 3.22.

```graphql
type AssignedMultiPageReferenceAttribute implements AssignedAttribute {
  attribute: Attribute!
  value(limit: PositiveInt = 100): [Page!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AssignedMultiPageReferenceAttribute</code>.<code class="gqlmd-mdx-entity-name">attribute</code></span>](#attribute)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Attribute!</code></span>](/api-reference/attributes/objects/attribute) \{#attribute\}

Attribute assigned to an object.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AssignedMultiPageReferenceAttribute</code>.<code class="gqlmd-mdx-entity-name">value</code></span>](#value)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[Page!]!</code></span>](/api-reference/pages/objects/page) \{#value\}

List of assigned page references.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AssignedMultiPageReferenceAttribute.value</code>.<code class="gqlmd-mdx-entity-name">limit</code></span>](#assigned-multi-page-reference-attribute-value-limit)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveInt</code></span>](/api-reference/miscellaneous/scalars/positive-int) \{#assigned-multi-page-reference-attribute-value-limit\}

Maximum number of referenced pages to return. Default is 100.

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AssignedAttribute</code></span>](/api-reference/attributes/interfaces/assigned-attribute)

Represents an attribute assigned to an object.

Added in Saleor 3.22.
