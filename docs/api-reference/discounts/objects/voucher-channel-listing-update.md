---
api_reference: true
id: voucher-channel-listing-update
title: VoucherChannelListingUpdate
---

Manage voucher's availability in channels.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- VOUCHER_UPDATED (async): A voucher was updated.

```graphql
type VoucherChannelListingUpdate {
  voucher: Voucher
  discountErrors: [DiscountError!]! @deprecated
  errors: [DiscountError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherChannelListingUpdate</code>.<code class="gqlmd-mdx-entity-name">voucher</code></span>](#voucher)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Voucher</code></span>](/api-reference/discounts/objects/voucher) \{#voucher\}

An updated voucher instance.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherChannelListingUpdate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[DiscountError!]!</code></span>](/api-reference/discounts/objects/discount-error) \{#errors\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherChannelListingUpdate</code>.<code class="gqlmd-mdx-entity-name">discountErrors</code></span>](#discount-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[DiscountError!]!</code></span>](/api-reference/discounts/objects/discount-error) \{#discount-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`voucherChannelListingUpdate`](/api-reference/discounts/mutations/voucher-channel-listing-update) <mark class="gqlmd-mdx-badge">mutation</mark>
