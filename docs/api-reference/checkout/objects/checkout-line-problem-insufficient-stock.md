---
api_reference: true
id: checkout-line-problem-insufficient-stock
title: CheckoutLineProblemInsufficientStock
---

Indicates insufficient stock for a given checkout line.Placing the order will not be possible until solving this problem.

```graphql
type CheckoutLineProblemInsufficientStock {
  availableQuantity: Int
  line: CheckoutLine!
  variant: ProductVariant!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutLineProblemInsufficientStock</code>.<code class="gqlmd-mdx-entity-name">availableQuantity</code></span>](#available-quantity)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#available-quantity\}

Available quantity of a variant.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutLineProblemInsufficientStock</code>.<code class="gqlmd-mdx-entity-name">line</code></span>](#line)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CheckoutLine!</code></span>](/api-reference/checkout/objects/checkout-line) \{#line\}

The line that has variant with insufficient stock.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutLineProblemInsufficientStock</code>.<code class="gqlmd-mdx-entity-name">variant</code></span>](#variant)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductVariant!</code></span>](/api-reference/products/objects/product-variant) \{#variant\}

The variant with insufficient stock.

### Implemented By

[`CheckoutLineProblem`](/api-reference/miscellaneous/unions/checkout-line-problem) <mark class="gqlmd-mdx-badge">union</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutProblem`](/api-reference/miscellaneous/unions/checkout-problem) <mark class="gqlmd-mdx-badge">union</mark>
