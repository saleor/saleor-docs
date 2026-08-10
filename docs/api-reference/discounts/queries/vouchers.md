---
api_reference: true
id: vouchers
title: vouchers
---

List of the shop's vouchers.

Requires one of the following permissions: MANAGE_DISCOUNTS.

```graphql
vouchers(
  filter: VoucherFilterInput
  sortBy: VoucherSortingInput
  query: String
  channel: String
  before: String
  after: String
  first: Int
  last: Int
): VoucherCountableConnection
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">vouchers</code>.<code class="gqlmd-mdx-entity-name">filter</code></span>](#filter)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">VoucherFilterInput</code></span>](/api-reference/discounts/inputs/voucher-filter-input) \{#filter\}

Filtering options for vouchers.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">vouchers</code>.<code class="gqlmd-mdx-entity-name">sortBy</code></span>](#sort-by)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">VoucherSortingInput</code></span>](/api-reference/discounts/inputs/voucher-sorting-input) \{#sort-by\}

Sort voucher.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">vouchers</code>.<code class="gqlmd-mdx-entity-name">channel</code></span>](#channel)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#channel\}

Slug of a channel for which the data should be returned.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">vouchers</code>.<code class="gqlmd-mdx-entity-name">before</code></span>](#before)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#before\}

Return the elements in the list that come before the specified cursor.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">vouchers</code>.<code class="gqlmd-mdx-entity-name">after</code></span>](#after)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#after\}

Return the elements in the list that come after the specified cursor.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">vouchers</code>.<code class="gqlmd-mdx-entity-name">first</code></span>](#first)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#first\}

Retrieve the first n elements from the list. Note that the system only allows fetching a maximum of 100 objects in a single query.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">vouchers</code>.<code class="gqlmd-mdx-entity-name">last</code></span>](#last)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#last\}

Retrieve the last n elements from the list. Note that the system only allows fetching a maximum of 100 objects in a single query.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">vouchers</code>.<code class="gqlmd-mdx-entity-name">query</code></span>](#query)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#query\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `filter.search` input instead.

</span>
</fieldset>

Search vouchers by name or code.

</details>

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">VoucherCountableConnection</code></span>](/api-reference/discounts/objects/voucher-countable-connection)
