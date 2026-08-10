---
api_reference: true
id: payment-countable-edge
title: PaymentCountableEdge
---

No description

```graphql
type PaymentCountableEdge {
  node: Payment!
  cursor: String!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentCountableEdge</code>.<code class="gqlmd-mdx-entity-name">node</code></span>](#node)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Payment!</code></span>](/api-reference/payments/objects/payment) \{#node\}

The item at the end of the edge.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentCountableEdge</code>.<code class="gqlmd-mdx-entity-name">cursor</code></span>](#cursor)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#cursor\}

A cursor for use in pagination.

### Member Of

[`PaymentCountableConnection`](/api-reference/payments/objects/payment-countable-connection) <mark class="gqlmd-mdx-badge">object</mark>
