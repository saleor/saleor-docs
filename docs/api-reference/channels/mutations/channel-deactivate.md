---
api_reference: true
id: channel-deactivate
title: channelDeactivate
---

Deactivate a channel.

Requires one of the following permissions: MANAGE_CHANNELS.

Triggers the following webhook events:

- CHANNEL_STATUS_CHANGED (async): A channel was deactivated.

```graphql
channelDeactivate(
  id: ID!
): ChannelDeactivate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">channelDeactivate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of the channel to deactivate.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ChannelDeactivate</code></span>](/api-reference/channels/objects/channel-deactivate)

Deactivate a channel.

Requires one of the following permissions: MANAGE_CHANNELS.

Triggers the following webhook events:

- CHANNEL_STATUS_CHANGED (async): A channel was deactivated.
