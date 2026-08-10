---
api_reference: true
id: export-voucher-codes
title: exportVoucherCodes
---

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Export functionality is deprecated and will be removed. All data can be fetched via the GraphQL API and parsed into the desired format by apps or external tools.

</span>
</fieldset>

Export voucher codes to csv/xlsx file.

Added in Saleor 3.18.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- VOUCHER_CODE_EXPORT_COMPLETED (async): A notification for the exported file.

```graphql
exportVoucherCodes(
  input: ExportVoucherCodesInput!
): ExportVoucherCodes @deprecated
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">exportVoucherCodes</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ExportVoucherCodesInput!</code></span>](/api-reference/discounts/inputs/export-voucher-codes-input) \{#input\}

Fields required to export voucher codes.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ExportVoucherCodes</code></span>](/api-reference/discounts/objects/export-voucher-codes)

Export voucher codes to csv/xlsx file.

Added in Saleor 3.18.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- VOUCHER_CODE_EXPORT_COMPLETED (async): A notification for the exported file.
