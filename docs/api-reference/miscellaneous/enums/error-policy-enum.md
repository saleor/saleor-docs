---
api_reference: true
id: error-policy-enum
title: ErrorPolicyEnum
---

No description

```graphql
enum ErrorPolicyEnum {
  IGNORE_FAILED
  REJECT_EVERYTHING
  REJECT_FAILED_ROWS
}
```

### Values

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ErrorPolicyEnum</code>.<code class="gqlmd-mdx-entity-name">IGNORE_FAILED</code></span>](#ignore-failed) \{#ignore-failed\}

Save what is possible within a single row. If there are errors in an input data row, try to save it partially and skip the invalid part.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ErrorPolicyEnum</code>.<code class="gqlmd-mdx-entity-name">REJECT_EVERYTHING</code></span>](#reject-everything) \{#reject-everything\}

Reject all rows if there is at least one error in any of them.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ErrorPolicyEnum</code>.<code class="gqlmd-mdx-entity-name">REJECT_FAILED_ROWS</code></span>](#reject-failed-rows) \{#reject-failed-rows\}

Reject rows with errors.

### Member Of

[`attributeBulkCreate`](/api-reference/attributes/mutations/attribute-bulk-create) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`attributeBulkTranslate`](/api-reference/attributes/mutations/attribute-bulk-translate) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`attributeBulkUpdate`](/api-reference/attributes/mutations/attribute-bulk-update) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`attributeValueBulkTranslate`](/api-reference/attributes/mutations/attribute-value-bulk-translate) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`customerBulkUpdate`](/api-reference/users/mutations/customer-bulk-update) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`orderBulkCreate`](/api-reference/orders/mutations/order-bulk-create) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`productBulkCreate`](/api-reference/products/mutations/product-bulk-create) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`productBulkTranslate`](/api-reference/products/mutations/product-bulk-translate) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`productVariantBulkCreate`](/api-reference/products/mutations/product-variant-bulk-create) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`productVariantBulkTranslate`](/api-reference/products/mutations/product-variant-bulk-translate) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`productVariantBulkUpdate`](/api-reference/products/mutations/product-variant-bulk-update) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`stockBulkUpdate`](/api-reference/products/mutations/stock-bulk-update) <mark class="gqlmd-mdx-badge">mutation</mark>
