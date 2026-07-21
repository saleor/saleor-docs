---
api_reference: true
id: order-authorize-status-enum
title: OrderAuthorizeStatusEnum
---

Determine a current authorize status for order.

    We treat the order as fully authorized when the sum of authorized and charged funds
    cover the `order.total`-`order.totalGrantedRefund`.
    We treat the order as partially authorized when the sum of authorized and charged
    funds covers only part of the `order.total`-`order.totalGrantedRefund`.
    We treat the order as not authorized when the sum of authorized and charged funds is
    0.

    NONE - the funds are not authorized
    PARTIAL - the funds that are authorized and charged don't cover fully the
    `order.total`-`order.totalGrantedRefund`
    FULL - the funds that are authorized and charged fully cover the
    `order.total`-`order.totalGrantedRefund`

```graphql
enum OrderAuthorizeStatusEnum {
  NONE
  PARTIAL
  FULL
}
```

### Values

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderAuthorizeStatusEnum</code>.<code class="gqlmd-mdx-entity-name">NONE</code></span>](#none) \{#none\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderAuthorizeStatusEnum</code>.<code class="gqlmd-mdx-entity-name">PARTIAL</code></span>](#partial) \{#partial\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderAuthorizeStatusEnum</code>.<code class="gqlmd-mdx-entity-name">FULL</code></span>](#full) \{#full\}

### Member Of

[`Order`](/api-reference/orders/objects/order) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderAuthorizeStatusEnumFilterInput`](/api-reference/orders/inputs/order-authorize-status-enum-filter-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderFilterInput`](/api-reference/orders/inputs/order-filter-input) <mark class="gqlmd-mdx-badge">input</mark>
