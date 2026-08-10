---
api_reference: true
id: voucher-update
title: voucherUpdate
---

Updates a voucher.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- VOUCHER_UPDATED (async): A voucher was updated.
- VOUCHER_CODES_CREATED (async): A voucher code was created.

```graphql
voucherUpdate(
  id: ID!
  input: VoucherInput!
): VoucherUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">voucherUpdate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of a voucher to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">voucherUpdate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">VoucherInput!</code></span>](/api-reference/discounts/inputs/voucher-input) \{#input\}

Fields required to update a voucher.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">VoucherUpdate</code></span>](/api-reference/discounts/objects/voucher-update)

Updates a voucher.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- VOUCHER_UPDATED (async): A voucher was updated.
- VOUCHER_CODES_CREATED (async): A voucher code was created.
