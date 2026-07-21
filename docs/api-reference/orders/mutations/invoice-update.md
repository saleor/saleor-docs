---
api_reference: true
id: invoice-update
title: invoiceUpdate
---

Updates an invoice.

Requires one of the following permissions: MANAGE_ORDERS.

```graphql
invoiceUpdate(
  id: ID!
  input: UpdateInvoiceInput!
): InvoiceUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">invoiceUpdate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of an invoice to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">invoiceUpdate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">UpdateInvoiceInput!</code></span>](/api-reference/orders/inputs/update-invoice-input) \{#input\}

Fields to use when updating an invoice.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">InvoiceUpdate</code></span>](/api-reference/orders/objects/invoice-update)

Updates an invoice.

Requires one of the following permissions: MANAGE_ORDERS.
