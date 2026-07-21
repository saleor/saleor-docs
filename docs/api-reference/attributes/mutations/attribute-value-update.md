---
api_reference: true
id: attribute-value-update
title: attributeValueUpdate
---

Updates value of an attribute.

Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.

Triggers the following webhook events:

- ATTRIBUTE_VALUE_UPDATED (async): An attribute value was updated.
- ATTRIBUTE_UPDATED (async): An attribute was updated.

```graphql
attributeValueUpdate(
  externalReference: String
  id: ID
  input: AttributeValueUpdateInput!
): AttributeValueUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">attributeValueUpdate</code>.<code class="gqlmd-mdx-entity-name">externalReference</code></span>](#external-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#external-reference\}

External ID of an AttributeValue to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">attributeValueUpdate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of an AttributeValue to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">attributeValueUpdate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AttributeValueUpdateInput!</code></span>](/api-reference/attributes/inputs/attribute-value-update-input) \{#input\}

Fields required to update an AttributeValue.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AttributeValueUpdate</code></span>](/api-reference/attributes/objects/attribute-value-update)

Updates value of an attribute.

Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.

Triggers the following webhook events:

- ATTRIBUTE_VALUE_UPDATED (async): An attribute value was updated.
- ATTRIBUTE_UPDATED (async): An attribute was updated.
