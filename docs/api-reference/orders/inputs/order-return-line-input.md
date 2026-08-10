---
api_reference: true
id: order-return-line-input
title: OrderReturnLineInput
---

No description

```graphql
input OrderReturnLineInput {
  orderLineId: ID!
  quantity: Int!
  replace: Boolean
  reason: String
  reasonReference: ID
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderReturnLineInput</code>.<code class="gqlmd-mdx-entity-name">orderLineId</code></span>](#order-line-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#order-line-id\}

The ID of the order line to return.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderReturnLineInput</code>.<code class="gqlmd-mdx-entity-name">quantity</code></span>](#quantity)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span>](/api-reference/miscellaneous/scalars/int) \{#quantity\}

The number of items to be returned.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderReturnLineInput</code>.<code class="gqlmd-mdx-entity-name">replace</code></span>](#replace)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#replace\}

Determines, if the line should be added to replace order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderReturnLineInput</code>.<code class="gqlmd-mdx-entity-name">reason</code></span>](#reason)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#reason\}

Reason for returning this line.

Added in Saleor 3.23.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderReturnLineInput</code>.<code class="gqlmd-mdx-entity-name">reasonReference</code></span>](#reason-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#reason-reference\}

ID of a `Page` (Model) to reference in reason for this line.

Added in Saleor 3.23.

### Member Of

[`OrderReturnProductsInput`](/api-reference/orders/inputs/order-return-products-input) <mark class="gqlmd-mdx-badge">input</mark>
