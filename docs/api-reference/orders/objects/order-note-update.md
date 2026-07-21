---
api_reference: true
id: order-note-update
title: OrderNoteUpdate
---

Updates note of an order.

Requires one of the following permissions: MANAGE_ORDERS.

```graphql
type OrderNoteUpdate {
  order: Order
  event: OrderEvent
  errors: [OrderNoteUpdateError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderNoteUpdate</code>.<code class="gqlmd-mdx-entity-name">order</code></span>](#order)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Order</code></span>](/api-reference/orders/objects/order) \{#order\}

Order with the note updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderNoteUpdate</code>.<code class="gqlmd-mdx-entity-name">event</code></span>](#event)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderEvent</code></span>](/api-reference/orders/objects/order-event) \{#event\}

Order note updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderNoteUpdate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderNoteUpdateError!]!</code></span>](/api-reference/orders/objects/order-note-update-error) \{#errors\}

### Returned By

[`orderNoteUpdate`](/api-reference/orders/mutations/order-note-update) <mark class="gqlmd-mdx-badge">mutation</mark>
