---
api_reference: true
id: staff-notification-recipient-input
title: StaffNotificationRecipientInput
---

No description

```graphql
input StaffNotificationRecipientInput {
  user: ID
  email: String
  active: Boolean
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StaffNotificationRecipientInput</code>.<code class="gqlmd-mdx-entity-name">user</code></span>](#user)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#user\}

The ID of the user subscribed to email notifications..

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StaffNotificationRecipientInput</code>.<code class="gqlmd-mdx-entity-name">email</code></span>](#email)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#email\}

Email address of a user subscribed to email notifications.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StaffNotificationRecipientInput</code>.<code class="gqlmd-mdx-entity-name">active</code></span>](#active)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#active\}

Determines if a notification active.

### Member Of

[`staffNotificationRecipientCreate`](/api-reference/users/mutations/staff-notification-recipient-create) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`staffNotificationRecipientUpdate`](/api-reference/users/mutations/staff-notification-recipient-update) <mark class="gqlmd-mdx-badge">mutation</mark>
