---
api_reference: true
id: address-filter-input
title: AddressFilterInput
---

Filtering options for addresses.

```graphql
input AddressFilterInput {
  phoneNumber: StringFilterInput
  country: CountryCodeEnumFilterInput
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AddressFilterInput</code>.<code class="gqlmd-mdx-entity-name">phoneNumber</code></span>](#phone-number)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">StringFilterInput</code></span>](/api-reference/miscellaneous/inputs/string-filter-input) \{#phone-number\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AddressFilterInput</code>.<code class="gqlmd-mdx-entity-name">country</code></span>](#country)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CountryCodeEnumFilterInput</code></span>](/api-reference/users/inputs/country-code-enum-filter-input) \{#country\}

### Member Of

[`CustomerOrderWhereInput`](/api-reference/orders/inputs/customer-order-where-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CustomerWhereInput`](/api-reference/users/inputs/customer-where-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`DraftOrderWhereInput`](/api-reference/orders/inputs/draft-order-where-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderWhereInput`](/api-reference/orders/inputs/order-where-input) <mark class="gqlmd-mdx-badge">input</mark>
