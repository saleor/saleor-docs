---
api_reference: true
id: order-granted-refund-status-enum
title: OrderGrantedRefundStatusEnum
---

Represents the status of a granted refund.

    NONE - the refund on related transactionItem is not processed
    PENDING - the refund on related transactionItem is pending
    FULL - the refund on related transactionItem is fully processed
    FAIL - the refund on related transactionItem failed

```graphql
enum OrderGrantedRefundStatusEnum {
  NONE
  PENDING
  SUCCESS
  FAILURE
}
```

### Values

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderGrantedRefundStatusEnum</code>.<code class="gqlmd-mdx-entity-name">NONE</code></span>](#none) \{#none\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderGrantedRefundStatusEnum</code>.<code class="gqlmd-mdx-entity-name">PENDING</code></span>](#pending) \{#pending\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderGrantedRefundStatusEnum</code>.<code class="gqlmd-mdx-entity-name">SUCCESS</code></span>](#success) \{#success\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderGrantedRefundStatusEnum</code>.<code class="gqlmd-mdx-entity-name">FAILURE</code></span>](#failure) \{#failure\}

### Member Of

[`OrderGrantedRefund`](/api-reference/orders/objects/order-granted-refund) <mark class="gqlmd-mdx-badge">object</mark>
