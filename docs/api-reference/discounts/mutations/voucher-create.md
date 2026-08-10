---
api_reference: true
id: voucher-create
title: voucherCreate
---

Creates a new voucher.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- VOUCHER_CREATED (async): A voucher was created.
- VOUCHER_CODES_CREATED (async): A voucher codes were created.

```graphql
voucherCreate(
  input: VoucherInput!
): VoucherCreate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">voucherCreate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">VoucherInput!</code></span>](/api-reference/discounts/inputs/voucher-input) \{#input\}

Fields required to create a voucher.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">VoucherCreate</code></span>](/api-reference/discounts/objects/voucher-create)

Creates a new voucher.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- VOUCHER_CREATED (async): A voucher was created.
- VOUCHER_CODES_CREATED (async): A voucher codes were created.
