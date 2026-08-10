---
api_reference: true
id: sale-translation
title: SaleTranslation
---

Represents sale translations.

DEPRECATED: this type will be removed. Use `PromotionTranslation` instead.

```graphql
type SaleTranslation implements Node {
  id: ID!
  language: LanguageDisplay!
  name: String
  translatableContent: SaleTranslatableContent
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SaleTranslation</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of the sale translation.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SaleTranslation</code>.<code class="gqlmd-mdx-entity-name">language</code></span>](#language)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LanguageDisplay!</code></span>](/api-reference/miscellaneous/objects/language-display) \{#language\}

Translation language.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SaleTranslation</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Translated name of sale.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SaleTranslation</code>.<code class="gqlmd-mdx-entity-name">translatableContent</code></span>](#translatable-content)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">SaleTranslatableContent</code></span>](/api-reference/discounts/objects/sale-translatable-content) \{#translatable-content\}

Represents the sale fields to translate.

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Node</code></span>](/api-reference/miscellaneous/interfaces/node)

An object with an ID

### Member Of

[`Sale`](/api-reference/discounts/objects/sale) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`SaleTranslatableContent`](/api-reference/discounts/objects/sale-translatable-content) <mark class="gqlmd-mdx-badge">object</mark>

### Implemented By

[`TranslationTypes`](/api-reference/miscellaneous/unions/translation-types) <mark class="gqlmd-mdx-badge">union</mark>
