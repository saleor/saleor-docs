---
api_reference: true
id: promotion-update
title: promotionUpdate
---

Updates an existing promotion.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- PROMOTION_UPDATED (async): A promotion was updated.
- PROMOTION_STARTED (async): Optionally called if promotion was started.
- PROMOTION_ENDED (async): Optionally called if promotion was ended.

```graphql
promotionUpdate(
  id: ID!
  input: PromotionUpdateInput!
): PromotionUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">promotionUpdate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of the promotion to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">promotionUpdate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PromotionUpdateInput!</code></span>](/api-reference/miscellaneous/inputs/promotion-update-input) \{#input\}

Fields required to update a promotion.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PromotionUpdate</code></span>](/api-reference/discounts/objects/promotion-update)

Updates an existing promotion.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- PROMOTION_UPDATED (async): A promotion was updated.
- PROMOTION_STARTED (async): Optionally called if promotion was started.
- PROMOTION_ENDED (async): Optionally called if promotion was ended.
