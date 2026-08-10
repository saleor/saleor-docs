---
api_reference: true
id: reduced-rate
title: ReducedRate
---

Represents a reduced VAT rate for a particular type of goods.

```graphql
type ReducedRate {
  rate: Float!
  rateType: String!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ReducedRate</code>.<code class="gqlmd-mdx-entity-name">rate</code></span>](#rate)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Float!</code></span>](/api-reference/miscellaneous/scalars/float) \{#rate\}

Reduced VAT rate in percent.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ReducedRate</code>.<code class="gqlmd-mdx-entity-name">rateType</code></span>](#rate-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#rate-type\}

A type of goods.

### Member Of

[`VAT`](/api-reference/taxes/objects/vat) <mark class="gqlmd-mdx-badge">object</mark>
