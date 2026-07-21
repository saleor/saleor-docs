---
api_reference: true
id: allocation-strategy-enum
title: AllocationStrategyEnum
---

Determine the allocation strategy for the channel.

    PRIORITIZE&#x005F;SORTING&#x005F;ORDER - allocate stocks according to the warehouses' order
    within the channel

    PRIORITIZE&#x005F;HIGH&#x005F;STOCK - allocate stock in a warehouse with the most stock

```graphql
enum AllocationStrategyEnum {
  PRIORITIZE_SORTING_ORDER
  PRIORITIZE_HIGH_STOCK
}
```

### Values

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AllocationStrategyEnum</code>.<code class="gqlmd-mdx-entity-name">PRIORITIZE_SORTING_ORDER</code></span>](#prioritize-sorting-order) \{#prioritize-sorting-order\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AllocationStrategyEnum</code>.<code class="gqlmd-mdx-entity-name">PRIORITIZE_HIGH_STOCK</code></span>](#prioritize-high-stock) \{#prioritize-high-stock\}

### Member Of

[`StockSettings`](/api-reference/products/objects/stock-settings) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`StockSettingsInput`](/api-reference/products/inputs/stock-settings-input) <mark class="gqlmd-mdx-badge">input</mark>
