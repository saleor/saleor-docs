---
api_reference: true
id: shipping-methods-per-country
title: ShippingMethodsPerCountry
---

List of shipping methods available for the country.

```graphql
type ShippingMethodsPerCountry {
  countryCode: CountryCode!
  shippingMethods: [ShippingMethod!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingMethodsPerCountry</code>.<code class="gqlmd-mdx-entity-name">countryCode</code></span>](#country-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CountryCode!</code></span>](/api-reference/miscellaneous/enums/country-code) \{#country-code\}

The country code.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingMethodsPerCountry</code>.<code class="gqlmd-mdx-entity-name">shippingMethods</code></span>](#shipping-methods)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ShippingMethod!]</code></span>](/api-reference/shipping/objects/shipping-method) \{#shipping-methods\}

List of available shipping methods.

### Member Of

[`Channel`](/api-reference/channels/objects/channel) <mark class="gqlmd-mdx-badge">object</mark>
