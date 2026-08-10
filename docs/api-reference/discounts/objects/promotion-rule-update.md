---
api_reference: true
id: promotion-rule-update
title: PromotionRuleUpdate
---

Updates an existing promotion rule.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- PROMOTION_RULE_UPDATED (async): A promotion rule was updated.

```graphql
type PromotionRuleUpdate {
  errors: [PromotionRuleUpdateError!]!
  promotionRule: PromotionRule
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionRuleUpdate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[PromotionRuleUpdateError!]!</code></span>](/api-reference/miscellaneous/objects/promotion-rule-update-error) \{#errors\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionRuleUpdate</code>.<code class="gqlmd-mdx-entity-name">promotionRule</code></span>](#promotion-rule)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PromotionRule</code></span>](/api-reference/discounts/objects/promotion-rule) \{#promotion-rule\}

### Returned By

[`promotionRuleUpdate`](/api-reference/discounts/mutations/promotion-rule-update) <mark class="gqlmd-mdx-badge">mutation</mark>
