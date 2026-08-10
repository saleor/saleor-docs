---
api_reference: true
id: checkout-line
title: CheckoutLine
---

Represents an item in the checkout.

```graphql
type CheckoutLine implements Node, ObjectWithMetadata {
  id: ID!
  privateMetadata: [MetadataItem!]!
  privateMetafield(
    key: String!
  ): String
  privateMetafields(
    keys: [String!]
  ): Metadata
  metadata: [MetadataItem!]!
  metafield(
    key: String!
  ): String
  metafields(
    keys: [String!]
  ): Metadata
  variant: ProductVariant!
  quantity: Int!
  unitPrice: TaxedMoney!
  undiscountedUnitPrice: Money!
  priorUnitPrice: Money
  totalPrice: TaxedMoney!
  undiscountedTotalPrice: Money!
  priorTotalPrice: Money
  requiresShipping: Boolean!
  problems: [CheckoutLineProblem!]
  isGift: Boolean
  priceOverrideReason: String
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutLine</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of the checkout line.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutLine</code>.<code class="gqlmd-mdx-entity-name">privateMetadata</code></span>](#private-metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataItem!]!</code></span>](/api-reference/miscellaneous/objects/metadata-item) \{#private-metadata\}

List of private metadata items. Requires staff permissions to access.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutLine</code>.<code class="gqlmd-mdx-entity-name">privateMetafield</code></span>](#private-metafield)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#private-metafield\}

A single key from private metadata. Requires staff permissions to access.

Tip: Use GraphQL aliases to fetch multiple keys.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutLine.privateMetafield</code>.<code class="gqlmd-mdx-entity-name">key</code></span>](#checkout-line-private-metafield-key)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#checkout-line-private-metafield-key\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutLine</code>.<code class="gqlmd-mdx-entity-name">privateMetafields</code></span>](#private-metafields)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Metadata</code></span>](/api-reference/miscellaneous/scalars/metadata) \{#private-metafields\}

Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutLine.privateMetafields</code>.<code class="gqlmd-mdx-entity-name">keys</code></span>](#checkout-line-private-metafields-keys)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#checkout-line-private-metafields-keys\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutLine</code>.<code class="gqlmd-mdx-entity-name">metadata</code></span>](#metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataItem!]!</code></span>](/api-reference/miscellaneous/objects/metadata-item) \{#metadata\}

List of public metadata items. Can be accessed without permissions.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutLine</code>.<code class="gqlmd-mdx-entity-name">metafield</code></span>](#metafield)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#metafield\}

A single key from public metadata.

Tip: Use GraphQL aliases to fetch multiple keys.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutLine.metafield</code>.<code class="gqlmd-mdx-entity-name">key</code></span>](#checkout-line-metafield-key)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#checkout-line-metafield-key\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutLine</code>.<code class="gqlmd-mdx-entity-name">metafields</code></span>](#metafields)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Metadata</code></span>](/api-reference/miscellaneous/scalars/metadata) \{#metafields\}

Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutLine.metafields</code>.<code class="gqlmd-mdx-entity-name">keys</code></span>](#checkout-line-metafields-keys)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#checkout-line-metafields-keys\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutLine</code>.<code class="gqlmd-mdx-entity-name">variant</code></span>](#variant)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductVariant!</code></span>](/api-reference/products/objects/product-variant) \{#variant\}

The product variant from which the checkout line was created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutLine</code>.<code class="gqlmd-mdx-entity-name">quantity</code></span>](#quantity)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span>](/api-reference/miscellaneous/scalars/int) \{#quantity\}

The quantity of product variant assigned to the checkout line.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutLine</code>.<code class="gqlmd-mdx-entity-name">unitPrice</code></span>](#unit-price)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxedMoney!</code></span>](/api-reference/miscellaneous/objects/taxed-money) \{#unit-price\}

The unit price of the checkout line, with taxes and discounts.

Triggers the following webhook events:

- CHECKOUT_CALCULATE_TAXES (sync): Optionally triggered when checkout prices are expired.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutLine</code>.<code class="gqlmd-mdx-entity-name">undiscountedUnitPrice</code></span>](#undiscounted-unit-price)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Money!</code></span>](/api-reference/miscellaneous/objects/money) \{#undiscounted-unit-price\}

The unit price of the checkout line, without discounts.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutLine</code>.<code class="gqlmd-mdx-entity-name">priorUnitPrice</code></span>](#prior-unit-price)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Money</code></span>](/api-reference/miscellaneous/objects/money) \{#prior-unit-price\}

The unit price of the checkout line prior to promotion.

Added in Saleor 3.21.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutLine</code>.<code class="gqlmd-mdx-entity-name">totalPrice</code></span>](#total-price)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxedMoney!</code></span>](/api-reference/miscellaneous/objects/taxed-money) \{#total-price\}

The sum of the checkout line price, taxes and discounts.

Triggers the following webhook events:

- CHECKOUT_CALCULATE_TAXES (sync): Optionally triggered when checkout prices are expired.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutLine</code>.<code class="gqlmd-mdx-entity-name">undiscountedTotalPrice</code></span>](#undiscounted-total-price)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Money!</code></span>](/api-reference/miscellaneous/objects/money) \{#undiscounted-total-price\}

The sum of the checkout line price, without discounts.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutLine</code>.<code class="gqlmd-mdx-entity-name">priorTotalPrice</code></span>](#prior-total-price)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Money</code></span>](/api-reference/miscellaneous/objects/money) \{#prior-total-price\}

The sum of the checkout line price prior to promotion.

Added in Saleor 3.21.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutLine</code>.<code class="gqlmd-mdx-entity-name">requiresShipping</code></span>](#requires-shipping)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#requires-shipping\}

Indicates whether the item need to be delivered.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutLine</code>.<code class="gqlmd-mdx-entity-name">problems</code></span>](#problems)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CheckoutLineProblem!]</code></span>](/api-reference/miscellaneous/unions/checkout-line-problem) \{#problems\}

List of problems with the checkout line.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutLine</code>.<code class="gqlmd-mdx-entity-name">isGift</code></span>](#is-gift)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-gift\}

Determine if the line is a gift.

Added in Saleor 3.19.

Note: this API is currently in Feature Preview and can be subject to changes at later point.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutLine</code>.<code class="gqlmd-mdx-entity-name">priceOverrideReason</code></span>](#price-override-reason)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#price-override-reason\}

Reason explaining why a custom price was set on the line, provided by the app that set the price override.

Added in Saleor 3.23.

Requires one of the following permissions: MANAGE_CHECKOUTS, HANDLE_CHECKOUTS.

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Node</code></span>](/api-reference/miscellaneous/interfaces/node)

An object with an ID

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ObjectWithMetadata</code></span>](/api-reference/miscellaneous/interfaces/object-with-metadata)

### Member Of

[`Checkout`](/api-reference/checkout/objects/checkout) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutLineCountableEdge`](/api-reference/checkout/objects/checkout-line-countable-edge) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutLineProblemInsufficientStock`](/api-reference/checkout/objects/checkout-line-problem-insufficient-stock) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutLineProblemVariantNotAvailable`](/api-reference/checkout/objects/checkout-line-problem-variant-not-available) <mark class="gqlmd-mdx-badge">object</mark>

### Implemented By

[`TaxSourceLine`](/api-reference/miscellaneous/unions/tax-source-line) <mark class="gqlmd-mdx-badge">union</mark>
