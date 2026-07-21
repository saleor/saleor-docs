---
api_reference: true
id: tax-country-configuration-update
title: taxCountryConfigurationUpdate
---

Updates tax class rates for a specific country.

Requires one of the following permissions: MANAGE_TAXES.

```graphql
taxCountryConfigurationUpdate(
  countryCode: CountryCode!
  updateTaxClassRates: [TaxClassRateInput!]!
): TaxCountryConfigurationUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">taxCountryConfigurationUpdate</code>.<code class="gqlmd-mdx-entity-name">countryCode</code></span>](#country-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CountryCode!</code></span>](/api-reference/miscellaneous/enums/country-code) \{#country-code\}

Country in which to update the tax class rates.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">taxCountryConfigurationUpdate</code>.<code class="gqlmd-mdx-entity-name">updateTaxClassRates</code></span>](#update-tax-class-rates)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[TaxClassRateInput!]!</code></span>](/api-reference/taxes/inputs/tax-class-rate-input) \{#update-tax-class-rates\}

List of tax rates per tax class to update. When `{taxClass: id, rate: null`} is passed, it deletes the rate object for given taxClass ID. When `{rate: Int}` is passed without a tax class, it updates the default tax class for this country.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxCountryConfigurationUpdate</code></span>](/api-reference/taxes/objects/tax-country-configuration-update)

Updates tax class rates for a specific country.

Requires one of the following permissions: MANAGE_TAXES.
