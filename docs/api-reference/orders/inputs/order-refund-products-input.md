---
api_reference: true
id: order-refund-products-input
title: OrderRefundProductsInput
---

No description

```graphql
input OrderRefundProductsInput {
  orderLines: [OrderRefundLineInput!]
  fulfillmentLines: [OrderRefundFulfillmentLineInput!]
  amountToRefund: PositiveDecimal
  includeShippingCosts: Boolean
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderRefundProductsInput</code>.<code class="gqlmd-mdx-entity-name">orderLines</code></span>](#order-lines)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderRefundLineInput!]</code></span>](/api-reference/orders/inputs/order-refund-line-input) \{#order-lines\}

List of unfulfilled lines to refund.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderRefundProductsInput</code>.<code class="gqlmd-mdx-entity-name">fulfillmentLines</code></span>](#fulfillment-lines)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderRefundFulfillmentLineInput!]</code></span>](/api-reference/orders/inputs/order-refund-fulfillment-line-input) \{#fulfillment-lines\}

List of fulfilled lines to refund.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderRefundProductsInput</code>.<code class="gqlmd-mdx-entity-name">amountToRefund</code></span>](#amount-to-refund)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveDecimal</code></span>](/api-reference/miscellaneous/scalars/positive-decimal) \{#amount-to-refund\}

The total amount of refund when the value is provided manually.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderRefundProductsInput</code>.<code class="gqlmd-mdx-entity-name">includeShippingCosts</code></span>](#include-shipping-costs)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#include-shipping-costs\}

If true, Saleor will refund shipping costs. If amountToRefund is providedincludeShippingCosts will be ignored.

### Member Of

[`orderFulfillmentRefundProducts`](/api-reference/orders/mutations/order-fulfillment-refund-products) <mark class="gqlmd-mdx-badge">mutation</mark>
