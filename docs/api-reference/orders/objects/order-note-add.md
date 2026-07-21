---
api_reference: true
id: order-note-add
title: OrderNoteAdd
---

Adds note to the order.

Requires one of the following permissions: MANAGE_ORDERS.

```graphql
type OrderNoteAdd {
  order: Order
  event: OrderEvent
  errors: [OrderNoteAddError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderNoteAdd</code>.<code class="gqlmd-mdx-entity-name">order</code></span>](#order)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Order</code></span>](/api-reference/orders/objects/order) \{#order\}

Order with the note added.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderNoteAdd</code>.<code class="gqlmd-mdx-entity-name">event</code></span>](#event)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderEvent</code></span>](/api-reference/orders/objects/order-event) \{#event\}

Order note created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderNoteAdd</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderNoteAddError!]!</code></span>](/api-reference/orders/objects/order-note-add-error) \{#errors\}

### Returned By

[`orderNoteAdd`](/api-reference/orders/mutations/order-note-add) <mark class="gqlmd-mdx-badge">mutation</mark>
