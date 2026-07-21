---
api_reference: true
id: sale-filter-input
title: SaleFilterInput
---

No description

```graphql
input SaleFilterInput {
  status: [DiscountStatusEnum!]
  saleType: DiscountValueTypeEnum
  started: DateTimeRangeInput
  search: String
  metadata: [MetadataFilter!]
  updatedAt: DateTimeRangeInput
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SaleFilterInput</code>.<code class="gqlmd-mdx-entity-name">status</code></span>](#status)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[DiscountStatusEnum!]</code></span>](/api-reference/discounts/enums/discount-status-enum) \{#status\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SaleFilterInput</code>.<code class="gqlmd-mdx-entity-name">saleType</code></span>](#sale-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DiscountValueTypeEnum</code></span>](/api-reference/discounts/enums/discount-value-type-enum) \{#sale-type\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SaleFilterInput</code>.<code class="gqlmd-mdx-entity-name">started</code></span>](#started)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTimeRangeInput</code></span>](/api-reference/miscellaneous/inputs/date-time-range-input) \{#started\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SaleFilterInput</code>.<code class="gqlmd-mdx-entity-name">search</code></span>](#search)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#search\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SaleFilterInput</code>.<code class="gqlmd-mdx-entity-name">metadata</code></span>](#metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataFilter!]</code></span>](/api-reference/miscellaneous/inputs/metadata-filter) \{#metadata\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SaleFilterInput</code>.<code class="gqlmd-mdx-entity-name">updatedAt</code></span>](#updated-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTimeRangeInput</code></span>](/api-reference/miscellaneous/inputs/date-time-range-input) \{#updated-at\}

### Member Of

[`sales`](/api-reference/deprecated/discounts/queries/sales) <mark class="gqlmd-mdx-badge">query</mark>
