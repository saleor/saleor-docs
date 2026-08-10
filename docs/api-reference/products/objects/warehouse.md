---
api_reference: true
id: warehouse
title: Warehouse
---

Represents warehouse.

```graphql
type Warehouse implements Node, ObjectWithMetadata {
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
  slug: String!
  email: String!
  isPrivate: Boolean!
  address: Address!
  companyName: String! @deprecated
  clickAndCollectOption: WarehouseClickAndCollectOptionEnum!
  shippingZones(
    before: String
    after: String
    first: Int
    last: Int
  ): ShippingZoneCountableConnection!
  stocks(
    before: String
    after: String
    first: Int
    last: Int
  ): StockCountableConnection
  externalReference: String
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Warehouse</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of the warehouse.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Warehouse</code>.<code class="gqlmd-mdx-entity-name">privateMetadata</code></span>](#private-metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataItem!]!</code></span>](/api-reference/miscellaneous/objects/metadata-item) \{#private-metadata\}

List of private metadata items. Requires staff permissions to access.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Warehouse</code>.<code class="gqlmd-mdx-entity-name">privateMetafield</code></span>](#private-metafield)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#private-metafield\}

A single key from private metadata. Requires staff permissions to access.

Tip: Use GraphQL aliases to fetch multiple keys.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Warehouse.privateMetafield</code>.<code class="gqlmd-mdx-entity-name">key</code></span>](#warehouse-private-metafield-key)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#warehouse-private-metafield-key\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Warehouse</code>.<code class="gqlmd-mdx-entity-name">privateMetafields</code></span>](#private-metafields)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Metadata</code></span>](/api-reference/miscellaneous/scalars/metadata) \{#private-metafields\}

Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Warehouse.privateMetafields</code>.<code class="gqlmd-mdx-entity-name">keys</code></span>](#warehouse-private-metafields-keys)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#warehouse-private-metafields-keys\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Warehouse</code>.<code class="gqlmd-mdx-entity-name">metadata</code></span>](#metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataItem!]!</code></span>](/api-reference/miscellaneous/objects/metadata-item) \{#metadata\}

List of public metadata items. Can be accessed without permissions.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Warehouse</code>.<code class="gqlmd-mdx-entity-name">metafield</code></span>](#metafield)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#metafield\}

A single key from public metadata.

Tip: Use GraphQL aliases to fetch multiple keys.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Warehouse.metafield</code>.<code class="gqlmd-mdx-entity-name">key</code></span>](#warehouse-metafield-key)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#warehouse-metafield-key\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Warehouse</code>.<code class="gqlmd-mdx-entity-name">metafields</code></span>](#metafields)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Metadata</code></span>](/api-reference/miscellaneous/scalars/metadata) \{#metafields\}

Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Warehouse.metafields</code>.<code class="gqlmd-mdx-entity-name">keys</code></span>](#warehouse-metafields-keys)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#warehouse-metafields-keys\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Warehouse</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Warehouse name.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Warehouse</code>.<code class="gqlmd-mdx-entity-name">slug</code></span>](#slug)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#slug\}

Warehouse slug.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Warehouse</code>.<code class="gqlmd-mdx-entity-name">email</code></span>](#email)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#email\}

Warehouse email.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Warehouse</code>.<code class="gqlmd-mdx-entity-name">isPrivate</code></span>](#is-private)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-private\}

Determine if the warehouse is private.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Warehouse</code>.<code class="gqlmd-mdx-entity-name">address</code></span>](#address)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Address!</code></span>](/api-reference/users/objects/address) \{#address\}

Address of the warehouse.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Warehouse</code>.<code class="gqlmd-mdx-entity-name">clickAndCollectOption</code></span>](#click-and-collect-option)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">WarehouseClickAndCollectOptionEnum!</code></span>](/api-reference/products/enums/warehouse-click-and-collect-option-enum) \{#click-and-collect-option\}

Click and collect options: local, all or disabled.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Warehouse</code>.<code class="gqlmd-mdx-entity-name">shippingZones</code></span>](#shipping-zones)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ShippingZoneCountableConnection!</code></span>](/api-reference/shipping/objects/shipping-zone-countable-connection) \{#shipping-zones\}

Shipping zones supported by the warehouse.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Warehouse.shippingZones</code>.<code class="gqlmd-mdx-entity-name">before</code></span>](#warehouse-shipping-zones-before)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#warehouse-shipping-zones-before\}

Return the elements in the list that come before the specified cursor.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Warehouse.shippingZones</code>.<code class="gqlmd-mdx-entity-name">after</code></span>](#warehouse-shipping-zones-after)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#warehouse-shipping-zones-after\}

Return the elements in the list that come after the specified cursor.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Warehouse.shippingZones</code>.<code class="gqlmd-mdx-entity-name">first</code></span>](#warehouse-shipping-zones-first)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#warehouse-shipping-zones-first\}

Retrieve the first n elements from the list. Note that the system only allows fetching a maximum of 100 objects in a single query.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Warehouse.shippingZones</code>.<code class="gqlmd-mdx-entity-name">last</code></span>](#warehouse-shipping-zones-last)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#warehouse-shipping-zones-last\}

Retrieve the last n elements from the list. Note that the system only allows fetching a maximum of 100 objects in a single query.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Warehouse</code>.<code class="gqlmd-mdx-entity-name">stocks</code></span>](#stocks)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">StockCountableConnection</code></span>](/api-reference/products/objects/stock-countable-connection) \{#stocks\}

Stocks that belong to this warehouse.

Added in Saleor 3.20.

Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Warehouse.stocks</code>.<code class="gqlmd-mdx-entity-name">before</code></span>](#warehouse-stocks-before)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#warehouse-stocks-before\}

Return the elements in the list that come before the specified cursor.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Warehouse.stocks</code>.<code class="gqlmd-mdx-entity-name">after</code></span>](#warehouse-stocks-after)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#warehouse-stocks-after\}

Return the elements in the list that come after the specified cursor.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Warehouse.stocks</code>.<code class="gqlmd-mdx-entity-name">first</code></span>](#warehouse-stocks-first)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#warehouse-stocks-first\}

Retrieve the first n elements from the list. Note that the system only allows fetching a maximum of 100 objects in a single query.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Warehouse.stocks</code>.<code class="gqlmd-mdx-entity-name">last</code></span>](#warehouse-stocks-last)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#warehouse-stocks-last\}

Retrieve the last n elements from the list. Note that the system only allows fetching a maximum of 100 objects in a single query.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Warehouse</code>.<code class="gqlmd-mdx-entity-name">externalReference</code></span>](#external-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#external-reference\}

External ID of this warehouse.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Warehouse</code>.<code class="gqlmd-mdx-entity-name">companyName</code></span>](#company-name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#company-name\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `Address.companyName` instead.

</span>
</fieldset>

Warehouse company name.

</details>

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Node</code></span>](/api-reference/miscellaneous/interfaces/node)

An object with an ID

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ObjectWithMetadata</code></span>](/api-reference/miscellaneous/interfaces/object-with-metadata)

### Returned By

[`warehouse`](/api-reference/products/queries/warehouse) <mark class="gqlmd-mdx-badge">query</mark>

### Member Of

[`Allocation`](/api-reference/products/objects/allocation) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`Channel`](/api-reference/channels/objects/channel) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`Checkout`](/api-reference/checkout/objects/checkout) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`Fulfillment`](/api-reference/orders/objects/fulfillment) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`Order`](/api-reference/orders/objects/order) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderEvent`](/api-reference/orders/objects/order-event) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariantBackInStock`](/api-reference/products/objects/product-variant-back-in-stock) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariantOutOfStock`](/api-reference/products/objects/product-variant-out-of-stock) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariantStockUpdated`](/api-reference/products/objects/product-variant-stock-updated) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ShippingZone`](/api-reference/shipping/objects/shipping-zone) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`Stock`](/api-reference/products/objects/stock) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`WarehouseCountableEdge`](/api-reference/products/objects/warehouse-countable-edge) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`WarehouseCreate`](/api-reference/products/objects/warehouse-create) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`WarehouseCreated`](/api-reference/products/objects/warehouse-created) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`WarehouseDelete`](/api-reference/products/objects/warehouse-delete) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`WarehouseDeleted`](/api-reference/products/objects/warehouse-deleted) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`WarehouseMetadataUpdated`](/api-reference/products/objects/warehouse-metadata-updated) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`WarehouseShippingZoneAssign`](/api-reference/products/objects/warehouse-shipping-zone-assign) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`WarehouseShippingZoneUnassign`](/api-reference/products/objects/warehouse-shipping-zone-unassign) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`WarehouseUpdate`](/api-reference/products/objects/warehouse-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`WarehouseUpdated`](/api-reference/products/objects/warehouse-updated) <mark class="gqlmd-mdx-badge">object</mark>

### Implemented By

[`DeliveryMethod`](/api-reference/miscellaneous/unions/delivery-method) <mark class="gqlmd-mdx-badge">union</mark>
