---
api_reference: true
id: menu-item-created
title: MenuItemCreated
---

Event sent when new menu item is created.

```graphql
type MenuItemCreated implements Event {
  issuedAt: DateTime
  version: String
  issuingPrincipal: IssuingPrincipal
  recipient: App
  menuItem(channel: String): MenuItem
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MenuItemCreated</code>.<code class="gqlmd-mdx-entity-name">issuedAt</code></span>](#issued-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#issued-at\}

Time of the event.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MenuItemCreated</code>.<code class="gqlmd-mdx-entity-name">version</code></span>](#version)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#version\}

Saleor version that triggered the event.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MenuItemCreated</code>.<code class="gqlmd-mdx-entity-name">issuingPrincipal</code></span>](#issuing-principal)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">IssuingPrincipal</code></span>](/api-reference/miscellaneous/unions/issuing-principal) \{#issuing-principal\}

The user or application that triggered the event.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MenuItemCreated</code>.<code class="gqlmd-mdx-entity-name">recipient</code></span>](#recipient)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">App</code></span>](/api-reference/apps/objects/app) \{#recipient\}

The application receiving the webhook.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MenuItemCreated</code>.<code class="gqlmd-mdx-entity-name">menuItem</code></span>](#menu-item)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">MenuItem</code></span>](/api-reference/menu/objects/menu-item) \{#menu-item\}

The menu item the event relates to.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MenuItemCreated.menuItem</code>.<code class="gqlmd-mdx-entity-name">channel</code></span>](#menu-item-created-menu-item-channel)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#menu-item-created-menu-item-channel\}

Slug of a channel for which the data should be returned.

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Event</code></span>](/api-reference/miscellaneous/interfaces/event)
