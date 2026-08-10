---
api_reference: true
id: sale-channel-listing-update
title: saleChannelListingUpdate
---

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `promotionRuleUpdate` mutation instead.

</span>
</fieldset>

Manage sale's availability in channels.

Requires one of the following permissions: MANAGE_DISCOUNTS.

```graphql
saleChannelListingUpdate(
  id: ID!
  input: SaleChannelListingInput!
): SaleChannelListingUpdate @deprecated
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">saleChannelListingUpdate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of a sale to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">saleChannelListingUpdate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">SaleChannelListingInput!</code></span>](/api-reference/discounts/inputs/sale-channel-listing-input) \{#input\}

Fields required to update sale channel listings.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">SaleChannelListingUpdate</code></span>](/api-reference/discounts/objects/sale-channel-listing-update)

Manage sale's availability in channels.

Requires one of the following permissions: MANAGE_DISCOUNTS.
