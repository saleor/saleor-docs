---
api_reference: true
id: gift-card-bulk-create
title: GiftCardBulkCreate
---

Creates gift cards.

Requires one of the following permissions: MANAGE_GIFT_CARD.

Triggers the following webhook events:

- GIFT_CARD_CREATED (async): A gift card was created.
- NOTIFY_USER (async): A notification for created gift card.

```graphql
type GiftCardBulkCreate {
  count: Int!
  giftCards: [GiftCard!]!
  errors: [GiftCardError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardBulkCreate</code>.<code class="gqlmd-mdx-entity-name">count</code></span>](#count)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span>](/api-reference/miscellaneous/scalars/int) \{#count\}

Returns how many objects were created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardBulkCreate</code>.<code class="gqlmd-mdx-entity-name">giftCards</code></span>](#gift-cards)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[GiftCard!]!</code></span>](/api-reference/gift-cards/objects/gift-card) \{#gift-cards\}

List of created gift cards.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardBulkCreate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[GiftCardError!]!</code></span>](/api-reference/gift-cards/objects/gift-card-error) \{#errors\}

### Returned By

[`giftCardBulkCreate`](/api-reference/gift-cards/mutations/gift-card-bulk-create) <mark class="gqlmd-mdx-badge">mutation</mark>
