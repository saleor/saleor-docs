---
api_reference: true
id: order-bulk-create-error
title: OrderBulkCreateError
---

No description

```graphql
type OrderBulkCreateError {
  path: String
  message: String
  code: OrderBulkCreateErrorCode
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateError</code>.<code class="gqlmd-mdx-entity-name">path</code></span>](#path)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#path\}

Path to field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateError</code>.<code class="gqlmd-mdx-entity-name">message</code></span>](#message)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#message\}

The error message.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateError</code>.<code class="gqlmd-mdx-entity-name">code</code></span>](#code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderBulkCreateErrorCode</code></span>](/api-reference/miscellaneous/enums/order-bulk-create-error-code) \{#code\}

The error code.

### Member Of

[`OrderBulkCreate`](/api-reference/orders/objects/order-bulk-create) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderBulkCreateResult`](/api-reference/orders/objects/order-bulk-create-result) <mark class="gqlmd-mdx-badge">object</mark>
