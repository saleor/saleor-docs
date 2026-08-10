---
api_reference: true
id: voucher-channel-listing-input
title: VoucherChannelListingInput
---

No description

```graphql
input VoucherChannelListingInput {
  addChannels: [VoucherChannelListingAddInput!]
  removeChannels: [ID!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherChannelListingInput</code>.<code class="gqlmd-mdx-entity-name">addChannels</code></span>](#add-channels)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[VoucherChannelListingAddInput!]</code></span>](/api-reference/discounts/inputs/voucher-channel-listing-add-input) \{#add-channels\}

List of channels to which the voucher should be assigned.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherChannelListingInput</code>.<code class="gqlmd-mdx-entity-name">removeChannels</code></span>](#remove-channels)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#remove-channels\}

List of channels from which the voucher should be unassigned.

### Member Of

[`voucherChannelListingUpdate`](/api-reference/discounts/mutations/voucher-channel-listing-update) <mark class="gqlmd-mdx-badge">mutation</mark>
