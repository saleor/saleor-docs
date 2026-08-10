---
api_reference: true
id: tax-type
title: TaxType
---

Representation of tax types fetched from tax gateway.

```graphql
type TaxType {
  description: String
  taxCode: String
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxType</code>.<code class="gqlmd-mdx-entity-name">description</code></span>](#description)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#description\}

Description of the tax type.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxType</code>.<code class="gqlmd-mdx-entity-name">taxCode</code></span>](#tax-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#tax-code\}

External tax code used to identify given tax group.

### Returned By

[`taxTypes`](/api-reference/deprecated/taxes/queries/tax-types) <mark class="gqlmd-mdx-badge">query</mark>

### Member Of

[`Product`](/api-reference/products/objects/product) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductType`](/api-reference/products/objects/product-type) <mark class="gqlmd-mdx-badge">object</mark>
