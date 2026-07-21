---
api_reference: true
id: draft-order-update
title: draftOrderUpdate
---

Updates a draft order.

Requires one of the following permissions: MANAGE_ORDERS.

```graphql
draftOrderUpdate(
  externalReference: String
  id: ID
  input: DraftOrderInput!
): DraftOrderUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">draftOrderUpdate</code>.<code class="gqlmd-mdx-entity-name">externalReference</code></span>](#external-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#external-reference\}

External ID of a draft order to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">draftOrderUpdate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of a draft order to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">draftOrderUpdate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DraftOrderInput!</code></span>](/api-reference/orders/inputs/draft-order-input) \{#input\}

Fields required to update an order.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DraftOrderUpdate</code></span>](/api-reference/orders/objects/draft-order-update)

Updates a draft order.

Requires one of the following permissions: MANAGE_ORDERS.
