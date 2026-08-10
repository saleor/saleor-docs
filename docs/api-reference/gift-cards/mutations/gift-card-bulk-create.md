---
api_reference: true
id: gift-card-bulk-create
title: giftCardBulkCreate
---

Creates gift cards.

Requires one of the following permissions: MANAGE_GIFT_CARD.

Triggers the following webhook events:

- GIFT_CARD_CREATED (async): A gift card was created.
- NOTIFY_USER (async): A notification for created gift card.

```graphql
giftCardBulkCreate(
  input: GiftCardBulkCreateInput!
): GiftCardBulkCreate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">giftCardBulkCreate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">GiftCardBulkCreateInput!</code></span>](/api-reference/gift-cards/inputs/gift-card-bulk-create-input) \{#input\}

Fields required to create gift cards.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">GiftCardBulkCreate</code></span>](/api-reference/gift-cards/objects/gift-card-bulk-create)

Creates gift cards.

Requires one of the following permissions: MANAGE_GIFT_CARD.

Triggers the following webhook events:

- GIFT_CARD_CREATED (async): A gift card was created.
- NOTIFY_USER (async): A notification for created gift card.
