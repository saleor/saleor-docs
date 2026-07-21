---
api_reference: true
id: order-settings-update-input
title: OrderSettingsUpdateInput
---

No description

```graphql
input OrderSettingsUpdateInput {
  automaticallyConfirmAllNewOrders: Boolean
  automaticallyFulfillNonShippableGiftCard: Boolean
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderSettingsUpdateInput</code>.<code class="gqlmd-mdx-entity-name">automaticallyConfirmAllNewOrders</code></span>](#automatically-confirm-all-new-orders)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#automatically-confirm-all-new-orders\}

When disabled, all new orders from checkout will be marked as unconfirmed. When enabled orders from checkout will become unfulfilled immediately. By default set to True

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderSettingsUpdateInput</code>.<code class="gqlmd-mdx-entity-name">automaticallyFulfillNonShippableGiftCard</code></span>](#automatically-fulfill-non-shippable-gift-card)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#automatically-fulfill-non-shippable-gift-card\}

When enabled, all non-shippable gift card orders will be fulfilled automatically. By default set to True.

### Member Of

[`orderSettingsUpdate`](/api-reference/deprecated/orders/mutations/order-settings-update) <mark class="gqlmd-mdx-badge">mutation</mark>
