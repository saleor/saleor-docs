---
api_reference: true
id: address-validation-rules
title: addressValidationRules
---

Returns address validation rules.

```graphql
addressValidationRules(
  countryCode: CountryCode!
  countryArea: String
  city: String
  cityArea: String
): AddressValidationData
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">addressValidationRules</code>.<code class="gqlmd-mdx-entity-name">countryCode</code></span>](#country-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CountryCode!</code></span>](/api-reference/miscellaneous/enums/country-code) \{#country-code\}

Two-letter ISO 3166-1 country code.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">addressValidationRules</code>.<code class="gqlmd-mdx-entity-name">countryArea</code></span>](#country-area)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#country-area\}

Designation of a region, province or state.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">addressValidationRules</code>.<code class="gqlmd-mdx-entity-name">city</code></span>](#city)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#city\}

City or a town name.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">addressValidationRules</code>.<code class="gqlmd-mdx-entity-name">cityArea</code></span>](#city-area)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#city-area\}

Sublocality like a district.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AddressValidationData</code></span>](/api-reference/users/objects/address-validation-data)

Represents address validation rules for a country.
