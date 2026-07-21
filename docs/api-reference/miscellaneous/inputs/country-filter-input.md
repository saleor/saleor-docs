---
api_reference: true
id: country-filter-input
title: CountryFilterInput
---

No description

```graphql
input CountryFilterInput {
  attachedToShippingZones: Boolean
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CountryFilterInput</code>.<code class="gqlmd-mdx-entity-name">attachedToShippingZones</code></span>](#attached-to-shipping-zones)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#attached-to-shipping-zones\}

Boolean for filtering countries by having shipping zone assigned.If 'true', return countries with shipping zone assigned.If 'false', return countries without any shipping zone assigned.If the argument is not provided (null), return all countries.
