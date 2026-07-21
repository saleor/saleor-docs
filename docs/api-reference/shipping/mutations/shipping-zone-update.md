---
api_reference: true
id: shipping-zone-update
title: shippingZoneUpdate
---

Updates a new shipping zone.

Requires one of the following permissions: MANAGE_SHIPPING.

```graphql
shippingZoneUpdate(
  id: ID!
  input: ShippingZoneUpdateInput!
): ShippingZoneUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">shippingZoneUpdate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of a shipping zone to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">shippingZoneUpdate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ShippingZoneUpdateInput!</code></span>](/api-reference/shipping/inputs/shipping-zone-update-input) \{#input\}

Fields required to update a shipping zone.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ShippingZoneUpdate</code></span>](/api-reference/shipping/objects/shipping-zone-update)

Updates a new shipping zone.

Requires one of the following permissions: MANAGE_SHIPPING.
