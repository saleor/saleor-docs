---
api_reference: true
id: tax-country-configuration
title: taxCountryConfiguration
---

Tax class rates grouped by country.

Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.

```graphql
taxCountryConfiguration(
  countryCode: CountryCode!
): TaxCountryConfiguration
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">taxCountryConfiguration</code>.<code class="gqlmd-mdx-entity-name">countryCode</code></span>](#country-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CountryCode!</code></span>](/api-reference/miscellaneous/enums/country-code) \{#country-code\}

Country for which to return tax class rates.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxCountryConfiguration</code></span>](/api-reference/taxes/objects/tax-country-configuration)

Tax class rates grouped by country.
