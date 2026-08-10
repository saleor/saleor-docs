---
api_reference: true
id: voucher-filter-input
title: VoucherFilterInput
---

No description

```graphql
input VoucherFilterInput {
  status: [DiscountStatusEnum!]
  timesUsed: IntRangeInput
  discountType: [VoucherDiscountType!]
  started: DateTimeRangeInput
  search: String
  metadata: [MetadataFilter!]
  ids: [ID!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherFilterInput</code>.<code class="gqlmd-mdx-entity-name">status</code></span>](#status)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[DiscountStatusEnum!]</code></span>](/api-reference/discounts/enums/discount-status-enum) \{#status\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherFilterInput</code>.<code class="gqlmd-mdx-entity-name">timesUsed</code></span>](#times-used)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">IntRangeInput</code></span>](/api-reference/miscellaneous/inputs/int-range-input) \{#times-used\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherFilterInput</code>.<code class="gqlmd-mdx-entity-name">discountType</code></span>](#discount-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[VoucherDiscountType!]</code></span>](/api-reference/discounts/enums/voucher-discount-type) \{#discount-type\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherFilterInput</code>.<code class="gqlmd-mdx-entity-name">started</code></span>](#started)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTimeRangeInput</code></span>](/api-reference/miscellaneous/inputs/date-time-range-input) \{#started\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherFilterInput</code>.<code class="gqlmd-mdx-entity-name">search</code></span>](#search)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#search\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherFilterInput</code>.<code class="gqlmd-mdx-entity-name">metadata</code></span>](#metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataFilter!]</code></span>](/api-reference/miscellaneous/inputs/metadata-filter) \{#metadata\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherFilterInput</code>.<code class="gqlmd-mdx-entity-name">ids</code></span>](#ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#ids\}

### Member Of

[`vouchers`](/api-reference/discounts/queries/vouchers) <mark class="gqlmd-mdx-badge">query</mark>
