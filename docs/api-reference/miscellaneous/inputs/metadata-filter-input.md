---
api_reference: true
id: metadata-filter-input
title: MetadataFilterInput
---

Allows filtering based on metadata key/value pairs.

        Examples:
        - `{key: "size"}`
          Matches objects where the metadata key "size" exists, regardless of its value.
        - `{key: "color", value: {oneOf: ["blue", "green"]}}`
          Matches objects where the metadata key "color" is set to either "blue" or "green".
        - `{key: "status", value: {eq: "active"}}`
          Matches objects where the metadata key "status" is set to "active".

```graphql
input MetadataFilterInput {
  key: String!
  value: MetadataValueFilterInput
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MetadataFilterInput</code>.<code class="gqlmd-mdx-entity-name">key</code></span>](#key)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#key\}

Key to filter by. If not other fields provided - checking the existence of the key in metadata.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MetadataFilterInput</code>.<code class="gqlmd-mdx-entity-name">value</code></span>](#value)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">MetadataValueFilterInput</code></span>](/api-reference/miscellaneous/inputs/metadata-value-filter-input) \{#value\}

Value to filter by.

### Member Of

[`CustomerOrderWhereInput`](/api-reference/orders/inputs/customer-order-where-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CustomerWhereInput`](/api-reference/users/inputs/customer-where-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`DraftOrderWhereInput`](/api-reference/orders/inputs/draft-order-where-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`FulfillmentFilterInput`](/api-reference/orders/inputs/fulfillment-filter-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`LinesFilterInput`](/api-reference/orders/inputs/lines-filter-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderWhereInput`](/api-reference/orders/inputs/order-where-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PageWhereInput`](/api-reference/pages/inputs/page-where-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`TransactionFilterInput`](/api-reference/orders/inputs/transaction-filter-input) <mark class="gqlmd-mdx-badge">input</mark>
