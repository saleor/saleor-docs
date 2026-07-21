---
api_reference: true
id: user
title: User
---

Represents user data.

```graphql
type User implements Node, ObjectWithMetadata {
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
  email: String!
  firstName: String!
  lastName: String!
  isStaff: Boolean!
  isActive: Boolean!
  isConfirmed: Boolean!
  addresses: [Address!]!
  checkout: Checkout @deprecated
  checkoutTokens(
    channel: String
  ): [UUID!] @deprecated
  checkoutIds(
    channel: String
  ): [ID!]
  checkouts(
    channel: String
    before: String
    after: String
    first: Int
    last: Int
  ): CheckoutCountableConnection
  giftCards(
    before: String
    after: String
    first: Int
    last: Int
  ): GiftCardCountableConnection
  note: String
  orders(
    where: CustomerOrderWhereInput
    before: String
    after: String
    first: Int
    last: Int
  ): OrderCountableConnection
  userPermissions: [UserPermission!]
  permissionGroups: [Group!]
  editableGroups: [Group!]
  accessibleChannels: [Channel!]
  restrictedAccessToChannels: Boolean!
  avatar(
    size: Int
    format: ThumbnailFormatEnum = ORIGINAL
  ): Image
  events: [CustomerEvent!]
  storedPaymentSources(
    channel: String
  ): [PaymentSource!] @deprecated
  languageCode: LanguageCodeEnum!
  defaultShippingAddress: Address
  defaultBillingAddress: Address
  externalReference: String
  lastLogin: DateTime
  dateJoined: DateTime!
  updatedAt: DateTime!
  storedPaymentMethods(
    channel: String!
  ): [StoredPaymentMethod!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of the user.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User</code>.<code class="gqlmd-mdx-entity-name">privateMetadata</code></span>](#private-metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataItem!]!</code></span>](/api-reference/miscellaneous/objects/metadata-item) \{#private-metadata\}

List of private metadata items. Requires staff permissions to access.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User</code>.<code class="gqlmd-mdx-entity-name">privateMetafield</code></span>](#private-metafield)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#private-metafield\}

A single key from private metadata. Requires staff permissions to access.

Tip: Use GraphQL aliases to fetch multiple keys.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User.privateMetafield</code>.<code class="gqlmd-mdx-entity-name">key</code></span>](#user-private-metafield-key)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#user-private-metafield-key\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User</code>.<code class="gqlmd-mdx-entity-name">privateMetafields</code></span>](#private-metafields)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Metadata</code></span>](/api-reference/miscellaneous/scalars/metadata) \{#private-metafields\}

Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User.privateMetafields</code>.<code class="gqlmd-mdx-entity-name">keys</code></span>](#user-private-metafields-keys)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#user-private-metafields-keys\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User</code>.<code class="gqlmd-mdx-entity-name">metadata</code></span>](#metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataItem!]!</code></span>](/api-reference/miscellaneous/objects/metadata-item) \{#metadata\}

List of public metadata items. Can be accessed without permissions.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User</code>.<code class="gqlmd-mdx-entity-name">metafield</code></span>](#metafield)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#metafield\}

A single key from public metadata.

Tip: Use GraphQL aliases to fetch multiple keys.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User.metafield</code>.<code class="gqlmd-mdx-entity-name">key</code></span>](#user-metafield-key)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#user-metafield-key\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User</code>.<code class="gqlmd-mdx-entity-name">metafields</code></span>](#metafields)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Metadata</code></span>](/api-reference/miscellaneous/scalars/metadata) \{#metafields\}

Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User.metafields</code>.<code class="gqlmd-mdx-entity-name">keys</code></span>](#user-metafields-keys)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#user-metafields-keys\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User</code>.<code class="gqlmd-mdx-entity-name">email</code></span>](#email)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#email\}

The email address of the user.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User</code>.<code class="gqlmd-mdx-entity-name">firstName</code></span>](#first-name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#first-name\}

The given name of the address.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User</code>.<code class="gqlmd-mdx-entity-name">lastName</code></span>](#last-name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#last-name\}

The family name of the address.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User</code>.<code class="gqlmd-mdx-entity-name">isStaff</code></span>](#is-staff)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-staff\}

Determine if the user is a staff admin.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User</code>.<code class="gqlmd-mdx-entity-name">isActive</code></span>](#is-active)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-active\}

Determine if the user is active.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User</code>.<code class="gqlmd-mdx-entity-name">isConfirmed</code></span>](#is-confirmed)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-confirmed\}

Determines if user has confirmed email.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User</code>.<code class="gqlmd-mdx-entity-name">addresses</code></span>](#addresses)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[Address!]!</code></span>](/api-reference/users/objects/address) \{#addresses\}

List of all user's addresses.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User</code>.<code class="gqlmd-mdx-entity-name">checkoutIds</code></span>](#checkout-ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#checkout-ids\}

Returns the checkout ID's assigned to this user.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User.checkoutIds</code>.<code class="gqlmd-mdx-entity-name">channel</code></span>](#user-checkout-ids-channel)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#user-checkout-ids-channel\}

Slug of a channel for which the data should be returned.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User</code>.<code class="gqlmd-mdx-entity-name">checkouts</code></span>](#checkouts)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CheckoutCountableConnection</code></span>](/api-reference/checkout/objects/checkout-countable-connection) \{#checkouts\}

Returns checkouts assigned to this user. The query will not initiate any external requests, including fetching external shipping methods, filtering available shipping methods, or performing external tax calculations.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User.checkouts</code>.<code class="gqlmd-mdx-entity-name">channel</code></span>](#user-checkouts-channel)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#user-checkouts-channel\}

Slug of a channel for which the data should be returned.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User.checkouts</code>.<code class="gqlmd-mdx-entity-name">before</code></span>](#user-checkouts-before)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#user-checkouts-before\}

Return the elements in the list that come before the specified cursor.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User.checkouts</code>.<code class="gqlmd-mdx-entity-name">after</code></span>](#user-checkouts-after)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#user-checkouts-after\}

Return the elements in the list that come after the specified cursor.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User.checkouts</code>.<code class="gqlmd-mdx-entity-name">first</code></span>](#user-checkouts-first)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#user-checkouts-first\}

Retrieve the first n elements from the list. Note that the system only allows fetching a maximum of 100 objects in a single query.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User.checkouts</code>.<code class="gqlmd-mdx-entity-name">last</code></span>](#user-checkouts-last)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#user-checkouts-last\}

Retrieve the last n elements from the list. Note that the system only allows fetching a maximum of 100 objects in a single query.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User</code>.<code class="gqlmd-mdx-entity-name">giftCards</code></span>](#gift-cards)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">GiftCardCountableConnection</code></span>](/api-reference/gift-cards/objects/gift-card-countable-connection) \{#gift-cards\}

List of the user gift cards.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User.giftCards</code>.<code class="gqlmd-mdx-entity-name">before</code></span>](#user-gift-cards-before)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#user-gift-cards-before\}

Return the elements in the list that come before the specified cursor.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User.giftCards</code>.<code class="gqlmd-mdx-entity-name">after</code></span>](#user-gift-cards-after)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#user-gift-cards-after\}

Return the elements in the list that come after the specified cursor.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User.giftCards</code>.<code class="gqlmd-mdx-entity-name">first</code></span>](#user-gift-cards-first)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#user-gift-cards-first\}

Retrieve the first n elements from the list. Note that the system only allows fetching a maximum of 100 objects in a single query.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User.giftCards</code>.<code class="gqlmd-mdx-entity-name">last</code></span>](#user-gift-cards-last)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#user-gift-cards-last\}

Retrieve the last n elements from the list. Note that the system only allows fetching a maximum of 100 objects in a single query.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User</code>.<code class="gqlmd-mdx-entity-name">note</code></span>](#note)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#note\}

A note about the customer.

Requires one of the following permissions: MANAGE_USERS, MANAGE_STAFF.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User</code>.<code class="gqlmd-mdx-entity-name">orders</code></span>](#orders)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderCountableConnection</code></span>](/api-reference/orders/objects/order-countable-connection) \{#orders\}

List of user's orders. The query will not initiate any external requests, including filtering available shipping methods, or performing external tax calculations. Requires one of the following permissions: MANAGE_STAFF, OWNER.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User.orders</code>.<code class="gqlmd-mdx-entity-name">where</code></span>](#user-orders-where)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CustomerOrderWhereInput</code></span>](/api-reference/orders/inputs/customer-order-where-input) \{#user-orders-where\}

Where filtering options for orders.

Added in Saleor 3.22.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User.orders</code>.<code class="gqlmd-mdx-entity-name">before</code></span>](#user-orders-before)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#user-orders-before\}

Return the elements in the list that come before the specified cursor.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User.orders</code>.<code class="gqlmd-mdx-entity-name">after</code></span>](#user-orders-after)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#user-orders-after\}

Return the elements in the list that come after the specified cursor.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User.orders</code>.<code class="gqlmd-mdx-entity-name">first</code></span>](#user-orders-first)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#user-orders-first\}

Retrieve the first n elements from the list. Note that the system only allows fetching a maximum of 100 objects in a single query.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User.orders</code>.<code class="gqlmd-mdx-entity-name">last</code></span>](#user-orders-last)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#user-orders-last\}

Retrieve the last n elements from the list. Note that the system only allows fetching a maximum of 100 objects in a single query.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User</code>.<code class="gqlmd-mdx-entity-name">userPermissions</code></span>](#user-permissions)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[UserPermission!]</code></span>](/api-reference/users/objects/user-permission) \{#user-permissions\}

List of user's permissions.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User</code>.<code class="gqlmd-mdx-entity-name">permissionGroups</code></span>](#permission-groups)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[Group!]</code></span>](/api-reference/users/objects/group) \{#permission-groups\}

List of user's permission groups.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User</code>.<code class="gqlmd-mdx-entity-name">editableGroups</code></span>](#editable-groups)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[Group!]</code></span>](/api-reference/users/objects/group) \{#editable-groups\}

List of user's permission groups which user can manage.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User</code>.<code class="gqlmd-mdx-entity-name">accessibleChannels</code></span>](#accessible-channels)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[Channel!]</code></span>](/api-reference/channels/objects/channel) \{#accessible-channels\}

List of channels the user has access to. The sum of channels from all user groups. If at least one group has `restrictedAccessToChannels` set to False - all channels are returned.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User</code>.<code class="gqlmd-mdx-entity-name">restrictedAccessToChannels</code></span>](#restricted-access-to-channels)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#restricted-access-to-channels\}

Determine if user have restricted access to channels. False if at least one user group has `restrictedAccessToChannels` set to False.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User</code>.<code class="gqlmd-mdx-entity-name">avatar</code></span>](#avatar)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Image</code></span>](/api-reference/miscellaneous/objects/image) \{#avatar\}

The avatar of the user.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User.avatar</code>.<code class="gqlmd-mdx-entity-name">size</code></span>](#user-avatar-size)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#user-avatar-size\}

Desired longest side the image in pixels. Defaults to 4096. Images are never cropped. Pass 0 to retrieve the original size (not recommended).

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User.avatar</code>.<code class="gqlmd-mdx-entity-name">format</code></span>](#user-avatar-format)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ThumbnailFormatEnum</code></span>](/api-reference/miscellaneous/enums/thumbnail-format-enum) \{#user-avatar-format\}

The format of the image. When not provided, format of the original image will be used.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User</code>.<code class="gqlmd-mdx-entity-name">events</code></span>](#events)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CustomerEvent!]</code></span>](/api-reference/users/objects/customer-event) \{#events\}

List of events associated with the user.

Requires one of the following permissions: MANAGE_USERS, MANAGE_STAFF.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User</code>.<code class="gqlmd-mdx-entity-name">languageCode</code></span>](#language-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LanguageCodeEnum!</code></span>](/api-reference/miscellaneous/enums/language-code-enum) \{#language-code\}

User language code.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User</code>.<code class="gqlmd-mdx-entity-name">defaultShippingAddress</code></span>](#default-shipping-address)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Address</code></span>](/api-reference/users/objects/address) \{#default-shipping-address\}

The default shipping address of the user.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User</code>.<code class="gqlmd-mdx-entity-name">defaultBillingAddress</code></span>](#default-billing-address)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Address</code></span>](/api-reference/users/objects/address) \{#default-billing-address\}

The default billing address of the user.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User</code>.<code class="gqlmd-mdx-entity-name">externalReference</code></span>](#external-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#external-reference\}

External ID of this user.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User</code>.<code class="gqlmd-mdx-entity-name">lastLogin</code></span>](#last-login)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#last-login\}

The date when the user last time log in to the system.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User</code>.<code class="gqlmd-mdx-entity-name">dateJoined</code></span>](#date-joined)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime!</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#date-joined\}

The data when the user create account.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User</code>.<code class="gqlmd-mdx-entity-name">updatedAt</code></span>](#updated-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime!</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#updated-at\}

The data when the user last update the account information.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User</code>.<code class="gqlmd-mdx-entity-name">storedPaymentMethods</code></span>](#stored-payment-methods)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[StoredPaymentMethod!]</code></span>](/api-reference/payments/objects/stored-payment-method) \{#stored-payment-methods\}

Returns a list of user's stored payment methods that can be used in provided channel. The field returns a list of stored payment methods by payment apps. When `amount` is not provided, 0 will be used as default value.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User.storedPaymentMethods</code>.<code class="gqlmd-mdx-entity-name">channel</code></span>](#user-stored-payment-methods-channel)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#user-stored-payment-methods-channel\}

Slug of a channel for which the data should be returned.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User</code>.<code class="gqlmd-mdx-entity-name">checkout</code></span>](#checkout)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Checkout</code></span>](/api-reference/checkout/objects/checkout) \{#checkout\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use the `checkoutTokens` field to fetch the user checkouts.

</span>
</fieldset>

Returns the last open checkout of this user.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User</code>.<code class="gqlmd-mdx-entity-name">checkoutTokens</code></span>](#checkout-tokens)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[UUID!]</code></span>](/api-reference/miscellaneous/scalars/uuid) \{#checkout-tokens\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `checkoutIds` instead.

</span>
</fieldset>

Returns the checkout UUID's assigned to this user.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User.checkoutTokens</code>.<code class="gqlmd-mdx-entity-name">channel</code></span>](#user-checkout-tokens-channel)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#user-checkout-tokens-channel\}

Slug of a channel for which the data should be returned.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User</code>.<code class="gqlmd-mdx-entity-name">storedPaymentSources</code></span>](#stored-payment-sources)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[PaymentSource!]</code></span>](/api-reference/payments/objects/payment-source) \{#stored-payment-sources\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

The legacy Payments API is deprecated and will be removed. Use the Transactions API instead.

</span>
</fieldset>

List of stored payment sources. The field returns a list of payment sources stored for payment plugins.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">User.storedPaymentSources</code>.<code class="gqlmd-mdx-entity-name">channel</code></span>](#user-stored-payment-sources-channel)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#user-stored-payment-sources-channel\}

Slug of a channel for which the data should be returned.

</details>

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Node</code></span>](/api-reference/miscellaneous/interfaces/node)

An object with an ID

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ObjectWithMetadata</code></span>](/api-reference/miscellaneous/interfaces/object-with-metadata)

### Returned By

[`me`](/api-reference/users/queries/me) <mark class="gqlmd-mdx-badge">query</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`user`](/api-reference/users/queries/user) <mark class="gqlmd-mdx-badge">query</mark>

### Member Of

[`AccountAddressCreate`](/api-reference/users/objects/account-address-create) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AccountAddressDelete`](/api-reference/users/objects/account-address-delete) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AccountAddressUpdate`](/api-reference/users/objects/account-address-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AccountChangeEmailRequested`](/api-reference/users/objects/account-change-email-requested) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AccountConfirmationRequested`](/api-reference/users/objects/account-confirmation-requested) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AccountConfirmed`](/api-reference/users/objects/account-confirmed) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AccountDelete`](/api-reference/users/objects/account-delete) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AccountDeleted`](/api-reference/users/objects/account-deleted) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AccountDeleteRequested`](/api-reference/users/objects/account-delete-requested) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AccountEmailChanged`](/api-reference/users/objects/account-email-changed) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AccountRegister`](/api-reference/users/objects/account-register) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AccountSetDefaultAddress`](/api-reference/users/objects/account-set-default-address) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AccountSetPasswordRequested`](/api-reference/users/objects/account-set-password-requested) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AccountUpdate`](/api-reference/users/objects/account-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AddressCreate`](/api-reference/users/objects/address-create) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AddressDelete`](/api-reference/users/objects/address-delete) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AddressSetDefault`](/api-reference/users/objects/address-set-default) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AddressUpdate`](/api-reference/users/objects/address-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AppProblemDismissed`](/api-reference/miscellaneous/objects/app-problem-dismissed) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`Checkout`](/api-reference/checkout/objects/checkout) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ConfirmAccount`](/api-reference/users/objects/confirm-account) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ConfirmEmailChange`](/api-reference/users/objects/confirm-email-change) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CreateToken`](/api-reference/authentication/objects/create-token) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CustomerBulkResult`](/api-reference/users/objects/customer-bulk-result) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CustomerCreate`](/api-reference/users/objects/customer-create) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CustomerCreated`](/api-reference/users/objects/customer-created) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CustomerDelete`](/api-reference/users/objects/customer-delete) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CustomerDeleted`](/api-reference/users/objects/customer-deleted) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CustomerEvent`](/api-reference/users/objects/customer-event) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CustomerMetadataUpdated`](/api-reference/users/objects/customer-metadata-updated) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CustomerUpdate`](/api-reference/users/objects/customer-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CustomerUpdated`](/api-reference/users/objects/customer-updated) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ExportEvent`](/api-reference/miscellaneous/objects/export-event) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ExportFile`](/api-reference/miscellaneous/objects/export-file) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ExternalObtainAccessTokens`](/api-reference/authentication/objects/external-obtain-access-tokens) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ExternalRefresh`](/api-reference/authentication/objects/external-refresh) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ExternalVerify`](/api-reference/authentication/objects/external-verify) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`GiftCard`](/api-reference/gift-cards/objects/gift-card) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`GiftCardEvent`](/api-reference/gift-cards/objects/gift-card-event) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`GiftCardEventAssignment`](/api-reference/gift-cards/objects/gift-card-event-assignment) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`Group`](/api-reference/users/objects/group) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ListStoredPaymentMethods`](/api-reference/payments/objects/list-stored-payment-methods) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`Order`](/api-reference/orders/objects/order) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderEvent`](/api-reference/orders/objects/order-event) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderGrantedRefund`](/api-reference/orders/objects/order-granted-refund) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PasswordChange`](/api-reference/users/objects/password-change) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PaymentGatewayInitializeTokenizationSession`](/api-reference/payments/objects/payment-gateway-initialize-tokenization-session) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PaymentMethodInitializeTokenizationSession`](/api-reference/payments/objects/payment-method-initialize-tokenization-session) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PaymentMethodProcessTokenizationSession`](/api-reference/payments/objects/payment-method-process-tokenization-session) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`RefreshToken`](/api-reference/authentication/objects/refresh-token) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`RequestEmailChange`](/api-reference/users/objects/request-email-change) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`SetPassword`](/api-reference/users/objects/set-password) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`StaffCreate`](/api-reference/users/objects/staff-create) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`StaffCreated`](/api-reference/users/objects/staff-created) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`StaffDelete`](/api-reference/users/objects/staff-delete) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`StaffDeleted`](/api-reference/users/objects/staff-deleted) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`StaffNotificationRecipient`](/api-reference/miscellaneous/objects/staff-notification-recipient) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`StaffSetPasswordRequested`](/api-reference/users/objects/staff-set-password-requested) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`StaffUpdate`](/api-reference/users/objects/staff-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`StaffUpdated`](/api-reference/users/objects/staff-updated) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`StoredPaymentMethodDeleteRequested`](/api-reference/payments/objects/stored-payment-method-delete-requested) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`UserAvatarDelete`](/api-reference/users/objects/user-avatar-delete) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`UserAvatarUpdate`](/api-reference/users/objects/user-avatar-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`UserCountableEdge`](/api-reference/users/objects/user-countable-edge) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`VerifyToken`](/api-reference/authentication/objects/verify-token) <mark class="gqlmd-mdx-badge">object</mark>

### Implemented By

[`_Entity`](/api-reference/miscellaneous/unions/entity) <mark class="gqlmd-mdx-badge">union</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`IssuingPrincipal`](/api-reference/miscellaneous/unions/issuing-principal) <mark class="gqlmd-mdx-badge">union</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`UserOrApp`](/api-reference/miscellaneous/unions/user-or-app) <mark class="gqlmd-mdx-badge">union</mark>
