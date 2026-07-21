---
api_reference: true
id: variant-pricing-info
title: VariantPricingInfo
---

Represents availability of a variant in the storefront.

```graphql
type VariantPricingInfo {
  onSale: Boolean
  discount: TaxedMoney
  discountPrior: TaxedMoney
  discountLocalCurrency: TaxedMoney @deprecated
  price: TaxedMoney
  priceUndiscounted: TaxedMoney
  pricePrior: TaxedMoney
  priceLocalCurrency: TaxedMoney @deprecated
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VariantPricingInfo</code>.<code class="gqlmd-mdx-entity-name">onSale</code></span>](#on-sale)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#on-sale\}

Whether it is in sale or not.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VariantPricingInfo</code>.<code class="gqlmd-mdx-entity-name">discount</code></span>](#discount)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxedMoney</code></span>](/api-reference/miscellaneous/objects/taxed-money) \{#discount\}

The discount amount if in sale (null otherwise).

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VariantPricingInfo</code>.<code class="gqlmd-mdx-entity-name">discountPrior</code></span>](#discount-prior)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxedMoney</code></span>](/api-reference/miscellaneous/objects/taxed-money) \{#discount-prior\}

The discount amount compared to prior price. Null if product is not on sale or prior price was not provided in VariantChannelListing

Added in Saleor 3.21.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VariantPricingInfo</code>.<code class="gqlmd-mdx-entity-name">price</code></span>](#price)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxedMoney</code></span>](/api-reference/miscellaneous/objects/taxed-money) \{#price\}

The price, with any discount subtracted.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VariantPricingInfo</code>.<code class="gqlmd-mdx-entity-name">priceUndiscounted</code></span>](#price-undiscounted)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxedMoney</code></span>](/api-reference/miscellaneous/objects/taxed-money) \{#price-undiscounted\}

The price without any discount.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VariantPricingInfo</code>.<code class="gqlmd-mdx-entity-name">pricePrior</code></span>](#price-prior)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxedMoney</code></span>](/api-reference/miscellaneous/objects/taxed-money) \{#price-prior\}

The price prior to discount.

Added in Saleor 3.21.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VariantPricingInfo</code>.<code class="gqlmd-mdx-entity-name">discountLocalCurrency</code></span>](#discount-local-currency)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxedMoney</code></span>](/api-reference/miscellaneous/objects/taxed-money) \{#discount-local-currency\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Always returns `null`.

</span>
</fieldset>

The discount amount in the local currency.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VariantPricingInfo</code>.<code class="gqlmd-mdx-entity-name">priceLocalCurrency</code></span>](#price-local-currency)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxedMoney</code></span>](/api-reference/miscellaneous/objects/taxed-money) \{#price-local-currency\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Always returns `null`.

</span>
</fieldset>

The discounted price in the local currency.

</details>

### Member Of

[`ProductVariant`](/api-reference/products/objects/product-variant) <mark class="gqlmd-mdx-badge">object</mark>
