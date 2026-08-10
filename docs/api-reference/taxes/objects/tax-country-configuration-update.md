---
api_reference: true
id: tax-country-configuration-update
title: TaxCountryConfigurationUpdate
---

Updates tax class rates for a specific country.

Requires one of the following permissions: MANAGE_TAXES.

```graphql
type TaxCountryConfigurationUpdate {
  taxCountryConfiguration: TaxCountryConfiguration
  errors: [TaxCountryConfigurationUpdateError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxCountryConfigurationUpdate</code>.<code class="gqlmd-mdx-entity-name">taxCountryConfiguration</code></span>](#tax-country-configuration)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxCountryConfiguration</code></span>](/api-reference/taxes/objects/tax-country-configuration) \{#tax-country-configuration\}

Updated tax class rates grouped by a country.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxCountryConfigurationUpdate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[TaxCountryConfigurationUpdateError!]!</code></span>](/api-reference/taxes/objects/tax-country-configuration-update-error) \{#errors\}

### Returned By

[`taxCountryConfigurationUpdate`](/api-reference/taxes/mutations/tax-country-configuration-update) <mark class="gqlmd-mdx-badge">mutation</mark>
