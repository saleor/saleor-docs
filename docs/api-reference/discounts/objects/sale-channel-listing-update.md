---
api_reference: true
id: sale-channel-listing-update
title: SaleChannelListingUpdate
---

Manage sale's availability in channels.

Requires one of the following permissions: MANAGE_DISCOUNTS.

```graphql
type SaleChannelListingUpdate {
  sale: Sale
  discountErrors: [DiscountError!]! @deprecated
  errors: [DiscountError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SaleChannelListingUpdate</code>.<code class="gqlmd-mdx-entity-name">sale</code></span>](#sale)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Sale</code></span>](/api-reference/discounts/objects/sale) \{#sale\}

An updated sale instance.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SaleChannelListingUpdate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[DiscountError!]!</code></span>](/api-reference/discounts/objects/discount-error) \{#errors\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SaleChannelListingUpdate</code>.<code class="gqlmd-mdx-entity-name">discountErrors</code></span>](#discount-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[DiscountError!]!</code></span>](/api-reference/discounts/objects/discount-error) \{#discount-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`saleChannelListingUpdate`](/api-reference/deprecated/discounts/mutations/sale-channel-listing-update) <mark class="gqlmd-mdx-badge">mutation</mark>
