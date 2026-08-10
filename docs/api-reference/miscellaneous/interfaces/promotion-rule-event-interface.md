---
api_reference: true
id: promotion-rule-event-interface
title: PromotionRuleEventInterface
---

History log of the promotion event related to rule.

```graphql
interface PromotionRuleEventInterface {
  ruleId: String
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionRuleEventInterface</code>.<code class="gqlmd-mdx-entity-name">ruleId</code></span>](#rule-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#rule-id\}

The rule ID associated with the promotion event.

### Implemented By

[`PromotionRuleCreatedEvent`](/api-reference/discounts/objects/promotion-rule-created-event) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PromotionRuleDeletedEvent`](/api-reference/discounts/objects/promotion-rule-deleted-event) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PromotionRuleUpdatedEvent`](/api-reference/discounts/objects/promotion-rule-updated-event) <mark class="gqlmd-mdx-badge">object</mark>
