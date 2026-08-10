---
api_reference: true
id: payment-check-balance
title: paymentCheckBalance
---

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

The legacy Payments API is deprecated and will be removed. Use the Transactions API instead.

</span>
</fieldset>

Check payment balance.

```graphql
paymentCheckBalance(
  input: PaymentCheckBalanceInput!
): PaymentCheckBalance @deprecated
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">paymentCheckBalance</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PaymentCheckBalanceInput!</code></span>](/api-reference/payments/inputs/payment-check-balance-input) \{#input\}

Fields required to check payment balance.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PaymentCheckBalance</code></span>](/api-reference/payments/objects/payment-check-balance)

Check payment balance.
