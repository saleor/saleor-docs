---
api_reference: true
id: voucher-channel-listing-update
title: voucherChannelListingUpdate
---

Manage voucher's availability in channels.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- VOUCHER_UPDATED (async): A voucher was updated.

```graphql
voucherChannelListingUpdate(
  id: ID!
  input: VoucherChannelListingInput!
): VoucherChannelListingUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">voucherChannelListingUpdate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of a voucher to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">voucherChannelListingUpdate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">VoucherChannelListingInput!</code></span>](/api-reference/discounts/inputs/voucher-channel-listing-input) \{#input\}

Fields required to update voucher channel listings.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">VoucherChannelListingUpdate</code></span>](/api-reference/discounts/objects/voucher-channel-listing-update)

Manage voucher's availability in channels.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- VOUCHER_UPDATED (async): A voucher was updated.
