---
api_reference: true
id: customer-bulk-update-error
title: CustomerBulkUpdateError
---

No description

```graphql
type CustomerBulkUpdateError {
  path: String
  message: String
  code: CustomerBulkUpdateErrorCode!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CustomerBulkUpdateError</code>.<code class="gqlmd-mdx-entity-name">path</code></span>](#path)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#path\}

Path to field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CustomerBulkUpdateError</code>.<code class="gqlmd-mdx-entity-name">message</code></span>](#message)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#message\}

The error message.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CustomerBulkUpdateError</code>.<code class="gqlmd-mdx-entity-name">code</code></span>](#code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CustomerBulkUpdateErrorCode!</code></span>](/api-reference/users/enums/customer-bulk-update-error-code) \{#code\}

The error code.

### Member Of

[`CustomerBulkResult`](/api-reference/users/objects/customer-bulk-result) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CustomerBulkUpdate`](/api-reference/users/objects/customer-bulk-update) <mark class="gqlmd-mdx-badge">object</mark>
