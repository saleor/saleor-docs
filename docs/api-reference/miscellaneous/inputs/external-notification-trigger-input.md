---
api_reference: true
id: external-notification-trigger-input
title: ExternalNotificationTriggerInput
---

No description

```graphql
input ExternalNotificationTriggerInput {
  ids: [ID!]!
  extraPayload: JSONString
  externalEventType: String!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExternalNotificationTriggerInput</code>.<code class="gqlmd-mdx-entity-name">ids</code></span>](#ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]!</code></span>](/api-reference/miscellaneous/scalars/id) \{#ids\}

The list of customers or orders node IDs that will be serialized and included in the notification payload.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExternalNotificationTriggerInput</code>.<code class="gqlmd-mdx-entity-name">extraPayload</code></span>](#extra-payload)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSONString</code></span>](/api-reference/miscellaneous/scalars/jsonstring) \{#extra-payload\}

Additional payload that will be merged with the one based on the business object ID.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExternalNotificationTriggerInput</code>.<code class="gqlmd-mdx-entity-name">externalEventType</code></span>](#external-event-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#external-event-type\}

External event type. This field is passed to a plugin as an event type.

### Member Of

[`externalNotificationTrigger`](/api-reference/deprecated/miscellaneous/mutations/external-notification-trigger) <mark class="gqlmd-mdx-badge">mutation</mark>
