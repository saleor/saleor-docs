---
api_reference: true
id: payment-gateway-initialize-tokenization-result
title: PaymentGatewayInitializeTokenizationResult
---

Result of initialize payment gateway for tokenization of payment method.

    The result of initialize payment gateway for tokenization of payment method.
    SUCCESSFULLY&#x005F;INITIALIZED - The payment gateway was successfully initialized.
    FAILED&#x005F;TO&#x005F;INITIALIZE - The payment gateway was not initialized.
    FAILED&#x005F;TO&#x005F;DELIVER - The request to initialize payment gateway was not delivered.

```graphql
enum PaymentGatewayInitializeTokenizationResult {
  SUCCESSFULLY_INITIALIZED
  FAILED_TO_INITIALIZE
  FAILED_TO_DELIVER
}
```

### Values

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentGatewayInitializeTokenizationResult</code>.<code class="gqlmd-mdx-entity-name">SUCCESSFULLY_INITIALIZED</code></span>](#successfully-initialized) \{#successfully-initialized\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentGatewayInitializeTokenizationResult</code>.<code class="gqlmd-mdx-entity-name">FAILED_TO_INITIALIZE</code></span>](#failed-to-initialize) \{#failed-to-initialize\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentGatewayInitializeTokenizationResult</code>.<code class="gqlmd-mdx-entity-name">FAILED_TO_DELIVER</code></span>](#failed-to-deliver) \{#failed-to-deliver\}

### Member Of

[`PaymentGatewayInitializeTokenization`](/api-reference/payments/objects/payment-gateway-initialize-tokenization) <mark class="gqlmd-mdx-badge">object</mark>
