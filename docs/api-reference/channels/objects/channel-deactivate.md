---
api_reference: true
id: channel-deactivate
title: ChannelDeactivate
---

Deactivate a channel.

Requires one of the following permissions: MANAGE_CHANNELS.

Triggers the following webhook events:

- CHANNEL_STATUS_CHANGED (async): A channel was deactivated.

```graphql
type ChannelDeactivate {
  channel: Channel
  channelErrors: [ChannelError!]! @deprecated
  errors: [ChannelError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ChannelDeactivate</code>.<code class="gqlmd-mdx-entity-name">channel</code></span>](#channel)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Channel</code></span>](/api-reference/channels/objects/channel) \{#channel\}

Deactivated channel.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ChannelDeactivate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ChannelError!]!</code></span>](/api-reference/channels/objects/channel-error) \{#errors\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ChannelDeactivate</code>.<code class="gqlmd-mdx-entity-name">channelErrors</code></span>](#channel-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ChannelError!]!</code></span>](/api-reference/channels/objects/channel-error) \{#channel-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`channelDeactivate`](/api-reference/channels/mutations/channel-deactivate) <mark class="gqlmd-mdx-badge">mutation</mark>
