---
api_reference: true
id: order-refund
title: orderRefund
---

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

The legacy Payments API is deprecated and will be removed. Use the Transactions API instead.

</span>
</fieldset>

Refund an order.

Requires one of the following permissions: MANAGE_ORDERS.

```graphql
orderRefund(
  amount: PositiveDecimal!
  id: ID!
): OrderRefund @deprecated
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderRefund</code>.<code class="gqlmd-mdx-entity-name">amount</code></span>](#amount)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveDecimal!</code></span>](/api-reference/miscellaneous/scalars/positive-decimal) \{#amount\}

Amount of money to refund.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderRefund</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of the order to refund.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderRefund</code></span>](/api-reference/orders/objects/order-refund)

Refund an order.

Requires one of the following permissions: MANAGE_ORDERS.
