---
api_reference: true
id: channel-update
title: ChannelUpdate
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
type ChannelUpdate {
  channelErrors: [ChannelError!]! @deprecated
  errors: [ChannelError!]!
  channel: Channel
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ChannelUpdate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ChannelError!]!</code></span>](/api-reference/channels/objects/channel-error) \{#errors\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ChannelUpdate</code>.<code class="gqlmd-mdx-entity-name">channel</code></span>](#channel)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Channel</code></span>](/api-reference/channels/objects/channel) \{#channel\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ChannelUpdate</code>.<code class="gqlmd-mdx-entity-name">channelErrors</code></span>](#channel-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ChannelError!]!</code></span>](/api-reference/channels/objects/channel-error) \{#channel-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`channelUpdate`](/api-reference/channels/mutations/channel-update) <mark class="gqlmd-mdx-badge">mutation</mark>
