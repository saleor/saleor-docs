---
api_reference: true
id: taxable-object-discount
title: TaxableObjectDiscount
---

Taxable object discount.

```graphql
type TaxableObjectDiscount {
  name: String
  amount: Money!
  type: TaxableObjectDiscountTypeEnum!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxableObjectDiscount</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

The name of the discount.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxableObjectDiscount</code>.<code class="gqlmd-mdx-entity-name">amount</code></span>](#amount)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Money!</code></span>](/api-reference/miscellaneous/objects/money) \{#amount\}

The amount of the discount.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxableObjectDiscount</code>.<code class="gqlmd-mdx-entity-name">type</code></span>](#type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxableObjectDiscountTypeEnum!</code></span>](/api-reference/taxes/enums/taxable-object-discount-type-enum) \{#type\}

Indicates which part of the order the discount should affect: SUBTOTAL or SHIPPING.

### Member Of

[`TaxableObject`](/api-reference/taxes/objects/taxable-object) <mark class="gqlmd-mdx-badge">object</mark>
