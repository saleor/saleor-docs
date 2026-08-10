---
api_reference: true
id: voucher-code-bulk-delete
title: voucherCodeBulkDelete
---

Deletes voucher codes.

Added in Saleor 3.18.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- VOUCHER_CODES_DELETED (async): A voucher codes were deleted.

```graphql
voucherCodeBulkDelete(
  ids: [ID!]!
): VoucherCodeBulkDelete
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">voucherCodeBulkDelete</code>.<code class="gqlmd-mdx-entity-name">ids</code></span>](#ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]!</code></span>](/api-reference/miscellaneous/scalars/id) \{#ids\}

List of voucher codes IDs to delete.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">VoucherCodeBulkDelete</code></span>](/api-reference/discounts/objects/voucher-code-bulk-delete)

Deletes voucher codes.

Added in Saleor 3.18.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- VOUCHER_CODES_DELETED (async): A voucher codes were deleted.
