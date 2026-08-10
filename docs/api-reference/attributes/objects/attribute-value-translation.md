---
api_reference: true
id: attribute-value-translation
title: AttributeValueTranslation
---

Represents attribute value translations.

```graphql
type AttributeValueTranslation implements Node {
  id: ID!
  language: LanguageDisplay!
  name: String!
  richText: JSONString
  plainText: String
  translatableContent: AttributeValueTranslatableContent
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeValueTranslation</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of the attribute value translation.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeValueTranslation</code>.<code class="gqlmd-mdx-entity-name">language</code></span>](#language)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LanguageDisplay!</code></span>](/api-reference/miscellaneous/objects/language-display) \{#language\}

Translation language.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeValueTranslation</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Translated attribute value name.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeValueTranslation</code>.<code class="gqlmd-mdx-entity-name">richText</code></span>](#rich-text)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSONString</code></span>](/api-reference/miscellaneous/scalars/jsonstring) \{#rich-text\}

Translated rich-text attribute value.

Rich text format. For reference see https://editorjs.io/

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeValueTranslation</code>.<code class="gqlmd-mdx-entity-name">plainText</code></span>](#plain-text)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#plain-text\}

Translated plain text attribute value .

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeValueTranslation</code>.<code class="gqlmd-mdx-entity-name">translatableContent</code></span>](#translatable-content)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AttributeValueTranslatableContent</code></span>](/api-reference/attributes/objects/attribute-value-translatable-content) \{#translatable-content\}

Represents the attribute value fields to translate.

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Node</code></span>](/api-reference/miscellaneous/interfaces/node)

An object with an ID

### Member Of

[`AttributeValue`](/api-reference/attributes/objects/attribute-value) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AttributeValueBulkTranslateResult`](/api-reference/attributes/objects/attribute-value-bulk-translate-result) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AttributeValueTranslatableContent`](/api-reference/attributes/objects/attribute-value-translatable-content) <mark class="gqlmd-mdx-badge">object</mark>

### Implemented By

[`TranslationTypes`](/api-reference/miscellaneous/unions/translation-types) <mark class="gqlmd-mdx-badge">union</mark>
