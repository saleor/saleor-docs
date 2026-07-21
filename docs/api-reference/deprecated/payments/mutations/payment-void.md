---
api_reference: true
id: payment-void
title: paymentVoid
---

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

The legacy Payments API is deprecated and will be removed. Use the Transactions API instead.

</span>
</fieldset>

Voids the authorized payment.

Requires one of the following permissions: MANAGE_ORDERS.

```graphql
paymentVoid(
  paymentId: ID!
): PaymentVoid @deprecated
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">paymentVoid</code>.<code class="gqlmd-mdx-entity-name">paymentId</code></span>](#payment-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#payment-id\}

Payment ID.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PaymentVoid</code></span>](/api-reference/payments/objects/payment-void)

Voids the authorized payment.

Requires one of the following permissions: MANAGE_ORDERS.
