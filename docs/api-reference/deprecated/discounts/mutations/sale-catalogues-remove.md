---
api_reference: true
id: sale-catalogues-remove
title: saleCataloguesRemove
---

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `promotionRuleUpdate` and `promotionRuleDelete` mutations instead.

</span>
</fieldset>

Removes products, categories, collections from a sale.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- SALE_UPDATED (async): A sale was updated.

```graphql
saleCataloguesRemove(
  id: ID!
  input: CatalogueInput!
): SaleRemoveCatalogues @deprecated
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">saleCataloguesRemove</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of a sale.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">saleCataloguesRemove</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CatalogueInput!</code></span>](/api-reference/discounts/inputs/catalogue-input) \{#input\}

Fields required to modify catalogue IDs of sale.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">SaleRemoveCatalogues</code></span>](/api-reference/discounts/objects/sale-remove-catalogues)

Removes products, categories, collections from a sale.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- SALE_UPDATED (async): A sale was updated.
