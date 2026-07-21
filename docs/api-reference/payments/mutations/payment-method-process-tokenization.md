---
api_reference: true
id: payment-method-process-tokenization
title: paymentMethodProcessTokenization
---

Tokenize payment method.

Requires one of the following permissions: AUTHENTICATED_USER.

Triggers the following webhook events:

- PAYMENT_METHOD_PROCESS_TOKENIZATION_SESSION (sync): The customer continues payment method tokenization.

```graphql
paymentMethodProcessTokenization(
  channel: String!
  data: JSON
  id: String!
): PaymentMethodProcessTokenization
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">paymentMethodProcessTokenization</code>.<code class="gqlmd-mdx-entity-name">channel</code></span>](#channel)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#channel\}

Slug of a channel related to tokenization request.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">paymentMethodProcessTokenization</code>.<code class="gqlmd-mdx-entity-name">data</code></span>](#data)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSON</code></span>](/api-reference/miscellaneous/scalars/json) \{#data\}

The data that will be passed to the payment gateway.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">paymentMethodProcessTokenization</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#id\}

The identifier of the payment gateway app to process payment method tokenization.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PaymentMethodProcessTokenization</code></span>](/api-reference/payments/objects/payment-method-process-tokenization)

Tokenize payment method.

Requires one of the following permissions: AUTHENTICATED_USER.

Triggers the following webhook events:

- PAYMENT_METHOD_PROCESS_TOKENIZATION_SESSION (sync): The customer continues payment method tokenization.
