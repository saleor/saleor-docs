---
api_reference: true
id: product-pricing-info
title: ProductPricingInfo
---

Represents availability of a product in the storefront.

```graphql
type ProductPricingInfo {
  onSale: Boolean
  discount: TaxedMoney
  discountPrior: TaxedMoney
  discountLocalCurrency: TaxedMoney @deprecated
  displayGrossPrices: Boolean!
  priceRange: TaxedMoneyRange
  priceRangeUndiscounted: TaxedMoneyRange
  priceRangePrior: TaxedMoneyRange
  priceRangeLocalCurrency: TaxedMoneyRange @deprecated
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductPricingInfo</code>.<code class="gqlmd-mdx-entity-name">onSale</code></span>](#on-sale)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#on-sale\}

Whether it is in sale or not.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductPricingInfo</code>.<code class="gqlmd-mdx-entity-name">discount</code></span>](#discount)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxedMoney</code></span>](/api-reference/miscellaneous/objects/taxed-money) \{#discount\}

The discount amount if in sale (null otherwise).

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductPricingInfo</code>.<code class="gqlmd-mdx-entity-name">discountPrior</code></span>](#discount-prior)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxedMoney</code></span>](/api-reference/miscellaneous/objects/taxed-money) \{#discount-prior\}

The discount amount compared to prior price. Null if product is not on sale or prior price was not provided in VariantChannelListing

Added in Saleor 3.21.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductPricingInfo</code>.<code class="gqlmd-mdx-entity-name">displayGrossPrices</code></span>](#display-gross-prices)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#display-gross-prices\}

Determines whether displayed prices should include taxes.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductPricingInfo</code>.<code class="gqlmd-mdx-entity-name">priceRange</code></span>](#price-range)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxedMoneyRange</code></span>](/api-reference/miscellaneous/objects/taxed-money-range) \{#price-range\}

The discounted price range of the product variants.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductPricingInfo</code>.<code class="gqlmd-mdx-entity-name">priceRangeUndiscounted</code></span>](#price-range-undiscounted)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxedMoneyRange</code></span>](/api-reference/miscellaneous/objects/taxed-money-range) \{#price-range-undiscounted\}

The undiscounted price range of the product variants.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductPricingInfo</code>.<code class="gqlmd-mdx-entity-name">priceRangePrior</code></span>](#price-range-prior)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxedMoneyRange</code></span>](/api-reference/miscellaneous/objects/taxed-money-range) \{#price-range-prior\}

The prior price range of the product variants.

Added in Saleor 3.21.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductPricingInfo</code>.<code class="gqlmd-mdx-entity-name">discountLocalCurrency</code></span>](#discount-local-currency)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxedMoney</code></span>](/api-reference/miscellaneous/objects/taxed-money) \{#discount-local-currency\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Always returns `null`.

</span>
</fieldset>

The discount amount in the local currency.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductPricingInfo</code>.<code class="gqlmd-mdx-entity-name">priceRangeLocalCurrency</code></span>](#price-range-local-currency)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxedMoneyRange</code></span>](/api-reference/miscellaneous/objects/taxed-money-range) \{#price-range-local-currency\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Always returns `null`.

</span>
</fieldset>

The discounted price range of the product variants in the local currency.

</details>

### Member Of

[`Product`](/api-reference/products/objects/product) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductChannelListing`](/api-reference/products/objects/product-channel-listing) <mark class="gqlmd-mdx-badge">object</mark>
