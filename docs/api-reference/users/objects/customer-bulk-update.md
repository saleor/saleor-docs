---
api_reference: true
id: customer-bulk-update
title: CustomerBulkUpdate
---

Updates customers.

Requires one of the following permissions: MANAGE_USERS.

Triggers the following webhook events:

- CUSTOMER_UPDATED (async): A customer account was updated.
- CUSTOMER_METADATA_UPDATED (async): Optionally called when customer's metadata was updated.

```graphql
type CustomerBulkUpdate {
  count: Int!
  results: [CustomerBulkResult!]!
  errors: [CustomerBulkUpdateError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CustomerBulkUpdate</code>.<code class="gqlmd-mdx-entity-name">count</code></span>](#count)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span>](/api-reference/miscellaneous/scalars/int) \{#count\}

Returns how many objects were created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CustomerBulkUpdate</code>.<code class="gqlmd-mdx-entity-name">results</code></span>](#results)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CustomerBulkResult!]!</code></span>](/api-reference/users/objects/customer-bulk-result) \{#results\}

List of the updated customers.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CustomerBulkUpdate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CustomerBulkUpdateError!]!</code></span>](/api-reference/users/objects/customer-bulk-update-error) \{#errors\}

### Returned By

[`customerBulkUpdate`](/api-reference/users/mutations/customer-bulk-update) <mark class="gqlmd-mdx-badge">mutation</mark>
