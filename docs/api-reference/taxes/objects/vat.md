---
api_reference: true
id: vat
title: VAT
---

Represents a VAT rate for a country.

```graphql
type VAT {
  countryCode: String!
  standardRate: Float
  reducedRates: [ReducedRate!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VAT</code>.<code class="gqlmd-mdx-entity-name">countryCode</code></span>](#country-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#country-code\}

Country code.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VAT</code>.<code class="gqlmd-mdx-entity-name">standardRate</code></span>](#standard-rate)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Float</code></span>](/api-reference/miscellaneous/scalars/float) \{#standard-rate\}

Standard VAT rate in percent.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VAT</code>.<code class="gqlmd-mdx-entity-name">reducedRates</code></span>](#reduced-rates)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ReducedRate!]!</code></span>](/api-reference/taxes/objects/reduced-rate) \{#reduced-rates\}

Country's VAT rate exceptions for specific types of goods.

### Member Of

[`CountryDisplay`](/api-reference/miscellaneous/objects/country-display) <mark class="gqlmd-mdx-badge">object</mark>
