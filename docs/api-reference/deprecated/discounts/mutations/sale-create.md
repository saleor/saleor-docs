---
api_reference: true
id: sale-create
title: saleCreate
---

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `promotionCreate` mutation instead.

</span>
</fieldset>

Creates a new sale.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- SALE_CREATED (async): A sale was created.

```graphql
saleCreate(
  input: SaleInput!
): SaleCreate @deprecated
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">saleCreate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">SaleInput!</code></span>](/api-reference/discounts/inputs/sale-input) \{#input\}

Fields required to create a sale.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">SaleCreate</code></span>](/api-reference/discounts/objects/sale-create)

Creates a new sale.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- SALE_CREATED (async): A sale was created.
