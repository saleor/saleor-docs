---
api_reference: true
id: tax-country-configuration-delete
title: TaxCountryConfigurationDelete
---

Remove all tax class rates for a specific country.

Requires one of the following permissions: MANAGE_TAXES.

```graphql
type TaxCountryConfigurationDelete {
  taxCountryConfiguration: TaxCountryConfiguration
  errors: [TaxCountryConfigurationDeleteError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxCountryConfigurationDelete</code>.<code class="gqlmd-mdx-entity-name">taxCountryConfiguration</code></span>](#tax-country-configuration)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxCountryConfiguration</code></span>](/api-reference/taxes/objects/tax-country-configuration) \{#tax-country-configuration\}

Updated tax class rates grouped by a country.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxCountryConfigurationDelete</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[TaxCountryConfigurationDeleteError!]!</code></span>](/api-reference/taxes/objects/tax-country-configuration-delete-error) \{#errors\}

### Returned By

[`taxCountryConfigurationDelete`](/api-reference/taxes/mutations/tax-country-configuration-delete) <mark class="gqlmd-mdx-badge">mutation</mark>
