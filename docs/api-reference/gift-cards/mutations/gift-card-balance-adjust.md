---
api_reference: true
id: gift-card-balance-adjust
title: giftCardBalanceAdjust
---

Adjust a gift card's balance by a delta.

Added in Saleor 3.23.

Requires one of the following permissions: MANAGE_GIFT_CARD.

Triggers the following webhook events:

- GIFT_CARD_UPDATED (async): A gift card was updated.

```graphql
giftCardBalanceAdjust(
  amount: Decimal!
  id: ID!
): GiftCardBalanceAdjust
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">giftCardBalanceAdjust</code>.<code class="gqlmd-mdx-entity-name">amount</code></span>](#amount)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Decimal!</code></span>](/api-reference/miscellaneous/scalars/decimal) \{#amount\}

Signed amount to adjust the current balance by. Positive tops up, negative deducts. A deduction below zero clamps the balance to zero. A top-up above the initial balance raises the initial balance to the new current balance.

Added in Saleor 3.23.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">giftCardBalanceAdjust</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of the gift card to adjust.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">GiftCardBalanceAdjust</code></span>](/api-reference/gift-cards/objects/gift-card-balance-adjust)

Adjust a gift card's balance by a delta.

Added in Saleor 3.23.

Requires one of the following permissions: MANAGE_GIFT_CARD.

Triggers the following webhook events:

- GIFT_CARD_UPDATED (async): A gift card was updated.
