---
api_reference: true
id: attribute-value-bulk-translate-input
title: AttributeValueBulkTranslateInput
---

No description

```graphql
input AttributeValueBulkTranslateInput {
  id: ID
  externalReference: String
  languageCode: LanguageCodeEnum!
  translationFields: AttributeValueTranslationInput!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeValueBulkTranslateInput</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

Attribute value ID.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeValueBulkTranslateInput</code>.<code class="gqlmd-mdx-entity-name">externalReference</code></span>](#external-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#external-reference\}

External reference of an attribute value.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeValueBulkTranslateInput</code>.<code class="gqlmd-mdx-entity-name">languageCode</code></span>](#language-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LanguageCodeEnum!</code></span>](/api-reference/miscellaneous/enums/language-code-enum) \{#language-code\}

Translation language code.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeValueBulkTranslateInput</code>.<code class="gqlmd-mdx-entity-name">translationFields</code></span>](#translation-fields)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AttributeValueTranslationInput!</code></span>](/api-reference/miscellaneous/inputs/attribute-value-translation-input) \{#translation-fields\}

Translation fields.

### Member Of

[`attributeValueBulkTranslate`](/api-reference/attributes/mutations/attribute-value-bulk-translate) <mark class="gqlmd-mdx-badge">mutation</mark>
