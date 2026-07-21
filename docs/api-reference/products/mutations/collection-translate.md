---
api_reference: true
id: collection-translate
title: collectionTranslate
---

Creates/updates translations for a collection.

Requires one of the following permissions: MANAGE_TRANSLATIONS.

```graphql
collectionTranslate(
  id: ID!
  input: TranslationInput!
  languageCode: LanguageCodeEnum!
): CollectionTranslate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">collectionTranslate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

Collection ID or CollectionTranslatableContent ID.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">collectionTranslate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TranslationInput!</code></span>](/api-reference/miscellaneous/inputs/translation-input) \{#input\}

Fields required to update collection translations.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">collectionTranslate</code>.<code class="gqlmd-mdx-entity-name">languageCode</code></span>](#language-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LanguageCodeEnum!</code></span>](/api-reference/miscellaneous/enums/language-code-enum) \{#language-code\}

Translation language code.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CollectionTranslate</code></span>](/api-reference/products/objects/collection-translate)

Creates/updates translations for a collection.

Requires one of the following permissions: MANAGE_TRANSLATIONS.
