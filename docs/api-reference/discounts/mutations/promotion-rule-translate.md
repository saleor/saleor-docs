---
api_reference: true
id: promotion-rule-translate
title: promotionRuleTranslate
---

Creates/updates translations for a promotion rule.

Requires one of the following permissions: MANAGE_TRANSLATIONS.

```graphql
promotionRuleTranslate(
  id: ID!
  input: PromotionRuleTranslationInput!
  languageCode: LanguageCodeEnum!
): PromotionRuleTranslate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">promotionRuleTranslate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

PromotionRule ID or PromotionRuleTranslatableContent ID.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">promotionRuleTranslate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PromotionRuleTranslationInput!</code></span>](/api-reference/miscellaneous/inputs/promotion-rule-translation-input) \{#input\}

Fields required to update promotion rule translations.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">promotionRuleTranslate</code>.<code class="gqlmd-mdx-entity-name">languageCode</code></span>](#language-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LanguageCodeEnum!</code></span>](/api-reference/miscellaneous/enums/language-code-enum) \{#language-code\}

Translation language code.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PromotionRuleTranslate</code></span>](/api-reference/discounts/objects/promotion-rule-translate)

Creates/updates translations for a promotion rule.

Requires one of the following permissions: MANAGE_TRANSLATIONS.
