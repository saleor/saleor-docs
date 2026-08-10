---
api_reference: true
id: gift-card-bulk-deactivate
title: GiftCardBulkDeactivate
---

Deactivate gift cards.

Requires one of the following permissions: MANAGE_GIFT_CARD.

Triggers the following webhook events:

- GIFT_CARD_STATUS_CHANGED (async): A gift card was deactivated.

```graphql
type GiftCardBulkDeactivate {
  count: Int!
  errors: [GiftCardError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardBulkDeactivate</code>.<code class="gqlmd-mdx-entity-name">count</code></span>](#count)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span>](/api-reference/miscellaneous/scalars/int) \{#count\}

Returns how many objects were affected.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardBulkDeactivate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[GiftCardError!]!</code></span>](/api-reference/gift-cards/objects/gift-card-error) \{#errors\}

### Returned By

[`giftCardBulkDeactivate`](/api-reference/gift-cards/mutations/gift-card-bulk-deactivate) <mark class="gqlmd-mdx-badge">mutation</mark>
