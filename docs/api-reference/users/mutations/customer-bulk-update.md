---
api_reference: true
id: customer-bulk-update
title: customerBulkUpdate
---

Updates customers.

Requires one of the following permissions: MANAGE_USERS.

Triggers the following webhook events:

- CUSTOMER_UPDATED (async): A customer account was updated.
- CUSTOMER_METADATA_UPDATED (async): Optionally called when customer's metadata was updated.

```graphql
customerBulkUpdate(
  customers: [CustomerBulkUpdateInput!]!
  errorPolicy: ErrorPolicyEnum
): CustomerBulkUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">customerBulkUpdate</code>.<code class="gqlmd-mdx-entity-name">customers</code></span>](#customers)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CustomerBulkUpdateInput!]!</code></span>](/api-reference/users/inputs/customer-bulk-update-input) \{#customers\}

Input list of customers to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">customerBulkUpdate</code>.<code class="gqlmd-mdx-entity-name">errorPolicy</code></span>](#error-policy)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ErrorPolicyEnum</code></span>](/api-reference/miscellaneous/enums/error-policy-enum) \{#error-policy\}

Policies of error handling. DEFAULT: REJECT_EVERYTHING

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CustomerBulkUpdate</code></span>](/api-reference/users/objects/customer-bulk-update)

Updates customers.

Requires one of the following permissions: MANAGE_USERS.

Triggers the following webhook events:

- CUSTOMER_UPDATED (async): A customer account was updated.
- CUSTOMER_METADATA_UPDATED (async): Optionally called when customer's metadata was updated.
