---
api_reference: true
id: tax-country-configuration
title: TaxCountryConfiguration
---

Tax class rates grouped by country.

```graphql
type TaxCountryConfiguration {
  country: CountryDisplay!
  taxClassCountryRates: [TaxClassCountryRate!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxCountryConfiguration</code>.<code class="gqlmd-mdx-entity-name">country</code></span>](#country)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CountryDisplay!</code></span>](/api-reference/miscellaneous/objects/country-display) \{#country\}

A country for which tax class rates are grouped.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxCountryConfiguration</code>.<code class="gqlmd-mdx-entity-name">taxClassCountryRates</code></span>](#tax-class-country-rates)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[TaxClassCountryRate!]!</code></span>](/api-reference/taxes/objects/tax-class-country-rate) \{#tax-class-country-rates\}

List of tax class rates.

### Returned By

[`taxCountryConfiguration`](/api-reference/taxes/queries/tax-country-configuration) <mark class="gqlmd-mdx-badge">query</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`taxCountryConfigurations`](/api-reference/taxes/queries/tax-country-configurations) <mark class="gqlmd-mdx-badge">query</mark>

### Member Of

[`TaxCountryConfigurationDelete`](/api-reference/taxes/objects/tax-country-configuration-delete) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`TaxCountryConfigurationUpdate`](/api-reference/taxes/objects/tax-country-configuration-update) <mark class="gqlmd-mdx-badge">object</mark>
