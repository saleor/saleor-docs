---
api_reference: true
id: export-voucher-codes-input
title: ExportVoucherCodesInput
---

No description

```graphql
input ExportVoucherCodesInput {
  voucherId: ID
  ids: [ID!]
  fileType: FileTypesEnum!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExportVoucherCodesInput</code>.<code class="gqlmd-mdx-entity-name">voucherId</code></span>](#voucher-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#voucher-id\}

The ID of the voucher. If provided, exports all codes belonging to the voucher.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExportVoucherCodesInput</code>.<code class="gqlmd-mdx-entity-name">ids</code></span>](#ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#ids\}

List of voucher code IDs to export.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExportVoucherCodesInput</code>.<code class="gqlmd-mdx-entity-name">fileType</code></span>](#file-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">FileTypesEnum!</code></span>](/api-reference/miscellaneous/enums/file-types-enum) \{#file-type\}

Type of exported file.

### Member Of

[`exportVoucherCodes`](/api-reference/deprecated/discounts/mutations/export-voucher-codes) <mark class="gqlmd-mdx-badge">mutation</mark>
