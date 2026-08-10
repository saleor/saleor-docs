---
api_reference: true
id: channel-reorder-warehouses
title: ChannelReorderWarehouses
---

Reorder the warehouses of a channel.

Requires one of the following permissions: MANAGE_CHANNELS.

```graphql
type ChannelReorderWarehouses {
  channel: Channel
  errors: [ChannelError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ChannelReorderWarehouses</code>.<code class="gqlmd-mdx-entity-name">channel</code></span>](#channel)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Channel</code></span>](/api-reference/channels/objects/channel) \{#channel\}

Channel within the warehouses are reordered.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ChannelReorderWarehouses</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ChannelError!]!</code></span>](/api-reference/channels/objects/channel-error) \{#errors\}

### Returned By

[`channelReorderWarehouses`](/api-reference/channels/mutations/channel-reorder-warehouses) <mark class="gqlmd-mdx-badge">mutation</mark>
