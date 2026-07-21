---
api_reference: true
id: voucher-bulk-delete
title: voucherBulkDelete
---

Deletes vouchers.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- VOUCHER_DELETED (async): A voucher was deleted.

```graphql
voucherBulkDelete(
  ids: [ID!]!
): VoucherBulkDelete
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">voucherBulkDelete</code>.<code class="gqlmd-mdx-entity-name">ids</code></span>](#ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]!</code></span>](/api-reference/miscellaneous/scalars/id) \{#ids\}

List of voucher IDs to delete.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">VoucherBulkDelete</code></span>](/api-reference/discounts/objects/voucher-bulk-delete)

Deletes vouchers.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- VOUCHER_DELETED (async): A voucher was deleted.
