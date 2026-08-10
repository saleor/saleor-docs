---
api_reference: true
id: stored-payment-method-request-delete
title: StoredPaymentMethodRequestDelete
---

Request to delete a stored payment method on payment provider side.

Requires one of the following permissions: AUTHENTICATED_USER.

Triggers the following webhook events:

- STORED_PAYMENT_METHOD_DELETE_REQUESTED (sync): The customer requested to delete a payment method.

```graphql
type StoredPaymentMethodRequestDelete {
  result: StoredPaymentMethodRequestDeleteResult!
  errors: [PaymentMethodRequestDeleteError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StoredPaymentMethodRequestDelete</code>.<code class="gqlmd-mdx-entity-name">result</code></span>](#result)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">StoredPaymentMethodRequestDeleteResult!</code></span>](/api-reference/payments/enums/stored-payment-method-request-delete-result) \{#result\}

The result of deleting a stored payment method.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StoredPaymentMethodRequestDelete</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[PaymentMethodRequestDeleteError!]!</code></span>](/api-reference/payments/objects/payment-method-request-delete-error) \{#errors\}

### Returned By

[`storedPaymentMethodRequestDelete`](/api-reference/payments/mutations/stored-payment-method-request-delete) <mark class="gqlmd-mdx-badge">mutation</mark>
