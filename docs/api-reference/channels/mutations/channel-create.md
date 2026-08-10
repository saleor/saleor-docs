---
api_reference: true
id: channel-create
title: channelCreate
---

Creates a new channel.

Requires one of the following permissions: MANAGE_CHANNELS.

Triggers the following webhook events:

- CHANNEL_CREATED (async): A channel was created.

```graphql
channelCreate(
  input: ChannelCreateInput!
): ChannelCreate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">channelCreate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ChannelCreateInput!</code></span>](/api-reference/channels/inputs/channel-create-input) \{#input\}

Fields required to create channel.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ChannelCreate</code></span>](/api-reference/channels/objects/channel-create)

Creates a new channel.

Requires one of the following permissions: MANAGE_CHANNELS.

Triggers the following webhook events:

- CHANNEL_CREATED (async): A channel was created.
