---
api_reference: true
id: account-update
title: accountUpdate
---

Updates the account of the logged-in user.

Requires one of following set of permissions: AUTHENTICATED_USER or AUTHENTICATED_APP + IMPERSONATE_USER.

Triggers the following webhook events:

- CUSTOMER_UPDATED (async): A customer account was updated.
- CUSTOMER_METADATA_UPDATED (async): Optionally called when customer's metadata was updated.

```graphql
accountUpdate(
  customerId: ID
  input: AccountInput!
): AccountUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">accountUpdate</code>.<code class="gqlmd-mdx-entity-name">customerId</code></span>](#customer-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#customer-id\}

ID of customer the application is impersonating. The field can be used and is required by apps only. Requires IMPERSONATE_USER and AUTHENTICATED_APP permission.

Added in Saleor 3.19.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">accountUpdate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AccountInput!</code></span>](/api-reference/users/inputs/account-input) \{#input\}

Fields required to update the account of the logged-in user.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AccountUpdate</code></span>](/api-reference/users/objects/account-update)

Updates the account of the logged-in user.

Requires one of following set of permissions: AUTHENTICATED_USER or AUTHENTICATED_APP + IMPERSONATE_USER.

Triggers the following webhook events:

- CUSTOMER_UPDATED (async): A customer account was updated.
- CUSTOMER_METADATA_UPDATED (async): Optionally called when customer's metadata was updated.
