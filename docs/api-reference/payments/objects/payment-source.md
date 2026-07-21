---
api_reference: true
id: payment-source
title: PaymentSource
---

Represents a payment source stored for user in payment gateway, such as credit card.

The legacy Payments API is deprecated and will be removed. Use the Transactions API instead.

```graphql
type PaymentSource {
  gateway: String!
  paymentMethodId: String
  creditCardInfo: CreditCard
  metadata: [MetadataItem!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentSource</code>.<code class="gqlmd-mdx-entity-name">gateway</code></span>](#gateway)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#gateway\}

Payment gateway name.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentSource</code>.<code class="gqlmd-mdx-entity-name">paymentMethodId</code></span>](#payment-method-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#payment-method-id\}

ID of stored payment method.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentSource</code>.<code class="gqlmd-mdx-entity-name">creditCardInfo</code></span>](#credit-card-info)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CreditCard</code></span>](/api-reference/payments/objects/credit-card) \{#credit-card-info\}

Stored credit card details if available.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentSource</code>.<code class="gqlmd-mdx-entity-name">metadata</code></span>](#metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataItem!]!</code></span>](/api-reference/miscellaneous/objects/metadata-item) \{#metadata\}

List of public metadata items.

Can be accessed without permissions.

### Member Of

[`User`](/api-reference/users/objects/user) <mark class="gqlmd-mdx-badge">object</mark>
