---
api_reference: true
id: promotion-create
title: PromotionCreate
---

Creates a new promotion.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- PROMOTION_CREATED (async): A promotion was created.
- PROMOTION_STARTED (async): Optionally called if promotion was started.

```graphql
type PromotionCreate {
  errors: [PromotionCreateError!]!
  promotion: Promotion
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionCreate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[PromotionCreateError!]!</code></span>](/api-reference/miscellaneous/objects/promotion-create-error) \{#errors\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionCreate</code>.<code class="gqlmd-mdx-entity-name">promotion</code></span>](#promotion)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Promotion</code></span>](/api-reference/discounts/objects/promotion) \{#promotion\}

### Returned By

[`promotionCreate`](/api-reference/discounts/mutations/promotion-create) <mark class="gqlmd-mdx-badge">mutation</mark>
