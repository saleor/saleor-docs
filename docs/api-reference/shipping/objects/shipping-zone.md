---
api_reference: true
id: shipping-zone
title: ShippingZone
---

Represents a shipping zone in the shop. Zones are the concept used only for grouping shipping methods in the dashboard, and are never exposed to the customers directly.

```graphql
type ShippingZone implements Node, ObjectWithMetadata {
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
  name: String!
  default: Boolean!
  priceRange: MoneyRange
  countries: [CountryDisplay!]!
  shippingMethods: [ShippingMethodType!]
  warehouses: [Warehouse!]!
  channels: [Channel!]!
  description: String
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingZone</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of shipping zone.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingZone</code>.<code class="gqlmd-mdx-entity-name">privateMetadata</code></span>](#private-metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataItem!]!</code></span>](/api-reference/miscellaneous/objects/metadata-item) \{#private-metadata\}

List of private metadata items. Requires staff permissions to access.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingZone</code>.<code class="gqlmd-mdx-entity-name">privateMetafield</code></span>](#private-metafield)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#private-metafield\}

A single key from private metadata. Requires staff permissions to access.

Tip: Use GraphQL aliases to fetch multiple keys.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingZone.privateMetafield</code>.<code class="gqlmd-mdx-entity-name">key</code></span>](#shipping-zone-private-metafield-key)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#shipping-zone-private-metafield-key\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingZone</code>.<code class="gqlmd-mdx-entity-name">privateMetafields</code></span>](#private-metafields)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Metadata</code></span>](/api-reference/miscellaneous/scalars/metadata) \{#private-metafields\}

Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingZone.privateMetafields</code>.<code class="gqlmd-mdx-entity-name">keys</code></span>](#shipping-zone-private-metafields-keys)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#shipping-zone-private-metafields-keys\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingZone</code>.<code class="gqlmd-mdx-entity-name">metadata</code></span>](#metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataItem!]!</code></span>](/api-reference/miscellaneous/objects/metadata-item) \{#metadata\}

List of public metadata items. Can be accessed without permissions.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingZone</code>.<code class="gqlmd-mdx-entity-name">metafield</code></span>](#metafield)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#metafield\}

A single key from public metadata.

Tip: Use GraphQL aliases to fetch multiple keys.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingZone.metafield</code>.<code class="gqlmd-mdx-entity-name">key</code></span>](#shipping-zone-metafield-key)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#shipping-zone-metafield-key\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingZone</code>.<code class="gqlmd-mdx-entity-name">metafields</code></span>](#metafields)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Metadata</code></span>](/api-reference/miscellaneous/scalars/metadata) \{#metafields\}

Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingZone.metafields</code>.<code class="gqlmd-mdx-entity-name">keys</code></span>](#shipping-zone-metafields-keys)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#shipping-zone-metafields-keys\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingZone</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Shipping zone name.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingZone</code>.<code class="gqlmd-mdx-entity-name">default</code></span>](#default)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#default\}

Indicates if the shipping zone is default one.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingZone</code>.<code class="gqlmd-mdx-entity-name">priceRange</code></span>](#price-range)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">MoneyRange</code></span>](/api-reference/miscellaneous/objects/money-range) \{#price-range\}

Lowest and highest prices for the shipping.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingZone</code>.<code class="gqlmd-mdx-entity-name">countries</code></span>](#countries)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CountryDisplay!]!</code></span>](/api-reference/miscellaneous/objects/country-display) \{#countries\}

List of countries available for the method.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingZone</code>.<code class="gqlmd-mdx-entity-name">shippingMethods</code></span>](#shipping-methods)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ShippingMethodType!]</code></span>](/api-reference/shipping/objects/shipping-method-type) \{#shipping-methods\}

List of shipping methods available for orders shipped to countries within this shipping zone.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingZone</code>.<code class="gqlmd-mdx-entity-name">warehouses</code></span>](#warehouses)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[Warehouse!]!</code></span>](/api-reference/products/objects/warehouse) \{#warehouses\}

List of warehouses for shipping zone.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingZone</code>.<code class="gqlmd-mdx-entity-name">channels</code></span>](#channels)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[Channel!]!</code></span>](/api-reference/channels/objects/channel) \{#channels\}

List of channels for shipping zone.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingZone</code>.<code class="gqlmd-mdx-entity-name">description</code></span>](#description)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#description\}

Description of a shipping zone.

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Node</code></span>](/api-reference/miscellaneous/interfaces/node)

An object with an ID

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ObjectWithMetadata</code></span>](/api-reference/miscellaneous/interfaces/object-with-metadata)

### Returned By

[`shippingZone`](/api-reference/shipping/queries/shipping-zone) <mark class="gqlmd-mdx-badge">query</mark>

### Member Of

[`ShippingPriceCreate`](/api-reference/shipping/objects/shipping-price-create) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ShippingPriceCreated`](/api-reference/shipping/objects/shipping-price-created) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ShippingPriceDelete`](/api-reference/shipping/objects/shipping-price-delete) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ShippingPriceDeleted`](/api-reference/shipping/objects/shipping-price-deleted) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ShippingPriceUpdate`](/api-reference/shipping/objects/shipping-price-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ShippingPriceUpdated`](/api-reference/shipping/objects/shipping-price-updated) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ShippingZoneCountableEdge`](/api-reference/shipping/objects/shipping-zone-countable-edge) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ShippingZoneCreate`](/api-reference/shipping/objects/shipping-zone-create) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ShippingZoneCreated`](/api-reference/shipping/objects/shipping-zone-created) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ShippingZoneDelete`](/api-reference/shipping/objects/shipping-zone-delete) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ShippingZoneDeleted`](/api-reference/shipping/objects/shipping-zone-deleted) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ShippingZoneMetadataUpdated`](/api-reference/shipping/objects/shipping-zone-metadata-updated) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ShippingZoneUpdate`](/api-reference/shipping/objects/shipping-zone-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ShippingZoneUpdated`](/api-reference/shipping/objects/shipping-zone-updated) <mark class="gqlmd-mdx-badge">object</mark>
