---
api_reference: true
id: voucher-sort-field
title: VoucherSortField
---

No description

```graphql
enum VoucherSortField {
  CODE @deprecated
  NAME
  START_DATE
  END_DATE
  VALUE
  TYPE
  USAGE_LIMIT
  MINIMUM_SPENT_AMOUNT
}
```

### Values

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherSortField</code>.<code class="gqlmd-mdx-entity-name">NAME</code></span>](#name) \{#name\}

Sort vouchers by name.

Added in Saleor 3.18.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherSortField</code>.<code class="gqlmd-mdx-entity-name">START_DATE</code></span>](#start-date) \{#start-date\}

Sort vouchers by start date.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherSortField</code>.<code class="gqlmd-mdx-entity-name">END_DATE</code></span>](#end-date) \{#end-date\}

Sort vouchers by end date.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherSortField</code>.<code class="gqlmd-mdx-entity-name">VALUE</code></span>](#value) \{#value\}

Sort vouchers by value.

This option requires a channel filter to work as the values can vary between channels.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherSortField</code>.<code class="gqlmd-mdx-entity-name">TYPE</code></span>](#type) \{#type\}

Sort vouchers by type.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherSortField</code>.<code class="gqlmd-mdx-entity-name">USAGE_LIMIT</code></span>](#usage-limit) \{#usage-limit\}

Sort vouchers by usage limit.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherSortField</code>.<code class="gqlmd-mdx-entity-name">MINIMUM_SPENT_AMOUNT</code></span>](#minimum-spent-amount) \{#minimum-spent-amount\}

Sort vouchers by minimum spent amount.

This option requires a channel filter to work as the values can vary between channels.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherSortField</code>.<code class="gqlmd-mdx-entity-name">CODE</code></span>](#code) \{#code\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

No longer supported

</span>
</fieldset>

Sort vouchers by code.

</details>

### Member Of

[`VoucherSortingInput`](/api-reference/discounts/inputs/voucher-sorting-input) <mark class="gqlmd-mdx-badge">input</mark>
