---
api_reference: true
id: channel-error
title: ChannelError
---

No description

```graphql
type ChannelError {
  field: String
  message: String
  code: ChannelErrorCode!
  shippingZones: [ID!]
  warehouses: [ID!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ChannelError</code>.<code class="gqlmd-mdx-entity-name">field</code></span>](#field)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#field\}

Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ChannelError</code>.<code class="gqlmd-mdx-entity-name">message</code></span>](#message)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#message\}

The error message.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ChannelError</code>.<code class="gqlmd-mdx-entity-name">code</code></span>](#code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ChannelErrorCode!</code></span>](/api-reference/channels/enums/channel-error-code) \{#code\}

The error code.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ChannelError</code>.<code class="gqlmd-mdx-entity-name">shippingZones</code></span>](#shipping-zones)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#shipping-zones\}

List of shipping zone IDs which causes the error.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ChannelError</code>.<code class="gqlmd-mdx-entity-name">warehouses</code></span>](#warehouses)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#warehouses\}

List of warehouses IDs which causes the error.

### Member Of

[`ChannelActivate`](/api-reference/channels/objects/channel-activate) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ChannelCreate`](/api-reference/channels/objects/channel-create) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ChannelDeactivate`](/api-reference/channels/objects/channel-deactivate) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ChannelDelete`](/api-reference/channels/objects/channel-delete) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ChannelReorderWarehouses`](/api-reference/channels/objects/channel-reorder-warehouses) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ChannelUpdate`](/api-reference/channels/objects/channel-update) <mark class="gqlmd-mdx-badge">object</mark>
