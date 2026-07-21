---
api_reference: true
id: checkout
title: Checkout
---

Checkout object.

```graphql
type Checkout implements Node, ObjectWithMetadata {
  id: ID!
  privateMetadata: [MetadataItem!]!
  privateMetafield(
    key: String!
  ): String
  privateMetafields(
    keys: [String!]
  ): Metadata
  metadata: [MetadataItem!]!
  metafield(
    key: String!
  ): String
  metafields(
    keys: [String!]
  ): Metadata
  created: DateTime!
  updatedAt: DateTime!
  lastChange: DateTime! @deprecated
  user: User
  channel: Channel!
  billingAddress: Address
  shippingAddress: Address
  customerNote: String!
  note: String! @deprecated
  discount: Money
  discountName: String
  translatedDiscountName: String
  voucher: Voucher
  voucherCode: String
  availableShippingMethods: [ShippingMethod!]! @deprecated
  shippingMethods: [ShippingMethod!]!
  availableCollectionPoints: [Warehouse!]!
  availablePaymentGateways: [PaymentGateway!]! @deprecated
  email: String
  giftCards: [GiftCard!]!
  isShippingRequired: Boolean!
  quantity: Int!
  stockReservationExpires: DateTime
  lines: [CheckoutLine!]!
  shippingPrice: TaxedMoney!
  delivery: Delivery
  shippingMethod: ShippingMethod @deprecated
  deliveryMethod: DeliveryMethod @deprecated
  subtotalPrice: TaxedMoney!
  taxExemption: Boolean!
  token: UUID!
  totalPrice: TaxedMoney!
  totalBalance: Money!
  languageCode: LanguageCodeEnum!
  transactions: [TransactionItem!]
  displayGrossPrices: Boolean!
  authorizeStatus: CheckoutAuthorizeStatusEnum!
  chargeStatus: CheckoutChargeStatusEnum!
  storedPaymentMethods(
    amount: PositiveDecimal
  ): [StoredPaymentMethod!]
  problems: [CheckoutProblem!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of the checkout.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">privateMetadata</code></span>](#private-metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataItem!]!</code></span>](/api-reference/miscellaneous/objects/metadata-item) \{#private-metadata\}

List of private metadata items. Requires staff permissions to access.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">privateMetafield</code></span>](#private-metafield)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#private-metafield\}

A single key from private metadata. Requires staff permissions to access.

Tip: Use GraphQL aliases to fetch multiple keys.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout.privateMetafield</code>.<code class="gqlmd-mdx-entity-name">key</code></span>](#checkout-private-metafield-key)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#checkout-private-metafield-key\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">privateMetafields</code></span>](#private-metafields)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Metadata</code></span>](/api-reference/miscellaneous/scalars/metadata) \{#private-metafields\}

Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout.privateMetafields</code>.<code class="gqlmd-mdx-entity-name">keys</code></span>](#checkout-private-metafields-keys)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#checkout-private-metafields-keys\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">metadata</code></span>](#metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataItem!]!</code></span>](/api-reference/miscellaneous/objects/metadata-item) \{#metadata\}

List of public metadata items. Can be accessed without permissions.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">metafield</code></span>](#metafield)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#metafield\}

A single key from public metadata.

Tip: Use GraphQL aliases to fetch multiple keys.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout.metafield</code>.<code class="gqlmd-mdx-entity-name">key</code></span>](#checkout-metafield-key)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#checkout-metafield-key\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">metafields</code></span>](#metafields)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Metadata</code></span>](/api-reference/miscellaneous/scalars/metadata) \{#metafields\}

Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout.metafields</code>.<code class="gqlmd-mdx-entity-name">keys</code></span>](#checkout-metafields-keys)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#checkout-metafields-keys\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">created</code></span>](#created)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime!</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#created\}

The date and time when the checkout was created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">updatedAt</code></span>](#updated-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime!</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#updated-at\}

Time of last modification of the given checkout.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">user</code></span>](#user)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">User</code></span>](/api-reference/users/objects/user) \{#user\}

The user assigned to the checkout. Requires one of the following permissions: MANAGE_USERS, HANDLE_PAYMENTS, OWNER.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">channel</code></span>](#channel)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Channel!</code></span>](/api-reference/channels/objects/channel) \{#channel\}

The channel for which checkout was created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">billingAddress</code></span>](#billing-address)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Address</code></span>](/api-reference/users/objects/address) \{#billing-address\}

The billing address of the checkout.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">shippingAddress</code></span>](#shipping-address)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Address</code></span>](/api-reference/users/objects/address) \{#shipping-address\}

The shipping address of the checkout.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">customerNote</code></span>](#customer-note)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#customer-note\}

The customer note for the checkout.

Added in Saleor 3.21.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">discount</code></span>](#discount)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Money</code></span>](/api-reference/miscellaneous/objects/money) \{#discount\}

The total discount applied to the checkout. Note: Only discount created via voucher are included in this field.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">discountName</code></span>](#discount-name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#discount-name\}

The name of voucher assigned to the checkout.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">translatedDiscountName</code></span>](#translated-discount-name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#translated-discount-name\}

Translation of the discountName field in the language set in Checkout.languageCode field.Note: this field is set automatically when Checkout.languageCode is defined; otherwise it's null

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">voucher</code></span>](#voucher)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Voucher</code></span>](/api-reference/discounts/objects/voucher) \{#voucher\}

The voucher assigned to the checkout.

Added in Saleor 3.18.

Requires one of the following permissions: MANAGE_DISCOUNTS.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">voucherCode</code></span>](#voucher-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#voucher-code\}

The code of voucher assigned to the checkout.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">shippingMethods</code></span>](#shipping-methods)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ShippingMethod!]!</code></span>](/api-reference/shipping/objects/shipping-method) \{#shipping-methods\}

Shipping methods that can be used with this checkout.

Triggers the following webhook events:

- SHIPPING_LIST_METHODS_FOR_CHECKOUT (sync): Optionally triggered when cached external shipping methods are invalid.
- CHECKOUT_FILTER_SHIPPING_METHODS (sync): Optionally triggered when cached filtered shipping methods are invalid.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">availableCollectionPoints</code></span>](#available-collection-points)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[Warehouse!]!</code></span>](/api-reference/products/objects/warehouse) \{#available-collection-points\}

Collection points that can be used for this order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">email</code></span>](#email)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#email\}

Email of a customer.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">giftCards</code></span>](#gift-cards)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[GiftCard!]!</code></span>](/api-reference/gift-cards/objects/gift-card) \{#gift-cards\}

List of gift cards associated with this checkout.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">isShippingRequired</code></span>](#is-shipping-required)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-shipping-required\}

Returns True, if checkout requires shipping.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">quantity</code></span>](#quantity)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span>](/api-reference/miscellaneous/scalars/int) \{#quantity\}

The number of items purchased.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">stockReservationExpires</code></span>](#stock-reservation-expires)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#stock-reservation-expires\}

Date when oldest stock reservation for this checkout expires or null if no stock is reserved.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">lines</code></span>](#lines)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CheckoutLine!]!</code></span>](/api-reference/checkout/objects/checkout-line) \{#lines\}

A list of checkout lines, each containing information about an item in the checkout.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">shippingPrice</code></span>](#shipping-price)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxedMoney!</code></span>](/api-reference/miscellaneous/objects/taxed-money) \{#shipping-price\}

The price of the shipping, with all the taxes included. Set to 0 when no delivery method is selected.

Triggers the following webhook events:

- CHECKOUT_CALCULATE_TAXES (sync): Optionally triggered when checkout prices are expired.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">delivery</code></span>](#delivery)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Delivery</code></span>](/api-reference/miscellaneous/objects/delivery) \{#delivery\}

The delivery method selected for this checkout.

Added in Saleor 3.23.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">subtotalPrice</code></span>](#subtotal-price)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxedMoney!</code></span>](/api-reference/miscellaneous/objects/taxed-money) \{#subtotal-price\}

The price of the checkout before shipping, with taxes included.

Triggers the following webhook events:

- CHECKOUT_CALCULATE_TAXES (sync): Optionally triggered when checkout prices are expired.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">taxExemption</code></span>](#tax-exemption)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#tax-exemption\}

Returns True if checkout has to be exempt from taxes.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">token</code></span>](#token)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">UUID!</code></span>](/api-reference/miscellaneous/scalars/uuid) \{#token\}

The checkout's token.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">totalPrice</code></span>](#total-price)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxedMoney!</code></span>](/api-reference/miscellaneous/objects/taxed-money) \{#total-price\}

The sum of the checkout line prices, with all the taxes,shipping costs, and discounts included.

Triggers the following webhook events:

- CHECKOUT_CALCULATE_TAXES (sync): Optionally triggered when checkout prices are expired.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">totalBalance</code></span>](#total-balance)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Money!</code></span>](/api-reference/miscellaneous/objects/money) \{#total-balance\}

The difference between the paid and the checkout total amount.

Triggers the following webhook events:

- CHECKOUT_CALCULATE_TAXES (sync): Optionally triggered when checkout prices are expired.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">languageCode</code></span>](#language-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LanguageCodeEnum!</code></span>](/api-reference/miscellaneous/enums/language-code-enum) \{#language-code\}

Checkout language code.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">transactions</code></span>](#transactions)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[TransactionItem!]</code></span>](/api-reference/payments/objects/transaction-item) \{#transactions\}

List of transactions for the checkout. Requires one of the following permissions: MANAGE_CHECKOUTS, HANDLE_PAYMENTS.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">displayGrossPrices</code></span>](#display-gross-prices)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#display-gross-prices\}

Determines whether displayed prices should include taxes.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">authorizeStatus</code></span>](#authorize-status)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CheckoutAuthorizeStatusEnum!</code></span>](/api-reference/checkout/enums/checkout-authorize-status-enum) \{#authorize-status\}

The authorize status of the checkout.

Triggers the following webhook events:

- CHECKOUT_CALCULATE_TAXES (sync): Optionally triggered when checkout prices are expired.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">chargeStatus</code></span>](#charge-status)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CheckoutChargeStatusEnum!</code></span>](/api-reference/checkout/enums/checkout-charge-status-enum) \{#charge-status\}

The charge status of the checkout.

Triggers the following webhook events:

- CHECKOUT_CALCULATE_TAXES (sync): Optionally triggered when checkout prices are expired.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">storedPaymentMethods</code></span>](#stored-payment-methods)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[StoredPaymentMethod!]</code></span>](/api-reference/payments/objects/stored-payment-method) \{#stored-payment-methods\}

List of user's stored payment methods that can be used in this checkout session. It uses the channel that the checkout was created in. When `amount` is not provided, `checkout.total` will be used as a default value.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout.storedPaymentMethods</code>.<code class="gqlmd-mdx-entity-name">amount</code></span>](#checkout-stored-payment-methods-amount)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveDecimal</code></span>](/api-reference/miscellaneous/scalars/positive-decimal) \{#checkout-stored-payment-methods-amount\}

Amount that will be used to fetch stored payment methods.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">problems</code></span>](#problems)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CheckoutProblem!]</code></span>](/api-reference/miscellaneous/unions/checkout-problem) \{#problems\}

List of problems with the checkout.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">lastChange</code></span>](#last-change)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime!</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#last-change\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `updatedAt` instead.

</span>
</fieldset>

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">note</code></span>](#note)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#note\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `customerNote` instead.

</span>
</fieldset>

The note for the checkout.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">availableShippingMethods</code></span>](#available-shipping-methods)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ShippingMethod!]!</code></span>](/api-reference/shipping/objects/shipping-method) \{#available-shipping-methods\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `shippingMethods` instead.

</span>
</fieldset>

Shipping methods that can be used with this checkout.

Triggers the following webhook events:

- SHIPPING_LIST_METHODS_FOR_CHECKOUT (sync): Optionally triggered when cached external shipping methods are invalid.
- CHECKOUT_FILTER_SHIPPING_METHODS (sync): Optionally triggered when cached filtered shipping methods are invalid.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">availablePaymentGateways</code></span>](#available-payment-gateways)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[PaymentGateway!]!</code></span>](/api-reference/payments/objects/payment-gateway) \{#available-payment-gateways\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

The legacy Payments API is deprecated and will be removed. Use the Transactions API instead.

</span>
</fieldset>

List of available payment gateways.

Triggers the following webhook events:

- PAYMENT_LIST_GATEWAYS (sync): Fetch payment gateways available for checkout.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">shippingMethod</code></span>](#shipping-method)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ShippingMethod</code></span>](/api-reference/shipping/objects/shipping-method) \{#shipping-method\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `delivery` instead.

</span>
</fieldset>

The shipping method related with checkout.

Triggers the following webhook events:

- SHIPPING_LIST_METHODS_FOR_CHECKOUT (sync): Optionally triggered when cached external shipping methods are invalid.
- CHECKOUT_FILTER_SHIPPING_METHODS (sync): Optionally triggered when cached filtered shipping methods are invalid.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Checkout</code>.<code class="gqlmd-mdx-entity-name">deliveryMethod</code></span>](#delivery-method)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DeliveryMethod</code></span>](/api-reference/miscellaneous/unions/delivery-method) \{#delivery-method\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `delivery` instead.

</span>
</fieldset>

The delivery method selected for this checkout.

Triggers the following webhook events:

- SHIPPING_LIST_METHODS_FOR_CHECKOUT (sync): Optionally triggered when cached external shipping methods are invalid.
- CHECKOUT_FILTER_SHIPPING_METHODS (sync): Optionally triggered when cached filtered shipping methods are invalid.

</details>

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Node</code></span>](/api-reference/miscellaneous/interfaces/node)

An object with an ID

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ObjectWithMetadata</code></span>](/api-reference/miscellaneous/interfaces/object-with-metadata)

### Returned By

[`checkout`](/api-reference/checkout/queries/checkout) <mark class="gqlmd-mdx-badge">query</mark>

### Member Of

[`CheckoutAddPromoCode`](/api-reference/checkout/objects/checkout-add-promo-code) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutBillingAddressUpdate`](/api-reference/checkout/objects/checkout-billing-address-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutCountableEdge`](/api-reference/checkout/objects/checkout-countable-edge) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutCreate`](/api-reference/checkout/objects/checkout-create) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutCreated`](/api-reference/checkout/objects/checkout-created) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutCreateFromOrder`](/api-reference/checkout/objects/checkout-create-from-order) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutCustomerAttach`](/api-reference/checkout/objects/checkout-customer-attach) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutCustomerDetach`](/api-reference/checkout/objects/checkout-customer-detach) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutCustomerNoteUpdate`](/api-reference/checkout/objects/checkout-customer-note-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutDeliveryMethodUpdate`](/api-reference/checkout/objects/checkout-delivery-method-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutEmailUpdate`](/api-reference/checkout/objects/checkout-email-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutFilterShippingMethods`](/api-reference/checkout/objects/checkout-filter-shipping-methods) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutFullyAuthorized`](/api-reference/checkout/objects/checkout-fully-authorized) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutFullyPaid`](/api-reference/checkout/objects/checkout-fully-paid) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutLanguageCodeUpdate`](/api-reference/checkout/objects/checkout-language-code-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutLineDelete`](/api-reference/checkout/objects/checkout-line-delete) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutLinesAdd`](/api-reference/checkout/objects/checkout-lines-add) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutLinesDelete`](/api-reference/checkout/objects/checkout-lines-delete) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutLinesUpdate`](/api-reference/checkout/objects/checkout-lines-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutMetadataUpdated`](/api-reference/checkout/objects/checkout-metadata-updated) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutPaymentCreate`](/api-reference/checkout/objects/checkout-payment-create) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutRemovePromoCode`](/api-reference/checkout/objects/checkout-remove-promo-code) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutShippingAddressUpdate`](/api-reference/checkout/objects/checkout-shipping-address-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutShippingMethodUpdate`](/api-reference/checkout/objects/checkout-shipping-method-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutUpdated`](/api-reference/checkout/objects/checkout-updated) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`Payment`](/api-reference/payments/objects/payment) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PaymentListGateways`](/api-reference/payments/objects/payment-list-gateways) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ShippingListMethodsForCheckout`](/api-reference/checkout/objects/shipping-list-methods-for-checkout) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`TransactionItem`](/api-reference/payments/objects/transaction-item) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`User`](/api-reference/users/objects/user) <mark class="gqlmd-mdx-badge">object</mark>

### Implemented By

[`OrderOrCheckout`](/api-reference/miscellaneous/unions/order-or-checkout) <mark class="gqlmd-mdx-badge">union</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`TaxSourceObject`](/api-reference/miscellaneous/unions/tax-source-object) <mark class="gqlmd-mdx-badge">union</mark>
