---
api_reference: true
id: order-authorize-status-enum-filter-input
title: OrderAuthorizeStatusEnumFilterInput
---

Filter by authorize status.

```graphql
input OrderAuthorizeStatusEnumFilterInput {
  eq: OrderAuthorizeStatusEnum
  oneOf: [OrderAuthorizeStatusEnum!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderAuthorizeStatusEnumFilterInput</code>.<code class="gqlmd-mdx-entity-name">eq</code></span>](#eq)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderAuthorizeStatusEnum</code></span>](/api-reference/orders/enums/order-authorize-status-enum) \{#eq\}

The value equal to.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderAuthorizeStatusEnumFilterInput</code>.<code class="gqlmd-mdx-entity-name">oneOf</code></span>](#one-of)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderAuthorizeStatusEnum!]</code></span>](/api-reference/orders/enums/order-authorize-status-enum) \{#one-of\}

The value included in.

### Member Of

[`CustomerOrderWhereInput`](/api-reference/orders/inputs/customer-order-where-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`DraftOrderWhereInput`](/api-reference/orders/inputs/draft-order-where-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderWhereInput`](/api-reference/orders/inputs/order-where-input) <mark class="gqlmd-mdx-badge">input</mark>
