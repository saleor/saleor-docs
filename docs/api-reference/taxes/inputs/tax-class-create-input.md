---
api_reference: true
id: tax-class-create-input
title: TaxClassCreateInput
---

No description

```graphql
input TaxClassCreateInput {
  name: String!
  createCountryRates: [CountryRateInput!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxClassCreateInput</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Name of the tax class.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxClassCreateInput</code>.<code class="gqlmd-mdx-entity-name">createCountryRates</code></span>](#create-country-rates)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CountryRateInput!]</code></span>](/api-reference/taxes/inputs/country-rate-input) \{#create-country-rates\}

List of country-specific tax rates to create for this tax class.

### Member Of

[`taxClassCreate`](/api-reference/taxes/mutations/tax-class-create) <mark class="gqlmd-mdx-badge">mutation</mark>
