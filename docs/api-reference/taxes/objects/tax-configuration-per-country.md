---
api_reference: true
id: tax-configuration-per-country
title: TaxConfigurationPerCountry
---

Country-specific exceptions of a channel's tax configuration.

```graphql
type TaxConfigurationPerCountry {
  country: CountryDisplay!
  chargeTaxes: Boolean!
  taxCalculationStrategy: TaxCalculationStrategy
  displayGrossPrices: Boolean!
  taxAppId: String
  useWeightedTaxForShipping: Boolean
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxConfigurationPerCountry</code>.<code class="gqlmd-mdx-entity-name">country</code></span>](#country)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CountryDisplay!</code></span>](/api-reference/miscellaneous/objects/country-display) \{#country\}

Country in which this configuration applies.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxConfigurationPerCountry</code>.<code class="gqlmd-mdx-entity-name">chargeTaxes</code></span>](#charge-taxes)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#charge-taxes\}

Determines whether taxes are charged in this country.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxConfigurationPerCountry</code>.<code class="gqlmd-mdx-entity-name">taxCalculationStrategy</code></span>](#tax-calculation-strategy)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxCalculationStrategy</code></span>](/api-reference/taxes/enums/tax-calculation-strategy) \{#tax-calculation-strategy\}

A country-specific strategy to use for tax calculation. Taxes can be calculated either using user-defined flat rates or with a tax app. If not provided, use the value from the channel's tax configuration.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxConfigurationPerCountry</code>.<code class="gqlmd-mdx-entity-name">displayGrossPrices</code></span>](#display-gross-prices)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#display-gross-prices\}

Determines whether displayed prices should include taxes for this country.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxConfigurationPerCountry</code>.<code class="gqlmd-mdx-entity-name">taxAppId</code></span>](#tax-app-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#tax-app-id\}

The tax app `App.identifier` that will be used to calculate the taxes for the given channel and country. If not provided, use the value from the channel's tax configuration.

Added in Saleor 3.19.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxConfigurationPerCountry</code>.<code class="gqlmd-mdx-entity-name">useWeightedTaxForShipping</code></span>](#use-weighted-tax-for-shipping)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#use-weighted-tax-for-shipping\}

Determines whether to use weighted tax for shipping. When set to true, the tax rate for shipping will be calculated based on the weighted average of tax rates from the order or checkout lines.

Added in Saleor 3.21.

### Member Of

[`TaxConfiguration`](/api-reference/taxes/objects/tax-configuration) <mark class="gqlmd-mdx-badge">object</mark>
