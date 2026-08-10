---
api_reference: true
id: attribute-value-selectable-type-input
title: AttributeValueSelectableTypeInput
---

Represents attribute value.

1. If ID is provided, then attribute value will be resolved by ID.
2. If externalReference is provided, then attribute value will be resolved by external reference.
3. If value is provided, then attribute value will be resolved by value. If this attribute value doesn't exist, then it will be created.
4. If externalReference and value is provided then new attribute value will be created.

```graphql
input AttributeValueSelectableTypeInput {
  id: ID
  externalReference: String
  value: String
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeValueSelectableTypeInput</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of an attribute value.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeValueSelectableTypeInput</code>.<code class="gqlmd-mdx-entity-name">externalReference</code></span>](#external-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#external-reference\}

External reference of an attribute value.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeValueSelectableTypeInput</code>.<code class="gqlmd-mdx-entity-name">value</code></span>](#value)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#value\}

The value or slug of an attribute to resolve. If the passed value is non-existent, it will be created.

### Member Of

[`AttributeValueInput`](/api-reference/attributes/inputs/attribute-value-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`BulkAttributeValueInput`](/api-reference/products/inputs/bulk-attribute-value-input) <mark class="gqlmd-mdx-badge">input</mark>
