---
api_reference: true
id: gift-card-status-changed
title: GiftCardStatusChanged
---

Event sent when gift card status has changed.

```graphql
type GiftCardStatusChanged implements Event {
  issuedAt: DateTime
  version: String
  issuingPrincipal: IssuingPrincipal
  recipient: App
  giftCard: GiftCard
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardStatusChanged</code>.<code class="gqlmd-mdx-entity-name">issuedAt</code></span>](#issued-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#issued-at\}

Time of the event.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardStatusChanged</code>.<code class="gqlmd-mdx-entity-name">version</code></span>](#version)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#version\}

Saleor version that triggered the event.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardStatusChanged</code>.<code class="gqlmd-mdx-entity-name">issuingPrincipal</code></span>](#issuing-principal)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">IssuingPrincipal</code></span>](/api-reference/miscellaneous/unions/issuing-principal) \{#issuing-principal\}

The user or application that triggered the event.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardStatusChanged</code>.<code class="gqlmd-mdx-entity-name">recipient</code></span>](#recipient)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">App</code></span>](/api-reference/apps/objects/app) \{#recipient\}

The application receiving the webhook.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardStatusChanged</code>.<code class="gqlmd-mdx-entity-name">giftCard</code></span>](#gift-card)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">GiftCard</code></span>](/api-reference/gift-cards/objects/gift-card) \{#gift-card\}

The gift card the event relates to.

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Event</code></span>](/api-reference/miscellaneous/interfaces/event)
