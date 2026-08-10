---
api_reference: true
id: customer-update
title: customerUpdate
---

Updates an existing customer.

Requires one of the following permissions: MANAGE_USERS.

Triggers the following webhook events:

- CUSTOMER_UPDATED (async): A new customer account was updated.
- CUSTOMER_METADATA_UPDATED (async): Optionally called when customer's metadata was updated.

```graphql
customerUpdate(
  externalReference: String
  id: ID
  input: CustomerInput!
): CustomerUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">customerUpdate</code>.<code class="gqlmd-mdx-entity-name">externalReference</code></span>](#external-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#external-reference\}

External ID of a customer to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">customerUpdate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of a customer to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">customerUpdate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CustomerInput!</code></span>](/api-reference/users/inputs/customer-input) \{#input\}

Fields required to update a customer.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CustomerUpdate</code></span>](/api-reference/users/objects/customer-update)

Updates an existing customer.

Requires one of the following permissions: MANAGE_USERS.

Triggers the following webhook events:

- CUSTOMER_UPDATED (async): A new customer account was updated.
- CUSTOMER_METADATA_UPDATED (async): Optionally called when customer's metadata was updated.
