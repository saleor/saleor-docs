---
api_reference: true
id: promotion-rule-create
title: promotionRuleCreate
---

Creates a new promotion rule.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- PROMOTION_RULE_CREATED (async): A promotion rule was created.

```graphql
promotionRuleCreate(
  input: PromotionRuleCreateInput!
): PromotionRuleCreate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">promotionRuleCreate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PromotionRuleCreateInput!</code></span>](/api-reference/miscellaneous/inputs/promotion-rule-create-input) \{#input\}

Fields required to create a promotion rule.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PromotionRuleCreate</code></span>](/api-reference/discounts/objects/promotion-rule-create)

Creates a new promotion rule.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- PROMOTION_RULE_CREATED (async): A promotion rule was created.
