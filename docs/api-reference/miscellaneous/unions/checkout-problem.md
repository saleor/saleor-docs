---
api_reference: true
id: checkout-problem
title: CheckoutProblem
---

Represents an problem in the checkout.

```graphql
union CheckoutProblem =
  | CheckoutProblemDeliveryMethodStale
  | CheckoutProblemDeliveryMethodInvalid
  | CheckoutLineProblemInsufficientStock
  | CheckoutLineProblemVariantNotAvailable
```

### Possible types

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutProblem</code>.<code class="gqlmd-mdx-entity-name">CheckoutProblemDeliveryMethodStale</code></span>](/api-reference/checkout/objects/checkout-problem-delivery-method-stale)

Indicates that the delivery methods are stale.

Added in Saleor 3.23.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutProblem</code>.<code class="gqlmd-mdx-entity-name">CheckoutProblemDeliveryMethodInvalid</code></span>](/api-reference/checkout/objects/checkout-problem-delivery-method-invalid)

Indicates that the selected delivery method is invalid.

Added in Saleor 3.23.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutProblem</code>.<code class="gqlmd-mdx-entity-name">CheckoutLineProblemInsufficientStock</code></span>](/api-reference/checkout/objects/checkout-line-problem-insufficient-stock)

Indicates insufficient stock for a given checkout line.Placing the order will not be possible until solving this problem.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutProblem</code>.<code class="gqlmd-mdx-entity-name">CheckoutLineProblemVariantNotAvailable</code></span>](/api-reference/checkout/objects/checkout-line-problem-variant-not-available)

The variant assigned to the checkout line is not available.Placing the order will not be possible until solving this problem.

### Member Of

[`Checkout`](/api-reference/checkout/objects/checkout) <mark class="gqlmd-mdx-badge">object</mark>
