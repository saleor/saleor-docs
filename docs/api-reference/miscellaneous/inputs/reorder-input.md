---
api_reference: true
id: reorder-input
title: ReorderInput
---

No description

```graphql
input ReorderInput {
  id: ID!
  sortOrder: Int
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ReorderInput</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of the item to move.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ReorderInput</code>.<code class="gqlmd-mdx-entity-name">sortOrder</code></span>](#sort-order)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#sort-order\}

The new relative sorting position of the item (from -inf to +inf). 1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged.

### Member Of

[`attributeReorderValues`](/api-reference/attributes/mutations/attribute-reorder-values) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`channelReorderWarehouses`](/api-reference/channels/mutations/channel-reorder-warehouses) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`pageReorderAttributeValues`](/api-reference/pages/mutations/page-reorder-attribute-values) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`pageTypeReorderAttributes`](/api-reference/pages/mutations/page-type-reorder-attributes) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`productReorderAttributeValues`](/api-reference/products/mutations/product-reorder-attribute-values) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`productTypeReorderAttributes`](/api-reference/products/mutations/product-type-reorder-attributes) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`productVariantReorder`](/api-reference/products/mutations/product-variant-reorder) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`productVariantReorderAttributeValues`](/api-reference/products/mutations/product-variant-reorder-attribute-values) <mark class="gqlmd-mdx-badge">mutation</mark>
