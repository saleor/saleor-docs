---
api_reference: true
id: tax-configuration-update-input
title: TaxConfigurationUpdateInput
---

No description

```graphql
input TaxConfigurationUpdateInput {
  chargeTaxes: Boolean
  taxCalculationStrategy: TaxCalculationStrategy
  displayGrossPrices: Boolean
  pricesEnteredWithTax: Boolean
  updateCountriesConfiguration: [TaxConfigurationPerCountryInput!]
  removeCountriesConfiguration: [CountryCode!]
  useWeightedTaxForShipping: Boolean
  taxAppId: String
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxConfigurationUpdateInput</code>.<code class="gqlmd-mdx-entity-name">chargeTaxes</code></span>](#charge-taxes)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#charge-taxes\}

Determines whether taxes are charged in the given channel.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxConfigurationUpdateInput</code>.<code class="gqlmd-mdx-entity-name">taxCalculationStrategy</code></span>](#tax-calculation-strategy)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxCalculationStrategy</code></span>](/api-reference/taxes/enums/tax-calculation-strategy) \{#tax-calculation-strategy\}

The default strategy to use for tax calculation in the given channel. Taxes can be calculated either using user-defined flat rates or with a tax app. Empty value means that no method is selected and taxes are not calculated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxConfigurationUpdateInput</code>.<code class="gqlmd-mdx-entity-name">displayGrossPrices</code></span>](#display-gross-prices)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#display-gross-prices\}

Determines whether displayed prices should include taxes.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxConfigurationUpdateInput</code>.<code class="gqlmd-mdx-entity-name">pricesEnteredWithTax</code></span>](#prices-entered-with-tax)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#prices-entered-with-tax\}

Determines whether prices are entered with the tax included.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxConfigurationUpdateInput</code>.<code class="gqlmd-mdx-entity-name">updateCountriesConfiguration</code></span>](#update-countries-configuration)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[TaxConfigurationPerCountryInput!]</code></span>](/api-reference/taxes/inputs/tax-configuration-per-country-input) \{#update-countries-configuration\}

List of tax country configurations to create or update (identified by a country code).

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxConfigurationUpdateInput</code>.<code class="gqlmd-mdx-entity-name">removeCountriesConfiguration</code></span>](#remove-countries-configuration)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CountryCode!]</code></span>](/api-reference/miscellaneous/enums/country-code) \{#remove-countries-configuration\}

List of country codes for which to remove the tax configuration.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxConfigurationUpdateInput</code>.<code class="gqlmd-mdx-entity-name">useWeightedTaxForShipping</code></span>](#use-weighted-tax-for-shipping)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#use-weighted-tax-for-shipping\}

Determines whether to use weighted tax for shipping. When set to true, the tax rate for shipping will be calculated based on the weighted average of tax rates from the order or checkout lines. Default value is `False`.Can be used only with `taxCalculationStrategy` set to `FLAT_RATES`.

Added in Saleor 3.21.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxConfigurationUpdateInput</code>.<code class="gqlmd-mdx-entity-name">taxAppId</code></span>](#tax-app-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#tax-app-id\}

The tax app `App.identifier` that will be used to calculate the taxes for the given channel. Empty value for `TAX_APP` set as `taxCalculationStrategy` means that Saleor will iterate over all installed tax apps. If multiple tax apps exist with provided tax app id use the `App` with newest `created` date. It's possible to set plugin by using prefix `plugin:` with `PLUGIN_ID` e.g. with Avalara `plugin:mirumee.taxes.avalara`.Will become mandatory in 4.0 for `TAX_APP` `taxCalculationStrategy`.

Added in Saleor 3.19.

### Member Of

[`taxConfigurationUpdate`](/api-reference/taxes/mutations/tax-configuration-update) <mark class="gqlmd-mdx-badge">mutation</mark>
