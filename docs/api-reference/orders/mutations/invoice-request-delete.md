---
api_reference: true
id: invoice-request-delete
title: invoiceRequestDelete
---

Requests deletion of an invoice.

Requires one of the following permissions: MANAGE_ORDERS.

Triggers the following webhook events:

- INVOICE_DELETED (async): An invoice was requested to delete.

```graphql
invoiceRequestDelete(
  id: ID!
): InvoiceRequestDelete
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">invoiceRequestDelete</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of an invoice to request the deletion.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">InvoiceRequestDelete</code></span>](/api-reference/orders/objects/invoice-request-delete)

Requests deletion of an invoice.

Requires one of the following permissions: MANAGE_ORDERS.

Triggers the following webhook events:

- INVOICE_DELETED (async): An invoice was requested to delete.
