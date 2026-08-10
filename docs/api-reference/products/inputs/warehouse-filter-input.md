---
api_reference: true
id: warehouse-filter-input
title: WarehouseFilterInput
---

No description

```graphql
input WarehouseFilterInput {
  clickAndCollectOption: WarehouseClickAndCollectOptionEnum
  metadata: [MetadataFilter!]
  search: String
  ids: [ID!]
  isPrivate: Boolean
  channels: [ID!]
  slugs: [String!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WarehouseFilterInput</code>.<code class="gqlmd-mdx-entity-name">clickAndCollectOption</code></span>](#click-and-collect-option)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">WarehouseClickAndCollectOptionEnum</code></span>](/api-reference/products/enums/warehouse-click-and-collect-option-enum) \{#click-and-collect-option\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WarehouseFilterInput</code>.<code class="gqlmd-mdx-entity-name">metadata</code></span>](#metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataFilter!]</code></span>](/api-reference/miscellaneous/inputs/metadata-filter) \{#metadata\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WarehouseFilterInput</code>.<code class="gqlmd-mdx-entity-name">search</code></span>](#search)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#search\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WarehouseFilterInput</code>.<code class="gqlmd-mdx-entity-name">ids</code></span>](#ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#ids\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WarehouseFilterInput</code>.<code class="gqlmd-mdx-entity-name">isPrivate</code></span>](#is-private)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-private\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WarehouseFilterInput</code>.<code class="gqlmd-mdx-entity-name">channels</code></span>](#channels)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#channels\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WarehouseFilterInput</code>.<code class="gqlmd-mdx-entity-name">slugs</code></span>](#slugs)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#slugs\}

### Member Of

[`warehouses`](/api-reference/products/queries/warehouses) <mark class="gqlmd-mdx-badge">query</mark>
