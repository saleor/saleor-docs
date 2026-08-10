---
api_reference: true
id: attribute-bulk-translate-error
title: AttributeBulkTranslateError
---

No description

```graphql
type AttributeBulkTranslateError {
  path: String
  message: String
  code: AttributeTranslateErrorCode!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeBulkTranslateError</code>.<code class="gqlmd-mdx-entity-name">path</code></span>](#path)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#path\}

Path to field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeBulkTranslateError</code>.<code class="gqlmd-mdx-entity-name">message</code></span>](#message)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#message\}

The error message.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeBulkTranslateError</code>.<code class="gqlmd-mdx-entity-name">code</code></span>](#code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AttributeTranslateErrorCode!</code></span>](/api-reference/attributes/enums/attribute-translate-error-code) \{#code\}

The error code.

### Member Of

[`AttributeBulkTranslate`](/api-reference/attributes/objects/attribute-bulk-translate) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AttributeBulkTranslateResult`](/api-reference/attributes/objects/attribute-bulk-translate-result) <mark class="gqlmd-mdx-badge">object</mark>
