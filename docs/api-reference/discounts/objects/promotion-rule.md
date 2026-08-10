---
api_reference: true
id: promotion-rule
title: PromotionRule
---

Represents the promotion rule that specifies the conditions that must be met to apply the promotion discount.

```graphql
type PromotionRule implements Node {
  id: ID!
  name: String
  description: JSON
  promotion: Promotion
  channels: [Channel!]
  rewardValue: PositiveDecimal
  rewardValueType: RewardValueTypeEnum
  predicateType: PromotionTypeEnum
  cataloguePredicate: JSON
  orderPredicate: JSON
  rewardType: RewardTypeEnum
  translation(languageCode: LanguageCodeEnum!): PromotionRuleTranslation
  giftIds: [ID!]
  giftsLimit: Int
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionRule</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionRule</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Name of the promotion rule.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionRule</code>.<code class="gqlmd-mdx-entity-name">description</code></span>](#description)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSON</code></span>](/api-reference/miscellaneous/scalars/json) \{#description\}

Description of the promotion rule.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionRule</code>.<code class="gqlmd-mdx-entity-name">promotion</code></span>](#promotion)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Promotion</code></span>](/api-reference/discounts/objects/promotion) \{#promotion\}

Promotion to which the rule belongs.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionRule</code>.<code class="gqlmd-mdx-entity-name">channels</code></span>](#channels)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[Channel!]</code></span>](/api-reference/channels/objects/channel) \{#channels\}

List of channels where the rule applies.

Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionRule</code>.<code class="gqlmd-mdx-entity-name">rewardValue</code></span>](#reward-value)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveDecimal</code></span>](/api-reference/miscellaneous/scalars/positive-decimal) \{#reward-value\}

The reward value of the promotion rule. Defines the discount value applied when the rule conditions are met.

Added in Saleor 3.19.

Note: this API is currently in Feature Preview and can be subject to changes at later point.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionRule</code>.<code class="gqlmd-mdx-entity-name">rewardValueType</code></span>](#reward-value-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">RewardValueTypeEnum</code></span>](/api-reference/discounts/enums/reward-value-type-enum) \{#reward-value-type\}

The type of reward value of the promotion rule.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionRule</code>.<code class="gqlmd-mdx-entity-name">predicateType</code></span>](#predicate-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PromotionTypeEnum</code></span>](/api-reference/discounts/enums/promotion-type-enum) \{#predicate-type\}

The type of the predicate that must be met to apply the reward.

Added in Saleor 3.19.

Note: this API is currently in Feature Preview and can be subject to changes at later point.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionRule</code>.<code class="gqlmd-mdx-entity-name">cataloguePredicate</code></span>](#catalogue-predicate)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSON</code></span>](/api-reference/miscellaneous/scalars/json) \{#catalogue-predicate\}

The catalogue predicate that must be met to apply the rule reward.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionRule</code>.<code class="gqlmd-mdx-entity-name">orderPredicate</code></span>](#order-predicate)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSON</code></span>](/api-reference/miscellaneous/scalars/json) \{#order-predicate\}

The checkout/order predicate that must be met to apply the rule reward.

Added in Saleor 3.19.

Note: this API is currently in Feature Preview and can be subject to changes at later point.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionRule</code>.<code class="gqlmd-mdx-entity-name">rewardType</code></span>](#reward-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">RewardTypeEnum</code></span>](/api-reference/discounts/enums/reward-type-enum) \{#reward-type\}

The reward type of the promotion rule.

Added in Saleor 3.19.

Note: this API is currently in Feature Preview and can be subject to changes at later point.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionRule</code>.<code class="gqlmd-mdx-entity-name">translation</code></span>](#translation)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PromotionRuleTranslation</code></span>](/api-reference/discounts/objects/promotion-rule-translation) \{#translation\}

Returns translated promotion rule fields for the given language code.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionRule.translation</code>.<code class="gqlmd-mdx-entity-name">languageCode</code></span>](#promotion-rule-translation-language-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LanguageCodeEnum!</code></span>](/api-reference/miscellaneous/enums/language-code-enum) \{#promotion-rule-translation-language-code\}

A language code to return the translation for promotion rule.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionRule</code>.<code class="gqlmd-mdx-entity-name">giftIds</code></span>](#gift-ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#gift-ids\}

Product variant IDs available as a gift to choose.

Added in Saleor 3.19.

Note: this API is currently in Feature Preview and can be subject to changes at later point.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionRule</code>.<code class="gqlmd-mdx-entity-name">giftsLimit</code></span>](#gifts-limit)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#gifts-limit\}

Defines the maximum number of gifts to choose from the gifts list.

Added in Saleor 3.19.

Note: this API is currently in Feature Preview and can be subject to changes at later point.

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Node</code></span>](/api-reference/miscellaneous/interfaces/node)

An object with an ID

### Member Of

[`Promotion`](/api-reference/discounts/objects/promotion) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PromotionRuleCreate`](/api-reference/discounts/objects/promotion-rule-create) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PromotionRuleCreated`](/api-reference/discounts/objects/promotion-rule-created) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PromotionRuleDelete`](/api-reference/discounts/objects/promotion-rule-delete) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PromotionRuleDeleted`](/api-reference/discounts/objects/promotion-rule-deleted) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PromotionRuleTranslate`](/api-reference/discounts/objects/promotion-rule-translate) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PromotionRuleUpdate`](/api-reference/discounts/objects/promotion-rule-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PromotionRuleUpdated`](/api-reference/discounts/objects/promotion-rule-updated) <mark class="gqlmd-mdx-badge">object</mark>
