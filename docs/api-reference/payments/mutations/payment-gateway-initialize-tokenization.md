---
api_reference: true
id: payment-gateway-initialize-tokenization
title: paymentGatewayInitializeTokenization
---

Initializes payment gateway for tokenizing payment method session.

Requires one of the following permissions: AUTHENTICATED_USER.

Triggers the following webhook events:

- PAYMENT_GATEWAY_INITIALIZE_TOKENIZATION_SESSION (sync): The customer requested to initialize payment gateway for tokenization.

```graphql
paymentGatewayInitializeTokenization(
  channel: String!
  data: JSON
  id: String!
): PaymentGatewayInitializeTokenization
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">paymentGatewayInitializeTokenization</code>.<code class="gqlmd-mdx-entity-name">channel</code></span>](#channel)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#channel\}

Slug of a channel related to tokenization request.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">paymentGatewayInitializeTokenization</code>.<code class="gqlmd-mdx-entity-name">data</code></span>](#data)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSON</code></span>](/api-reference/miscellaneous/scalars/json) \{#data\}

The data that will be passed to the payment gateway.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">paymentGatewayInitializeTokenization</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#id\}

The identifier of the payment gateway app to initialize tokenization.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PaymentGatewayInitializeTokenization</code></span>](/api-reference/payments/objects/payment-gateway-initialize-tokenization)

Initializes payment gateway for tokenizing payment method session.

Requires one of the following permissions: AUTHENTICATED_USER.

Triggers the following webhook events:

- PAYMENT_GATEWAY_INITIALIZE_TOKENIZATION_SESSION (sync): The customer requested to initialize payment gateway for tokenization.
