---
api_reference: true
id: taxed-money-input
title: TaxedMoneyInput
---

No description

```graphql
input TaxedMoneyInput {
  gross: PositiveDecimal!
  net: PositiveDecimal!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxedMoneyInput</code>.<code class="gqlmd-mdx-entity-name">gross</code></span>](#gross)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveDecimal!</code></span>](/api-reference/miscellaneous/scalars/positive-decimal) \{#gross\}

Gross value of an item.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxedMoneyInput</code>.<code class="gqlmd-mdx-entity-name">net</code></span>](#net)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveDecimal!</code></span>](/api-reference/miscellaneous/scalars/positive-decimal) \{#net\}

Net value of an item.

### Member Of

[`OrderBulkCreateDeliveryMethodInput`](/api-reference/orders/inputs/order-bulk-create-delivery-method-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderBulkCreateOrderLineInput`](/api-reference/orders/inputs/order-bulk-create-order-line-input) <mark class="gqlmd-mdx-badge">input</mark>
