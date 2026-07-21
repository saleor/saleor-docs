---
api_reference: true
id: attribute-value-bulk-delete
title: attributeValueBulkDelete
---

Deletes values of attributes.

Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.

Triggers the following webhook events:

- ATTRIBUTE_VALUE_DELETED (async): An attribute value was deleted.
- ATTRIBUTE_UPDATED (async): An attribute was updated.

```graphql
attributeValueBulkDelete(
  ids: [ID!]!
): AttributeValueBulkDelete
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">attributeValueBulkDelete</code>.<code class="gqlmd-mdx-entity-name">ids</code></span>](#ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]!</code></span>](/api-reference/miscellaneous/scalars/id) \{#ids\}

List of attribute value IDs to delete.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AttributeValueBulkDelete</code></span>](/api-reference/attributes/objects/attribute-value-bulk-delete)

Deletes values of attributes.

Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.

Triggers the following webhook events:

- ATTRIBUTE_VALUE_DELETED (async): An attribute value was deleted.
- ATTRIBUTE_UPDATED (async): An attribute was updated.
