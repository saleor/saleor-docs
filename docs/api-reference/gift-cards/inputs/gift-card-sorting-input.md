---
api_reference: true
id: gift-card-sorting-input
title: GiftCardSortingInput
---

No description

```graphql
input GiftCardSortingInput {
  direction: OrderDirection!
  field: GiftCardSortField!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardSortingInput</code>.<code class="gqlmd-mdx-entity-name">direction</code></span>](#direction)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderDirection!</code></span>](/api-reference/miscellaneous/enums/order-direction) \{#direction\}

Specifies the direction in which to sort gift cards.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardSortingInput</code>.<code class="gqlmd-mdx-entity-name">field</code></span>](#field)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">GiftCardSortField!</code></span>](/api-reference/gift-cards/enums/gift-card-sort-field) \{#field\}

Sort gift cards by the selected field.

### Member Of

[`giftCards`](/api-reference/gift-cards/queries/gift-cards) <mark class="gqlmd-mdx-badge">query</mark>
