---
api_reference: true
id: order-grant-refund-create-input
title: OrderGrantRefundCreateInput
---

No description

```graphql
input OrderGrantRefundCreateInput {
  amount: Decimal
  reason: String
  reasonReference: ID
  lines: [OrderGrantRefundCreateLineInput!]
  grantRefundForShipping: Boolean
  transactionId: ID!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderGrantRefundCreateInput</code>.<code class="gqlmd-mdx-entity-name">amount</code></span>](#amount)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Decimal</code></span>](/api-reference/miscellaneous/scalars/decimal) \{#amount\}

Amount of the granted refund. If not provided, the amount will be calculated automatically based on provided `lines` and `grantRefundForShipping`.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderGrantRefundCreateInput</code>.<code class="gqlmd-mdx-entity-name">reason</code></span>](#reason)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#reason\}

Reason of the granted refund.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderGrantRefundCreateInput</code>.<code class="gqlmd-mdx-entity-name">reasonReference</code></span>](#reason-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#reason-reference\}

ID of a `Page` (Model) to reference in reason.

Added in Saleor 3.22.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderGrantRefundCreateInput</code>.<code class="gqlmd-mdx-entity-name">lines</code></span>](#lines)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderGrantRefundCreateLineInput!]</code></span>](/api-reference/orders/inputs/order-grant-refund-create-line-input) \{#lines\}

Lines to assign to granted refund.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderGrantRefundCreateInput</code>.<code class="gqlmd-mdx-entity-name">grantRefundForShipping</code></span>](#grant-refund-for-shipping)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#grant-refund-for-shipping\}

Determine if granted refund should include shipping costs.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderGrantRefundCreateInput</code>.<code class="gqlmd-mdx-entity-name">transactionId</code></span>](#transaction-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#transaction-id\}

The ID of the transaction item related to the granted refund. If `amount` provided in the input, the transaction.chargedAmount needs to be equal or greater than provided `amount`.If `amount` is not provided in the input and calculated automatically by Saleor, the `min(calculatedAmount, transaction.chargedAmount)` will be used. Field required starting from Saleor 3.21.

Added in Saleor 3.20.

Note: this API is currently in Feature Preview and can be subject to changes at later point.

### Member Of

[`orderGrantRefundCreate`](/api-reference/orders/mutations/order-grant-refund-create) <mark class="gqlmd-mdx-badge">mutation</mark>
