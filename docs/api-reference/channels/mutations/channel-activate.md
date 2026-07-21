---
api_reference: true
id: channel-activate
title: channelActivate
---

Activate a channel.

Requires one of the following permissions: MANAGE_CHANNELS.

Triggers the following webhook events:

- CHANNEL_STATUS_CHANGED (async): A channel was activated.

```graphql
channelActivate(
  id: ID!
): ChannelActivate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">channelActivate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of the channel to activate.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ChannelActivate</code></span>](/api-reference/channels/objects/channel-activate)

Activate a channel.

Requires one of the following permissions: MANAGE_CHANNELS.

Triggers the following webhook events:

- CHANNEL_STATUS_CHANGED (async): A channel was activated.
