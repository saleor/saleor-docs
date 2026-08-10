---
api_reference: true
id: assigned-swatch-attribute-value
title: AssignedSwatchAttributeValue
---

Represents a single swatch value.

Added in Saleor 3.22.

```graphql
type AssignedSwatchAttributeValue {
  name: String
  slug: String
  hexColor: String
  file: File
  translation(languageCode: LanguageCodeEnum!): String
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AssignedSwatchAttributeValue</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Name of the selected swatch value.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AssignedSwatchAttributeValue</code>.<code class="gqlmd-mdx-entity-name">slug</code></span>](#slug)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#slug\}

Slug of the selected swatch value.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AssignedSwatchAttributeValue</code>.<code class="gqlmd-mdx-entity-name">hexColor</code></span>](#hex-color)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#hex-color\}

Hex color code.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AssignedSwatchAttributeValue</code>.<code class="gqlmd-mdx-entity-name">file</code></span>](#file)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">File</code></span>](/api-reference/miscellaneous/objects/file) \{#file\}

File associated with the attribute.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AssignedSwatchAttributeValue</code>.<code class="gqlmd-mdx-entity-name">translation</code></span>](#translation)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#translation\}

Translation of the name.

Added in Saleor 3.22.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AssignedSwatchAttributeValue.translation</code>.<code class="gqlmd-mdx-entity-name">languageCode</code></span>](#assigned-swatch-attribute-value-translation-language-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LanguageCodeEnum!</code></span>](/api-reference/miscellaneous/enums/language-code-enum) \{#assigned-swatch-attribute-value-translation-language-code\}

### Member Of

[`AssignedSwatchAttribute`](/api-reference/attributes/objects/assigned-swatch-attribute) <mark class="gqlmd-mdx-badge">object</mark>
