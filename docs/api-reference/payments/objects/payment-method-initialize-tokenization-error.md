---
api_reference: true
id: payment-method-initialize-tokenization-error
title: PaymentMethodInitializeTokenizationError
---

No description

```graphql
type PaymentMethodInitializeTokenizationError {
  field: String
  message: String
  code: PaymentMethodInitializeTokenizationErrorCode!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentMethodInitializeTokenizationError</code>.<code class="gqlmd-mdx-entity-name">field</code></span>](#field)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#field\}

Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentMethodInitializeTokenizationError</code>.<code class="gqlmd-mdx-entity-name">message</code></span>](#message)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#message\}

The error message.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentMethodInitializeTokenizationError</code>.<code class="gqlmd-mdx-entity-name">code</code></span>](#code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PaymentMethodInitializeTokenizationErrorCode!</code></span>](/api-reference/payments/enums/payment-method-initialize-tokenization-error-code) \{#code\}

The error code.

### Member Of

[`PaymentMethodInitializeTokenization`](/api-reference/payments/objects/payment-method-initialize-tokenization) <mark class="gqlmd-mdx-badge">object</mark>
