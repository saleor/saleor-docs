---
api_reference: true
id: order-grant-refund-create-line-input
title: OrderGrantRefundCreateLineInput
---

No description

```graphql
input OrderGrantRefundCreateLineInput {
  id: ID!
  quantity: Int!
  reason: String
  reasonReference: ID
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderGrantRefundCreateLineInput</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of the order line.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderGrantRefundCreateLineInput</code>.<code class="gqlmd-mdx-entity-name">quantity</code></span>](#quantity)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span>](/api-reference/miscellaneous/scalars/int) \{#quantity\}

The quantity of line items to be marked to refund.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderGrantRefundCreateLineInput</code>.<code class="gqlmd-mdx-entity-name">reason</code></span>](#reason)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#reason\}

Reason of the granted refund for the line.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderGrantRefundCreateLineInput</code>.<code class="gqlmd-mdx-entity-name">reasonReference</code></span>](#reason-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#reason-reference\}

ID of a `Page` (Model) to reference in reason for the line.

Added in Saleor 3.23.

### Member Of

[`OrderGrantRefundCreateInput`](/api-reference/orders/inputs/order-grant-refund-create-input) <mark class="gqlmd-mdx-badge">input</mark>
