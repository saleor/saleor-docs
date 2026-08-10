---
api_reference: true
id: category-translate
title: categoryTranslate
---

Creates/updates translations for a category.

Requires one of the following permissions: MANAGE_TRANSLATIONS.

```graphql
categoryTranslate(
  id: ID!
  input: TranslationInput!
  languageCode: LanguageCodeEnum!
): CategoryTranslate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">categoryTranslate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

Category ID or CategoryTranslatableContent ID.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">categoryTranslate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TranslationInput!</code></span>](/api-reference/miscellaneous/inputs/translation-input) \{#input\}

Fields required to update category translations.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">categoryTranslate</code>.<code class="gqlmd-mdx-entity-name">languageCode</code></span>](#language-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LanguageCodeEnum!</code></span>](/api-reference/miscellaneous/enums/language-code-enum) \{#language-code\}

Translation language code.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CategoryTranslate</code></span>](/api-reference/products/objects/category-translate)

Creates/updates translations for a category.

Requires one of the following permissions: MANAGE_TRANSLATIONS.
