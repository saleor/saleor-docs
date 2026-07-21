---
api_reference: true
id: tax-source-line
title: TaxSourceLine
---

No description

```graphql
union TaxSourceLine = CheckoutLine | OrderLine
```

### Possible types

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxSourceLine</code>.<code class="gqlmd-mdx-entity-name">CheckoutLine</code></span>](/api-reference/checkout/objects/checkout-line)

Represents an item in the checkout.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxSourceLine</code>.<code class="gqlmd-mdx-entity-name">OrderLine</code></span>](/api-reference/orders/objects/order-line)

Represents order line of particular order.

### Member Of

[`TaxableObjectLine`](/api-reference/taxes/objects/taxable-object-line) <mark class="gqlmd-mdx-badge">object</mark>
