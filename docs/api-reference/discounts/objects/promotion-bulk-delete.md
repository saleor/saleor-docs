---
api_reference: true
id: promotion-bulk-delete
title: PromotionBulkDelete
---

Deletes promotions.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- PROMOTION_DELETED (async): A promotion was deleted.

```graphql
type PromotionBulkDelete {
  count: Int!
  errors: [DiscountError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionBulkDelete</code>.<code class="gqlmd-mdx-entity-name">count</code></span>](#count)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span>](/api-reference/miscellaneous/scalars/int) \{#count\}

Returns how many objects were affected.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionBulkDelete</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[DiscountError!]!</code></span>](/api-reference/discounts/objects/discount-error) \{#errors\}

### Returned By

[`promotionBulkDelete`](/api-reference/discounts/mutations/promotion-bulk-delete) <mark class="gqlmd-mdx-badge">mutation</mark>
