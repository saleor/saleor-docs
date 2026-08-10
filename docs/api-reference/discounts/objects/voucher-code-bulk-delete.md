---
api_reference: true
id: voucher-code-bulk-delete
title: VoucherCodeBulkDelete
---

Deletes voucher codes.

Added in Saleor 3.18.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- VOUCHER_CODES_DELETED (async): A voucher codes were deleted.

```graphql
type VoucherCodeBulkDelete {
  count: Int!
  errors: [VoucherCodeBulkDeleteError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherCodeBulkDelete</code>.<code class="gqlmd-mdx-entity-name">count</code></span>](#count)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span>](/api-reference/miscellaneous/scalars/int) \{#count\}

Returns how many codes were deleted.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherCodeBulkDelete</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[VoucherCodeBulkDeleteError!]!</code></span>](/api-reference/discounts/objects/voucher-code-bulk-delete-error) \{#errors\}

### Returned By

[`voucherCodeBulkDelete`](/api-reference/discounts/mutations/voucher-code-bulk-delete) <mark class="gqlmd-mdx-badge">mutation</mark>
