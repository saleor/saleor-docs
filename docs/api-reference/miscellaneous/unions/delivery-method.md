---
api_reference: true
id: delivery-method
title: DeliveryMethod
---

Represents a delivery method chosen for the checkout. `Warehouse` type is used when checkout is marked as "click and collect" and `ShippingMethod` otherwise.

```graphql
union DeliveryMethod = Warehouse | ShippingMethod
```

### Possible types

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DeliveryMethod</code>.<code class="gqlmd-mdx-entity-name">Warehouse</code></span>](/api-reference/products/objects/warehouse)

Represents warehouse.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DeliveryMethod</code>.<code class="gqlmd-mdx-entity-name">ShippingMethod</code></span>](/api-reference/shipping/objects/shipping-method)

Shipping methods that can be used as means of shipping for orders and checkouts.

### Member Of

[`Checkout`](/api-reference/checkout/objects/checkout) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`Order`](/api-reference/orders/objects/order) <mark class="gqlmd-mdx-badge">object</mark>
