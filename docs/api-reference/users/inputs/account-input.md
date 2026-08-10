---
api_reference: true
id: account-input
title: AccountInput
---

Fields required to update the user.

```graphql
input AccountInput {
  firstName: String
  lastName: String
  languageCode: LanguageCodeEnum
  defaultBillingAddress: AddressInput
  defaultShippingAddress: AddressInput
  metadata: [MetadataInput!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AccountInput</code>.<code class="gqlmd-mdx-entity-name">firstName</code></span>](#first-name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#first-name\}

Given name.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AccountInput</code>.<code class="gqlmd-mdx-entity-name">lastName</code></span>](#last-name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#last-name\}

Family name.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AccountInput</code>.<code class="gqlmd-mdx-entity-name">languageCode</code></span>](#language-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LanguageCodeEnum</code></span>](/api-reference/miscellaneous/enums/language-code-enum) \{#language-code\}

User language code.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AccountInput</code>.<code class="gqlmd-mdx-entity-name">defaultBillingAddress</code></span>](#default-billing-address)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AddressInput</code></span>](/api-reference/miscellaneous/inputs/address-input) \{#default-billing-address\}

Billing address of the customer.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AccountInput</code>.<code class="gqlmd-mdx-entity-name">defaultShippingAddress</code></span>](#default-shipping-address)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AddressInput</code></span>](/api-reference/miscellaneous/inputs/address-input) \{#default-shipping-address\}

Shipping address of the customer.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AccountInput</code>.<code class="gqlmd-mdx-entity-name">metadata</code></span>](#metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataInput!]</code></span>](/api-reference/miscellaneous/inputs/metadata-input) \{#metadata\}

Fields required to update the user metadata. Can be read by any API client authorized to read the object it's attached to.

Warning: never store sensitive information, including financial data such as credit card details.

### Member Of

[`accountUpdate`](/api-reference/users/mutations/account-update) <mark class="gqlmd-mdx-badge">mutation</mark>
