---
api_reference: true
id: sale-sorting-input
title: SaleSortingInput
---

No description

```graphql
input SaleSortingInput {
  direction: OrderDirection!
  channel: String @deprecated
  field: SaleSortField!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SaleSortingInput</code>.<code class="gqlmd-mdx-entity-name">direction</code></span>](#direction)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderDirection!</code></span>](/api-reference/miscellaneous/enums/order-direction) \{#direction\}

Specifies the direction in which to sort sales.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SaleSortingInput</code>.<code class="gqlmd-mdx-entity-name">field</code></span>](#field)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">SaleSortField!</code></span>](/api-reference/discounts/enums/sale-sort-field) \{#field\}

Sort sales by the selected field.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SaleSortingInput</code>.<code class="gqlmd-mdx-entity-name">channel</code></span>](#channel)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#channel\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use root-level channel argument instead.

</span>
</fieldset>

Specifies the channel in which to sort the data.

</details>

### Member Of

[`sales`](/api-reference/deprecated/discounts/queries/sales) <mark class="gqlmd-mdx-badge">query</mark>
