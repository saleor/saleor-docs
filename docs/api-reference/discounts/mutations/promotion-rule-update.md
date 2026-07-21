---
api_reference: true
id: promotion-rule-update
title: promotionRuleUpdate
---

Updates an existing promotion rule.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- PROMOTION_RULE_UPDATED (async): A promotion rule was updated.

```graphql
promotionRuleUpdate(
  id: ID!
  input: PromotionRuleUpdateInput!
): PromotionRuleUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">promotionRuleUpdate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of the promotion rule to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">promotionRuleUpdate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PromotionRuleUpdateInput!</code></span>](/api-reference/miscellaneous/inputs/promotion-rule-update-input) \{#input\}

Fields required to create a promotion rule.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PromotionRuleUpdate</code></span>](/api-reference/discounts/objects/promotion-rule-update)

Updates an existing promotion rule.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- PROMOTION_RULE_UPDATED (async): A promotion rule was updated.
