---
api_reference: true
id: gift-card-update
title: giftCardUpdate
---

Update a gift card.

Requires one of the following permissions: MANAGE_GIFT_CARD.

Triggers the following webhook events:

- GIFT_CARD_UPDATED (async): A gift card was updated.

```graphql
giftCardUpdate(
  id: ID!
  input: GiftCardUpdateInput!
): GiftCardUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">giftCardUpdate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of a gift card to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">giftCardUpdate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">GiftCardUpdateInput!</code></span>](/api-reference/gift-cards/inputs/gift-card-update-input) \{#input\}

Fields required to update a gift card.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">GiftCardUpdate</code></span>](/api-reference/gift-cards/objects/gift-card-update)

Update a gift card.

Requires one of the following permissions: MANAGE_GIFT_CARD.

Triggers the following webhook events:

- GIFT_CARD_UPDATED (async): A gift card was updated.
