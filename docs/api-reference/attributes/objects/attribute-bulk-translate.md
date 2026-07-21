---
api_reference: true
id: attribute-bulk-translate
title: AttributeBulkTranslate
---

Creates/updates translations for attributes.

Requires one of the following permissions: MANAGE_TRANSLATIONS.

```graphql
type AttributeBulkTranslate {
  count: Int!
  results: [AttributeBulkTranslateResult!]!
  errors: [AttributeBulkTranslateError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeBulkTranslate</code>.<code class="gqlmd-mdx-entity-name">count</code></span>](#count)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span>](/api-reference/miscellaneous/scalars/int) \{#count\}

Returns how many translations were created/updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeBulkTranslate</code>.<code class="gqlmd-mdx-entity-name">results</code></span>](#results)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AttributeBulkTranslateResult!]!</code></span>](/api-reference/attributes/objects/attribute-bulk-translate-result) \{#results\}

List of the translations.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeBulkTranslate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AttributeBulkTranslateError!]!</code></span>](/api-reference/miscellaneous/objects/attribute-bulk-translate-error) \{#errors\}

### Returned By

[`attributeBulkTranslate`](/api-reference/attributes/mutations/attribute-bulk-translate) <mark class="gqlmd-mdx-badge">mutation</mark>
