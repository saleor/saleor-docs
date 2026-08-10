---
api_reference: true
id: invoice-send-notification
title: invoiceSendNotification
---

Send an invoice notification to the customer.

Requires one of the following permissions: MANAGE_ORDERS.

Triggers the following webhook events:

- INVOICE_SENT (async): A notification for invoice send
- NOTIFY_USER (async): A notification for invoice send

```graphql
invoiceSendNotification(
  id: ID!
): InvoiceSendNotification
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">invoiceSendNotification</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of an invoice to be sent.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">InvoiceSendNotification</code></span>](/api-reference/orders/objects/invoice-send-notification)

Send an invoice notification to the customer.

Requires one of the following permissions: MANAGE_ORDERS.

Triggers the following webhook events:

- INVOICE_SENT (async): A notification for invoice send
- NOTIFY_USER (async): A notification for invoice send
