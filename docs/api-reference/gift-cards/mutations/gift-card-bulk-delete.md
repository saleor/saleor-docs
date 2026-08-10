---
api_reference: true
id: gift-card-bulk-delete
title: giftCardBulkDelete
---

Deletes gift cards.

Requires one of the following permissions: MANAGE_GIFT_CARD.

Triggers the following webhook events:

- GIFT_CARD_DELETED (async): A gift card was deleted.

```graphql
giftCardBulkDelete(
  ids: [ID!]!
): GiftCardBulkDelete
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">giftCardBulkDelete</code>.<code class="gqlmd-mdx-entity-name">ids</code></span>](#ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]!</code></span>](/api-reference/miscellaneous/scalars/id) \{#ids\}

List of gift card IDs to delete.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">GiftCardBulkDelete</code></span>](/api-reference/gift-cards/objects/gift-card-bulk-delete)

Deletes gift cards.

Requires one of the following permissions: MANAGE_GIFT_CARD.

Triggers the following webhook events:

- GIFT_CARD_DELETED (async): A gift card was deleted.
