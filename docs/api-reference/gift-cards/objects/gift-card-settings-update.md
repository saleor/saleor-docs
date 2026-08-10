---
api_reference: true
id: gift-card-settings-update
title: GiftCardSettingsUpdate
---

Update gift card settings.

Requires one of the following permissions: MANAGE_GIFT_CARD.

```graphql
type GiftCardSettingsUpdate {
  giftCardSettings: GiftCardSettings
  errors: [GiftCardSettingsError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardSettingsUpdate</code>.<code class="gqlmd-mdx-entity-name">giftCardSettings</code></span>](#gift-card-settings)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">GiftCardSettings</code></span>](/api-reference/gift-cards/objects/gift-card-settings) \{#gift-card-settings\}

Gift card settings.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardSettingsUpdate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[GiftCardSettingsError!]!</code></span>](/api-reference/gift-cards/objects/gift-card-settings-error) \{#errors\}

### Returned By

[`giftCardSettingsUpdate`](/api-reference/gift-cards/mutations/gift-card-settings-update) <mark class="gqlmd-mdx-badge">mutation</mark>
