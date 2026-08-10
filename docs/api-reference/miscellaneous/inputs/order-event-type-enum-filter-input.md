---
api_reference: true
id: order-event-type-enum-filter-input
title: OrderEventTypeEnumFilterInput
---

No description

```graphql
input OrderEventTypeEnumFilterInput {
  eq: OrderEventsEnum
  oneOf: [OrderEventsEnum!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventTypeEnumFilterInput</code>.<code class="gqlmd-mdx-entity-name">eq</code></span>](#eq)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderEventsEnum</code></span>](/api-reference/orders/enums/order-events-enum) \{#eq\}

The value equal to.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventTypeEnumFilterInput</code>.<code class="gqlmd-mdx-entity-name">oneOf</code></span>](#one-of)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderEventsEnum!]</code></span>](/api-reference/orders/enums/order-events-enum) \{#one-of\}

The value included in.

### Member Of

[`OrderEventFilterInput`](/api-reference/orders/inputs/order-event-filter-input) <mark class="gqlmd-mdx-badge">input</mark>
