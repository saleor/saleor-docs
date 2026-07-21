---
api_reference: true
id: promotion-rule-update-input
title: PromotionRuleUpdateInput
---

No description

```graphql
input PromotionRuleUpdateInput {
  name: String
  description: JSON
  cataloguePredicate: CataloguePredicateInput
  orderPredicate: OrderPredicateInput
  rewardValueType: RewardValueTypeEnum
  rewardValue: PositiveDecimal
  rewardType: RewardTypeEnum
  addChannels: [ID!]
  removeChannels: [ID!]
  addGifts: [ID!]
  removeGifts: [ID!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionRuleUpdateInput</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Promotion rule name.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionRuleUpdateInput</code>.<code class="gqlmd-mdx-entity-name">description</code></span>](#description)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSON</code></span>](/api-reference/miscellaneous/scalars/json) \{#description\}

Promotion rule description.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionRuleUpdateInput</code>.<code class="gqlmd-mdx-entity-name">cataloguePredicate</code></span>](#catalogue-predicate)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CataloguePredicateInput</code></span>](/api-reference/discounts/inputs/catalogue-predicate-input) \{#catalogue-predicate\}

Defines the conditions on the catalogue level that must be met for the reward to be applied.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionRuleUpdateInput</code>.<code class="gqlmd-mdx-entity-name">orderPredicate</code></span>](#order-predicate)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderPredicateInput</code></span>](/api-reference/discounts/inputs/order-predicate-input) \{#order-predicate\}

Defines the conditions on the checkout/draft order level that must be met for the reward to be applied.

Added in Saleor 3.19.

Note: this API is currently in Feature Preview and can be subject to changes at later point.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionRuleUpdateInput</code>.<code class="gqlmd-mdx-entity-name">rewardValueType</code></span>](#reward-value-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">RewardValueTypeEnum</code></span>](/api-reference/discounts/enums/reward-value-type-enum) \{#reward-value-type\}

Defines the promotion rule reward value type. Must be provided together with reward value.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionRuleUpdateInput</code>.<code class="gqlmd-mdx-entity-name">rewardValue</code></span>](#reward-value)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveDecimal</code></span>](/api-reference/miscellaneous/scalars/positive-decimal) \{#reward-value\}

Defines the discount value. Required when catalogue predicate is provided.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionRuleUpdateInput</code>.<code class="gqlmd-mdx-entity-name">rewardType</code></span>](#reward-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">RewardTypeEnum</code></span>](/api-reference/discounts/enums/reward-type-enum) \{#reward-type\}

Defines the reward type of the promotion rule.

Added in Saleor 3.19.

Note: this API is currently in Feature Preview and can be subject to changes at later point.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionRuleUpdateInput</code>.<code class="gqlmd-mdx-entity-name">addChannels</code></span>](#add-channels)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#add-channels\}

List of channel ids to add.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionRuleUpdateInput</code>.<code class="gqlmd-mdx-entity-name">removeChannels</code></span>](#remove-channels)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#remove-channels\}

List of channel ids to remove.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionRuleUpdateInput</code>.<code class="gqlmd-mdx-entity-name">addGifts</code></span>](#add-gifts)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#add-gifts\}

List of variant IDs available as a gift to add.

Added in Saleor 3.19.

Note: this API is currently in Feature Preview and can be subject to changes at later point.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionRuleUpdateInput</code>.<code class="gqlmd-mdx-entity-name">removeGifts</code></span>](#remove-gifts)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#remove-gifts\}

List of variant IDs available as a gift to remove.

Added in Saleor 3.19.

Note: this API is currently in Feature Preview and can be subject to changes at later point.

### Member Of

[`promotionRuleUpdate`](/api-reference/discounts/mutations/promotion-rule-update) <mark class="gqlmd-mdx-badge">mutation</mark>
