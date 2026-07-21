---
api_reference: true
id: update-warehouse
title: updateWarehouse
---

Updates given warehouse.

Requires one of the following permissions: MANAGE_PRODUCTS.

```graphql
updateWarehouse(
  externalReference: String
  id: ID
  input: WarehouseUpdateInput!
): WarehouseUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">updateWarehouse</code>.<code class="gqlmd-mdx-entity-name">externalReference</code></span>](#external-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#external-reference\}

External reference of a warehouse.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">updateWarehouse</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of a warehouse to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">updateWarehouse</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">WarehouseUpdateInput!</code></span>](/api-reference/products/inputs/warehouse-update-input) \{#input\}

Fields required to update warehouse.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">WarehouseUpdate</code></span>](/api-reference/products/objects/warehouse-update)

Updates given warehouse.

Requires one of the following permissions: MANAGE_PRODUCTS.
