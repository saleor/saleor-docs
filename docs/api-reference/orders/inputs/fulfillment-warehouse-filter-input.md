---
api_reference: true
id: fulfillment-warehouse-filter-input
title: FulfillmentWarehouseFilterInput
---

Filter input for fulfillment warehouses.

```graphql
input FulfillmentWarehouseFilterInput {
  id: GlobalIDFilterInput
  slug: StringFilterInput
  externalReference: StringFilterInput
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">FulfillmentWarehouseFilterInput</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">GlobalIDFilterInput</code></span>](/api-reference/miscellaneous/inputs/global-idfilter-input) \{#id\}

Filter fulfillments by warehouse ID.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">FulfillmentWarehouseFilterInput</code>.<code class="gqlmd-mdx-entity-name">slug</code></span>](#slug)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">StringFilterInput</code></span>](/api-reference/miscellaneous/inputs/string-filter-input) \{#slug\}

Filter fulfillments by warehouse slug.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">FulfillmentWarehouseFilterInput</code>.<code class="gqlmd-mdx-entity-name">externalReference</code></span>](#external-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">StringFilterInput</code></span>](/api-reference/miscellaneous/inputs/string-filter-input) \{#external-reference\}

Filter fulfillments by warehouse external reference.

### Member Of

[`FulfillmentFilterInput`](/api-reference/orders/inputs/fulfillment-filter-input) <mark class="gqlmd-mdx-badge">input</mark>
