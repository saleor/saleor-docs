---
api_reference: true
id: promotion-where-input
title: PromotionWhereInput
---

No description

```graphql
input PromotionWhereInput {
  metadata: [MetadataFilter!]
  ids: [ID!]
  name: StringFilterInput
  endDate: DateTimeFilterInput
  startDate: DateTimeFilterInput
  isOldSale: Boolean
  type: PromotionTypeEnumFilterInput
  AND: [PromotionWhereInput!]
  OR: [PromotionWhereInput!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionWhereInput</code>.<code class="gqlmd-mdx-entity-name">metadata</code></span>](#metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataFilter!]</code></span>](/api-reference/miscellaneous/inputs/metadata-filter) \{#metadata\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionWhereInput</code>.<code class="gqlmd-mdx-entity-name">ids</code></span>](#ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#ids\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionWhereInput</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">StringFilterInput</code></span>](/api-reference/miscellaneous/inputs/string-filter-input) \{#name\}

Filter by promotion name.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionWhereInput</code>.<code class="gqlmd-mdx-entity-name">endDate</code></span>](#end-date)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTimeFilterInput</code></span>](/api-reference/miscellaneous/inputs/date-time-filter-input) \{#end-date\}

Filter promotions by end date.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionWhereInput</code>.<code class="gqlmd-mdx-entity-name">startDate</code></span>](#start-date)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTimeFilterInput</code></span>](/api-reference/miscellaneous/inputs/date-time-filter-input) \{#start-date\}

Filter promotions by start date.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionWhereInput</code>.<code class="gqlmd-mdx-entity-name">isOldSale</code></span>](#is-old-sale)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-old-sale\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionWhereInput</code>.<code class="gqlmd-mdx-entity-name">type</code></span>](#type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PromotionTypeEnumFilterInput</code></span>](/api-reference/discounts/inputs/promotion-type-enum-filter-input) \{#type\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionWhereInput</code>.<code class="gqlmd-mdx-entity-name">AND</code></span>](#and)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[PromotionWhereInput!]</code></span>](/api-reference/discounts/inputs/promotion-where-input) \{#and\}

List of conditions that must be met.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionWhereInput</code>.<code class="gqlmd-mdx-entity-name">OR</code></span>](#or)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[PromotionWhereInput!]</code></span>](/api-reference/discounts/inputs/promotion-where-input) \{#or\}

A list of conditions of which at least one must be met.

### Member Of

[`promotions`](/api-reference/discounts/queries/promotions) <mark class="gqlmd-mdx-badge">query</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PromotionWhereInput`](/api-reference/discounts/inputs/promotion-where-input) <mark class="gqlmd-mdx-badge">input</mark>
