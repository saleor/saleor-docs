---
api_reference: true
id: invoice-request
title: invoiceRequest
---

Request an invoice for the order using plugin.

Requires one of the following permissions: MANAGE_ORDERS.

Triggers the following webhook events:

- INVOICE_REQUESTED (async): An invoice was requested.

```graphql
invoiceRequest(
  number: String
  orderId: ID!
): InvoiceRequest
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">invoiceRequest</code>.<code class="gqlmd-mdx-entity-name">number</code></span>](#number)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#number\}

Invoice number, if not provided it will be generated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">invoiceRequest</code>.<code class="gqlmd-mdx-entity-name">orderId</code></span>](#order-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#order-id\}

ID of the order related to invoice.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">InvoiceRequest</code></span>](/api-reference/orders/objects/invoice-request)

Request an invoice for the order using plugin.

Requires one of the following permissions: MANAGE_ORDERS.

Triggers the following webhook events:

- INVOICE_REQUESTED (async): An invoice was requested.
