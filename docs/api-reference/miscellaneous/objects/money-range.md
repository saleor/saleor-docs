---
api_reference: true
id: money-range
title: MoneyRange
---

Represents a range of amounts of money.

```graphql
type MoneyRange {
  start: Money
  stop: Money
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MoneyRange</code>.<code class="gqlmd-mdx-entity-name">start</code></span>](#start)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Money</code></span>](/api-reference/miscellaneous/objects/money) \{#start\}

Lower bound of a price range.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MoneyRange</code>.<code class="gqlmd-mdx-entity-name">stop</code></span>](#stop)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Money</code></span>](/api-reference/miscellaneous/objects/money) \{#stop\}

Upper bound of a price range.

### Member Of

[`ProductChannelListing`](/api-reference/products/objects/product-channel-listing) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ShippingZone`](/api-reference/shipping/objects/shipping-zone) <mark class="gqlmd-mdx-badge">object</mark>
