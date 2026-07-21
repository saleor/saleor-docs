---
api_reference: true
id: payment-initialize
title: paymentInitialize
---

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

The legacy Payments API is deprecated and will be removed. Use the Transactions API instead.

</span>
</fieldset>

Initializes payment process when it is required by gateway.

```graphql
paymentInitialize(
  channel: String
  gateway: String!
  paymentData: JSONString
): PaymentInitialize @deprecated
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">paymentInitialize</code>.<code class="gqlmd-mdx-entity-name">channel</code></span>](#channel)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#channel\}

Slug of a channel for which the data should be returned.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">paymentInitialize</code>.<code class="gqlmd-mdx-entity-name">gateway</code></span>](#gateway)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#gateway\}

A gateway name used to initialize the payment.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">paymentInitialize</code>.<code class="gqlmd-mdx-entity-name">paymentData</code></span>](#payment-data)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSONString</code></span>](/api-reference/miscellaneous/scalars/jsonstring) \{#payment-data\}

Client-side generated data required to initialize the payment.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PaymentInitialize</code></span>](/api-reference/payments/objects/payment-initialize)

Initializes payment process when it is required by gateway.
