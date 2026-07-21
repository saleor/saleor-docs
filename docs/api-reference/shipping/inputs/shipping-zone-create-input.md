---
api_reference: true
id: shipping-zone-create-input
title: ShippingZoneCreateInput
---

No description

```graphql
input ShippingZoneCreateInput {
  name: String
  description: String
  countries: [String!]
  default: Boolean
  addWarehouses: [ID!]
  addChannels: [ID!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingZoneCreateInput</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Shipping zone's name. Visible only to the staff.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingZoneCreateInput</code>.<code class="gqlmd-mdx-entity-name">description</code></span>](#description)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#description\}

Description of the shipping zone.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingZoneCreateInput</code>.<code class="gqlmd-mdx-entity-name">countries</code></span>](#countries)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#countries\}

List of countries in this shipping zone.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingZoneCreateInput</code>.<code class="gqlmd-mdx-entity-name">default</code></span>](#default)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#default\}

Default shipping zone will be used for countries not covered by other zones.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingZoneCreateInput</code>.<code class="gqlmd-mdx-entity-name">addWarehouses</code></span>](#add-warehouses)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#add-warehouses\}

List of warehouses to assign to a shipping zone

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingZoneCreateInput</code>.<code class="gqlmd-mdx-entity-name">addChannels</code></span>](#add-channels)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#add-channels\}

List of channels to assign to the shipping zone.

### Member Of

[`shippingZoneCreate`](/api-reference/shipping/mutations/shipping-zone-create) <mark class="gqlmd-mdx-badge">mutation</mark>
