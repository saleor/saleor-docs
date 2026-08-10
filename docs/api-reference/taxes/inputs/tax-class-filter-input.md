---
api_reference: true
id: tax-class-filter-input
title: TaxClassFilterInput
---

No description

```graphql
input TaxClassFilterInput {
  metadata: [MetadataFilter!]
  ids: [ID!]
  countries: [CountryCode!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxClassFilterInput</code>.<code class="gqlmd-mdx-entity-name">metadata</code></span>](#metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataFilter!]</code></span>](/api-reference/miscellaneous/inputs/metadata-filter) \{#metadata\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxClassFilterInput</code>.<code class="gqlmd-mdx-entity-name">ids</code></span>](#ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#ids\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxClassFilterInput</code>.<code class="gqlmd-mdx-entity-name">countries</code></span>](#countries)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CountryCode!]</code></span>](/api-reference/miscellaneous/enums/country-code) \{#countries\}

### Member Of

[`taxClasses`](/api-reference/taxes/queries/tax-classes) <mark class="gqlmd-mdx-badge">query</mark>
