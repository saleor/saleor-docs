---
api_reference: true
id: order-capture
title: orderCapture
---

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

The legacy Payments API is deprecated and will be removed. Use the Transactions API instead.

</span>
</fieldset>

Capture an order.

Requires one of the following permissions: MANAGE_ORDERS.

```graphql
orderCapture(
  amount: PositiveDecimal!
  id: ID!
): OrderCapture @deprecated
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderCapture</code>.<code class="gqlmd-mdx-entity-name">amount</code></span>](#amount)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveDecimal!</code></span>](/api-reference/miscellaneous/scalars/positive-decimal) \{#amount\}

Amount of money to capture.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderCapture</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of the order to capture.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderCapture</code></span>](/api-reference/orders/objects/order-capture)

Capture an order.

Requires one of the following permissions: MANAGE_ORDERS.
