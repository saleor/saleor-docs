---
api_reference: true
id: gift-card-resend
title: GiftCardResend
---

Resend a gift card.

Requires one of the following permissions: MANAGE_GIFT_CARD.

Triggers the following webhook events:

- NOTIFY_USER (async): A notification for gift card resend.

```graphql
type GiftCardResend {
  giftCard: GiftCard
  errors: [GiftCardError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardResend</code>.<code class="gqlmd-mdx-entity-name">giftCard</code></span>](#gift-card)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">GiftCard</code></span>](/api-reference/gift-cards/objects/gift-card) \{#gift-card\}

Gift card which has been sent.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardResend</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[GiftCardError!]!</code></span>](/api-reference/gift-cards/objects/gift-card-error) \{#errors\}

### Returned By

[`giftCardResend`](/api-reference/gift-cards/mutations/gift-card-resend) <mark class="gqlmd-mdx-badge">mutation</mark>
