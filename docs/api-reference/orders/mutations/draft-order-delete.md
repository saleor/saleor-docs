---
api_reference: true
id: draft-order-delete
title: draftOrderDelete
---

Deletes a draft order.

Requires one of the following permissions: MANAGE_ORDERS.

```graphql
draftOrderDelete(
  externalReference: String
  id: ID
): DraftOrderDelete
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">draftOrderDelete</code>.<code class="gqlmd-mdx-entity-name">externalReference</code></span>](#external-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#external-reference\}

External ID of a product to delete.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">draftOrderDelete</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of a product to delete.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DraftOrderDelete</code></span>](/api-reference/orders/objects/draft-order-delete)

Deletes a draft order.

Requires one of the following permissions: MANAGE_ORDERS.
