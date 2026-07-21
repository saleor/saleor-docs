---
api_reference: true
id: stored-payment-method
title: StoredPaymentMethod
---

Represents a payment method stored for user (tokenized) in payment gateway.

```graphql
type StoredPaymentMethod {
  id: ID!
  gateway: PaymentGateway!
  paymentMethodId: String!
  creditCardInfo: CreditCard
  supportedPaymentFlows: [TokenizedPaymentFlowEnum!]
  type: String!
  name: String
  data: JSON
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StoredPaymentMethod</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

Stored payment method ID.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StoredPaymentMethod</code>.<code class="gqlmd-mdx-entity-name">gateway</code></span>](#gateway)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PaymentGateway!</code></span>](/api-reference/payments/objects/payment-gateway) \{#gateway\}

Payment gateway that stores this payment method.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StoredPaymentMethod</code>.<code class="gqlmd-mdx-entity-name">paymentMethodId</code></span>](#payment-method-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#payment-method-id\}

ID of stored payment method used to make payment actions. Note: method ID is unique only within the payment gateway.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StoredPaymentMethod</code>.<code class="gqlmd-mdx-entity-name">creditCardInfo</code></span>](#credit-card-info)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CreditCard</code></span>](/api-reference/payments/objects/credit-card) \{#credit-card-info\}

Stored credit card details if available.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StoredPaymentMethod</code>.<code class="gqlmd-mdx-entity-name">supportedPaymentFlows</code></span>](#supported-payment-flows)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[TokenizedPaymentFlowEnum!]</code></span>](/api-reference/payments/enums/tokenized-payment-flow-enum) \{#supported-payment-flows\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StoredPaymentMethod</code>.<code class="gqlmd-mdx-entity-name">type</code></span>](#type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#type\}

Type of the payment method. Example: credit card, wallet, etc.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StoredPaymentMethod</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Payment method name. Example: last 4 digits of credit card, obfuscated email, etc.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StoredPaymentMethod</code>.<code class="gqlmd-mdx-entity-name">data</code></span>](#data)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSON</code></span>](/api-reference/miscellaneous/scalars/json) \{#data\}

JSON data returned by Payment Provider app for this payment method.

### Member Of

[`Checkout`](/api-reference/checkout/objects/checkout) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`User`](/api-reference/users/objects/user) <mark class="gqlmd-mdx-badge">object</mark>
