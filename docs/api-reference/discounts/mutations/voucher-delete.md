---
api_reference: true
id: voucher-delete
title: voucherDelete
---

Deletes a voucher.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- VOUCHER_DELETED (async): A voucher was deleted.

```graphql
voucherDelete(
  id: ID!
): VoucherDelete
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">voucherDelete</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of a voucher to delete.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">VoucherDelete</code></span>](/api-reference/discounts/objects/voucher-delete)

Deletes a voucher.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- VOUCHER_DELETED (async): A voucher was deleted.
