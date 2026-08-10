---
api_reference: true
id: external-notification-trigger
title: externalNotificationTrigger
---

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

No longer supported

</span>
</fieldset>

Trigger sending a notification with the notify plugin method. Serializes nodes provided as ids parameter and includes this data in the notification payload.

```graphql
externalNotificationTrigger(
  channel: String!
  input: ExternalNotificationTriggerInput!
  pluginId: String
): ExternalNotificationTrigger @deprecated
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">externalNotificationTrigger</code>.<code class="gqlmd-mdx-entity-name">channel</code></span>](#channel)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#channel\}

Channel slug. Saleor will send a notification within a provided channel. Please, make sure that necessary plugins are active.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">externalNotificationTrigger</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ExternalNotificationTriggerInput!</code></span>](/api-reference/miscellaneous/inputs/external-notification-trigger-input) \{#input\}

Input for External Notification Trigger.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">externalNotificationTrigger</code>.<code class="gqlmd-mdx-entity-name">pluginId</code></span>](#plugin-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#plugin-id\}

The ID of notification plugin.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ExternalNotificationTrigger</code></span>](/api-reference/miscellaneous/objects/external-notification-trigger)

Trigger sending a notification with the notify plugin method. Serializes nodes provided as ids parameter and includes this data in the notification payload.
