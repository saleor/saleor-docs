---
api_reference: true
id: promotion-translation
title: PromotionTranslation
---

Represents promotion translations.

```graphql
type PromotionTranslation implements Node {
  id: ID!
  language: LanguageDisplay!
  name: String
  description: JSONString
  translatableContent: PromotionTranslatableContent
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionTranslation</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of the promotion translation.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionTranslation</code>.<code class="gqlmd-mdx-entity-name">language</code></span>](#language)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LanguageDisplay!</code></span>](/api-reference/miscellaneous/objects/language-display) \{#language\}

Translation language.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionTranslation</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Translated name of the promotion.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionTranslation</code>.<code class="gqlmd-mdx-entity-name">description</code></span>](#description)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSONString</code></span>](/api-reference/miscellaneous/scalars/jsonstring) \{#description\}

Translated description of the promotion.

Rich text format. For reference see https://editorjs.io/

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionTranslation</code>.<code class="gqlmd-mdx-entity-name">translatableContent</code></span>](#translatable-content)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PromotionTranslatableContent</code></span>](/api-reference/discounts/objects/promotion-translatable-content) \{#translatable-content\}

Represents the promotion fields to translate.

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Node</code></span>](/api-reference/miscellaneous/interfaces/node)

An object with an ID

### Member Of

[`Promotion`](/api-reference/discounts/objects/promotion) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PromotionTranslatableContent`](/api-reference/discounts/objects/promotion-translatable-content) <mark class="gqlmd-mdx-badge">object</mark>

### Implemented By

[`TranslationTypes`](/api-reference/miscellaneous/unions/translation-types) <mark class="gqlmd-mdx-badge">union</mark>
