---
api_reference: true
id: promotion-rule-delete
title: PromotionRuleDelete
---

Deletes a promotion rule.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- PROMOTION_RULE_DELETED (async): A promotion rule was deleted.

```graphql
type PromotionRuleDelete {
  errors: [PromotionRuleDeleteError!]!
  promotionRule: PromotionRule
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionRuleDelete</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[PromotionRuleDeleteError!]!</code></span>](/api-reference/miscellaneous/objects/promotion-rule-delete-error) \{#errors\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionRuleDelete</code>.<code class="gqlmd-mdx-entity-name">promotionRule</code></span>](#promotion-rule)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PromotionRule</code></span>](/api-reference/discounts/objects/promotion-rule) \{#promotion-rule\}

### Returned By

[`promotionRuleDelete`](/api-reference/discounts/mutations/promotion-rule-delete) <mark class="gqlmd-mdx-badge">mutation</mark>
