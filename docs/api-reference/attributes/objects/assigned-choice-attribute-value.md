---
api_reference: true
id: assigned-choice-attribute-value
title: AssignedChoiceAttributeValue
---

Represents a single choice value of the attribute.

Added in Saleor 3.22.

```graphql
type AssignedChoiceAttributeValue {
  name: String
  slug: String
  translation(languageCode: LanguageCodeEnum!): String
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AssignedChoiceAttributeValue</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Name of a value displayed in the interface.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AssignedChoiceAttributeValue</code>.<code class="gqlmd-mdx-entity-name">slug</code></span>](#slug)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#slug\}

Internal representation of a value (unique per attribute).

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AssignedChoiceAttributeValue</code>.<code class="gqlmd-mdx-entity-name">translation</code></span>](#translation)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#translation\}

Translation of the name.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AssignedChoiceAttributeValue.translation</code>.<code class="gqlmd-mdx-entity-name">languageCode</code></span>](#assigned-choice-attribute-value-translation-language-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LanguageCodeEnum!</code></span>](/api-reference/miscellaneous/enums/language-code-enum) \{#assigned-choice-attribute-value-translation-language-code\}

### Member Of

[`AssignedMultiChoiceAttribute`](/api-reference/attributes/objects/assigned-multi-choice-attribute) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AssignedSingleChoiceAttribute`](/api-reference/attributes/objects/assigned-single-choice-attribute) <mark class="gqlmd-mdx-badge">object</mark>
