---
api_reference: true
id: payment-capture
title: paymentCapture
---

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

The legacy Payments API is deprecated and will be removed. Use the Transactions API instead.

</span>
</fieldset>

Captures the authorized payment amount.

Requires one of the following permissions: MANAGE_ORDERS.

```graphql
paymentCapture(
  amount: PositiveDecimal
  paymentId: ID!
): PaymentCapture @deprecated
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">paymentCapture</code>.<code class="gqlmd-mdx-entity-name">amount</code></span>](#amount)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveDecimal</code></span>](/api-reference/miscellaneous/scalars/positive-decimal) \{#amount\}

Transaction amount.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">paymentCapture</code>.<code class="gqlmd-mdx-entity-name">paymentId</code></span>](#payment-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#payment-id\}

Payment ID.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PaymentCapture</code></span>](/api-reference/payments/objects/payment-capture)

Captures the authorized payment amount.

Requires one of the following permissions: MANAGE_ORDERS.
