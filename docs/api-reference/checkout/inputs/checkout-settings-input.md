---
api_reference: true
id: checkout-settings-input
title: CheckoutSettingsInput
---

No description

```graphql
input CheckoutSettingsInput {
  useLegacyErrorFlow: Boolean @deprecated
  automaticallyCompleteFullyPaidCheckouts: Boolean @deprecated
  automaticCompletion: CheckoutAutoCompleteInput
  allowLegacyGiftCardUse: Boolean
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutSettingsInput</code>.<code class="gqlmd-mdx-entity-name">automaticCompletion</code></span>](#automatic-completion)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CheckoutAutoCompleteInput</code></span>](/api-reference/checkout/inputs/checkout-auto-complete-input) \{#automatic-completion\}

Settings for automatic completion of fully paid checkouts.

Added in Saleor 3.22.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutSettingsInput</code>.<code class="gqlmd-mdx-entity-name">allowLegacyGiftCardUse</code></span>](#allow-legacy-gift-card-use)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#allow-legacy-gift-card-use\}

Default to `true`. Determines whether gift cards can be attached to a Checkout via `addPromoCode` mutation. Usage of this mutation with gift cards is deprecated.

Added in Saleor 3.23.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutSettingsInput</code>.<code class="gqlmd-mdx-entity-name">useLegacyErrorFlow</code></span>](#use-legacy-error-flow)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#use-legacy-error-flow\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

No longer supported

</span>
</fieldset>

Default `true`. Determines if the checkout mutations should use legacy error flow. In legacy flow, all mutations can raise an exception unrelated to the requested action - (e.g. out-of-stock exception when updating checkoutShippingAddress.) If `false`, the errors will be aggregated in `checkout.problems` field. Some of the `problems` can block the finalizing checkout process. The legacy flow will be removed in Saleor 4.0. The flow with `checkout.problems` will be the default one.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutSettingsInput</code>.<code class="gqlmd-mdx-entity-name">automaticallyCompleteFullyPaidCheckouts</code></span>](#automatically-complete-fully-paid-checkouts)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#automatically-complete-fully-paid-checkouts\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `automatic_completion` instead.

</span>
</fieldset>

Default `false`. Determines if the paid checkouts should be automatically completed. This setting applies only to checkouts where payment was processed through transactions.When enabled, the checkout will be automatically completed once the checkout `authorize_status` reaches `FULL`. This occurs when the total sum of charged and authorized transaction amounts equals or exceeds the checkout's total amount.

Added in Saleor 3.20.

</details>

### Member Of

[`ChannelCreateInput`](/api-reference/channels/inputs/channel-create-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ChannelUpdateInput`](/api-reference/channels/inputs/channel-update-input) <mark class="gqlmd-mdx-badge">input</mark>
