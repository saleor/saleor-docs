---
api_reference: true
id: payment-method-initialize-tokenization
title: paymentMethodInitializeTokenization
---

Tokenize payment method.

Requires one of the following permissions: AUTHENTICATED_USER.

Triggers the following webhook events:

- PAYMENT_METHOD_INITIALIZE_TOKENIZATION_SESSION (sync): The customer requested to tokenize payment method.

```graphql
paymentMethodInitializeTokenization(
  channel: String!
  data: JSON
  id: String!
  paymentFlowToSupport: TokenizedPaymentFlowEnum!
): PaymentMethodInitializeTokenization
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">paymentMethodInitializeTokenization</code>.<code class="gqlmd-mdx-entity-name">channel</code></span>](#channel)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#channel\}

Slug of a channel related to tokenization request.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">paymentMethodInitializeTokenization</code>.<code class="gqlmd-mdx-entity-name">data</code></span>](#data)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSON</code></span>](/api-reference/miscellaneous/scalars/json) \{#data\}

The data that will be passed to the payment gateway.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">paymentMethodInitializeTokenization</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#id\}

The identifier of the payment gateway app to initialize payment method tokenization.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">paymentMethodInitializeTokenization</code>.<code class="gqlmd-mdx-entity-name">paymentFlowToSupport</code></span>](#payment-flow-to-support)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TokenizedPaymentFlowEnum!</code></span>](/api-reference/payments/enums/tokenized-payment-flow-enum) \{#payment-flow-to-support\}

The payment flow that the tokenized payment method should support.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PaymentMethodInitializeTokenization</code></span>](/api-reference/payments/objects/payment-method-initialize-tokenization)

Tokenize payment method.

Requires one of the following permissions: AUTHENTICATED_USER.

Triggers the following webhook events:

- PAYMENT_METHOD_INITIALIZE_TOKENIZATION_SESSION (sync): The customer requested to tokenize payment method.
