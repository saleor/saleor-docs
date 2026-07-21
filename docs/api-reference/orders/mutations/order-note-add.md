---
api_reference: true
id: order-note-add
title: orderNoteAdd
---

Adds note to the order.

Requires one of the following permissions: MANAGE_ORDERS.

```graphql
orderNoteAdd(
  order: ID!
  input: OrderNoteInput!
): OrderNoteAdd
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderNoteAdd</code>.<code class="gqlmd-mdx-entity-name">order</code></span>](#order)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#order\}

ID of the order to add a note for.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderNoteAdd</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderNoteInput!</code></span>](/api-reference/orders/inputs/order-note-input) \{#input\}

Fields required to create a note for the order.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderNoteAdd</code></span>](/api-reference/orders/objects/order-note-add)

Adds note to the order.

Requires one of the following permissions: MANAGE_ORDERS.
