---
api_reference: true
id: promotion-delete
title: promotionDelete
---

Deletes a promotion.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- PROMOTION_DELETED (async): A promotion was deleted.

```graphql
promotionDelete(
  id: ID!
): PromotionDelete
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">promotionDelete</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of the promotion to remove.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PromotionDelete</code></span>](/api-reference/discounts/objects/promotion-delete)

Deletes a promotion.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- PROMOTION_DELETED (async): A promotion was deleted.
