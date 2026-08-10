---
api_reference: true
id: draft-order-bulk-delete
title: draftOrderBulkDelete
---

Deletes draft orders.

Requires one of the following permissions: MANAGE_ORDERS.

```graphql
draftOrderBulkDelete(
  ids: [ID!]!
): DraftOrderBulkDelete
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">draftOrderBulkDelete</code>.<code class="gqlmd-mdx-entity-name">ids</code></span>](#ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]!</code></span>](/api-reference/miscellaneous/scalars/id) \{#ids\}

List of draft order IDs to delete.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DraftOrderBulkDelete</code></span>](/api-reference/orders/objects/draft-order-bulk-delete)

Deletes draft orders.

Requires one of the following permissions: MANAGE_ORDERS.
