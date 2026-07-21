---
api_reference: true
id: product-translate
title: productTranslate
---

Creates/updates translations for a product.

Requires one of the following permissions: MANAGE_TRANSLATIONS.

```graphql
productTranslate(
  id: ID!
  input: TranslationInput!
  languageCode: LanguageCodeEnum!
): ProductTranslate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productTranslate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

Product ID or ProductTranslatableContent ID.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productTranslate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TranslationInput!</code></span>](/api-reference/miscellaneous/inputs/translation-input) \{#input\}

Fields required to update product translations.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productTranslate</code>.<code class="gqlmd-mdx-entity-name">languageCode</code></span>](#language-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LanguageCodeEnum!</code></span>](/api-reference/miscellaneous/enums/language-code-enum) \{#language-code\}

Translation language code.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductTranslate</code></span>](/api-reference/products/objects/product-translate)

Creates/updates translations for a product.

Requires one of the following permissions: MANAGE_TRANSLATIONS.
