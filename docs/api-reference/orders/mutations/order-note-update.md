---
api_reference: true
id: order-note-update
title: orderNoteUpdate
---

Updates note of an order.

Requires one of the following permissions: MANAGE_ORDERS.

```graphql
orderNoteUpdate(
  note: ID!
  input: OrderNoteInput!
): OrderNoteUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderNoteUpdate</code>.<code class="gqlmd-mdx-entity-name">note</code></span>](#note)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#note\}

ID of the note.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderNoteUpdate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderNoteInput!</code></span>](/api-reference/orders/inputs/order-note-input) \{#input\}

Fields required to create a note for the order.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderNoteUpdate</code></span>](/api-reference/orders/objects/order-note-update)

Updates note of an order.

Requires one of the following permissions: MANAGE_ORDERS.
