---
api_reference: true
id: payment-gateway-initialize-tokenization
title: PaymentGatewayInitializeTokenization
---

Initializes payment gateway for tokenizing payment method session.

Requires one of the following permissions: AUTHENTICATED_USER.

Triggers the following webhook events:

- PAYMENT_GATEWAY_INITIALIZE_TOKENIZATION_SESSION (sync): The customer requested to initialize payment gateway for tokenization.

```graphql
type PaymentGatewayInitializeTokenization {
  result: PaymentGatewayInitializeTokenizationResult!
  data: JSON
  errors: [PaymentGatewayInitializeTokenizationError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentGatewayInitializeTokenization</code>.<code class="gqlmd-mdx-entity-name">result</code></span>](#result)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PaymentGatewayInitializeTokenizationResult!</code></span>](/api-reference/payments/enums/payment-gateway-initialize-tokenization-result) \{#result\}

A status of the payment gateway initialization.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentGatewayInitializeTokenization</code>.<code class="gqlmd-mdx-entity-name">data</code></span>](#data)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSON</code></span>](/api-reference/miscellaneous/scalars/json) \{#data\}

A data returned by payment app.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentGatewayInitializeTokenization</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[PaymentGatewayInitializeTokenizationError!]!</code></span>](/api-reference/payments/objects/payment-gateway-initialize-tokenization-error) \{#errors\}

### Returned By

[`paymentGatewayInitializeTokenization`](/api-reference/payments/mutations/payment-gateway-initialize-tokenization) <mark class="gqlmd-mdx-badge">mutation</mark>
