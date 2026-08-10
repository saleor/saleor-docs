---
api_reference: true
id: channel-activate
title: ChannelActivate
---

Activate a channel.

Requires one of the following permissions: MANAGE_CHANNELS.

Triggers the following webhook events:

- CHANNEL_STATUS_CHANGED (async): A channel was activated.

```graphql
type ChannelActivate {
  channel: Channel
  channelErrors: [ChannelError!]! @deprecated
  errors: [ChannelError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ChannelActivate</code>.<code class="gqlmd-mdx-entity-name">channel</code></span>](#channel)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Channel</code></span>](/api-reference/channels/objects/channel) \{#channel\}

Activated channel.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ChannelActivate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ChannelError!]!</code></span>](/api-reference/channels/objects/channel-error) \{#errors\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ChannelActivate</code>.<code class="gqlmd-mdx-entity-name">channelErrors</code></span>](#channel-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ChannelError!]!</code></span>](/api-reference/channels/objects/channel-error) \{#channel-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`channelActivate`](/api-reference/channels/mutations/channel-activate) <mark class="gqlmd-mdx-badge">mutation</mark>
