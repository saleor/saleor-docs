---
api_reference: true
id: tokenized-payment-flow-enum
title: TokenizedPaymentFlowEnum
---

Represents possible tokenized payment flows that can be used to process payment.

    The following flows are possible:
    INTERACTIVE - Payment method can be used for 1 click checkout - it's prefilled in
    checkout form (might require additional authentication from user)

```graphql
enum TokenizedPaymentFlowEnum {
  INTERACTIVE
}
```

### Values

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TokenizedPaymentFlowEnum</code>.<code class="gqlmd-mdx-entity-name">INTERACTIVE</code></span>](#interactive) \{#interactive\}

### Member Of

[`paymentMethodInitializeTokenization`](/api-reference/payments/mutations/payment-method-initialize-tokenization) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PaymentMethodInitializeTokenizationSession`](/api-reference/payments/objects/payment-method-initialize-tokenization-session) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`StoredPaymentMethod`](/api-reference/payments/objects/stored-payment-method) <mark class="gqlmd-mdx-badge">object</mark>
