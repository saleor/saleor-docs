---
api_reference: true
id: attribute-error
title: AttributeError
---

No description

```graphql
type AttributeError {
  field: String
  message: String
  code: AttributeErrorCode!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeError</code>.<code class="gqlmd-mdx-entity-name">field</code></span>](#field)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#field\}

Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeError</code>.<code class="gqlmd-mdx-entity-name">message</code></span>](#message)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#message\}

The error message.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeError</code>.<code class="gqlmd-mdx-entity-name">code</code></span>](#code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AttributeErrorCode!</code></span>](/api-reference/attributes/enums/attribute-error-code) \{#code\}

The error code.

### Member Of

[`AttributeBulkDelete`](/api-reference/attributes/objects/attribute-bulk-delete) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AttributeCreate`](/api-reference/attributes/objects/attribute-create) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AttributeDelete`](/api-reference/attributes/objects/attribute-delete) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AttributeReorderValues`](/api-reference/attributes/objects/attribute-reorder-values) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AttributeUpdate`](/api-reference/attributes/objects/attribute-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AttributeValueBulkDelete`](/api-reference/attributes/objects/attribute-value-bulk-delete) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AttributeValueCreate`](/api-reference/attributes/objects/attribute-value-create) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AttributeValueDelete`](/api-reference/attributes/objects/attribute-value-delete) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AttributeValueUpdate`](/api-reference/attributes/objects/attribute-value-update) <mark class="gqlmd-mdx-badge">object</mark>
