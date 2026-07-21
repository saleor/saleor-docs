---
api_reference: true
id: gift-card-create
title: giftCardCreate
---

Creates a new gift card.

Requires one of the following permissions: MANAGE_GIFT_CARD.

Triggers the following webhook events:

- GIFT_CARD_CREATED (async): A gift card was created.
- NOTIFY_USER (async): A notification for created gift card.

```graphql
giftCardCreate(
  input: GiftCardCreateInput!
): GiftCardCreate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">giftCardCreate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">GiftCardCreateInput!</code></span>](/api-reference/gift-cards/inputs/gift-card-create-input) \{#input\}

Fields required to create a gift card.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">GiftCardCreate</code></span>](/api-reference/gift-cards/objects/gift-card-create)

Creates a new gift card.

Requires one of the following permissions: MANAGE_GIFT_CARD.

Triggers the following webhook events:

- GIFT_CARD_CREATED (async): A gift card was created.
- NOTIFY_USER (async): A notification for created gift card.
