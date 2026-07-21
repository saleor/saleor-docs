---
api_reference: true
id: payment-gateway-initialize-tokenization-error
title: PaymentGatewayInitializeTokenizationError
---

No description

```graphql
type PaymentGatewayInitializeTokenizationError {
  field: String
  message: String
  code: PaymentGatewayInitializeTokenizationErrorCode!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentGatewayInitializeTokenizationError</code>.<code class="gqlmd-mdx-entity-name">field</code></span>](#field)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#field\}

Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentGatewayInitializeTokenizationError</code>.<code class="gqlmd-mdx-entity-name">message</code></span>](#message)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#message\}

The error message.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentGatewayInitializeTokenizationError</code>.<code class="gqlmd-mdx-entity-name">code</code></span>](#code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PaymentGatewayInitializeTokenizationErrorCode!</code></span>](/api-reference/payments/enums/payment-gateway-initialize-tokenization-error-code) \{#code\}

The error code.

### Member Of

[`PaymentGatewayInitializeTokenization`](/api-reference/payments/objects/payment-gateway-initialize-tokenization) <mark class="gqlmd-mdx-badge">object</mark>
