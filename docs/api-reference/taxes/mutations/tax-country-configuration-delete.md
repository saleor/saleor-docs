---
api_reference: true
id: tax-country-configuration-delete
title: taxCountryConfigurationDelete
---

Remove all tax class rates for a specific country.

Requires one of the following permissions: MANAGE_TAXES.

```graphql
taxCountryConfigurationDelete(
  countryCode: CountryCode!
): TaxCountryConfigurationDelete
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">taxCountryConfigurationDelete</code>.<code class="gqlmd-mdx-entity-name">countryCode</code></span>](#country-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CountryCode!</code></span>](/api-reference/miscellaneous/enums/country-code) \{#country-code\}

Country in which to update the tax class rates.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxCountryConfigurationDelete</code></span>](/api-reference/taxes/objects/tax-country-configuration-delete)

Remove all tax class rates for a specific country.

Requires one of the following permissions: MANAGE_TAXES.
