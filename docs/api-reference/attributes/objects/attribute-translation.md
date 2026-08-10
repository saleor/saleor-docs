---
api_reference: true
id: attribute-translation
title: AttributeTranslation
---

Represents attribute translations.

```graphql
type AttributeTranslation implements Node {
  id: ID!
  language: LanguageDisplay!
  name: String!
  translatableContent: AttributeTranslatableContent
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeTranslation</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of the attribute translation.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeTranslation</code>.<code class="gqlmd-mdx-entity-name">language</code></span>](#language)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LanguageDisplay!</code></span>](/api-reference/miscellaneous/objects/language-display) \{#language\}

Translation language.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeTranslation</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Translated attribute name.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeTranslation</code>.<code class="gqlmd-mdx-entity-name">translatableContent</code></span>](#translatable-content)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AttributeTranslatableContent</code></span>](/api-reference/attributes/objects/attribute-translatable-content) \{#translatable-content\}

Represents the attribute fields to translate.

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Node</code></span>](/api-reference/miscellaneous/interfaces/node)

An object with an ID

### Member Of

[`Attribute`](/api-reference/attributes/objects/attribute) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AttributeBulkTranslateResult`](/api-reference/attributes/objects/attribute-bulk-translate-result) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AttributeTranslatableContent`](/api-reference/attributes/objects/attribute-translatable-content) <mark class="gqlmd-mdx-badge">object</mark>

### Implemented By

[`TranslationTypes`](/api-reference/miscellaneous/unions/translation-types) <mark class="gqlmd-mdx-badge">union</mark>
