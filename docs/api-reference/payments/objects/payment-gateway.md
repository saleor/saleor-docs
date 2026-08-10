---
api_reference: true
id: payment-gateway
title: PaymentGateway
---

Available payment gateway backend with configuration necessary to setup client.

```graphql
type PaymentGateway {
  name: String!
  id: ID!
  config: [GatewayConfigLine!]!
  currencies: [String!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentGateway</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Payment gateway name.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentGateway</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

Payment gateway ID.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentGateway</code>.<code class="gqlmd-mdx-entity-name">config</code></span>](#config)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[GatewayConfigLine!]!</code></span>](/api-reference/payments/objects/gateway-config-line) \{#config\}

Payment gateway client configuration.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentGateway</code>.<code class="gqlmd-mdx-entity-name">currencies</code></span>](#currencies)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]!</code></span>](/api-reference/miscellaneous/scalars/string) \{#currencies\}

Payment gateway supported currencies.

### Member Of

[`Checkout`](/api-reference/checkout/objects/checkout) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`Shop`](/api-reference/miscellaneous/objects/shop) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`StoredPaymentMethod`](/api-reference/payments/objects/stored-payment-method) <mark class="gqlmd-mdx-badge">object</mark>
