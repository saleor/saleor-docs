---
api_reference: true
id: tax-class-country-rate
title: TaxClassCountryRate
---

Tax rate for a country. When tax class is null, it represents the default tax rate for that country; otherwise it's a country tax rate specific to the given tax class.

```graphql
type TaxClassCountryRate {
  country: CountryDisplay!
  rate: Float!
  taxClass: TaxClass
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxClassCountryRate</code>.<code class="gqlmd-mdx-entity-name">country</code></span>](#country)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CountryDisplay!</code></span>](/api-reference/miscellaneous/objects/country-display) \{#country\}

Country in which this tax rate applies.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxClassCountryRate</code>.<code class="gqlmd-mdx-entity-name">rate</code></span>](#rate)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Float!</code></span>](/api-reference/miscellaneous/scalars/float) \{#rate\}

Tax rate value.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxClassCountryRate</code>.<code class="gqlmd-mdx-entity-name">taxClass</code></span>](#tax-class)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxClass</code></span>](/api-reference/taxes/objects/tax-class) \{#tax-class\}

Related tax class.

### Member Of

[`TaxClass`](/api-reference/taxes/objects/tax-class) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`TaxCountryConfiguration`](/api-reference/taxes/objects/tax-country-configuration) <mark class="gqlmd-mdx-badge">object</mark>
