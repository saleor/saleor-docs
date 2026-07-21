---
api_reference: true
id: payment-method-type-enum-filter-input
title: PaymentMethodTypeEnumFilterInput
---

No description

```graphql
input PaymentMethodTypeEnumFilterInput {
  eq: PaymentMethodTypeEnum
  oneOf: [PaymentMethodTypeEnum!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentMethodTypeEnumFilterInput</code>.<code class="gqlmd-mdx-entity-name">eq</code></span>](#eq)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PaymentMethodTypeEnum</code></span>](/api-reference/payments/enums/payment-method-type-enum) \{#eq\}

The value equal to.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentMethodTypeEnumFilterInput</code>.<code class="gqlmd-mdx-entity-name">oneOf</code></span>](#one-of)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[PaymentMethodTypeEnum!]</code></span>](/api-reference/payments/enums/payment-method-type-enum) \{#one-of\}

The value included in.

### Member Of

[`PaymentMethodDetailsFilterInput`](/api-reference/miscellaneous/inputs/payment-method-details-filter-input) <mark class="gqlmd-mdx-badge">input</mark>
