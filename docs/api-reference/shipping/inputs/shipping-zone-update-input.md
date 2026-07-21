---
api_reference: true
id: shipping-zone-update-input
title: ShippingZoneUpdateInput
---

No description

```graphql
input ShippingZoneUpdateInput {
  name: String
  description: String
  countries: [String!]
  default: Boolean
  addWarehouses: [ID!]
  addChannels: [ID!]
  removeWarehouses: [ID!]
  removeChannels: [ID!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingZoneUpdateInput</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Shipping zone's name. Visible only to the staff.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingZoneUpdateInput</code>.<code class="gqlmd-mdx-entity-name">description</code></span>](#description)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#description\}

Description of the shipping zone.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingZoneUpdateInput</code>.<code class="gqlmd-mdx-entity-name">countries</code></span>](#countries)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#countries\}

List of countries in this shipping zone.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingZoneUpdateInput</code>.<code class="gqlmd-mdx-entity-name">default</code></span>](#default)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#default\}

Default shipping zone will be used for countries not covered by other zones.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingZoneUpdateInput</code>.<code class="gqlmd-mdx-entity-name">addWarehouses</code></span>](#add-warehouses)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#add-warehouses\}

List of warehouses to assign to a shipping zone

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingZoneUpdateInput</code>.<code class="gqlmd-mdx-entity-name">addChannels</code></span>](#add-channels)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#add-channels\}

List of channels to assign to the shipping zone.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingZoneUpdateInput</code>.<code class="gqlmd-mdx-entity-name">removeWarehouses</code></span>](#remove-warehouses)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#remove-warehouses\}

List of warehouses to unassign from a shipping zone

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingZoneUpdateInput</code>.<code class="gqlmd-mdx-entity-name">removeChannels</code></span>](#remove-channels)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#remove-channels\}

List of channels to unassign from the shipping zone.

### Member Of

[`shippingZoneUpdate`](/api-reference/shipping/mutations/shipping-zone-update) <mark class="gqlmd-mdx-badge">mutation</mark>
