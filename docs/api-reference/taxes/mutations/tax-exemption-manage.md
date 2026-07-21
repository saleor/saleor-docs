---
api_reference: true
id: tax-exemption-manage
title: taxExemptionManage
---

Exempt checkout or order from charging the taxes. When tax exemption is enabled, taxes won't be charged for the checkout or order. Taxes may still be calculated in cases when product prices are entered with the tax included and the net price needs to be known.

Requires one of the following permissions: MANAGE_TAXES.

```graphql
taxExemptionManage(
  id: ID!
  taxExemption: Boolean!
): TaxExemptionManage
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">taxExemptionManage</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of the Checkout or Order object.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">taxExemptionManage</code>.<code class="gqlmd-mdx-entity-name">taxExemption</code></span>](#tax-exemption)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#tax-exemption\}

Determines if a taxes should be exempt.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxExemptionManage</code></span>](/api-reference/taxes/objects/tax-exemption-manage)

Exempt checkout or order from charging the taxes. When tax exemption is enabled, taxes won't be charged for the checkout or order. Taxes may still be calculated in cases when product prices are entered with the tax included and the net price needs to be known.

Requires one of the following permissions: MANAGE_TAXES.
