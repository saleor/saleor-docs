---
api_reference: true
id: attribute-value-bulk-translate-error
title: AttributeValueBulkTranslateError
---

No description

```graphql
type AttributeValueBulkTranslateError {
  path: String
  message: String
  code: AttributeValueTranslateErrorCode!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeValueBulkTranslateError</code>.<code class="gqlmd-mdx-entity-name">path</code></span>](#path)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#path\}

Path to field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeValueBulkTranslateError</code>.<code class="gqlmd-mdx-entity-name">message</code></span>](#message)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#message\}

The error message.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeValueBulkTranslateError</code>.<code class="gqlmd-mdx-entity-name">code</code></span>](#code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AttributeValueTranslateErrorCode!</code></span>](/api-reference/attributes/enums/attribute-value-translate-error-code) \{#code\}

The error code.

### Member Of

[`AttributeValueBulkTranslate`](/api-reference/attributes/objects/attribute-value-bulk-translate) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AttributeValueBulkTranslateResult`](/api-reference/attributes/objects/attribute-value-bulk-translate-result) <mark class="gqlmd-mdx-badge">object</mark>
