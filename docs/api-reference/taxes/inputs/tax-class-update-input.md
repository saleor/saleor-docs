---
api_reference: true
id: tax-class-update-input
title: TaxClassUpdateInput
---

No description

```graphql
input TaxClassUpdateInput {
  name: String
  updateCountryRates: [CountryRateUpdateInput!]
  removeCountryRates: [CountryCode!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxClassUpdateInput</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Name of the tax class.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxClassUpdateInput</code>.<code class="gqlmd-mdx-entity-name">updateCountryRates</code></span>](#update-country-rates)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CountryRateUpdateInput!]</code></span>](/api-reference/taxes/inputs/country-rate-update-input) \{#update-country-rates\}

List of country-specific tax rates to create or update for this tax class.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxClassUpdateInput</code>.<code class="gqlmd-mdx-entity-name">removeCountryRates</code></span>](#remove-country-rates)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CountryCode!]</code></span>](/api-reference/miscellaneous/enums/country-code) \{#remove-country-rates\}

List of country codes for which to remove the tax class rates. Note: It removes all rates for given country code.

### Member Of

[`taxClassUpdate`](/api-reference/taxes/mutations/tax-class-update) <mark class="gqlmd-mdx-badge">mutation</mark>
