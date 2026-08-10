---
api_reference: true
id: order-by-token
title: orderByToken
---

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

No longer supported

</span>
</fieldset>

Look up an order by token.

```graphql
orderByToken(
  token: UUID!
): Order @deprecated
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderByToken</code>.<code class="gqlmd-mdx-entity-name">token</code></span>](#token)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">UUID!</code></span>](/api-reference/miscellaneous/scalars/uuid) \{#token\}

The order's token.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Order</code></span>](/api-reference/orders/objects/order)

Represents an order in the shop.
