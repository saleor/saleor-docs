---
api_reference: true
id: gift-card-settings
title: GiftCardSettings
---

Gift card related settings from site settings.

```graphql
type GiftCardSettings {
  expiryType: GiftCardSettingsExpiryTypeEnum!
  expiryPeriod: TimePeriod
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardSettings</code>.<code class="gqlmd-mdx-entity-name">expiryType</code></span>](#expiry-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">GiftCardSettingsExpiryTypeEnum!</code></span>](/api-reference/gift-cards/enums/gift-card-settings-expiry-type-enum) \{#expiry-type\}

The gift card expiry type settings.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardSettings</code>.<code class="gqlmd-mdx-entity-name">expiryPeriod</code></span>](#expiry-period)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TimePeriod</code></span>](/api-reference/miscellaneous/objects/time-period) \{#expiry-period\}

The gift card expiry period settings.

### Returned By

[`giftCardSettings`](/api-reference/gift-cards/queries/gift-card-settings) <mark class="gqlmd-mdx-badge">query</mark>

### Member Of

[`GiftCardSettingsUpdate`](/api-reference/gift-cards/objects/gift-card-settings-update) <mark class="gqlmd-mdx-badge">object</mark>
