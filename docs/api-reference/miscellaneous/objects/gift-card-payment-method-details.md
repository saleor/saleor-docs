---
api_reference: true
id: gift-card-payment-method-details
title: GiftCardPaymentMethodDetails
---

Represents a gift card payment method used for a transaction.

Added in Saleor 3.23.

```graphql
type GiftCardPaymentMethodDetails implements PaymentMethodDetails {
  name: String!
  brand: String
  lastChars: String
  isSaleorGiftcard: Boolean!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardPaymentMethodDetails</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Name of the gift card.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardPaymentMethodDetails</code>.<code class="gqlmd-mdx-entity-name">brand</code></span>](#brand)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#brand\}

Brand of the gift card.

Added in Saleor 3.23.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardPaymentMethodDetails</code>.<code class="gqlmd-mdx-entity-name">lastChars</code></span>](#last-chars)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#last-chars\}

Last characters of the gift card code. Max 4 characters.

Added in Saleor 3.23.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardPaymentMethodDetails</code>.<code class="gqlmd-mdx-entity-name">isSaleorGiftcard</code></span>](#is-saleor-giftcard)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-saleor-giftcard\}

Indicates whether the gift card is a built-in Saleor gift card.

Added in Saleor 3.23.

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PaymentMethodDetails</code></span>](/api-reference/miscellaneous/interfaces/payment-method-details)

Represents a payment method used for a transaction.

Added in Saleor 3.22.
