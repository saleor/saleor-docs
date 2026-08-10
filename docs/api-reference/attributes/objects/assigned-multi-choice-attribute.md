---
api_reference: true
id: assigned-multi-choice-attribute
title: AssignedMultiChoiceAttribute
---

Represents a multi choice attribute.

Added in Saleor 3.22.

```graphql
type AssignedMultiChoiceAttribute implements AssignedAttribute {
  attribute: Attribute!
  value(limit: PositiveInt = 100): [AssignedChoiceAttributeValue!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AssignedMultiChoiceAttribute</code>.<code class="gqlmd-mdx-entity-name">attribute</code></span>](#attribute)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Attribute!</code></span>](/api-reference/attributes/objects/attribute) \{#attribute\}

Attribute assigned to an object.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AssignedMultiChoiceAttribute</code>.<code class="gqlmd-mdx-entity-name">value</code></span>](#value)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AssignedChoiceAttributeValue!]!</code></span>](/api-reference/attributes/objects/assigned-choice-attribute-value) \{#value\}

List of assigned choice values.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AssignedMultiChoiceAttribute.value</code>.<code class="gqlmd-mdx-entity-name">limit</code></span>](#assigned-multi-choice-attribute-value-limit)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveInt</code></span>](/api-reference/miscellaneous/scalars/positive-int) \{#assigned-multi-choice-attribute-value-limit\}

Maximum number of choices to return. Default is 100.

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AssignedAttribute</code></span>](/api-reference/attributes/interfaces/assigned-attribute)

Represents an attribute assigned to an object.

Added in Saleor 3.22.
