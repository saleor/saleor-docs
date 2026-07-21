---
api_reference: true
id: sale-update
title: saleUpdate
---

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `promotionUpdate` mutation instead.

</span>
</fieldset>

Updates a sale.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- SALE_UPDATED (async): A sale was updated.
- SALE_TOGGLE (async): Optionally triggered when a sale is started or stopped.

```graphql
saleUpdate(
  id: ID!
  input: SaleInput!
): SaleUpdate @deprecated
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">saleUpdate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of a sale to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">saleUpdate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">SaleInput!</code></span>](/api-reference/discounts/inputs/sale-input) \{#input\}

Fields required to update a sale.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">SaleUpdate</code></span>](/api-reference/discounts/objects/sale-update)

Updates a sale.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- SALE_UPDATED (async): A sale was updated.
- SALE_TOGGLE (async): Optionally triggered when a sale is started or stopped.
