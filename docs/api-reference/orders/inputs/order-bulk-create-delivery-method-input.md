---
api_reference: true
id: order-bulk-create-delivery-method-input
title: OrderBulkCreateDeliveryMethodInput
---

No description

```graphql
input OrderBulkCreateDeliveryMethodInput {
  warehouseId: ID
  warehouseName: String
  shippingMethodId: ID
  shippingMethodName: String
  shippingPrice: TaxedMoneyInput
  shippingTaxRate: PositiveDecimal
  shippingTaxClassId: ID
  shippingTaxClassName: String
  shippingTaxClassMetadata: [MetadataInput!]
  shippingTaxClassPrivateMetadata: [MetadataInput!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateDeliveryMethodInput</code>.<code class="gqlmd-mdx-entity-name">warehouseId</code></span>](#warehouse-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#warehouse-id\}

The ID of the warehouse.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateDeliveryMethodInput</code>.<code class="gqlmd-mdx-entity-name">warehouseName</code></span>](#warehouse-name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#warehouse-name\}

The name of the warehouse.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateDeliveryMethodInput</code>.<code class="gqlmd-mdx-entity-name">shippingMethodId</code></span>](#shipping-method-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#shipping-method-id\}

The ID of the shipping method.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateDeliveryMethodInput</code>.<code class="gqlmd-mdx-entity-name">shippingMethodName</code></span>](#shipping-method-name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#shipping-method-name\}

The name of the shipping method.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateDeliveryMethodInput</code>.<code class="gqlmd-mdx-entity-name">shippingPrice</code></span>](#shipping-price)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxedMoneyInput</code></span>](/api-reference/orders/inputs/taxed-money-input) \{#shipping-price\}

The price of the shipping.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateDeliveryMethodInput</code>.<code class="gqlmd-mdx-entity-name">shippingTaxRate</code></span>](#shipping-tax-rate)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveDecimal</code></span>](/api-reference/miscellaneous/scalars/positive-decimal) \{#shipping-tax-rate\}

Tax rate of the shipping.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateDeliveryMethodInput</code>.<code class="gqlmd-mdx-entity-name">shippingTaxClassId</code></span>](#shipping-tax-class-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#shipping-tax-class-id\}

The ID of the tax class.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateDeliveryMethodInput</code>.<code class="gqlmd-mdx-entity-name">shippingTaxClassName</code></span>](#shipping-tax-class-name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#shipping-tax-class-name\}

The name of the tax class.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateDeliveryMethodInput</code>.<code class="gqlmd-mdx-entity-name">shippingTaxClassMetadata</code></span>](#shipping-tax-class-metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataInput!]</code></span>](/api-reference/miscellaneous/inputs/metadata-input) \{#shipping-tax-class-metadata\}

Metadata of the tax class. Can be read by any API client authorized to read the object it's attached to.

Warning: never store sensitive information, including financial data such as credit card details.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateDeliveryMethodInput</code>.<code class="gqlmd-mdx-entity-name">shippingTaxClassPrivateMetadata</code></span>](#shipping-tax-class-private-metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataInput!]</code></span>](/api-reference/miscellaneous/inputs/metadata-input) \{#shipping-tax-class-private-metadata\}

Private metadata of the tax class. Requires permissions to modify and to read the metadata of the object it's attached to.

Warning: never store sensitive information, including financial data such as credit card details.

### Member Of

[`OrderBulkCreateInput`](/api-reference/orders/inputs/order-bulk-create-input) <mark class="gqlmd-mdx-badge">input</mark>
