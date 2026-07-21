---
api_reference: true
id: channel-reorder-warehouses
title: channelReorderWarehouses
---

Reorder the warehouses of a channel.

Requires one of the following permissions: MANAGE_CHANNELS.

```graphql
channelReorderWarehouses(
  channelId: ID!
  moves: [ReorderInput!]!
): ChannelReorderWarehouses
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">channelReorderWarehouses</code>.<code class="gqlmd-mdx-entity-name">channelId</code></span>](#channel-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#channel-id\}

ID of a channel.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">channelReorderWarehouses</code>.<code class="gqlmd-mdx-entity-name">moves</code></span>](#moves)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ReorderInput!]!</code></span>](/api-reference/miscellaneous/inputs/reorder-input) \{#moves\}

The list of reordering operations for the given channel warehouses.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ChannelReorderWarehouses</code></span>](/api-reference/channels/objects/channel-reorder-warehouses)

Reorder the warehouses of a channel.

Requires one of the following permissions: MANAGE_CHANNELS.
