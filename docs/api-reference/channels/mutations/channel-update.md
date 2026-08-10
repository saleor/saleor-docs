---
api_reference: true
id: channel-update
title: channelUpdate
---

Update a channel.

Requires one of the following permissions: MANAGE_CHANNELS.
Requires one of the following permissions when updating only `orderSettings` field: `MANAGE_CHANNELS`, `MANAGE_ORDERS`.
Requires one of the following permissions when updating only `checkoutSettings` field: `MANAGE_CHANNELS`, `MANAGE_CHECKOUTS`.
Requires one of the following permissions when updating only `paymentSettings` field: `MANAGE_CHANNELS`, `HANDLE_PAYMENTS`.

Triggers the following webhook events:

- CHANNEL_UPDATED (async): A channel was updated.
- CHANNEL_METADATA_UPDATED (async): Optionally triggered when public or private metadata is updated.

```graphql
channelUpdate(
  id: ID!
  input: ChannelUpdateInput!
): ChannelUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">channelUpdate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of a channel to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">channelUpdate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ChannelUpdateInput!</code></span>](/api-reference/channels/inputs/channel-update-input) \{#input\}

Fields required to update a channel.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ChannelUpdate</code></span>](/api-reference/channels/objects/channel-update)

Update a channel.

Requires one of the following permissions: MANAGE_CHANNELS.
Requires one of the following permissions when updating only `orderSettings` field: `MANAGE_CHANNELS`, `MANAGE_ORDERS`.
Requires one of the following permissions when updating only `checkoutSettings` field: `MANAGE_CHANNELS`, `MANAGE_CHECKOUTS`.
Requires one of the following permissions when updating only `paymentSettings` field: `MANAGE_CHANNELS`, `HANDLE_PAYMENTS`.

Triggers the following webhook events:

- CHANNEL_UPDATED (async): A channel was updated.
- CHANNEL_METADATA_UPDATED (async): Optionally triggered when public or private metadata is updated.
