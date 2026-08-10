---
api_reference: true
id: uuidfilter-input
title: UUIDFilterInput
---

Define the filtering options for string fields.

```graphql
input UUIDFilterInput {
  eq: UUID
  oneOf: [UUID!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">UUIDFilterInput</code>.<code class="gqlmd-mdx-entity-name">eq</code></span>](#eq)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">UUID</code></span>](/api-reference/miscellaneous/scalars/uuid) \{#eq\}

The value equal to.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">UUIDFilterInput</code>.<code class="gqlmd-mdx-entity-name">oneOf</code></span>](#one-of)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[UUID!]</code></span>](/api-reference/miscellaneous/scalars/uuid) \{#one-of\}

The value included in.

### Member Of

[`CustomerOrderWhereInput`](/api-reference/orders/inputs/customer-order-where-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderWhereInput`](/api-reference/orders/inputs/order-where-input) <mark class="gqlmd-mdx-badge">input</mark>
