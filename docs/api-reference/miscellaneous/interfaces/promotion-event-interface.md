---
api_reference: true
id: promotion-event-interface
title: PromotionEventInterface
---

No description

```graphql
interface PromotionEventInterface {
  id: ID!
  date: DateTime!
  type: PromotionEventsEnum!
  createdBy: UserOrApp
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionEventInterface</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionEventInterface</code>.<code class="gqlmd-mdx-entity-name">date</code></span>](#date)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime!</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#date\}

Date when event happened.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionEventInterface</code>.<code class="gqlmd-mdx-entity-name">type</code></span>](#type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PromotionEventsEnum!</code></span>](/api-reference/discounts/enums/promotion-events-enum) \{#type\}

Promotion event type.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionEventInterface</code>.<code class="gqlmd-mdx-entity-name">createdBy</code></span>](#created-by)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">UserOrApp</code></span>](/api-reference/miscellaneous/unions/user-or-app) \{#created-by\}

User or App that created the promotion event.

Requires one of the following permissions: MANAGE_STAFF, MANAGE_APPS, OWNER.

### Implemented By

[`PromotionCreatedEvent`](/api-reference/discounts/objects/promotion-created-event) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PromotionEndedEvent`](/api-reference/discounts/objects/promotion-ended-event) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PromotionRuleCreatedEvent`](/api-reference/discounts/objects/promotion-rule-created-event) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PromotionRuleDeletedEvent`](/api-reference/discounts/objects/promotion-rule-deleted-event) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PromotionRuleUpdatedEvent`](/api-reference/discounts/objects/promotion-rule-updated-event) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PromotionStartedEvent`](/api-reference/discounts/objects/promotion-started-event) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PromotionUpdatedEvent`](/api-reference/discounts/objects/promotion-updated-event) <mark class="gqlmd-mdx-badge">object</mark>
