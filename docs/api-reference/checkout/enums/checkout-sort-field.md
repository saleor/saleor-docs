---
api_reference: true
id: checkout-sort-field
title: CheckoutSortField
---

No description

```graphql
enum CheckoutSortField {
  CREATION_DATE
  CUSTOMER
  PAYMENT @deprecated
  RANK
}
```

### Values

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutSortField</code>.<code class="gqlmd-mdx-entity-name">CREATION_DATE</code></span>](#creation-date) \{#creation-date\}

Sort checkouts by creation date.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutSortField</code>.<code class="gqlmd-mdx-entity-name">CUSTOMER</code></span>](#customer) \{#customer\}

Sort checkouts by customer.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutSortField</code>.<code class="gqlmd-mdx-entity-name">RANK</code></span>](#rank) \{#rank\}

Sort checkouts by rank. Note: This option is available only with the `search` filter.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutSortField</code>.<code class="gqlmd-mdx-entity-name">PAYMENT</code></span>](#payment) \{#payment\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

The legacy Payments API is deprecated and will be removed. Use the Transactions API instead.

</span>
</fieldset>

Sort checkouts by payment.

</details>

### Member Of

[`CheckoutSortingInput`](/api-reference/checkout/inputs/checkout-sorting-input) <mark class="gqlmd-mdx-badge">input</mark>
