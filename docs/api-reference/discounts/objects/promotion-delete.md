---
api_reference: true
id: promotion-delete
title: PromotionDelete
---

Deletes a promotion.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- PROMOTION_DELETED (async): A promotion was deleted.

```graphql
type PromotionDelete {
  errors: [PromotionDeleteError!]!
  promotion: Promotion
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionDelete</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[PromotionDeleteError!]!</code></span>](/api-reference/miscellaneous/objects/promotion-delete-error) \{#errors\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionDelete</code>.<code class="gqlmd-mdx-entity-name">promotion</code></span>](#promotion)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Promotion</code></span>](/api-reference/discounts/objects/promotion) \{#promotion\}

### Returned By

[`promotionDelete`](/api-reference/discounts/mutations/promotion-delete) <mark class="gqlmd-mdx-badge">mutation</mark>
