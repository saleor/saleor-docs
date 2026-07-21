---
api_reference: true
id: gift-card-settings-update-input
title: GiftCardSettingsUpdateInput
---

No description

```graphql
input GiftCardSettingsUpdateInput {
  expiryType: GiftCardSettingsExpiryTypeEnum
  expiryPeriod: TimePeriodInputType
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardSettingsUpdateInput</code>.<code class="gqlmd-mdx-entity-name">expiryType</code></span>](#expiry-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">GiftCardSettingsExpiryTypeEnum</code></span>](/api-reference/gift-cards/enums/gift-card-settings-expiry-type-enum) \{#expiry-type\}

Defines gift card default expiry settings.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardSettingsUpdateInput</code>.<code class="gqlmd-mdx-entity-name">expiryPeriod</code></span>](#expiry-period)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TimePeriodInputType</code></span>](/api-reference/miscellaneous/inputs/time-period-input-type) \{#expiry-period\}

Defines gift card expiry period.

### Member Of

[`giftCardSettingsUpdate`](/api-reference/gift-cards/mutations/gift-card-settings-update) <mark class="gqlmd-mdx-badge">mutation</mark>
