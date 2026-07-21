---
api_reference: true
id: gateway-config-line
title: GatewayConfigLine
---

Payment gateway client configuration key and value pair.

```graphql
type GatewayConfigLine {
  field: String!
  value: String
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GatewayConfigLine</code>.<code class="gqlmd-mdx-entity-name">field</code></span>](#field)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#field\}

Gateway config key.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GatewayConfigLine</code>.<code class="gqlmd-mdx-entity-name">value</code></span>](#value)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#value\}

Gateway config value for key.

### Member Of

[`PaymentGateway`](/api-reference/payments/objects/payment-gateway) <mark class="gqlmd-mdx-badge">object</mark>
