---
api_reference: true
id: invoice-update
title: InvoiceUpdate
---

Updates an invoice.

Requires one of the following permissions: MANAGE_ORDERS.

```graphql
type InvoiceUpdate {
  invoiceErrors: [InvoiceError!]! @deprecated
  errors: [InvoiceError!]!
  invoice: Invoice
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">InvoiceUpdate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[InvoiceError!]!</code></span>](/api-reference/orders/objects/invoice-error) \{#errors\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">InvoiceUpdate</code>.<code class="gqlmd-mdx-entity-name">invoice</code></span>](#invoice)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Invoice</code></span>](/api-reference/orders/objects/invoice) \{#invoice\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">InvoiceUpdate</code>.<code class="gqlmd-mdx-entity-name">invoiceErrors</code></span>](#invoice-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[InvoiceError!]!</code></span>](/api-reference/orders/objects/invoice-error) \{#invoice-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`invoiceUpdate`](/api-reference/orders/mutations/invoice-update) <mark class="gqlmd-mdx-badge">mutation</mark>
