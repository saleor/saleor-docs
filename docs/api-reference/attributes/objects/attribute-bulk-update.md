---
api_reference: true
id: attribute-bulk-update
title: AttributeBulkUpdate
---

Updates attributes.

Triggers the following webhook events:

- ATTRIBUTE_UPDATED (async): An attribute was updated. Optionally called when new attribute value was created or deleted.
- ATTRIBUTE_VALUE_CREATED (async): Called optionally when an attribute value was created.
- ATTRIBUTE_VALUE_DELETED (async): Called optionally when an attribute value was deleted.

```graphql
type AttributeBulkUpdate {
  count: Int!
  results: [AttributeBulkUpdateResult!]!
  errors: [AttributeBulkUpdateError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeBulkUpdate</code>.<code class="gqlmd-mdx-entity-name">count</code></span>](#count)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span>](/api-reference/miscellaneous/scalars/int) \{#count\}

Returns how many objects were updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeBulkUpdate</code>.<code class="gqlmd-mdx-entity-name">results</code></span>](#results)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AttributeBulkUpdateResult!]!</code></span>](/api-reference/attributes/objects/attribute-bulk-update-result) \{#results\}

List of the updated attributes.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeBulkUpdate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AttributeBulkUpdateError!]!</code></span>](/api-reference/attributes/objects/attribute-bulk-update-error) \{#errors\}

### Returned By

[`attributeBulkUpdate`](/api-reference/attributes/mutations/attribute-bulk-update) <mark class="gqlmd-mdx-badge">mutation</mark>
