---
api_reference: true
id: fulfillment-status-enum-filter-input
title: FulfillmentStatusEnumFilterInput
---

Filter by fulfillment status.

```graphql
input FulfillmentStatusEnumFilterInput {
  eq: FulfillmentStatus
  oneOf: [FulfillmentStatus!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">FulfillmentStatusEnumFilterInput</code>.<code class="gqlmd-mdx-entity-name">eq</code></span>](#eq)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">FulfillmentStatus</code></span>](/api-reference/orders/enums/fulfillment-status) \{#eq\}

The value equal to.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">FulfillmentStatusEnumFilterInput</code>.<code class="gqlmd-mdx-entity-name">oneOf</code></span>](#one-of)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[FulfillmentStatus!]</code></span>](/api-reference/orders/enums/fulfillment-status) \{#one-of\}

The value included in.

### Member Of

[`FulfillmentFilterInput`](/api-reference/orders/inputs/fulfillment-filter-input) <mark class="gqlmd-mdx-badge">input</mark>
