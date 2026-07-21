---
api_reference: true
id: payment-method-tokenization-result
title: PaymentMethodTokenizationResult
---

Result of tokenization of payment method.

    SUCCESSFULLY&#x005F;TOKENIZED - The payment method was successfully tokenized.
    ADDITIONAL&#x005F;ACTION&#x005F;REQUIRED - The additional action is required to tokenize payment
    method.
    PENDING - The payment method is pending tokenization.
    FAILED&#x005F;TO&#x005F;TOKENIZE - The payment method was not tokenized.
    FAILED&#x005F;TO&#x005F;DELIVER - The request to tokenize payment method was not delivered.

```graphql
enum PaymentMethodTokenizationResult {
  SUCCESSFULLY_TOKENIZED
  PENDING
  ADDITIONAL_ACTION_REQUIRED
  FAILED_TO_TOKENIZE
  FAILED_TO_DELIVER
}
```

### Values

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentMethodTokenizationResult</code>.<code class="gqlmd-mdx-entity-name">SUCCESSFULLY_TOKENIZED</code></span>](#successfully-tokenized) \{#successfully-tokenized\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentMethodTokenizationResult</code>.<code class="gqlmd-mdx-entity-name">PENDING</code></span>](#pending) \{#pending\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentMethodTokenizationResult</code>.<code class="gqlmd-mdx-entity-name">ADDITIONAL_ACTION_REQUIRED</code></span>](#additional-action-required) \{#additional-action-required\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentMethodTokenizationResult</code>.<code class="gqlmd-mdx-entity-name">FAILED_TO_TOKENIZE</code></span>](#failed-to-tokenize) \{#failed-to-tokenize\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentMethodTokenizationResult</code>.<code class="gqlmd-mdx-entity-name">FAILED_TO_DELIVER</code></span>](#failed-to-deliver) \{#failed-to-deliver\}

### Member Of

[`PaymentMethodInitializeTokenization`](/api-reference/payments/objects/payment-method-initialize-tokenization) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PaymentMethodProcessTokenization`](/api-reference/payments/objects/payment-method-process-tokenization) <mark class="gqlmd-mdx-badge">object</mark>
