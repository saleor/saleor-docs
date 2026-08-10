---
api_reference: true
id: tax-source-object
title: TaxSourceObject
---

No description

```graphql
union TaxSourceObject = Checkout | Order
```

### Possible types

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxSourceObject</code>.<code class="gqlmd-mdx-entity-name">Checkout</code></span>](/api-reference/checkout/objects/checkout)

Checkout object.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxSourceObject</code>.<code class="gqlmd-mdx-entity-name">Order</code></span>](/api-reference/orders/objects/order)

Represents an order in the shop.

### Member Of

[`TaxableObject`](/api-reference/taxes/objects/taxable-object) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`TaxExemptionManage`](/api-reference/taxes/objects/tax-exemption-manage) <mark class="gqlmd-mdx-badge">object</mark>
