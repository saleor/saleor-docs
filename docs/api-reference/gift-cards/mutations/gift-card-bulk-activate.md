---
api_reference: true
id: gift-card-bulk-activate
title: giftCardBulkActivate
---

Activate gift cards.

Requires one of the following permissions: MANAGE_GIFT_CARD.

Triggers the following webhook events:

- GIFT_CARD_STATUS_CHANGED (async): A gift card was activated.

```graphql
giftCardBulkActivate(
  ids: [ID!]!
): GiftCardBulkActivate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">giftCardBulkActivate</code>.<code class="gqlmd-mdx-entity-name">ids</code></span>](#ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]!</code></span>](/api-reference/miscellaneous/scalars/id) \{#ids\}

List of gift card IDs to activate.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">GiftCardBulkActivate</code></span>](/api-reference/gift-cards/objects/gift-card-bulk-activate)

Activate gift cards.

Requires one of the following permissions: MANAGE_GIFT_CARD.

Triggers the following webhook events:

- GIFT_CARD_STATUS_CHANGED (async): A gift card was activated.
