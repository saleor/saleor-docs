---
api_reference: true
id: payment-initialize
title: PaymentInitialize
---

Initializes payment process when it is required by gateway.

```graphql
type PaymentInitialize {
  initializedPayment: PaymentInitialized
  paymentErrors: [PaymentError!]! @deprecated
  errors: [PaymentError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentInitialize</code>.<code class="gqlmd-mdx-entity-name">initializedPayment</code></span>](#initialized-payment)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PaymentInitialized</code></span>](/api-reference/payments/objects/payment-initialized) \{#initialized-payment\}

Payment that was initialized.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentInitialize</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[PaymentError!]!</code></span>](/api-reference/payments/objects/payment-error) \{#errors\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentInitialize</code>.<code class="gqlmd-mdx-entity-name">paymentErrors</code></span>](#payment-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[PaymentError!]!</code></span>](/api-reference/payments/objects/payment-error) \{#payment-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`paymentInitialize`](/api-reference/deprecated/payments/mutations/payment-initialize) <mark class="gqlmd-mdx-badge">mutation</mark>
