---
api_reference: true
id: promotion-translate
title: promotionTranslate
---

Creates/updates translations for a promotion.

Requires one of the following permissions: MANAGE_TRANSLATIONS.

```graphql
promotionTranslate(
  id: ID!
  input: PromotionTranslationInput!
  languageCode: LanguageCodeEnum!
): PromotionTranslate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">promotionTranslate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

Promotion ID or PromotionTranslatableContent ID.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">promotionTranslate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PromotionTranslationInput!</code></span>](/api-reference/miscellaneous/inputs/promotion-translation-input) \{#input\}

Fields required to update promotion translations.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">promotionTranslate</code>.<code class="gqlmd-mdx-entity-name">languageCode</code></span>](#language-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LanguageCodeEnum!</code></span>](/api-reference/miscellaneous/enums/language-code-enum) \{#language-code\}

Translation language code.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PromotionTranslate</code></span>](/api-reference/discounts/objects/promotion-translate)

Creates/updates translations for a promotion.

Requires one of the following permissions: MANAGE_TRANSLATIONS.
