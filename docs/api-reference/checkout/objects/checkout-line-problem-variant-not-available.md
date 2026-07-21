---
api_reference: true
id: checkout-line-problem-variant-not-available
title: CheckoutLineProblemVariantNotAvailable
---

The variant assigned to the checkout line is not available.Placing the order will not be possible until solving this problem.

```graphql
type CheckoutLineProblemVariantNotAvailable {
  line: CheckoutLine!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutLineProblemVariantNotAvailable</code>.<code class="gqlmd-mdx-entity-name">line</code></span>](#line)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CheckoutLine!</code></span>](/api-reference/checkout/objects/checkout-line) \{#line\}

The line that has variant that is not available.

### Implemented By

[`CheckoutLineProblem`](/api-reference/miscellaneous/unions/checkout-line-problem) <mark class="gqlmd-mdx-badge">union</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutProblem`](/api-reference/miscellaneous/unions/checkout-problem) <mark class="gqlmd-mdx-badge">union</mark>
