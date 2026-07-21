---
api_reference: true
id: payment-input
title: PaymentInput
---

Fields required to create a payment.

The legacy Payments API is deprecated and will be removed. Use the Transactions API instead.

```graphql
input PaymentInput {
  gateway: String!
  token: String
  amount: PositiveDecimal
  returnUrl: String
  storePaymentMethod: StorePaymentMethodEnum
  metadata: [MetadataInput!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentInput</code>.<code class="gqlmd-mdx-entity-name">gateway</code></span>](#gateway)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#gateway\}

A gateway to use with that payment.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentInput</code>.<code class="gqlmd-mdx-entity-name">token</code></span>](#token)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#token\}

Client-side generated payment token, representing customer's billing data in a secure manner.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentInput</code>.<code class="gqlmd-mdx-entity-name">amount</code></span>](#amount)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveDecimal</code></span>](/api-reference/miscellaneous/scalars/positive-decimal) \{#amount\}

Total amount of the transaction, including all taxes and discounts. If no amount is provided, the checkout total will be used.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentInput</code>.<code class="gqlmd-mdx-entity-name">returnUrl</code></span>](#return-url)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#return-url\}

URL of a storefront view where user should be redirected after requiring additional actions. Payment with additional actions will not be finished if this field is not provided.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentInput</code>.<code class="gqlmd-mdx-entity-name">storePaymentMethod</code></span>](#store-payment-method)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">StorePaymentMethodEnum</code></span>](/api-reference/payments/enums/store-payment-method-enum) \{#store-payment-method\}

Payment store type.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentInput</code>.<code class="gqlmd-mdx-entity-name">metadata</code></span>](#metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataInput!]</code></span>](/api-reference/miscellaneous/inputs/metadata-input) \{#metadata\}

User public metadata. Can be read by any API client authorized to read the object it's attached to.

Warning: never store sensitive information, including financial data such as credit card details.

### Member Of

[`checkoutPaymentCreate`](/api-reference/deprecated/checkout/mutations/checkout-payment-create) <mark class="gqlmd-mdx-badge">mutation</mark>
