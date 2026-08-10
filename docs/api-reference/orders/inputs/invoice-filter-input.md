---
api_reference: true
id: invoice-filter-input
title: InvoiceFilterInput
---

Filter input for invoices.

```graphql
input InvoiceFilterInput {
  createdAt: DateTimeRangeInput
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">InvoiceFilterInput</code>.<code class="gqlmd-mdx-entity-name">createdAt</code></span>](#created-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTimeRangeInput</code></span>](/api-reference/miscellaneous/inputs/date-time-range-input) \{#created-at\}

Filter invoices by creation date.

### Member Of

[`CustomerOrderWhereInput`](/api-reference/orders/inputs/customer-order-where-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderWhereInput`](/api-reference/orders/inputs/order-where-input) <mark class="gqlmd-mdx-badge">input</mark>
