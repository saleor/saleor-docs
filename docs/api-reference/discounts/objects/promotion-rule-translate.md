---
api_reference: true
id: promotion-rule-translate
title: PromotionRuleTranslate
---

Creates/updates translations for a promotion rule.

Requires one of the following permissions: MANAGE_TRANSLATIONS.

```graphql
type PromotionRuleTranslate {
  errors: [TranslationError!]!
  promotionRule: PromotionRule
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionRuleTranslate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[TranslationError!]!</code></span>](/api-reference/miscellaneous/objects/translation-error) \{#errors\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionRuleTranslate</code>.<code class="gqlmd-mdx-entity-name">promotionRule</code></span>](#promotion-rule)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PromotionRule</code></span>](/api-reference/discounts/objects/promotion-rule) \{#promotion-rule\}

### Returned By

[`promotionRuleTranslate`](/api-reference/discounts/mutations/promotion-rule-translate) <mark class="gqlmd-mdx-badge">mutation</mark>
