---
api_reference: true
id: tax-class-rate-input
title: TaxClassRateInput
---

No description

```graphql
input TaxClassRateInput {
  taxClassId: ID
  rate: Float
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxClassRateInput</code>.<code class="gqlmd-mdx-entity-name">taxClassId</code></span>](#tax-class-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#tax-class-id\}

ID of a tax class for which to update the tax rate

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxClassRateInput</code>.<code class="gqlmd-mdx-entity-name">rate</code></span>](#rate)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Float</code></span>](/api-reference/miscellaneous/scalars/float) \{#rate\}

Tax rate value.

### Member Of

[`taxCountryConfigurationUpdate`](/api-reference/taxes/mutations/tax-country-configuration-update) <mark class="gqlmd-mdx-badge">mutation</mark>
