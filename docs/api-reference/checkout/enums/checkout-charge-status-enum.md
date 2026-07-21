---
api_reference: true
id: checkout-charge-status-enum
title: CheckoutChargeStatusEnum
---

Determine the current charge status for the checkout.

    The checkout is considered overcharged when the sum of the transactionItem's charge
    amounts exceeds the value of `checkout.total`.
    If the sum of the transactionItem's charge amounts equals
    `checkout.total`, we consider the checkout to be fully charged.
    If the sum of the transactionItem's charge amounts covers a part of the
    `checkout.total`, we treat the checkout as partially charged.


    NONE - the funds are not charged.
    PARTIAL - the funds that are charged don't cover the checkout's total
    FULL - the funds that are charged fully cover the checkout's total
    OVERCHARGED - the charged funds are bigger than checkout's total

```graphql
enum CheckoutChargeStatusEnum {
  NONE
  PARTIAL
  FULL
  OVERCHARGED
}
```

### Values

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutChargeStatusEnum</code>.<code class="gqlmd-mdx-entity-name">NONE</code></span>](#none) \{#none\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutChargeStatusEnum</code>.<code class="gqlmd-mdx-entity-name">PARTIAL</code></span>](#partial) \{#partial\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutChargeStatusEnum</code>.<code class="gqlmd-mdx-entity-name">FULL</code></span>](#full) \{#full\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutChargeStatusEnum</code>.<code class="gqlmd-mdx-entity-name">OVERCHARGED</code></span>](#overcharged) \{#overcharged\}

### Member Of

[`Checkout`](/api-reference/checkout/objects/checkout) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutFilterInput`](/api-reference/checkout/inputs/checkout-filter-input) <mark class="gqlmd-mdx-badge">input</mark>
