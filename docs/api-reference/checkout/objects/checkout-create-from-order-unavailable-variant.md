---
api_reference: true
id: checkout-create-from-order-unavailable-variant
title: CheckoutCreateFromOrderUnavailableVariant
---

No description

```graphql
type CheckoutCreateFromOrderUnavailableVariant {
  message: String!
  code: CheckoutCreateFromOrderUnavailableVariantErrorCode!
  variantId: ID!
  lineId: ID!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutCreateFromOrderUnavailableVariant</code>.<code class="gqlmd-mdx-entity-name">message</code></span>](#message)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#message\}

The error message.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutCreateFromOrderUnavailableVariant</code>.<code class="gqlmd-mdx-entity-name">code</code></span>](#code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CheckoutCreateFromOrderUnavailableVariantErrorCode!</code></span>](/api-reference/checkout/enums/checkout-create-from-order-unavailable-variant-error-code) \{#code\}

The error code.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutCreateFromOrderUnavailableVariant</code>.<code class="gqlmd-mdx-entity-name">variantId</code></span>](#variant-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#variant-id\}

Variant ID that is unavailable.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutCreateFromOrderUnavailableVariant</code>.<code class="gqlmd-mdx-entity-name">lineId</code></span>](#line-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#line-id\}

Order line ID that is unavailable.

### Member Of

[`CheckoutCreateFromOrder`](/api-reference/checkout/objects/checkout-create-from-order) <mark class="gqlmd-mdx-badge">object</mark>
