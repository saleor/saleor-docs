---
api_reference: true
id: promotion-rule-create-error
title: PromotionRuleCreateError
---

No description

```graphql
type PromotionRuleCreateError {
  field: String
  message: String
  code: PromotionRuleCreateErrorCode!
  rulesLimit: Int
  rulesLimitExceedBy: Int
  giftsLimit: Int
  giftsLimitExceedBy: Int
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionRuleCreateError</code>.<code class="gqlmd-mdx-entity-name">field</code></span>](#field)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#field\}

Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionRuleCreateError</code>.<code class="gqlmd-mdx-entity-name">message</code></span>](#message)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#message\}

The error message.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionRuleCreateError</code>.<code class="gqlmd-mdx-entity-name">code</code></span>](#code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PromotionRuleCreateErrorCode!</code></span>](/api-reference/miscellaneous/enums/promotion-rule-create-error-code) \{#code\}

The error code.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionRuleCreateError</code>.<code class="gqlmd-mdx-entity-name">rulesLimit</code></span>](#rules-limit)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#rules-limit\}

Limit of rules with orderPredicate defined.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionRuleCreateError</code>.<code class="gqlmd-mdx-entity-name">rulesLimitExceedBy</code></span>](#rules-limit-exceed-by)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#rules-limit-exceed-by\}

Number of rules with orderPredicate defined exceeding the limit.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionRuleCreateError</code>.<code class="gqlmd-mdx-entity-name">giftsLimit</code></span>](#gifts-limit)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#gifts-limit\}

Limit of gifts assigned to promotion rule.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionRuleCreateError</code>.<code class="gqlmd-mdx-entity-name">giftsLimitExceedBy</code></span>](#gifts-limit-exceed-by)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#gifts-limit-exceed-by\}

Number of gifts defined for this promotion rule exceeding the limit.

### Member Of

[`PromotionRuleCreate`](/api-reference/discounts/objects/promotion-rule-create) <mark class="gqlmd-mdx-badge">object</mark>
