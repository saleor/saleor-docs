---
api_reference: true
id: warehouse-update-input
title: WarehouseUpdateInput
---

No description

```graphql
input WarehouseUpdateInput {
  slug: String
  email: String
  externalReference: String
  name: String
  address: AddressInput
  clickAndCollectOption: WarehouseClickAndCollectOptionEnum
  isPrivate: Boolean
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WarehouseUpdateInput</code>.<code class="gqlmd-mdx-entity-name">slug</code></span>](#slug)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#slug\}

Warehouse slug.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WarehouseUpdateInput</code>.<code class="gqlmd-mdx-entity-name">email</code></span>](#email)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#email\}

The email address of the warehouse.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WarehouseUpdateInput</code>.<code class="gqlmd-mdx-entity-name">externalReference</code></span>](#external-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#external-reference\}

External ID of the warehouse.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WarehouseUpdateInput</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Warehouse name.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WarehouseUpdateInput</code>.<code class="gqlmd-mdx-entity-name">address</code></span>](#address)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AddressInput</code></span>](/api-reference/miscellaneous/inputs/address-input) \{#address\}

Address of the warehouse.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WarehouseUpdateInput</code>.<code class="gqlmd-mdx-entity-name">clickAndCollectOption</code></span>](#click-and-collect-option)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">WarehouseClickAndCollectOptionEnum</code></span>](/api-reference/products/enums/warehouse-click-and-collect-option-enum) \{#click-and-collect-option\}

Click and collect options: local, all or disabled.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WarehouseUpdateInput</code>.<code class="gqlmd-mdx-entity-name">isPrivate</code></span>](#is-private)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-private\}

Visibility of warehouse stocks.

### Member Of

[`updateWarehouse`](/api-reference/products/mutations/update-warehouse) <mark class="gqlmd-mdx-badge">mutation</mark>
