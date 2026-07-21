---
api_reference: true
id: promotion-create
title: promotionCreate
---

Creates a new promotion.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- PROMOTION_CREATED (async): A promotion was created.
- PROMOTION_STARTED (async): Optionally called if promotion was started.

```graphql
promotionCreate(
  input: PromotionCreateInput!
): PromotionCreate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">promotionCreate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PromotionCreateInput!</code></span>](/api-reference/discounts/inputs/promotion-create-input) \{#input\}

Fields requires to create a promotion.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PromotionCreate</code></span>](/api-reference/discounts/objects/promotion-create)

Creates a new promotion.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- PROMOTION_CREATED (async): A promotion was created.
- PROMOTION_STARTED (async): Optionally called if promotion was started.
