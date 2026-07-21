---
api_reference: true
id: gift-card-resend
title: giftCardResend
---

Resend a gift card.

Requires one of the following permissions: MANAGE_GIFT_CARD.

Triggers the following webhook events:

- NOTIFY_USER (async): A notification for gift card resend.

```graphql
giftCardResend(
  input: GiftCardResendInput!
): GiftCardResend
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">giftCardResend</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">GiftCardResendInput!</code></span>](/api-reference/gift-cards/inputs/gift-card-resend-input) \{#input\}

Fields required to resend a gift card.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">GiftCardResend</code></span>](/api-reference/gift-cards/objects/gift-card-resend)

Resend a gift card.

Requires one of the following permissions: MANAGE_GIFT_CARD.

Triggers the following webhook events:

- NOTIFY_USER (async): A notification for gift card resend.
