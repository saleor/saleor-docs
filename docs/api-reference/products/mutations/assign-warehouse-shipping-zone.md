---
api_reference: true
id: assign-warehouse-shipping-zone
title: assignWarehouseShippingZone
---

Add shipping zone to given warehouse.

Requires one of the following permissions: MANAGE_PRODUCTS.

```graphql
assignWarehouseShippingZone(
  id: ID!
  shippingZoneIds: [ID!]!
): WarehouseShippingZoneAssign
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">assignWarehouseShippingZone</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of a warehouse to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">assignWarehouseShippingZone</code>.<code class="gqlmd-mdx-entity-name">shippingZoneIds</code></span>](#shipping-zone-ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]!</code></span>](/api-reference/miscellaneous/scalars/id) \{#shipping-zone-ids\}

List of shipping zone IDs.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">WarehouseShippingZoneAssign</code></span>](/api-reference/products/objects/warehouse-shipping-zone-assign)

Add shipping zone to given warehouse.

Requires one of the following permissions: MANAGE_PRODUCTS.
