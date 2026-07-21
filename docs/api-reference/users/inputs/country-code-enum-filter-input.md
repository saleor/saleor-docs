---
api_reference: true
id: country-code-enum-filter-input
title: CountryCodeEnumFilterInput
---

Filter by country code.

```graphql
input CountryCodeEnumFilterInput {
  eq: CountryCode
  oneOf: [CountryCode!]
  notOneOf: [CountryCode!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CountryCodeEnumFilterInput</code>.<code class="gqlmd-mdx-entity-name">eq</code></span>](#eq)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CountryCode</code></span>](/api-reference/miscellaneous/enums/country-code) \{#eq\}

The value equal to.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CountryCodeEnumFilterInput</code>.<code class="gqlmd-mdx-entity-name">oneOf</code></span>](#one-of)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CountryCode!]</code></span>](/api-reference/miscellaneous/enums/country-code) \{#one-of\}

The value included in.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CountryCodeEnumFilterInput</code>.<code class="gqlmd-mdx-entity-name">notOneOf</code></span>](#not-one-of)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CountryCode!]</code></span>](/api-reference/miscellaneous/enums/country-code) \{#not-one-of\}

The value not included in.

### Member Of

[`AddressFilterInput`](/api-reference/users/inputs/address-filter-input) <mark class="gqlmd-mdx-badge">input</mark>
