---
api_reference: true
id: address-validation-data
title: AddressValidationData
---

Represents address validation rules for a country.

```graphql
type AddressValidationData {
  countryCode: String!
  countryName: String!
  addressFormat: String!
  addressLatinFormat: String!
  allowedFields: [String!]!
  requiredFields: [String!]!
  upperFields: [String!]!
  countryAreaType: String!
  countryAreaChoices: [ChoiceValue!]!
  cityType: String!
  cityChoices: [ChoiceValue!]!
  cityAreaType: String!
  cityAreaChoices: [ChoiceValue!]!
  postalCodeType: String!
  postalCodeMatchers: [String!]!
  postalCodeExamples: [String!]!
  postalCodePrefix: String!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AddressValidationData</code>.<code class="gqlmd-mdx-entity-name">countryCode</code></span>](#country-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#country-code\}

The country code of the address validation rule.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AddressValidationData</code>.<code class="gqlmd-mdx-entity-name">countryName</code></span>](#country-name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#country-name\}

The country name of the address validation rule.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AddressValidationData</code>.<code class="gqlmd-mdx-entity-name">addressFormat</code></span>](#address-format)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#address-format\}

The address format of the address validation rule.

Many fields in the JSON refer to address fields by one-letter abbreviations. These are defined as follows:

- `N`: Name
- `O`: Organization
- `A`: Street Address Line(s)
- `D`: Dependent locality (may be an inner-city district or a suburb)
- `C`: City or Locality
- `S`: Administrative area such as a state, province, island etc
- `Z`: Zip or postal code
- `X`: Sorting code

[Click here for more information.](https://github.com/google/libaddressinput/wiki/AddressValidationMetadata)

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AddressValidationData</code>.<code class="gqlmd-mdx-entity-name">addressLatinFormat</code></span>](#address-latin-format)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#address-latin-format\}

The latin address format of the address validation rule.

Many fields in the JSON refer to address fields by one-letter abbreviations. These are defined as follows:

- `N`: Name
- `O`: Organization
- `A`: Street Address Line(s)
- `D`: Dependent locality (may be an inner-city district or a suburb)
- `C`: City or Locality
- `S`: Administrative area such as a state, province, island etc
- `Z`: Zip or postal code
- `X`: Sorting code

[Click here for more information.](https://github.com/google/libaddressinput/wiki/AddressValidationMetadata)

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AddressValidationData</code>.<code class="gqlmd-mdx-entity-name">allowedFields</code></span>](#allowed-fields)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]!</code></span>](/api-reference/miscellaneous/scalars/string) \{#allowed-fields\}

The allowed fields to use in address.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AddressValidationData</code>.<code class="gqlmd-mdx-entity-name">requiredFields</code></span>](#required-fields)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]!</code></span>](/api-reference/miscellaneous/scalars/string) \{#required-fields\}

The required fields to create a valid address.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AddressValidationData</code>.<code class="gqlmd-mdx-entity-name">upperFields</code></span>](#upper-fields)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]!</code></span>](/api-reference/miscellaneous/scalars/string) \{#upper-fields\}

The list of fields that should be in upper case for address validation rule.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AddressValidationData</code>.<code class="gqlmd-mdx-entity-name">countryAreaType</code></span>](#country-area-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#country-area-type\}

The formal name of the county area of the address validation rule.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AddressValidationData</code>.<code class="gqlmd-mdx-entity-name">countryAreaChoices</code></span>](#country-area-choices)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ChoiceValue!]!</code></span>](/api-reference/miscellaneous/objects/choice-value) \{#country-area-choices\}

The available choices for the country area of the address validation rule.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AddressValidationData</code>.<code class="gqlmd-mdx-entity-name">cityType</code></span>](#city-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#city-type\}

The formal name of the city of the address validation rule.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AddressValidationData</code>.<code class="gqlmd-mdx-entity-name">cityChoices</code></span>](#city-choices)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ChoiceValue!]!</code></span>](/api-reference/miscellaneous/objects/choice-value) \{#city-choices\}

The available choices for the city of the address validation rule.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AddressValidationData</code>.<code class="gqlmd-mdx-entity-name">cityAreaType</code></span>](#city-area-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#city-area-type\}

The formal name of the city area of the address validation rule.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AddressValidationData</code>.<code class="gqlmd-mdx-entity-name">cityAreaChoices</code></span>](#city-area-choices)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ChoiceValue!]!</code></span>](/api-reference/miscellaneous/objects/choice-value) \{#city-area-choices\}

The available choices for the city area of the address validation rule.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AddressValidationData</code>.<code class="gqlmd-mdx-entity-name">postalCodeType</code></span>](#postal-code-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#postal-code-type\}

The formal name of the postal code of the address validation rule.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AddressValidationData</code>.<code class="gqlmd-mdx-entity-name">postalCodeMatchers</code></span>](#postal-code-matchers)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]!</code></span>](/api-reference/miscellaneous/scalars/string) \{#postal-code-matchers\}

The regular expression for postal code validation.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AddressValidationData</code>.<code class="gqlmd-mdx-entity-name">postalCodeExamples</code></span>](#postal-code-examples)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]!</code></span>](/api-reference/miscellaneous/scalars/string) \{#postal-code-examples\}

The example postal code of the address validation rule.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AddressValidationData</code>.<code class="gqlmd-mdx-entity-name">postalCodePrefix</code></span>](#postal-code-prefix)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#postal-code-prefix\}

The postal code prefix of the address validation rule.

### Returned By

[`addressValidationRules`](/api-reference/users/queries/address-validation-rules) <mark class="gqlmd-mdx-badge">query</mark>
