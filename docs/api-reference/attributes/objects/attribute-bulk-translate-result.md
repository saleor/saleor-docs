---
api_reference: true
id: attribute-bulk-translate-result
title: AttributeBulkTranslateResult
---

No description

```graphql
type AttributeBulkTranslateResult {
  translation: AttributeTranslation
  errors: [AttributeBulkTranslateError!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeBulkTranslateResult</code>.<code class="gqlmd-mdx-entity-name">translation</code></span>](#translation)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AttributeTranslation</code></span>](/api-reference/attributes/objects/attribute-translation) \{#translation\}

Attribute translation data.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeBulkTranslateResult</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AttributeBulkTranslateError!]</code></span>](/api-reference/miscellaneous/objects/attribute-bulk-translate-error) \{#errors\}

List of errors occurred on translation attempt.

### Member Of

[`AttributeBulkTranslate`](/api-reference/attributes/objects/attribute-bulk-translate) <mark class="gqlmd-mdx-badge">object</mark>
