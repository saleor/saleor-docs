---
api_reference: true
id: delivery-options-calculate
title: deliveryOptionsCalculate
---

Calculates available delivery options for a checkout.

Added in Saleor 3.23.

Triggers the following webhook events:

- SHIPPING_LIST_METHODS_FOR_CHECKOUT (sync): Triggered to fetch external shipping methods.
- CHECKOUT_FILTER_SHIPPING_METHODS (sync): Triggered to filter shipping methods.

```graphql
deliveryOptionsCalculate(
  id: ID!
): DeliveryOptionsCalculate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">deliveryOptionsCalculate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of the checkout.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DeliveryOptionsCalculate</code></span>](/api-reference/shipping/objects/delivery-options-calculate)

Calculates available delivery options for a checkout.

Added in Saleor 3.23.

Triggers the following webhook events:

- SHIPPING_LIST_METHODS_FOR_CHECKOUT (sync): Triggered to fetch external shipping methods.
- CHECKOUT_FILTER_SHIPPING_METHODS (sync): Triggered to filter shipping methods.
