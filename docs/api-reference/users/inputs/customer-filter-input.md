---
api_reference: true
id: customer-filter-input
title: CustomerFilterInput
---

No description

```graphql
input CustomerFilterInput {
  dateJoined: DateRangeInput
  numberOfOrders: IntRangeInput
  placedOrders: DateRangeInput
  search: String
  metadata: [MetadataFilter!]
  ids: [ID!]
  updatedAt: DateTimeRangeInput
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CustomerFilterInput</code>.<code class="gqlmd-mdx-entity-name">dateJoined</code></span>](#date-joined)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateRangeInput</code></span>](/api-reference/miscellaneous/inputs/date-range-input) \{#date-joined\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CustomerFilterInput</code>.<code class="gqlmd-mdx-entity-name">numberOfOrders</code></span>](#number-of-orders)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">IntRangeInput</code></span>](/api-reference/miscellaneous/inputs/int-range-input) \{#number-of-orders\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CustomerFilterInput</code>.<code class="gqlmd-mdx-entity-name">placedOrders</code></span>](#placed-orders)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateRangeInput</code></span>](/api-reference/miscellaneous/inputs/date-range-input) \{#placed-orders\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CustomerFilterInput</code>.<code class="gqlmd-mdx-entity-name">search</code></span>](#search)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#search\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CustomerFilterInput</code>.<code class="gqlmd-mdx-entity-name">metadata</code></span>](#metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataFilter!]</code></span>](/api-reference/miscellaneous/inputs/metadata-filter) \{#metadata\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CustomerFilterInput</code>.<code class="gqlmd-mdx-entity-name">ids</code></span>](#ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#ids\}

Filter by ids.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CustomerFilterInput</code>.<code class="gqlmd-mdx-entity-name">updatedAt</code></span>](#updated-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTimeRangeInput</code></span>](/api-reference/miscellaneous/inputs/date-time-range-input) \{#updated-at\}

### Member Of

[`customers`](/api-reference/users/queries/customers) <mark class="gqlmd-mdx-badge">query</mark>
