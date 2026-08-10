---
api_reference: true
id: promotion-update
title: PromotionUpdate
---

Updates an existing promotion.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- PROMOTION_UPDATED (async): A promotion was updated.
- PROMOTION_STARTED (async): Optionally called if promotion was started.
- PROMOTION_ENDED (async): Optionally called if promotion was ended.

```graphql
type PromotionUpdate {
  errors: [PromotionUpdateError!]!
  promotion: Promotion
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionUpdate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[PromotionUpdateError!]!</code></span>](/api-reference/miscellaneous/objects/promotion-update-error) \{#errors\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionUpdate</code>.<code class="gqlmd-mdx-entity-name">promotion</code></span>](#promotion)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Promotion</code></span>](/api-reference/discounts/objects/promotion) \{#promotion\}

### Returned By

[`promotionUpdate`](/api-reference/discounts/mutations/promotion-update) <mark class="gqlmd-mdx-badge">mutation</mark>
