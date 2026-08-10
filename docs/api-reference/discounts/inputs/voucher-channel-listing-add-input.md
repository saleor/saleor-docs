---
api_reference: true
id: voucher-channel-listing-add-input
title: VoucherChannelListingAddInput
---

No description

```graphql
input VoucherChannelListingAddInput {
  channelId: ID!
  discountValue: PositiveDecimal
  minAmountSpent: PositiveDecimal
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherChannelListingAddInput</code>.<code class="gqlmd-mdx-entity-name">channelId</code></span>](#channel-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#channel-id\}

ID of a channel.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherChannelListingAddInput</code>.<code class="gqlmd-mdx-entity-name">discountValue</code></span>](#discount-value)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveDecimal</code></span>](/api-reference/miscellaneous/scalars/positive-decimal) \{#discount-value\}

Value of the voucher.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherChannelListingAddInput</code>.<code class="gqlmd-mdx-entity-name">minAmountSpent</code></span>](#min-amount-spent)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveDecimal</code></span>](/api-reference/miscellaneous/scalars/positive-decimal) \{#min-amount-spent\}

Min purchase amount required to apply the voucher.

### Member Of

[`VoucherChannelListingInput`](/api-reference/discounts/inputs/voucher-channel-listing-input) <mark class="gqlmd-mdx-badge">input</mark>
