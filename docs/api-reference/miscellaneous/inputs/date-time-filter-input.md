---
api_reference: true
id: date-time-filter-input
title: DateTimeFilterInput
---

Define the filtering options for date time fields.

```graphql
input DateTimeFilterInput {
  eq: DateTime
  oneOf: [DateTime!]
  range: DateTimeRangeInput
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DateTimeFilterInput</code>.<code class="gqlmd-mdx-entity-name">eq</code></span>](#eq)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#eq\}

The value equal to.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DateTimeFilterInput</code>.<code class="gqlmd-mdx-entity-name">oneOf</code></span>](#one-of)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[DateTime!]</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#one-of\}

The value included in.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DateTimeFilterInput</code>.<code class="gqlmd-mdx-entity-name">range</code></span>](#range)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTimeRangeInput</code></span>](/api-reference/miscellaneous/inputs/date-time-range-input) \{#range\}

The value in range.

### Member Of

[`ProductWhereInput`](/api-reference/products/inputs/product-where-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PromotionWhereInput`](/api-reference/discounts/inputs/promotion-where-input) <mark class="gqlmd-mdx-badge">input</mark>
