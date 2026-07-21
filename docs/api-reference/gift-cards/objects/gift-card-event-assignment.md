---
api_reference: true
id: gift-card-event-assignment
title: GiftCardEventAssignment
---

No description

```graphql
type GiftCardEventAssignment {
  oldAssignedTo: User
  currentAssignedTo: User
  oldAssignedToEmail: String
  currentAssignedToEmail: String
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardEventAssignment</code>.<code class="gqlmd-mdx-entity-name">oldAssignedTo</code></span>](#old-assigned-to)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">User</code></span>](/api-reference/users/objects/user) \{#old-assigned-to\}

The customer the gift card was assigned to before this event.

Requires one of the following permissions: MANAGE_USERS, MANAGE_STAFF, OWNER.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardEventAssignment</code>.<code class="gqlmd-mdx-entity-name">currentAssignedTo</code></span>](#current-assigned-to)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">User</code></span>](/api-reference/users/objects/user) \{#current-assigned-to\}

The customer the gift card is assigned to after this event.

Requires one of the following permissions: MANAGE_USERS, MANAGE_STAFF, OWNER.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardEventAssignment</code>.<code class="gqlmd-mdx-entity-name">oldAssignedToEmail</code></span>](#old-assigned-to-email)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#old-assigned-to-email\}

Email of the customer the gift card was assigned to before this event.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardEventAssignment</code>.<code class="gqlmd-mdx-entity-name">currentAssignedToEmail</code></span>](#current-assigned-to-email)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#current-assigned-to-email\}

Email of the customer the gift card is assigned to after this event.

### Member Of

[`GiftCardEvent`](/api-reference/gift-cards/objects/gift-card-event) <mark class="gqlmd-mdx-badge">object</mark>
