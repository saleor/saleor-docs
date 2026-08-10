---
api_reference: true
id: order-line-create-input
title: OrderLineCreateInput
---

No description

```graphql
input OrderLineCreateInput {
  quantity: Int!
  variantId: ID!
  forceNewLine: Boolean
  price: PositiveDecimal
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderLineCreateInput</code>.<code class="gqlmd-mdx-entity-name">quantity</code></span>](#quantity)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span>](/api-reference/miscellaneous/scalars/int) \{#quantity\}

Number of variant items ordered.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderLineCreateInput</code>.<code class="gqlmd-mdx-entity-name">variantId</code></span>](#variant-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#variant-id\}

Product variant ID.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderLineCreateInput</code>.<code class="gqlmd-mdx-entity-name">forceNewLine</code></span>](#force-new-line)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#force-new-line\}

Flag that allow force splitting the same variant into multiple lines by skipping the matching logic.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderLineCreateInput</code>.<code class="gqlmd-mdx-entity-name">price</code></span>](#price)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveDecimal</code></span>](/api-reference/miscellaneous/scalars/positive-decimal) \{#price\}

Custom price of the item.When the line with the same variant will be provided multiple times, the last price will be used.

### Member Of

[`DraftOrderCreateInput`](/api-reference/orders/inputs/draft-order-create-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`orderLinesCreate`](/api-reference/orders/mutations/order-lines-create) <mark class="gqlmd-mdx-badge">mutation</mark>
