---
api_reference: true
id: stored-payment-method-request-delete
title: storedPaymentMethodRequestDelete
---

Request to delete a stored payment method on payment provider side.

Requires one of the following permissions: AUTHENTICATED_USER.

Triggers the following webhook events:

- STORED_PAYMENT_METHOD_DELETE_REQUESTED (sync): The customer requested to delete a payment method.

```graphql
storedPaymentMethodRequestDelete(
  channel: String!
  id: ID!
): StoredPaymentMethodRequestDelete
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">storedPaymentMethodRequestDelete</code>.<code class="gqlmd-mdx-entity-name">channel</code></span>](#channel)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#channel\}

Slug of a channel related to delete request.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">storedPaymentMethodRequestDelete</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of the payment method.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">StoredPaymentMethodRequestDelete</code></span>](/api-reference/payments/objects/stored-payment-method-request-delete)

Request to delete a stored payment method on payment provider side.

Requires one of the following permissions: AUTHENTICATED_USER.

Triggers the following webhook events:

- STORED_PAYMENT_METHOD_DELETE_REQUESTED (sync): The customer requested to delete a payment method.
