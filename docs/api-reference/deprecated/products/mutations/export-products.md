---
api_reference: true
id: export-products
title: exportProducts
---

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Export functionality is deprecated and will be removed. All data can be fetched via the GraphQL API and parsed into the desired format by apps or external tools.

</span>
</fieldset>

Export products to csv file.

Requires one of the following permissions: MANAGE_PRODUCTS.

Triggers the following webhook events:

- NOTIFY_USER (async): A notification for the exported file.
- PRODUCT_EXPORT_COMPLETED (async): A notification for the exported file.

```graphql
exportProducts(
  input: ExportProductsInput!
): ExportProducts @deprecated
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">exportProducts</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ExportProductsInput!</code></span>](/api-reference/products/inputs/export-products-input) \{#input\}

Fields required to export product data.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ExportProducts</code></span>](/api-reference/products/objects/export-products)

Export products to csv file.

Requires one of the following permissions: MANAGE_PRODUCTS.

Triggers the following webhook events:

- NOTIFY_USER (async): A notification for the exported file.
- PRODUCT_EXPORT_COMPLETED (async): A notification for the exported file.
