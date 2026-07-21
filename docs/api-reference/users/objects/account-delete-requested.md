---
api_reference: true
id: account-delete-requested
title: AccountDeleteRequested
---

Event sent when account delete is requested.

```graphql
type AccountDeleteRequested implements Event {
  issuedAt: DateTime
  version: String
  issuingPrincipal: IssuingPrincipal
  recipient: App
  redirectUrl: String
  user: User
  channel: Channel
  token: String
  shop: Shop
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AccountDeleteRequested</code>.<code class="gqlmd-mdx-entity-name">issuedAt</code></span>](#issued-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#issued-at\}

Time of the event.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AccountDeleteRequested</code>.<code class="gqlmd-mdx-entity-name">version</code></span>](#version)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#version\}

Saleor version that triggered the event.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AccountDeleteRequested</code>.<code class="gqlmd-mdx-entity-name">issuingPrincipal</code></span>](#issuing-principal)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">IssuingPrincipal</code></span>](/api-reference/miscellaneous/unions/issuing-principal) \{#issuing-principal\}

The user or application that triggered the event.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AccountDeleteRequested</code>.<code class="gqlmd-mdx-entity-name">recipient</code></span>](#recipient)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">App</code></span>](/api-reference/apps/objects/app) \{#recipient\}

The application receiving the webhook.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AccountDeleteRequested</code>.<code class="gqlmd-mdx-entity-name">redirectUrl</code></span>](#redirect-url)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#redirect-url\}

The URL to redirect the user after he accepts the request.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AccountDeleteRequested</code>.<code class="gqlmd-mdx-entity-name">user</code></span>](#user)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">User</code></span>](/api-reference/users/objects/user) \{#user\}

The user the event relates to.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AccountDeleteRequested</code>.<code class="gqlmd-mdx-entity-name">channel</code></span>](#channel)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Channel</code></span>](/api-reference/channels/objects/channel) \{#channel\}

The channel data.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AccountDeleteRequested</code>.<code class="gqlmd-mdx-entity-name">token</code></span>](#token)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#token\}

The token required to confirm request.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AccountDeleteRequested</code>.<code class="gqlmd-mdx-entity-name">shop</code></span>](#shop)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Shop</code></span>](/api-reference/miscellaneous/objects/shop) \{#shop\}

Shop data.

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Event</code></span>](/api-reference/miscellaneous/interfaces/event)
