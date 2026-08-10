---
api_reference: true
id: channel-delete
title: ChannelDelete
---

Deletes a channel. Orders associated with the deleted channel will be moved to the target channel. Checkouts, product availability, and pricing will be removed.

Requires one of the following permissions: MANAGE_CHANNELS.

Triggers the following webhook events:

- CHANNEL_DELETED (async): A channel was deleted.

```graphql
type ChannelDelete {
  channelErrors: [ChannelError!]! @deprecated
  errors: [ChannelError!]!
  channel: Channel
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ChannelDelete</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ChannelError!]!</code></span>](/api-reference/channels/objects/channel-error) \{#errors\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ChannelDelete</code>.<code class="gqlmd-mdx-entity-name">channel</code></span>](#channel)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Channel</code></span>](/api-reference/channels/objects/channel) \{#channel\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ChannelDelete</code>.<code class="gqlmd-mdx-entity-name">channelErrors</code></span>](#channel-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ChannelError!]!</code></span>](/api-reference/channels/objects/channel-error) \{#channel-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`channelDelete`](/api-reference/channels/mutations/channel-delete) <mark class="gqlmd-mdx-badge">mutation</mark>
