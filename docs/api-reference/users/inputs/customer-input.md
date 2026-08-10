---
api_reference: true
id: customer-input
title: CustomerInput
---

No description

```graphql
input CustomerInput {
  defaultBillingAddress: AddressInput
  defaultShippingAddress: AddressInput
  firstName: String
  lastName: String
  email: String
  isActive: Boolean
  note: String
  metadata: [MetadataInput!]
  privateMetadata: [MetadataInput!]
  languageCode: LanguageCodeEnum
  externalReference: String
  isConfirmed: Boolean
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CustomerInput</code>.<code class="gqlmd-mdx-entity-name">defaultBillingAddress</code></span>](#default-billing-address)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AddressInput</code></span>](/api-reference/miscellaneous/inputs/address-input) \{#default-billing-address\}

Billing address of the customer.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CustomerInput</code>.<code class="gqlmd-mdx-entity-name">defaultShippingAddress</code></span>](#default-shipping-address)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AddressInput</code></span>](/api-reference/miscellaneous/inputs/address-input) \{#default-shipping-address\}

Shipping address of the customer.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CustomerInput</code>.<code class="gqlmd-mdx-entity-name">firstName</code></span>](#first-name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#first-name\}

Given name.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CustomerInput</code>.<code class="gqlmd-mdx-entity-name">lastName</code></span>](#last-name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#last-name\}

Family name.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CustomerInput</code>.<code class="gqlmd-mdx-entity-name">email</code></span>](#email)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#email\}

The unique email address of the user.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CustomerInput</code>.<code class="gqlmd-mdx-entity-name">isActive</code></span>](#is-active)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-active\}

User account is active.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CustomerInput</code>.<code class="gqlmd-mdx-entity-name">note</code></span>](#note)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#note\}

A note about the user.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CustomerInput</code>.<code class="gqlmd-mdx-entity-name">metadata</code></span>](#metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataInput!]</code></span>](/api-reference/miscellaneous/inputs/metadata-input) \{#metadata\}

Fields required to update the user metadata. Can be read by any API client authorized to read the object it's attached to.

Warning: never store sensitive information, including financial data such as credit card details.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CustomerInput</code>.<code class="gqlmd-mdx-entity-name">privateMetadata</code></span>](#private-metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataInput!]</code></span>](/api-reference/miscellaneous/inputs/metadata-input) \{#private-metadata\}

Fields required to update the user private metadata. Requires permissions to modify and to read the metadata of the object it's attached to.

Warning: never store sensitive information, including financial data such as credit card details.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CustomerInput</code>.<code class="gqlmd-mdx-entity-name">languageCode</code></span>](#language-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LanguageCodeEnum</code></span>](/api-reference/miscellaneous/enums/language-code-enum) \{#language-code\}

User language code.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CustomerInput</code>.<code class="gqlmd-mdx-entity-name">externalReference</code></span>](#external-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#external-reference\}

External ID of the customer.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CustomerInput</code>.<code class="gqlmd-mdx-entity-name">isConfirmed</code></span>](#is-confirmed)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-confirmed\}

User account is confirmed.

### Member Of

[`CustomerBulkUpdateInput`](/api-reference/users/inputs/customer-bulk-update-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`customerUpdate`](/api-reference/users/mutations/customer-update) <mark class="gqlmd-mdx-badge">mutation</mark>
