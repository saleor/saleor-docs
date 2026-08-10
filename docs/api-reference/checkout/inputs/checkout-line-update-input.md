---
api_reference: true
id: checkout-line-update-input
title: CheckoutLineUpdateInput
---

No description

```graphql
input CheckoutLineUpdateInput {
  variantId: ID @deprecated
  quantity: Int
  price: PositiveDecimal
  priceOverrideReason: String
  lineId: ID
  metadata: [MetadataInput!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutLineUpdateInput</code>.<code class="gqlmd-mdx-entity-name">quantity</code></span>](#quantity)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#quantity\}

The number of items purchased. Optional for apps, required for any other users.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutLineUpdateInput</code>.<code class="gqlmd-mdx-entity-name">price</code></span>](#price)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveDecimal</code></span>](/api-reference/miscellaneous/scalars/positive-decimal) \{#price\}

Custom price of the item. Can be set only by apps with `HANDLE_CHECKOUTS` permission. When the line with the same variant will be provided multiple times, the last price will be used.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutLineUpdateInput</code>.<code class="gqlmd-mdx-entity-name">priceOverrideReason</code></span>](#price-override-reason)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#price-override-reason\}

Reason explaining why a custom `price` was set on the line, for debugging and auditing. Can be set only by apps with `HANDLE_CHECKOUTS` permission and only when the line has a `price` override. Setting a new `price` without a reason clears the previous reason. Blank values are stored as no reason. Limited to 255 characters; longer values are truncated.

Added in Saleor 3.23.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutLineUpdateInput</code>.<code class="gqlmd-mdx-entity-name">lineId</code></span>](#line-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#line-id\}

ID of the line.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutLineUpdateInput</code>.<code class="gqlmd-mdx-entity-name">metadata</code></span>](#metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataInput!]</code></span>](/api-reference/miscellaneous/inputs/metadata-input) \{#metadata\}

Checkout line public metadata. Will add and update keys. To delete keys use deleteMetadata mutation.

Added in Saleor 3.21. Can be read by any API client authorized to read the object it's attached to.

Warning: never store sensitive information, including financial data such as credit card details.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutLineUpdateInput</code>.<code class="gqlmd-mdx-entity-name">variantId</code></span>](#variant-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#variant-id\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `lineId` instead.

</span>
</fieldset>

ID of the product variant.

</details>

### Member Of

[`checkoutLinesUpdate`](/api-reference/checkout/mutations/checkout-lines-update) <mark class="gqlmd-mdx-badge">mutation</mark>
