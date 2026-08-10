---
api_reference: true
id: weight
title: Weight
---

Represents weight value in a specific weight unit.

```graphql
type Weight {
  unit: WeightUnitsEnum!
  value: Float!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Weight</code>.<code class="gqlmd-mdx-entity-name">unit</code></span>](#unit)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">WeightUnitsEnum!</code></span>](/api-reference/miscellaneous/enums/weight-units-enum) \{#unit\}

Weight unit.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Weight</code>.<code class="gqlmd-mdx-entity-name">value</code></span>](#value)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Float!</code></span>](/api-reference/miscellaneous/scalars/float) \{#value\}

Weight value. Returns a value with maximal three decimal places

### Member Of

[`Order`](/api-reference/orders/objects/order) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`Product`](/api-reference/products/objects/product) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductType`](/api-reference/products/objects/product-type) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariant`](/api-reference/products/objects/product-variant) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ShippingMethod`](/api-reference/shipping/objects/shipping-method) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ShippingMethodType`](/api-reference/shipping/objects/shipping-method-type) <mark class="gqlmd-mdx-badge">object</mark>
