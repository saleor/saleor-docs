---
api_reference: true
id: promotion-sorting-input
title: PromotionSortingInput
---

No description

```graphql
input PromotionSortingInput {
  direction: OrderDirection!
  field: PromotionSortField!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionSortingInput</code>.<code class="gqlmd-mdx-entity-name">direction</code></span>](#direction)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderDirection!</code></span>](/api-reference/miscellaneous/enums/order-direction) \{#direction\}

Specifies the direction in which to sort promotions.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionSortingInput</code>.<code class="gqlmd-mdx-entity-name">field</code></span>](#field)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PromotionSortField!</code></span>](/api-reference/discounts/enums/promotion-sort-field) \{#field\}

Sort promotions by the selected field.

### Member Of

[`promotions`](/api-reference/discounts/queries/promotions) <mark class="gqlmd-mdx-badge">query</mark>
