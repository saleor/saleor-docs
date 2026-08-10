---
api_reference: true
id: attribute-bulk-translate-input
title: AttributeBulkTranslateInput
---

No description

```graphql
input AttributeBulkTranslateInput {
  id: ID
  externalReference: String
  languageCode: LanguageCodeEnum!
  translationFields: NameTranslationInput!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeBulkTranslateInput</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

Attribute ID.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeBulkTranslateInput</code>.<code class="gqlmd-mdx-entity-name">externalReference</code></span>](#external-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#external-reference\}

External reference of an attribute.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeBulkTranslateInput</code>.<code class="gqlmd-mdx-entity-name">languageCode</code></span>](#language-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LanguageCodeEnum!</code></span>](/api-reference/miscellaneous/enums/language-code-enum) \{#language-code\}

Translation language code.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeBulkTranslateInput</code>.<code class="gqlmd-mdx-entity-name">translationFields</code></span>](#translation-fields)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">NameTranslationInput!</code></span>](/api-reference/miscellaneous/inputs/name-translation-input) \{#translation-fields\}

Translation fields.

### Member Of

[`attributeBulkTranslate`](/api-reference/attributes/mutations/attribute-bulk-translate) <mark class="gqlmd-mdx-badge">mutation</mark>
