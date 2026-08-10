---
api_reference: true
id: gift-card
title: giftCard
---

Look up a gift card by ID.

Requires one of the following permissions: MANAGE_GIFT_CARD.

```graphql
giftCard(
  id: ID!
): GiftCard
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">giftCard</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of the gift card.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">GiftCard</code></span>](/api-reference/gift-cards/objects/gift-card)

A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes.
