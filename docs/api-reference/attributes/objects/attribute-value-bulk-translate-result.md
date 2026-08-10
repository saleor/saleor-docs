---
api_reference: true
id: attribute-value-bulk-translate-result
title: AttributeValueBulkTranslateResult
---

No description

```graphql
type AttributeValueBulkTranslateResult {
  translation: AttributeValueTranslation
  errors: [AttributeValueBulkTranslateError!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeValueBulkTranslateResult</code>.<code class="gqlmd-mdx-entity-name">translation</code></span>](#translation)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AttributeValueTranslation</code></span>](/api-reference/attributes/objects/attribute-value-translation) \{#translation\}

Attribute value translation data.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeValueBulkTranslateResult</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AttributeValueBulkTranslateError!]</code></span>](/api-reference/miscellaneous/objects/attribute-value-bulk-translate-error) \{#errors\}

List of errors occurred on translation attempt.

### Member Of

[`AttributeValueBulkTranslate`](/api-reference/attributes/objects/attribute-value-bulk-translate) <mark class="gqlmd-mdx-badge">object</mark>
