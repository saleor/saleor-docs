---
api_reference: true
id: channel-delete-input
title: ChannelDeleteInput
---

No description

```graphql
input ChannelDeleteInput {
  channelId: ID!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ChannelDeleteInput</code>.<code class="gqlmd-mdx-entity-name">channelId</code></span>](#channel-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#channel-id\}

ID of a channel to migrate orders from the origin channel. Target channel has to have the same currency as the origin.

### Member Of

[`channelDelete`](/api-reference/channels/mutations/channel-delete) <mark class="gqlmd-mdx-badge">mutation</mark>
