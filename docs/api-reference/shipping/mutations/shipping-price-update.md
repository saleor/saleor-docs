---
api_reference: true
id: shipping-price-update
title: shippingPriceUpdate
---

Updates a new shipping price.

Requires one of the following permissions: MANAGE_SHIPPING.

```graphql
shippingPriceUpdate(
  id: ID!
  input: ShippingPriceInput!
): ShippingPriceUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">shippingPriceUpdate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of a shipping price to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">shippingPriceUpdate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ShippingPriceInput!</code></span>](/api-reference/shipping/inputs/shipping-price-input) \{#input\}

Fields required to update a shipping price.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ShippingPriceUpdate</code></span>](/api-reference/shipping/objects/shipping-price-update)

Updates a new shipping price.

Requires one of the following permissions: MANAGE_SHIPPING.
