---
api_reference: true
id: gift-card-assign-user
title: giftCardAssignUser
---

Restrict a gift card so only the given customer can use it.

Added in Saleor 3.23.

Requires one of the following permissions: MANAGE_GIFT_CARD.

Triggers the following webhook events:

- GIFT_CARD_UPDATED (async): A gift card was updated.

```graphql
giftCardAssignUser(
  id: ID!
  userId: ID!
): GiftCardAssignUser
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">giftCardAssignUser</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of the gift card.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">giftCardAssignUser</code>.<code class="gqlmd-mdx-entity-name">userId</code></span>](#user-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#user-id\}

ID of the customer to restrict the card to.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">GiftCardAssignUser</code></span>](/api-reference/gift-cards/objects/gift-card-assign-user)

Restrict a gift card so only the given customer can use it.

Added in Saleor 3.23.

Requires one of the following permissions: MANAGE_GIFT_CARD.

Triggers the following webhook events:

- GIFT_CARD_UPDATED (async): A gift card was updated.
