---
api_reference: true
id: order-grant-refund-create-error
title: OrderGrantRefundCreateError
---

No description

```graphql
type OrderGrantRefundCreateError {
  field: String
  message: String
  code: OrderGrantRefundCreateErrorCode!
  lines: [OrderGrantRefundCreateLineError!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderGrantRefundCreateError</code>.<code class="gqlmd-mdx-entity-name">field</code></span>](#field)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#field\}

Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderGrantRefundCreateError</code>.<code class="gqlmd-mdx-entity-name">message</code></span>](#message)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#message\}

The error message.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderGrantRefundCreateError</code>.<code class="gqlmd-mdx-entity-name">code</code></span>](#code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderGrantRefundCreateErrorCode!</code></span>](/api-reference/orders/enums/order-grant-refund-create-error-code) \{#code\}

The error code.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderGrantRefundCreateError</code>.<code class="gqlmd-mdx-entity-name">lines</code></span>](#lines)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderGrantRefundCreateLineError!]</code></span>](/api-reference/miscellaneous/objects/order-grant-refund-create-line-error) \{#lines\}

List of lines which cause the error.

### Member Of

[`OrderGrantRefundCreate`](/api-reference/orders/objects/order-grant-refund-create) <mark class="gqlmd-mdx-badge">object</mark>
