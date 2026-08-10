---
api_reference: true
id: payment-method-request-delete-error
title: PaymentMethodRequestDeleteError
---

No description

```graphql
type PaymentMethodRequestDeleteError {
  field: String
  message: String
  code: StoredPaymentMethodRequestDeleteErrorCode!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentMethodRequestDeleteError</code>.<code class="gqlmd-mdx-entity-name">field</code></span>](#field)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#field\}

Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentMethodRequestDeleteError</code>.<code class="gqlmd-mdx-entity-name">message</code></span>](#message)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#message\}

The error message.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentMethodRequestDeleteError</code>.<code class="gqlmd-mdx-entity-name">code</code></span>](#code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">StoredPaymentMethodRequestDeleteErrorCode!</code></span>](/api-reference/payments/enums/stored-payment-method-request-delete-error-code) \{#code\}

The error code.

### Member Of

[`StoredPaymentMethodRequestDelete`](/api-reference/payments/objects/stored-payment-method-request-delete) <mark class="gqlmd-mdx-badge">object</mark>
