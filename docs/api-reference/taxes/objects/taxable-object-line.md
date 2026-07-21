---
api_reference: true
id: taxable-object-line
title: TaxableObjectLine
---

No description

```graphql
type TaxableObjectLine {
  sourceLine: TaxSourceLine!
  quantity: Int!
  chargeTaxes: Boolean!
  productName: String!
  variantName: String!
  productSku: String
  unitPrice: Money!
  totalPrice: Money!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxableObjectLine</code>.<code class="gqlmd-mdx-entity-name">sourceLine</code></span>](#source-line)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxSourceLine!</code></span>](/api-reference/miscellaneous/unions/tax-source-line) \{#source-line\}

The source line related to this tax line.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxableObjectLine</code>.<code class="gqlmd-mdx-entity-name">quantity</code></span>](#quantity)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span>](/api-reference/miscellaneous/scalars/int) \{#quantity\}

Number of items.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxableObjectLine</code>.<code class="gqlmd-mdx-entity-name">chargeTaxes</code></span>](#charge-taxes)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#charge-taxes\}

Determines if taxes are being charged for the product.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxableObjectLine</code>.<code class="gqlmd-mdx-entity-name">productName</code></span>](#product-name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#product-name\}

The product name.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxableObjectLine</code>.<code class="gqlmd-mdx-entity-name">variantName</code></span>](#variant-name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#variant-name\}

The variant name.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxableObjectLine</code>.<code class="gqlmd-mdx-entity-name">productSku</code></span>](#product-sku)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#product-sku\}

The product sku.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxableObjectLine</code>.<code class="gqlmd-mdx-entity-name">unitPrice</code></span>](#unit-price)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Money!</code></span>](/api-reference/miscellaneous/objects/money) \{#unit-price\}

Price of the single item in the order line. The price includes catalogue promotions, specific product and applied once per order voucher discounts. The price does not include the entire order discount.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxableObjectLine</code>.<code class="gqlmd-mdx-entity-name">totalPrice</code></span>](#total-price)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Money!</code></span>](/api-reference/miscellaneous/objects/money) \{#total-price\}

Price of the order line. The price includes catalogue promotions, specific product and applied once per order voucher discounts. The price does not include the entire order discount.

### Member Of

[`TaxableObject`](/api-reference/taxes/objects/taxable-object) <mark class="gqlmd-mdx-badge">object</mark>
