---
api_reference: true
id: stock-bulk-update
title: StockBulkUpdate
---

Updates stocks for a given variant and warehouse. Variant and warehouse selectors have to be the same for all stock inputs. Is not allowed to use 'variantId' in one input and 'variantExternalReference' in another.

Requires one of the following permissions: MANAGE_PRODUCTS.

Triggers the following webhook events:

- PRODUCT_VARIANT_STOCK_UPDATED (async): A product variant stock details were updated.

```graphql
type StockBulkUpdate {
  count: Int!
  results: [StockBulkResult!]!
  errors: [StockBulkUpdateError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StockBulkUpdate</code>.<code class="gqlmd-mdx-entity-name">count</code></span>](#count)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span>](/api-reference/miscellaneous/scalars/int) \{#count\}

Returns how many objects were updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StockBulkUpdate</code>.<code class="gqlmd-mdx-entity-name">results</code></span>](#results)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[StockBulkResult!]!</code></span>](/api-reference/products/objects/stock-bulk-result) \{#results\}

List of the updated stocks.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StockBulkUpdate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[StockBulkUpdateError!]!</code></span>](/api-reference/products/objects/stock-bulk-update-error) \{#errors\}

### Returned By

[`stockBulkUpdate`](/api-reference/products/mutations/stock-bulk-update) <mark class="gqlmd-mdx-badge">mutation</mark>
