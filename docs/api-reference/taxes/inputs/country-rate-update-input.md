---
api_reference: true
id: country-rate-update-input
title: CountryRateUpdateInput
---

No description

```graphql
input CountryRateUpdateInput {
  countryCode: CountryCode!
  rate: Float
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CountryRateUpdateInput</code>.<code class="gqlmd-mdx-entity-name">countryCode</code></span>](#country-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CountryCode!</code></span>](/api-reference/miscellaneous/enums/country-code) \{#country-code\}

Country in which this rate applies.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CountryRateUpdateInput</code>.<code class="gqlmd-mdx-entity-name">rate</code></span>](#rate)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Float</code></span>](/api-reference/miscellaneous/scalars/float) \{#rate\}

Tax rate value provided as percentage. Example: provide `23` to represent `23%` tax rate. Provide `null` to remove the particular rate.

### Member Of

[`TaxClassUpdateInput`](/api-reference/taxes/inputs/tax-class-update-input) <mark class="gqlmd-mdx-badge">input</mark>
