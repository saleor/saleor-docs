---
api_reference: true
id: stock-update-policy-enum
title: StockUpdatePolicyEnum
---

Determine how stocks should be updated, while processing an order.

    SKIP - stocks are not checked and not updated.
    UPDATE - only do update, if there is enough stock.
    FORCE - force update, if there is not enough stock.

```graphql
enum StockUpdatePolicyEnum {
  SKIP
  UPDATE
  FORCE
}
```

### Values

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StockUpdatePolicyEnum</code>.<code class="gqlmd-mdx-entity-name">SKIP</code></span>](#skip) \{#skip\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StockUpdatePolicyEnum</code>.<code class="gqlmd-mdx-entity-name">UPDATE</code></span>](#update) \{#update\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StockUpdatePolicyEnum</code>.<code class="gqlmd-mdx-entity-name">FORCE</code></span>](#force) \{#force\}

### Member Of

[`orderBulkCreate`](/api-reference/orders/mutations/order-bulk-create) <mark class="gqlmd-mdx-badge">mutation</mark>
