---
api_reference: true
id: draft-order-create-input
title: DraftOrderCreateInput
---

No description

```graphql
input DraftOrderCreateInput {
  billingAddress: AddressInput
  saveBillingAddress: Boolean
  user: ID
  userEmail: String
  discount: PositiveDecimal @deprecated
  shippingAddress: AddressInput
  saveShippingAddress: Boolean
  shippingMethod: ID
  voucher: ID @deprecated
  voucherCode: String
  customerNote: String
  channelId: ID
  redirectUrl: String
  externalReference: String
  metadata: [MetadataInput!]
  privateMetadata: [MetadataInput!]
  languageCode: LanguageCodeEnum
  lines: [OrderLineCreateInput!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DraftOrderCreateInput</code>.<code class="gqlmd-mdx-entity-name">billingAddress</code></span>](#billing-address)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AddressInput</code></span>](/api-reference/miscellaneous/inputs/address-input) \{#billing-address\}

Billing address of the customer.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DraftOrderCreateInput</code>.<code class="gqlmd-mdx-entity-name">saveBillingAddress</code></span>](#save-billing-address)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#save-billing-address\}

Indicates whether the billing address should be saved to the user’s address book upon draft order completion. Can only be set when a billing address is provided. If not specified along with the address, the default behavior is to not save the address.

Added in Saleor 3.21.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DraftOrderCreateInput</code>.<code class="gqlmd-mdx-entity-name">user</code></span>](#user)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#user\}

Customer associated with the draft order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DraftOrderCreateInput</code>.<code class="gqlmd-mdx-entity-name">userEmail</code></span>](#user-email)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#user-email\}

Email address of the customer.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DraftOrderCreateInput</code>.<code class="gqlmd-mdx-entity-name">shippingAddress</code></span>](#shipping-address)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AddressInput</code></span>](/api-reference/miscellaneous/inputs/address-input) \{#shipping-address\}

Shipping address of the customer.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DraftOrderCreateInput</code>.<code class="gqlmd-mdx-entity-name">saveShippingAddress</code></span>](#save-shipping-address)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#save-shipping-address\}

Indicates whether the shipping address should be saved to the user’s address book upon draft order completion.Can only be set when a shipping address is provided. If not specified along with the address, the default behavior is to not save the address.

Added in Saleor 3.21.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DraftOrderCreateInput</code>.<code class="gqlmd-mdx-entity-name">shippingMethod</code></span>](#shipping-method)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#shipping-method\}

ID of a selected shipping method.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DraftOrderCreateInput</code>.<code class="gqlmd-mdx-entity-name">voucherCode</code></span>](#voucher-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#voucher-code\}

A code of the voucher associated with the order.

Added in Saleor 3.18.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DraftOrderCreateInput</code>.<code class="gqlmd-mdx-entity-name">customerNote</code></span>](#customer-note)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#customer-note\}

A note from a customer. Visible by customers in the order summary.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DraftOrderCreateInput</code>.<code class="gqlmd-mdx-entity-name">channelId</code></span>](#channel-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#channel-id\}

ID of the channel associated with the order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DraftOrderCreateInput</code>.<code class="gqlmd-mdx-entity-name">redirectUrl</code></span>](#redirect-url)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#redirect-url\}

URL of a view where users should be redirected to see the order details. URL in RFC 1808 format.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DraftOrderCreateInput</code>.<code class="gqlmd-mdx-entity-name">externalReference</code></span>](#external-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#external-reference\}

External ID of this order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DraftOrderCreateInput</code>.<code class="gqlmd-mdx-entity-name">metadata</code></span>](#metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataInput!]</code></span>](/api-reference/miscellaneous/inputs/metadata-input) \{#metadata\}

Order public metadata.

Added in Saleor 3.21. Can be read by any API client authorized to read the object it's attached to.

Warning: never store sensitive information, including financial data such as credit card details.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DraftOrderCreateInput</code>.<code class="gqlmd-mdx-entity-name">privateMetadata</code></span>](#private-metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataInput!]</code></span>](/api-reference/miscellaneous/inputs/metadata-input) \{#private-metadata\}

Order private metadata.

Added in Saleor 3.21. Requires permissions to modify and to read the metadata of the object it's attached to.

Warning: never store sensitive information, including financial data such as credit card details.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DraftOrderCreateInput</code>.<code class="gqlmd-mdx-entity-name">languageCode</code></span>](#language-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LanguageCodeEnum</code></span>](/api-reference/miscellaneous/enums/language-code-enum) \{#language-code\}

Order language code.

Added in Saleor 3.21.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DraftOrderCreateInput</code>.<code class="gqlmd-mdx-entity-name">lines</code></span>](#lines)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderLineCreateInput!]</code></span>](/api-reference/orders/inputs/order-line-create-input) \{#lines\}

Variant line input consisting of variant ID and quantity of products.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DraftOrderCreateInput</code>.<code class="gqlmd-mdx-entity-name">discount</code></span>](#discount)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveDecimal</code></span>](/api-reference/miscellaneous/scalars/positive-decimal) \{#discount\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Providing a value for the field has no effect. Use `orderDiscountAdd` mutation instead.

</span>
</fieldset>

Discount amount for the order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DraftOrderCreateInput</code>.<code class="gqlmd-mdx-entity-name">voucher</code></span>](#voucher)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#voucher\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `voucherCode` instead.

</span>
</fieldset>

ID of the voucher associated with the order.

</details>

### Member Of

[`draftOrderCreate`](/api-reference/orders/mutations/draft-order-create) <mark class="gqlmd-mdx-badge">mutation</mark>
