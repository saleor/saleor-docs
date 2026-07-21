---
api_reference: true
id: checkout-line-problem
title: CheckoutLineProblem
---

Represents an problem in the checkout line.

```graphql
union CheckoutLineProblem =
  | CheckoutLineProblemInsufficientStock
  | CheckoutLineProblemVariantNotAvailable
```

### Possible types

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutLineProblem</code>.<code class="gqlmd-mdx-entity-name">CheckoutLineProblemInsufficientStock</code></span>](/api-reference/checkout/objects/checkout-line-problem-insufficient-stock)

Indicates insufficient stock for a given checkout line.Placing the order will not be possible until solving this problem.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutLineProblem</code>.<code class="gqlmd-mdx-entity-name">CheckoutLineProblemVariantNotAvailable</code></span>](/api-reference/checkout/objects/checkout-line-problem-variant-not-available)

The variant assigned to the checkout line is not available.Placing the order will not be possible until solving this problem.

### Member Of

[`CheckoutLine`](/api-reference/checkout/objects/checkout-line) <mark class="gqlmd-mdx-badge">object</mark>
