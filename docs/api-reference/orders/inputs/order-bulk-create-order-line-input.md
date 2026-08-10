---
api_reference: true
id: order-bulk-create-order-line-input
title: OrderBulkCreateOrderLineInput
---

No description

```graphql
input OrderBulkCreateOrderLineInput {
  variantId: ID
  variantSku: String
  variantExternalReference: String
  variantName: String
  productName: String
  productSku: String
  translatedVariantName: String
  translatedProductName: String
  createdAt: DateTime!
  isShippingRequired: Boolean!
  isGiftCard: Boolean!
  quantity: Int!
  totalPrice: TaxedMoneyInput!
  undiscountedTotalPrice: TaxedMoneyInput!
  unitDiscountReason: String
  unitDiscountType: DiscountValueTypeEnum
  unitDiscountValue: PositiveDecimal
  warehouse: ID!
  metadata: [MetadataInput!]
  privateMetadata: [MetadataInput!]
  taxRate: PositiveDecimal
  taxClassId: ID
  taxClassName: String
  taxClassMetadata: [MetadataInput!]
  taxClassPrivateMetadata: [MetadataInput!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateOrderLineInput</code>.<code class="gqlmd-mdx-entity-name">variantId</code></span>](#variant-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#variant-id\}

The ID of the product variant.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateOrderLineInput</code>.<code class="gqlmd-mdx-entity-name">variantSku</code></span>](#variant-sku)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#variant-sku\}

The SKU of the product variant.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateOrderLineInput</code>.<code class="gqlmd-mdx-entity-name">variantExternalReference</code></span>](#variant-external-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#variant-external-reference\}

The external ID of the product variant.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateOrderLineInput</code>.<code class="gqlmd-mdx-entity-name">variantName</code></span>](#variant-name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#variant-name\}

The name of the product variant.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateOrderLineInput</code>.<code class="gqlmd-mdx-entity-name">productName</code></span>](#product-name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#product-name\}

The name of the product.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateOrderLineInput</code>.<code class="gqlmd-mdx-entity-name">productSku</code></span>](#product-sku)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#product-sku\}

The SKU of the product.

Added in Saleor 3.18.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateOrderLineInput</code>.<code class="gqlmd-mdx-entity-name">translatedVariantName</code></span>](#translated-variant-name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#translated-variant-name\}

Translation of the product variant name.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateOrderLineInput</code>.<code class="gqlmd-mdx-entity-name">translatedProductName</code></span>](#translated-product-name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#translated-product-name\}

Translation of the product name.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateOrderLineInput</code>.<code class="gqlmd-mdx-entity-name">createdAt</code></span>](#created-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime!</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#created-at\}

The date, when the order line was created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateOrderLineInput</code>.<code class="gqlmd-mdx-entity-name">isShippingRequired</code></span>](#is-shipping-required)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-shipping-required\}

Determines whether shipping of the order line items is required.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateOrderLineInput</code>.<code class="gqlmd-mdx-entity-name">isGiftCard</code></span>](#is-gift-card)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-gift-card\}

Gift card flag.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateOrderLineInput</code>.<code class="gqlmd-mdx-entity-name">quantity</code></span>](#quantity)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span>](/api-reference/miscellaneous/scalars/int) \{#quantity\}

Number of items in the order line

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateOrderLineInput</code>.<code class="gqlmd-mdx-entity-name">totalPrice</code></span>](#total-price)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxedMoneyInput!</code></span>](/api-reference/orders/inputs/taxed-money-input) \{#total-price\}

Price of the order line.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateOrderLineInput</code>.<code class="gqlmd-mdx-entity-name">undiscountedTotalPrice</code></span>](#undiscounted-total-price)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxedMoneyInput!</code></span>](/api-reference/orders/inputs/taxed-money-input) \{#undiscounted-total-price\}

Price of the order line excluding applied discount.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateOrderLineInput</code>.<code class="gqlmd-mdx-entity-name">unitDiscountReason</code></span>](#unit-discount-reason)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#unit-discount-reason\}

Reason of the discount on order line.

Added in Saleor 3.19.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateOrderLineInput</code>.<code class="gqlmd-mdx-entity-name">unitDiscountType</code></span>](#unit-discount-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DiscountValueTypeEnum</code></span>](/api-reference/discounts/enums/discount-value-type-enum) \{#unit-discount-type\}

Type of the discount: fixed or percent

Added in Saleor 3.19.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateOrderLineInput</code>.<code class="gqlmd-mdx-entity-name">unitDiscountValue</code></span>](#unit-discount-value)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveDecimal</code></span>](/api-reference/miscellaneous/scalars/positive-decimal) \{#unit-discount-value\}

Value of the discount. Can store fixed value or percent value

Added in Saleor 3.19.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateOrderLineInput</code>.<code class="gqlmd-mdx-entity-name">warehouse</code></span>](#warehouse)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#warehouse\}

The ID of the warehouse, where the line will be allocated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateOrderLineInput</code>.<code class="gqlmd-mdx-entity-name">metadata</code></span>](#metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataInput!]</code></span>](/api-reference/miscellaneous/inputs/metadata-input) \{#metadata\}

Metadata of the order line. Can be read by any API client authorized to read the object it's attached to.

Warning: never store sensitive information, including financial data such as credit card details.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateOrderLineInput</code>.<code class="gqlmd-mdx-entity-name">privateMetadata</code></span>](#private-metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataInput!]</code></span>](/api-reference/miscellaneous/inputs/metadata-input) \{#private-metadata\}

Private metadata of the order line. Requires permissions to modify and to read the metadata of the object it's attached to.

Warning: never store sensitive information, including financial data such as credit card details.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateOrderLineInput</code>.<code class="gqlmd-mdx-entity-name">taxRate</code></span>](#tax-rate)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveDecimal</code></span>](/api-reference/miscellaneous/scalars/positive-decimal) \{#tax-rate\}

Tax rate of the order line.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateOrderLineInput</code>.<code class="gqlmd-mdx-entity-name">taxClassId</code></span>](#tax-class-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#tax-class-id\}

The ID of the tax class.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateOrderLineInput</code>.<code class="gqlmd-mdx-entity-name">taxClassName</code></span>](#tax-class-name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#tax-class-name\}

The name of the tax class.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateOrderLineInput</code>.<code class="gqlmd-mdx-entity-name">taxClassMetadata</code></span>](#tax-class-metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataInput!]</code></span>](/api-reference/miscellaneous/inputs/metadata-input) \{#tax-class-metadata\}

Metadata of the tax class. Can be read by any API client authorized to read the object it's attached to.

Warning: never store sensitive information, including financial data such as credit card details.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateOrderLineInput</code>.<code class="gqlmd-mdx-entity-name">taxClassPrivateMetadata</code></span>](#tax-class-private-metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataInput!]</code></span>](/api-reference/miscellaneous/inputs/metadata-input) \{#tax-class-private-metadata\}

Private metadata of the tax class. Requires permissions to modify and to read the metadata of the object it's attached to.

Warning: never store sensitive information, including financial data such as credit card details.

### Member Of

[`OrderBulkCreateInput`](/api-reference/orders/inputs/order-bulk-create-input) <mark class="gqlmd-mdx-badge">input</mark>
