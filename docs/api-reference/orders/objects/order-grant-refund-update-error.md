---
api_reference: true
id: order-grant-refund-update-error
title: OrderGrantRefundUpdateError
---

No description

```graphql
type OrderGrantRefundUpdateError {
  field: String
  message: String
  code: OrderGrantRefundUpdateErrorCode!
  addLines: [OrderGrantRefundUpdateLineError!]
  removeLines: [OrderGrantRefundUpdateLineError!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderGrantRefundUpdateError</code>.<code class="gqlmd-mdx-entity-name">field</code></span>](#field)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#field\}

Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderGrantRefundUpdateError</code>.<code class="gqlmd-mdx-entity-name">message</code></span>](#message)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#message\}

The error message.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderGrantRefundUpdateError</code>.<code class="gqlmd-mdx-entity-name">code</code></span>](#code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderGrantRefundUpdateErrorCode!</code></span>](/api-reference/orders/enums/order-grant-refund-update-error-code) \{#code\}

The error code.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderGrantRefundUpdateError</code>.<code class="gqlmd-mdx-entity-name">addLines</code></span>](#add-lines)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderGrantRefundUpdateLineError!]</code></span>](/api-reference/miscellaneous/objects/order-grant-refund-update-line-error) \{#add-lines\}

List of lines to add which cause the error.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderGrantRefundUpdateError</code>.<code class="gqlmd-mdx-entity-name">removeLines</code></span>](#remove-lines)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderGrantRefundUpdateLineError!]</code></span>](/api-reference/miscellaneous/objects/order-grant-refund-update-line-error) \{#remove-lines\}

List of lines to remove which cause the error.

### Member Of

[`OrderGrantRefundUpdate`](/api-reference/orders/objects/order-grant-refund-update) <mark class="gqlmd-mdx-badge">object</mark>
