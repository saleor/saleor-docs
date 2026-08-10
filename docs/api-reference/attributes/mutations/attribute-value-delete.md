---
api_reference: true
id: attribute-value-delete
title: attributeValueDelete
---

Deletes a value of an attribute.

Requires one of the following permissions, depending on the type of the value's attribute: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES for `PRODUCT_TYPE` attributes, MANAGE_PAGE_TYPES_AND_ATTRIBUTES for `PAGE_TYPE` attributes.

Triggers the following webhook events:

- ATTRIBUTE_VALUE_DELETED (async): An attribute value was deleted.
- ATTRIBUTE_UPDATED (async): An attribute was updated.

```graphql
attributeValueDelete(
  externalReference: String
  id: ID
): AttributeValueDelete
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">attributeValueDelete</code>.<code class="gqlmd-mdx-entity-name">externalReference</code></span>](#external-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#external-reference\}

External ID of a value to delete.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">attributeValueDelete</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of a value to delete.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AttributeValueDelete</code></span>](/api-reference/attributes/objects/attribute-value-delete)

Deletes a value of an attribute.

Requires one of the following permissions, depending on the type of the value's attribute: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES for `PRODUCT_TYPE` attributes, MANAGE_PAGE_TYPES_AND_ATTRIBUTES for `PAGE_TYPE` attributes.

Triggers the following webhook events:

- ATTRIBUTE_VALUE_DELETED (async): An attribute value was deleted.
- ATTRIBUTE_UPDATED (async): An attribute was updated.
