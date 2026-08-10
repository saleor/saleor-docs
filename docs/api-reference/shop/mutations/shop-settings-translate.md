---
api_reference: true
id: shop-settings-translate
title: shopSettingsTranslate
---

Creates/updates translations for shop settings.

Requires one of the following permissions: MANAGE_TRANSLATIONS.

```graphql
shopSettingsTranslate(
  input: ShopSettingsTranslationInput!
  languageCode: LanguageCodeEnum!
): ShopSettingsTranslate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">shopSettingsTranslate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ShopSettingsTranslationInput!</code></span>](/api-reference/miscellaneous/inputs/shop-settings-translation-input) \{#input\}

Fields required to update shop settings translations.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">shopSettingsTranslate</code>.<code class="gqlmd-mdx-entity-name">languageCode</code></span>](#language-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LanguageCodeEnum!</code></span>](/api-reference/miscellaneous/enums/language-code-enum) \{#language-code\}

Translation language code.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ShopSettingsTranslate</code></span>](/api-reference/shop/objects/shop-settings-translate)

Creates/updates translations for shop settings.

Requires one of the following permissions: MANAGE_TRANSLATIONS.
