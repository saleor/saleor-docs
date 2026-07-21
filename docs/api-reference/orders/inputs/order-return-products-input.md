---
api_reference: true
id: order-return-products-input
title: OrderReturnProductsInput
---

No description

```graphql
input OrderReturnProductsInput {
  orderLines: [OrderReturnLineInput!]
  fulfillmentLines: [OrderReturnFulfillmentLineInput!]
  amountToRefund: PositiveDecimal
  includeShippingCosts: Boolean
  refund: Boolean
  reason: String
  reasonReference: ID
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderReturnProductsInput</code>.<code class="gqlmd-mdx-entity-name">orderLines</code></span>](#order-lines)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderReturnLineInput!]</code></span>](/api-reference/orders/inputs/order-return-line-input) \{#order-lines\}

List of unfulfilled lines to return.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderReturnProductsInput</code>.<code class="gqlmd-mdx-entity-name">fulfillmentLines</code></span>](#fulfillment-lines)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderReturnFulfillmentLineInput!]</code></span>](/api-reference/orders/inputs/order-return-fulfillment-line-input) \{#fulfillment-lines\}

List of fulfilled lines to return.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderReturnProductsInput</code>.<code class="gqlmd-mdx-entity-name">amountToRefund</code></span>](#amount-to-refund)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveDecimal</code></span>](/api-reference/miscellaneous/scalars/positive-decimal) \{#amount-to-refund\}

The total amount of refund when the value is provided manually.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderReturnProductsInput</code>.<code class="gqlmd-mdx-entity-name">includeShippingCosts</code></span>](#include-shipping-costs)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#include-shipping-costs\}

If true, Saleor will refund shipping costs. If amountToRefund is providedincludeShippingCosts will be ignored.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderReturnProductsInput</code>.<code class="gqlmd-mdx-entity-name">refund</code></span>](#refund)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#refund\}

If true, Saleor will call refund action for all lines.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderReturnProductsInput</code>.<code class="gqlmd-mdx-entity-name">reason</code></span>](#reason)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#reason\}

Reason for returning this order.

Added in Saleor 3.23.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderReturnProductsInput</code>.<code class="gqlmd-mdx-entity-name">reasonReference</code></span>](#reason-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#reason-reference\}

ID of a `Page` (Model) to reference in reason for this return.

Added in Saleor 3.23.

### Member Of

[`orderFulfillmentReturnProducts`](/api-reference/orders/mutations/order-fulfillment-return-products) <mark class="gqlmd-mdx-badge">mutation</mark>
