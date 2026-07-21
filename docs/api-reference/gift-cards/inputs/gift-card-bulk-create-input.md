---
api_reference: true
id: gift-card-bulk-create-input
title: GiftCardBulkCreateInput
---

No description

```graphql
input GiftCardBulkCreateInput {
  count: Int!
  balance: PriceInput!
  tags: [String!]
  expiryDate: Date
  isActive: Boolean!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardBulkCreateInput</code>.<code class="gqlmd-mdx-entity-name">count</code></span>](#count)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span>](/api-reference/miscellaneous/scalars/int) \{#count\}

The number of cards to issue.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardBulkCreateInput</code>.<code class="gqlmd-mdx-entity-name">balance</code></span>](#balance)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PriceInput!</code></span>](/api-reference/miscellaneous/inputs/price-input) \{#balance\}

Balance of the gift card.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardBulkCreateInput</code>.<code class="gqlmd-mdx-entity-name">tags</code></span>](#tags)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#tags\}

The gift card tags.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardBulkCreateInput</code>.<code class="gqlmd-mdx-entity-name">expiryDate</code></span>](#expiry-date)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Date</code></span>](/api-reference/miscellaneous/scalars/date) \{#expiry-date\}

The gift card expiry date.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardBulkCreateInput</code>.<code class="gqlmd-mdx-entity-name">isActive</code></span>](#is-active)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-active\}

Determine if gift card is active.

### Member Of

[`giftCardBulkCreate`](/api-reference/gift-cards/mutations/gift-card-bulk-create) <mark class="gqlmd-mdx-badge">mutation</mark>
