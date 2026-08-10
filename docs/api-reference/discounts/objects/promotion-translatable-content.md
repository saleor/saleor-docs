---
api_reference: true
id: promotion-translatable-content
title: PromotionTranslatableContent
---

Represents promotion's original translatable fields and related translations.

```graphql
type PromotionTranslatableContent implements Node {
  id: ID!
  promotionId: ID!
  name: String!
  description: JSONString
  translation(languageCode: LanguageCodeEnum!): PromotionTranslation
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionTranslatableContent</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of the promotion translatable content.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionTranslatableContent</code>.<code class="gqlmd-mdx-entity-name">promotionId</code></span>](#promotion-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#promotion-id\}

ID of the promotion to translate.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionTranslatableContent</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Name of the promotion.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionTranslatableContent</code>.<code class="gqlmd-mdx-entity-name">description</code></span>](#description)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSONString</code></span>](/api-reference/miscellaneous/scalars/jsonstring) \{#description\}

Description of the promotion.

Rich text format. For reference see https://editorjs.io/

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionTranslatableContent</code>.<code class="gqlmd-mdx-entity-name">translation</code></span>](#translation)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PromotionTranslation</code></span>](/api-reference/discounts/objects/promotion-translation) \{#translation\}

Returns translated promotion fields for the given language code.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionTranslatableContent.translation</code>.<code class="gqlmd-mdx-entity-name">languageCode</code></span>](#promotion-translatable-content-translation-language-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LanguageCodeEnum!</code></span>](/api-reference/miscellaneous/enums/language-code-enum) \{#promotion-translatable-content-translation-language-code\}

A language code to return the translation for promotion.

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Node</code></span>](/api-reference/miscellaneous/interfaces/node)

An object with an ID

### Member Of

[`PromotionTranslation`](/api-reference/discounts/objects/promotion-translation) <mark class="gqlmd-mdx-badge">object</mark>

### Implemented By

[`TranslatableItem`](/api-reference/miscellaneous/unions/translatable-item) <mark class="gqlmd-mdx-badge">union</mark>
