---
api_reference: true
id: export-products
title: ExportProducts
---

Export products to csv file.

Requires one of the following permissions: MANAGE_PRODUCTS.

Triggers the following webhook events:

- NOTIFY_USER (async): A notification for the exported file.
- PRODUCT_EXPORT_COMPLETED (async): A notification for the exported file.

```graphql
type ExportProducts {
  exportFile: ExportFile
  exportErrors: [ExportError!]! @deprecated
  errors: [ExportError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExportProducts</code>.<code class="gqlmd-mdx-entity-name">exportFile</code></span>](#export-file)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ExportFile</code></span>](/api-reference/miscellaneous/objects/export-file) \{#export-file\}

The newly created export file job which is responsible for export data.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExportProducts</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ExportError!]!</code></span>](/api-reference/miscellaneous/objects/export-error) \{#errors\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExportProducts</code>.<code class="gqlmd-mdx-entity-name">exportErrors</code></span>](#export-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ExportError!]!</code></span>](/api-reference/miscellaneous/objects/export-error) \{#export-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`exportProducts`](/api-reference/deprecated/products/mutations/export-products) <mark class="gqlmd-mdx-badge">mutation</mark>
