---
api_reference: true
id: customer-bulk-result
title: CustomerBulkResult
---

No description

```graphql
type CustomerBulkResult {
  customer: User
  errors: [CustomerBulkUpdateError!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CustomerBulkResult</code>.<code class="gqlmd-mdx-entity-name">customer</code></span>](#customer)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">User</code></span>](/api-reference/users/objects/user) \{#customer\}

Customer data.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CustomerBulkResult</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CustomerBulkUpdateError!]</code></span>](/api-reference/users/objects/customer-bulk-update-error) \{#errors\}

List of errors that occurred during the update attempt.

### Member Of

[`CustomerBulkUpdate`](/api-reference/users/objects/customer-bulk-update) <mark class="gqlmd-mdx-badge">object</mark>
