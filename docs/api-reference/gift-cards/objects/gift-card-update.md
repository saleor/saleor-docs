---
api_reference: true
id: gift-card-update
title: GiftCardUpdate
---

Update a gift card.

Requires one of the following permissions: MANAGE_GIFT_CARD.

Triggers the following webhook events:

- GIFT_CARD_UPDATED (async): A gift card was updated.

```graphql
type GiftCardUpdate {
  giftCardErrors: [GiftCardError!]! @deprecated
  errors: [GiftCardError!]!
  giftCard: GiftCard
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardUpdate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[GiftCardError!]!</code></span>](/api-reference/gift-cards/objects/gift-card-error) \{#errors\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardUpdate</code>.<code class="gqlmd-mdx-entity-name">giftCard</code></span>](#gift-card)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">GiftCard</code></span>](/api-reference/gift-cards/objects/gift-card) \{#gift-card\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardUpdate</code>.<code class="gqlmd-mdx-entity-name">giftCardErrors</code></span>](#gift-card-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[GiftCardError!]!</code></span>](/api-reference/gift-cards/objects/gift-card-error) \{#gift-card-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`giftCardUpdate`](/api-reference/gift-cards/mutations/gift-card-update) <mark class="gqlmd-mdx-badge">mutation</mark>
