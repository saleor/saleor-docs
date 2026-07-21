---
api_reference: true
id: taxed-money-range
title: TaxedMoneyRange
---

Represents a range of monetary values.

```graphql
type TaxedMoneyRange {
  start: TaxedMoney
  stop: TaxedMoney
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxedMoneyRange</code>.<code class="gqlmd-mdx-entity-name">start</code></span>](#start)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxedMoney</code></span>](/api-reference/miscellaneous/objects/taxed-money) \{#start\}

Lower bound of a price range.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxedMoneyRange</code>.<code class="gqlmd-mdx-entity-name">stop</code></span>](#stop)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxedMoney</code></span>](/api-reference/miscellaneous/objects/taxed-money) \{#stop\}

Upper bound of a price range.

### Member Of

[`ProductPricingInfo`](/api-reference/products/objects/product-pricing-info) <mark class="gqlmd-mdx-badge">object</mark>
