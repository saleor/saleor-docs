---
api_reference: true
id: order-sort-field
title: OrderSortField
---

No description

```graphql
enum OrderSortField {
  NUMBER
  RANK
  CREATION_DATE @deprecated
  CREATED_AT
  LAST_MODIFIED_AT
  CUSTOMER
  PAYMENT @deprecated
  FULFILLMENT_STATUS @deprecated
  STATUS
}
```

### Values

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderSortField</code>.<code class="gqlmd-mdx-entity-name">NUMBER</code></span>](#number) \{#number\}

Sort orders by number.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderSortField</code>.<code class="gqlmd-mdx-entity-name">RANK</code></span>](#rank) \{#rank\}

Sort orders by rank. Note: This option is available only with the `search` filter.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderSortField</code>.<code class="gqlmd-mdx-entity-name">CREATED_AT</code></span>](#created-at) \{#created-at\}

Sort orders by creation date.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderSortField</code>.<code class="gqlmd-mdx-entity-name">LAST_MODIFIED_AT</code></span>](#last-modified-at) \{#last-modified-at\}

Sort orders by last modified date.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderSortField</code>.<code class="gqlmd-mdx-entity-name">CUSTOMER</code></span>](#customer) \{#customer\}

Sort orders by customer.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderSortField</code>.<code class="gqlmd-mdx-entity-name">STATUS</code></span>](#status) \{#status\}

Sort orders by order status.

Added in Saleor 3.22.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderSortField</code>.<code class="gqlmd-mdx-entity-name">CREATION_DATE</code></span>](#creation-date) \{#creation-date\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `CREATED_AT` instead.

</span>
</fieldset>

Sort orders by creation date

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderSortField</code>.<code class="gqlmd-mdx-entity-name">PAYMENT</code></span>](#payment) \{#payment\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

The legacy Payments API is deprecated and will be removed. Use the Transactions API instead.

</span>
</fieldset>

Sort orders by payment status.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderSortField</code>.<code class="gqlmd-mdx-entity-name">FULFILLMENT_STATUS</code></span>](#fulfillment-status) \{#fulfillment-status\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `STATUS` instead.

</span>
</fieldset>

Sort orders by fulfillment status.

</details>

### Member Of

[`OrderSortingInput`](/api-reference/orders/inputs/order-sorting-input) <mark class="gqlmd-mdx-badge">input</mark>
