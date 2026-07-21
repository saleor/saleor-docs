---
api_reference: true
id: order-charge-status-enum
title: OrderChargeStatusEnum
---

Determine the current charge status for the order.

    An order is considered overcharged when the sum of the
    transactionItem's charge amounts exceeds the value of
    `order.total` - `order.totalGrantedRefund`.
    If the sum of the transactionItem's charge amounts equals
    `order.total` - `order.totalGrantedRefund`, we consider the order to be fully
    charged.
    If the sum of the transactionItem's charge amounts covers a part of the
    `order.total` - `order.totalGrantedRefund`, we treat the order as partially charged.

    NONE - the funds are not charged.
    PARTIAL - the funds that are charged don't cover the
    `order.total`-`order.totalGrantedRefund`
    FULL - the funds that are charged fully cover the
    `order.total`-`order.totalGrantedRefund`
    OVERCHARGED - the charged funds are bigger than the
    `order.total`-`order.totalGrantedRefund`

```graphql
enum OrderChargeStatusEnum {
  NONE
  PARTIAL
  FULL
  OVERCHARGED
}
```

### Values

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderChargeStatusEnum</code>.<code class="gqlmd-mdx-entity-name">NONE</code></span>](#none) \{#none\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderChargeStatusEnum</code>.<code class="gqlmd-mdx-entity-name">PARTIAL</code></span>](#partial) \{#partial\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderChargeStatusEnum</code>.<code class="gqlmd-mdx-entity-name">FULL</code></span>](#full) \{#full\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderChargeStatusEnum</code>.<code class="gqlmd-mdx-entity-name">OVERCHARGED</code></span>](#overcharged) \{#overcharged\}

### Member Of

[`Order`](/api-reference/orders/objects/order) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderChargeStatusEnumFilterInput`](/api-reference/orders/inputs/order-charge-status-enum-filter-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderFilterInput`](/api-reference/orders/inputs/order-filter-input) <mark class="gqlmd-mdx-badge">input</mark>
