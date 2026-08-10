---
api_reference: true
id: checkout-authorize-status-enum
title: CheckoutAuthorizeStatusEnum
---

Determine a current authorize status for checkout.

    We treat the checkout as fully authorized when the sum of authorized and charged
    funds cover the checkout.total.
    We treat the checkout as partially authorized when the sum of authorized and charged
    funds covers only part of the checkout.total
    We treat the checkout as not authorized when the sum of authorized and charged funds
    is 0.

    NONE - the funds are not authorized
    PARTIAL - the cover funds don't cover fully the checkout's total
    FULL - the cover funds covers the checkout's total

```graphql
enum CheckoutAuthorizeStatusEnum {
  NONE
  PARTIAL
  FULL
}
```

### Values

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutAuthorizeStatusEnum</code>.<code class="gqlmd-mdx-entity-name">NONE</code></span>](#none) \{#none\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutAuthorizeStatusEnum</code>.<code class="gqlmd-mdx-entity-name">PARTIAL</code></span>](#partial) \{#partial\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutAuthorizeStatusEnum</code>.<code class="gqlmd-mdx-entity-name">FULL</code></span>](#full) \{#full\}

### Member Of

[`Checkout`](/api-reference/checkout/objects/checkout) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutFilterInput`](/api-reference/checkout/inputs/checkout-filter-input) <mark class="gqlmd-mdx-badge">input</mark>
