---
api_reference: true
id: promotion-translate
title: PromotionTranslate
---

Creates/updates translations for a promotion.

Requires one of the following permissions: MANAGE_TRANSLATIONS.

```graphql
type PromotionTranslate {
  errors: [TranslationError!]!
  promotion: Promotion
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionTranslate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[TranslationError!]!</code></span>](/api-reference/miscellaneous/objects/translation-error) \{#errors\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionTranslate</code>.<code class="gqlmd-mdx-entity-name">promotion</code></span>](#promotion)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Promotion</code></span>](/api-reference/discounts/objects/promotion) \{#promotion\}

### Returned By

[`promotionTranslate`](/api-reference/discounts/mutations/promotion-translate) <mark class="gqlmd-mdx-badge">mutation</mark>
