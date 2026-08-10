---
api_reference: true
id: order-add-note
title: orderAddNote
---

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `orderNoteAdd` instead.

</span>
</fieldset>

Adds note to the order.

Requires one of the following permissions: MANAGE_ORDERS.

```graphql
orderAddNote(
  order: ID!
  input: OrderAddNoteInput!
): OrderAddNote @deprecated
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderAddNote</code>.<code class="gqlmd-mdx-entity-name">order</code></span>](#order)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#order\}

ID of the order to add a note for.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderAddNote</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderAddNoteInput!</code></span>](/api-reference/orders/inputs/order-add-note-input) \{#input\}

Fields required to create a note for the order.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderAddNote</code></span>](/api-reference/orders/objects/order-add-note)

Adds note to the order.

Requires one of the following permissions: MANAGE_ORDERS.
