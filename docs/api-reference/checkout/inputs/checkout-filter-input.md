---
api_reference: true
id: checkout-filter-input
title: CheckoutFilterInput
---

No description

```graphql
input CheckoutFilterInput {
  customer: String
  created: DateRangeInput
  search: String
  metadata: [MetadataFilter!]
  channels: [ID!]
  updatedAt: DateRangeInput
  authorizeStatus: [CheckoutAuthorizeStatusEnum!]
  chargeStatus: [CheckoutChargeStatusEnum!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutFilterInput</code>.<code class="gqlmd-mdx-entity-name">customer</code></span>](#customer)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#customer\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutFilterInput</code>.<code class="gqlmd-mdx-entity-name">created</code></span>](#created)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateRangeInput</code></span>](/api-reference/miscellaneous/inputs/date-range-input) \{#created\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutFilterInput</code>.<code class="gqlmd-mdx-entity-name">search</code></span>](#search)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#search\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutFilterInput</code>.<code class="gqlmd-mdx-entity-name">metadata</code></span>](#metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataFilter!]</code></span>](/api-reference/miscellaneous/inputs/metadata-filter) \{#metadata\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutFilterInput</code>.<code class="gqlmd-mdx-entity-name">channels</code></span>](#channels)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#channels\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutFilterInput</code>.<code class="gqlmd-mdx-entity-name">updatedAt</code></span>](#updated-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateRangeInput</code></span>](/api-reference/miscellaneous/inputs/date-range-input) \{#updated-at\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutFilterInput</code>.<code class="gqlmd-mdx-entity-name">authorizeStatus</code></span>](#authorize-status)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CheckoutAuthorizeStatusEnum!]</code></span>](/api-reference/checkout/enums/checkout-authorize-status-enum) \{#authorize-status\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutFilterInput</code>.<code class="gqlmd-mdx-entity-name">chargeStatus</code></span>](#charge-status)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CheckoutChargeStatusEnum!]</code></span>](/api-reference/checkout/enums/checkout-charge-status-enum) \{#charge-status\}

### Member Of

[`checkouts`](/api-reference/checkout/queries/checkouts) <mark class="gqlmd-mdx-badge">query</mark>
