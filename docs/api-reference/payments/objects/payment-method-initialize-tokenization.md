---
api_reference: true
id: payment-method-initialize-tokenization
title: PaymentMethodInitializeTokenization
---

Tokenize payment method.

Requires one of the following permissions: AUTHENTICATED_USER.

Triggers the following webhook events:

- PAYMENT_METHOD_INITIALIZE_TOKENIZATION_SESSION (sync): The customer requested to tokenize payment method.

```graphql
type PaymentMethodInitializeTokenization {
  result: PaymentMethodTokenizationResult!
  id: String
  data: JSON
  errors: [PaymentMethodInitializeTokenizationError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentMethodInitializeTokenization</code>.<code class="gqlmd-mdx-entity-name">result</code></span>](#result)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PaymentMethodTokenizationResult!</code></span>](/api-reference/payments/enums/payment-method-tokenization-result) \{#result\}

A status of the payment method tokenization.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentMethodInitializeTokenization</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#id\}

The identifier of the payment method.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentMethodInitializeTokenization</code>.<code class="gqlmd-mdx-entity-name">data</code></span>](#data)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSON</code></span>](/api-reference/miscellaneous/scalars/json) \{#data\}

A data returned by the payment app.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentMethodInitializeTokenization</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[PaymentMethodInitializeTokenizationError!]!</code></span>](/api-reference/payments/objects/payment-method-initialize-tokenization-error) \{#errors\}

### Returned By

[`paymentMethodInitializeTokenization`](/api-reference/payments/mutations/payment-method-initialize-tokenization) <mark class="gqlmd-mdx-badge">mutation</mark>
