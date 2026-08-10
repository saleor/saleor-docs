---
api_reference: true
id: attribute-reorder-values
title: attributeReorderValues
---

Reorder the values of an attribute.

Requires one of the following permissions, depending on the attribute type: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES for `PRODUCT_TYPE` attributes, MANAGE_PAGE_TYPES_AND_ATTRIBUTES for `PAGE_TYPE` attributes.

Triggers the following webhook events:

- ATTRIBUTE_VALUE_UPDATED (async): An attribute value was updated.
- ATTRIBUTE_UPDATED (async): An attribute was updated.

```graphql
attributeReorderValues(
  attributeId: ID!
  moves: [ReorderInput!]!
): AttributeReorderValues
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">attributeReorderValues</code>.<code class="gqlmd-mdx-entity-name">attributeId</code></span>](#attribute-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#attribute-id\}

ID of an attribute.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">attributeReorderValues</code>.<code class="gqlmd-mdx-entity-name">moves</code></span>](#moves)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ReorderInput!]!</code></span>](/api-reference/miscellaneous/inputs/reorder-input) \{#moves\}

The list of reordering operations for given attribute values.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AttributeReorderValues</code></span>](/api-reference/attributes/objects/attribute-reorder-values)

Reorder the values of an attribute.

Requires one of the following permissions, depending on the attribute type: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES for `PRODUCT_TYPE` attributes, MANAGE_PAGE_TYPES_AND_ATTRIBUTES for `PAGE_TYPE` attributes.

Triggers the following webhook events:

- ATTRIBUTE_VALUE_UPDATED (async): An attribute value was updated.
- ATTRIBUTE_UPDATED (async): An attribute was updated.
