---
api_reference: true
id: export-voucher-codes
title: ExportVoucherCodes
---

Export voucher codes to csv/xlsx file.

Added in Saleor 3.18.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- VOUCHER_CODE_EXPORT_COMPLETED (async): A notification for the exported file.

```graphql
type ExportVoucherCodes {
  exportFile: ExportFile
  errors: [ExportError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExportVoucherCodes</code>.<code class="gqlmd-mdx-entity-name">exportFile</code></span>](#export-file)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ExportFile</code></span>](/api-reference/miscellaneous/objects/export-file) \{#export-file\}

The newly created export file job which is responsible for export data.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExportVoucherCodes</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ExportError!]!</code></span>](/api-reference/miscellaneous/objects/export-error) \{#errors\}

### Returned By

[`exportVoucherCodes`](/api-reference/deprecated/discounts/mutations/export-voucher-codes) <mark class="gqlmd-mdx-badge">mutation</mark>
