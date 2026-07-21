---
api_reference: true
id: stock-bulk-update
title: stockBulkUpdate
---

Updates stocks for a given variant and warehouse. Variant and warehouse selectors have to be the same for all stock inputs. Is not allowed to use 'variantId' in one input and 'variantExternalReference' in another.

Requires one of the following permissions: MANAGE_PRODUCTS.

Triggers the following webhook events:

- PRODUCT_VARIANT_STOCK_UPDATED (async): A product variant stock details were updated.

```graphql
stockBulkUpdate(
  errorPolicy: ErrorPolicyEnum
  stocks: [StockBulkUpdateInput!]!
): StockBulkUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">stockBulkUpdate</code>.<code class="gqlmd-mdx-entity-name">errorPolicy</code></span>](#error-policy)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ErrorPolicyEnum</code></span>](/api-reference/miscellaneous/enums/error-policy-enum) \{#error-policy\}

Policies of error handling. DEFAULT: REJECT_EVERYTHING

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">stockBulkUpdate</code>.<code class="gqlmd-mdx-entity-name">stocks</code></span>](#stocks)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[StockBulkUpdateInput!]!</code></span>](/api-reference/products/inputs/stock-bulk-update-input) \{#stocks\}

Input list of stocks to update.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">StockBulkUpdate</code></span>](/api-reference/products/objects/stock-bulk-update)

Updates stocks for a given variant and warehouse. Variant and warehouse selectors have to be the same for all stock inputs. Is not allowed to use 'variantId' in one input and 'variantExternalReference' in another.

Requires one of the following permissions: MANAGE_PRODUCTS.

Triggers the following webhook events:

- PRODUCT_VARIANT_STOCK_UPDATED (async): A product variant stock details were updated.
