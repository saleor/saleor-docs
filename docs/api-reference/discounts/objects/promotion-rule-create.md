---
api_reference: true
id: promotion-rule-create
title: PromotionRuleCreate
---

Creates a new promotion rule.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- PROMOTION_RULE_CREATED (async): A promotion rule was created.

```graphql
type PromotionRuleCreate {
  errors: [PromotionRuleCreateError!]!
  promotionRule: PromotionRule
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionRuleCreate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[PromotionRuleCreateError!]!</code></span>](/api-reference/miscellaneous/objects/promotion-rule-create-error) \{#errors\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionRuleCreate</code>.<code class="gqlmd-mdx-entity-name">promotionRule</code></span>](#promotion-rule)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PromotionRule</code></span>](/api-reference/discounts/objects/promotion-rule) \{#promotion-rule\}

### Returned By

[`promotionRuleCreate`](/api-reference/discounts/mutations/promotion-rule-create) <mark class="gqlmd-mdx-badge">mutation</mark>
