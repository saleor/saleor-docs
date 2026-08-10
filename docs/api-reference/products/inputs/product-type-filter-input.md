---
api_reference: true
id: product-type-filter-input
title: ProductTypeFilterInput
---

No description

```graphql
input ProductTypeFilterInput {
  search: String
  configurable: ProductTypeConfigurable @deprecated
  productType: ProductTypeEnum
  metadata: [MetadataFilter!]
  kind: ProductTypeKindEnum
  ids: [ID!]
  slugs: [String!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductTypeFilterInput</code>.<code class="gqlmd-mdx-entity-name">search</code></span>](#search)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#search\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductTypeFilterInput</code>.<code class="gqlmd-mdx-entity-name">productType</code></span>](#product-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductTypeEnum</code></span>](/api-reference/products/enums/product-type-enum) \{#product-type\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductTypeFilterInput</code>.<code class="gqlmd-mdx-entity-name">metadata</code></span>](#metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataFilter!]</code></span>](/api-reference/miscellaneous/inputs/metadata-filter) \{#metadata\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductTypeFilterInput</code>.<code class="gqlmd-mdx-entity-name">kind</code></span>](#kind)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductTypeKindEnum</code></span>](/api-reference/products/enums/product-type-kind-enum) \{#kind\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductTypeFilterInput</code>.<code class="gqlmd-mdx-entity-name">ids</code></span>](#ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#ids\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductTypeFilterInput</code>.<code class="gqlmd-mdx-entity-name">slugs</code></span>](#slugs)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#slugs\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductTypeFilterInput</code>.<code class="gqlmd-mdx-entity-name">configurable</code></span>](#configurable)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductTypeConfigurable</code></span>](/api-reference/products/enums/product-type-configurable) \{#configurable\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

The field has no effect on the API behavior. This is a leftover from the past Simple/Configurable product distinction. Products can have multiple variants regardless of this setting.

</span>
</fieldset>

</details>

### Member Of

[`productTypes`](/api-reference/products/queries/product-types) <mark class="gqlmd-mdx-badge">query</mark>
