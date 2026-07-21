---
api_reference: true
id: attribute-value-create
title: attributeValueCreate
---

Creates a value for an attribute.

Requires one of the following permissions: MANAGE_PRODUCTS.

Triggers the following webhook events:

- ATTRIBUTE_VALUE_CREATED (async): An attribute value was created.
- ATTRIBUTE_UPDATED (async): An attribute was updated.

```graphql
attributeValueCreate(
  attribute: ID!
  input: AttributeValueCreateInput!
): AttributeValueCreate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">attributeValueCreate</code>.<code class="gqlmd-mdx-entity-name">attribute</code></span>](#attribute)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#attribute\}

Attribute to which value will be assigned.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">attributeValueCreate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AttributeValueCreateInput!</code></span>](/api-reference/attributes/inputs/attribute-value-create-input) \{#input\}

Fields required to create an AttributeValue.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AttributeValueCreate</code></span>](/api-reference/attributes/objects/attribute-value-create)

Creates a value for an attribute.

Requires one of the following permissions: MANAGE_PRODUCTS.

Triggers the following webhook events:

- ATTRIBUTE_VALUE_CREATED (async): An attribute value was created.
- ATTRIBUTE_UPDATED (async): An attribute was updated.
