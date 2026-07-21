---
api_reference: true
id: order-grant-refund-update-line-error
title: OrderGrantRefundUpdateLineError
---

No description

```graphql
type OrderGrantRefundUpdateLineError {
  field: String
  message: String
  code: OrderGrantRefundUpdateLineErrorCode!
  lineId: ID!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderGrantRefundUpdateLineError</code>.<code class="gqlmd-mdx-entity-name">field</code></span>](#field)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#field\}

Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderGrantRefundUpdateLineError</code>.<code class="gqlmd-mdx-entity-name">message</code></span>](#message)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#message\}

The error message.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderGrantRefundUpdateLineError</code>.<code class="gqlmd-mdx-entity-name">code</code></span>](#code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderGrantRefundUpdateLineErrorCode!</code></span>](/api-reference/miscellaneous/enums/order-grant-refund-update-line-error-code) \{#code\}

The error code.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderGrantRefundUpdateLineError</code>.<code class="gqlmd-mdx-entity-name">lineId</code></span>](#line-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#line-id\}

The ID of the line related to the error.

### Member Of

[`OrderGrantRefundUpdateError`](/api-reference/orders/objects/order-grant-refund-update-error) <mark class="gqlmd-mdx-badge">object</mark>
