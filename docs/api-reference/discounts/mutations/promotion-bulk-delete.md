---
api_reference: true
id: promotion-bulk-delete
title: promotionBulkDelete
---

Deletes promotions.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- PROMOTION_DELETED (async): A promotion was deleted.

```graphql
promotionBulkDelete(
  ids: [ID!]!
): PromotionBulkDelete
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">promotionBulkDelete</code>.<code class="gqlmd-mdx-entity-name">ids</code></span>](#ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]!</code></span>](/api-reference/miscellaneous/scalars/id) \{#ids\}

List of promotion IDs to delete.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PromotionBulkDelete</code></span>](/api-reference/discounts/objects/promotion-bulk-delete)

Deletes promotions.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- PROMOTION_DELETED (async): A promotion was deleted.
