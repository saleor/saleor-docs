---
api_reference: true
id: tax-exemption-manage
title: TaxExemptionManage
---

Exempt checkout or order from charging the taxes. When tax exemption is enabled, taxes won't be charged for the checkout or order. Taxes may still be calculated in cases when product prices are entered with the tax included and the net price needs to be known.

Requires one of the following permissions: MANAGE_TAXES.

```graphql
type TaxExemptionManage {
  taxableObject: TaxSourceObject
  errors: [TaxExemptionManageError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxExemptionManage</code>.<code class="gqlmd-mdx-entity-name">taxableObject</code></span>](#taxable-object)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxSourceObject</code></span>](/api-reference/miscellaneous/unions/tax-source-object) \{#taxable-object\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxExemptionManage</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[TaxExemptionManageError!]!</code></span>](/api-reference/taxes/objects/tax-exemption-manage-error) \{#errors\}

### Returned By

[`taxExemptionManage`](/api-reference/taxes/mutations/tax-exemption-manage) <mark class="gqlmd-mdx-badge">mutation</mark>
