---
api_reference: true
id: attribute-value-bulk-translate
title: AttributeValueBulkTranslate
---

Creates/updates translations for attribute values.

Requires one of the following permissions: MANAGE_TRANSLATIONS.

```graphql
type AttributeValueBulkTranslate {
  count: Int!
  results: [AttributeValueBulkTranslateResult!]!
  errors: [AttributeValueBulkTranslateError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeValueBulkTranslate</code>.<code class="gqlmd-mdx-entity-name">count</code></span>](#count)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span>](/api-reference/miscellaneous/scalars/int) \{#count\}

Returns how many translations were created/updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeValueBulkTranslate</code>.<code class="gqlmd-mdx-entity-name">results</code></span>](#results)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AttributeValueBulkTranslateResult!]!</code></span>](/api-reference/attributes/objects/attribute-value-bulk-translate-result) \{#results\}

List of the translations.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeValueBulkTranslate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AttributeValueBulkTranslateError!]!</code></span>](/api-reference/miscellaneous/objects/attribute-value-bulk-translate-error) \{#errors\}

### Returned By

[`attributeValueBulkTranslate`](/api-reference/attributes/mutations/attribute-value-bulk-translate) <mark class="gqlmd-mdx-badge">mutation</mark>
