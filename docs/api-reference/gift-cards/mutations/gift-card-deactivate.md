---
api_reference: true
id: gift-card-deactivate
title: giftCardDeactivate
---

Deactivate a gift card.

Requires one of the following permissions: MANAGE_GIFT_CARD.

Triggers the following webhook events:

- GIFT_CARD_STATUS_CHANGED (async): A gift card was deactivated.

```graphql
giftCardDeactivate(
  id: ID!
): GiftCardDeactivate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">giftCardDeactivate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of a gift card to deactivate.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">GiftCardDeactivate</code></span>](/api-reference/gift-cards/objects/gift-card-deactivate)

Deactivate a gift card.

Requires one of the following permissions: MANAGE_GIFT_CARD.

Triggers the following webhook events:

- GIFT_CARD_STATUS_CHANGED (async): A gift card was deactivated.
