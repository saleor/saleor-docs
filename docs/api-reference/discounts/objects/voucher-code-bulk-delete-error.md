---
api_reference: true
id: voucher-code-bulk-delete-error
title: VoucherCodeBulkDeleteError
---

No description

```graphql
type VoucherCodeBulkDeleteError {
  path: String
  message: String
  code: VoucherCodeBulkDeleteErrorCode!
  voucherCodes: [ID!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherCodeBulkDeleteError</code>.<code class="gqlmd-mdx-entity-name">path</code></span>](#path)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#path\}

Path to field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherCodeBulkDeleteError</code>.<code class="gqlmd-mdx-entity-name">message</code></span>](#message)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#message\}

The error message.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherCodeBulkDeleteError</code>.<code class="gqlmd-mdx-entity-name">code</code></span>](#code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">VoucherCodeBulkDeleteErrorCode!</code></span>](/api-reference/discounts/enums/voucher-code-bulk-delete-error-code) \{#code\}

The error code.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherCodeBulkDeleteError</code>.<code class="gqlmd-mdx-entity-name">voucherCodes</code></span>](#voucher-codes)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#voucher-codes\}

List of voucher codes which causes the error.

### Member Of

[`VoucherCodeBulkDelete`](/api-reference/discounts/objects/voucher-code-bulk-delete) <mark class="gqlmd-mdx-badge">object</mark>
