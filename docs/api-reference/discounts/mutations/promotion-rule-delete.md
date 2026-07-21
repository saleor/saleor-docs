---
api_reference: true
id: promotion-rule-delete
title: promotionRuleDelete
---

Deletes a promotion rule.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- PROMOTION_RULE_DELETED (async): A promotion rule was deleted.

```graphql
promotionRuleDelete(
  id: ID!
): PromotionRuleDelete
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">promotionRuleDelete</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of the promotion to remove.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PromotionRuleDelete</code></span>](/api-reference/discounts/objects/promotion-rule-delete)

Deletes a promotion rule.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- PROMOTION_RULE_DELETED (async): A promotion rule was deleted.
