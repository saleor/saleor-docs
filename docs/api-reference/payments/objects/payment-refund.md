---
api_reference: true
id: payment-refund
title: PaymentRefund
---

Refunds the captured payment amount.

Requires one of the following permissions: MANAGE_ORDERS.

```graphql
type PaymentRefund {
  payment: Payment
  paymentErrors: [PaymentError!]! @deprecated
  errors: [PaymentError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentRefund</code>.<code class="gqlmd-mdx-entity-name">payment</code></span>](#payment)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Payment</code></span>](/api-reference/payments/objects/payment) \{#payment\}

Updated payment.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentRefund</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[PaymentError!]!</code></span>](/api-reference/payments/objects/payment-error) \{#errors\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentRefund</code>.<code class="gqlmd-mdx-entity-name">paymentErrors</code></span>](#payment-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[PaymentError!]!</code></span>](/api-reference/payments/objects/payment-error) \{#payment-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`paymentRefund`](/api-reference/deprecated/payments/mutations/payment-refund) <mark class="gqlmd-mdx-badge">mutation</mark>
