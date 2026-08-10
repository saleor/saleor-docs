---
api_reference: true
id: warehouse-create-input
title: WarehouseCreateInput
---

No description

```graphql
input WarehouseCreateInput {
  slug: String
  email: String
  externalReference: String
  name: String!
  address: AddressInput!
  shippingZones: [ID!] @deprecated
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WarehouseCreateInput</code>.<code class="gqlmd-mdx-entity-name">slug</code></span>](#slug)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#slug\}

Warehouse slug.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WarehouseCreateInput</code>.<code class="gqlmd-mdx-entity-name">email</code></span>](#email)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#email\}

The email address of the warehouse.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WarehouseCreateInput</code>.<code class="gqlmd-mdx-entity-name">externalReference</code></span>](#external-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#external-reference\}

External ID of the warehouse.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WarehouseCreateInput</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Warehouse name.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WarehouseCreateInput</code>.<code class="gqlmd-mdx-entity-name">address</code></span>](#address)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AddressInput!</code></span>](/api-reference/miscellaneous/inputs/address-input) \{#address\}

Address of the warehouse.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WarehouseCreateInput</code>.<code class="gqlmd-mdx-entity-name">shippingZones</code></span>](#shipping-zones)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#shipping-zones\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Providing the zone ids will raise a ValidationError.

</span>
</fieldset>

Shipping zones supported by the warehouse.

</details>

### Member Of

[`createWarehouse`](/api-reference/products/mutations/create-warehouse) <mark class="gqlmd-mdx-badge">mutation</mark>
