---
api_reference: true
id: delivery-options-calculate
title: DeliveryOptionsCalculate
---

Calculates available delivery options for a checkout.

Added in Saleor 3.23.

Triggers the following webhook events:

- SHIPPING_LIST_METHODS_FOR_CHECKOUT (sync): Triggered to fetch external shipping methods.
- CHECKOUT_FILTER_SHIPPING_METHODS (sync): Triggered to filter shipping methods.

```graphql
type DeliveryOptionsCalculate {
  deliveries: [Delivery!]!
  errors: [DeliveryOptionsCalculateError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DeliveryOptionsCalculate</code>.<code class="gqlmd-mdx-entity-name">deliveries</code></span>](#deliveries)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[Delivery!]!</code></span>](/api-reference/miscellaneous/objects/delivery) \{#deliveries\}

List of the available deliveries.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DeliveryOptionsCalculate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[DeliveryOptionsCalculateError!]!</code></span>](/api-reference/shipping/objects/delivery-options-calculate-error) \{#errors\}

### Returned By

[`deliveryOptionsCalculate`](/api-reference/shipping/mutations/delivery-options-calculate) <mark class="gqlmd-mdx-badge">mutation</mark>
