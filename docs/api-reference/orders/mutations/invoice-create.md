---
api_reference: true
id: invoice-create
title: invoiceCreate
---

Creates a ready to send invoice.

Requires one of the following permissions: MANAGE_ORDERS.

```graphql
invoiceCreate(
  input: InvoiceCreateInput!
  orderId: ID!
): InvoiceCreate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">invoiceCreate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">InvoiceCreateInput!</code></span>](/api-reference/orders/inputs/invoice-create-input) \{#input\}

Fields required when creating an invoice.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">invoiceCreate</code>.<code class="gqlmd-mdx-entity-name">orderId</code></span>](#order-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#order-id\}

ID of the order related to invoice.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">InvoiceCreate</code></span>](/api-reference/orders/objects/invoice-create)

Creates a ready to send invoice.

Requires one of the following permissions: MANAGE_ORDERS.
