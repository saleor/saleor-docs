---
api_reference: true
id: shipping-method-translation
title: ShippingMethodTranslation
---

Represents shipping method translations.

```graphql
type ShippingMethodTranslation implements Node {
  id: ID!
  language: LanguageDisplay!
  name: String
  description: JSONString
  translatableContent: ShippingMethodTranslatableContent
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingMethodTranslation</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of the shipping method translation.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingMethodTranslation</code>.<code class="gqlmd-mdx-entity-name">language</code></span>](#language)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LanguageDisplay!</code></span>](/api-reference/miscellaneous/objects/language-display) \{#language\}

Translation language.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingMethodTranslation</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Translated shipping method name.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingMethodTranslation</code>.<code class="gqlmd-mdx-entity-name">description</code></span>](#description)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSONString</code></span>](/api-reference/miscellaneous/scalars/jsonstring) \{#description\}

Translated description of the shipping method.

Rich text format. For reference see https://editorjs.io/

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingMethodTranslation</code>.<code class="gqlmd-mdx-entity-name">translatableContent</code></span>](#translatable-content)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ShippingMethodTranslatableContent</code></span>](/api-reference/shipping/objects/shipping-method-translatable-content) \{#translatable-content\}

Represents the shipping method fields to translate.

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Node</code></span>](/api-reference/miscellaneous/interfaces/node)

An object with an ID

### Member Of

[`ShippingMethod`](/api-reference/shipping/objects/shipping-method) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ShippingMethodTranslatableContent`](/api-reference/shipping/objects/shipping-method-translatable-content) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ShippingMethodType`](/api-reference/shipping/objects/shipping-method-type) <mark class="gqlmd-mdx-badge">object</mark>

### Implemented By

[`TranslationTypes`](/api-reference/miscellaneous/unions/translation-types) <mark class="gqlmd-mdx-badge">union</mark>
