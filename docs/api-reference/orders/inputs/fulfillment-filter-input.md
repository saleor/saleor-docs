---
api_reference: true
id: fulfillment-filter-input
title: FulfillmentFilterInput
---

Filter input for order fulfillments data.

```graphql
input FulfillmentFilterInput {
  status: FulfillmentStatusEnumFilterInput
  metadata: MetadataFilterInput
  warehouse: FulfillmentWarehouseFilterInput
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">FulfillmentFilterInput</code>.<code class="gqlmd-mdx-entity-name">status</code></span>](#status)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">FulfillmentStatusEnumFilterInput</code></span>](/api-reference/orders/inputs/fulfillment-status-enum-filter-input) \{#status\}

Filter by fulfillment status.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">FulfillmentFilterInput</code>.<code class="gqlmd-mdx-entity-name">metadata</code></span>](#metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">MetadataFilterInput</code></span>](/api-reference/miscellaneous/inputs/metadata-filter-input) \{#metadata\}

Filter by metadata fields.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">FulfillmentFilterInput</code>.<code class="gqlmd-mdx-entity-name">warehouse</code></span>](#warehouse)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">FulfillmentWarehouseFilterInput</code></span>](/api-reference/orders/inputs/fulfillment-warehouse-filter-input) \{#warehouse\}

Filter by fulfillment warehouse.

### Member Of

[`OrderWhereInput`](/api-reference/orders/inputs/order-where-input) <mark class="gqlmd-mdx-badge">input</mark>
