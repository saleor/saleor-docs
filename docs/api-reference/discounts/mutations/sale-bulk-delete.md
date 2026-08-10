---
api_reference: true
id: sale-bulk-delete
title: saleBulkDelete
---

Deletes sales.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- SALE_DELETED (async): A sale was deleted.

```graphql
saleBulkDelete(
  ids: [ID!]!
): SaleBulkDelete
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">saleBulkDelete</code>.<code class="gqlmd-mdx-entity-name">ids</code></span>](#ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]!</code></span>](/api-reference/miscellaneous/scalars/id) \{#ids\}

List of sale IDs to delete.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">SaleBulkDelete</code></span>](/api-reference/discounts/objects/sale-bulk-delete)

Deletes sales.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- SALE_DELETED (async): A sale was deleted.
