---
api_reference: true
id: page-translate
title: pageTranslate
---

Creates/updates translations for a page.

Requires one of the following permissions: MANAGE_TRANSLATIONS.

```graphql
pageTranslate(
  id: ID!
  input: PageTranslationInput!
  languageCode: LanguageCodeEnum!
): PageTranslate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">pageTranslate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

Page ID or PageTranslatableContent ID.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">pageTranslate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PageTranslationInput!</code></span>](/api-reference/miscellaneous/inputs/page-translation-input) \{#input\}

Fields required to update page translations.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">pageTranslate</code>.<code class="gqlmd-mdx-entity-name">languageCode</code></span>](#language-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LanguageCodeEnum!</code></span>](/api-reference/miscellaneous/enums/language-code-enum) \{#language-code\}

Translation language code.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PageTranslate</code></span>](/api-reference/pages/objects/page-translate)

Creates/updates translations for a page.

Requires one of the following permissions: MANAGE_TRANSLATIONS.
