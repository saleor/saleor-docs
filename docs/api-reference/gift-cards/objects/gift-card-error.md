---
api_reference: true
id: gift-card-error
title: GiftCardError
---

No description

```graphql
type GiftCardError {
  field: String
  message: String
  code: GiftCardErrorCode!
  tags: [String!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardError</code>.<code class="gqlmd-mdx-entity-name">field</code></span>](#field)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#field\}

Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardError</code>.<code class="gqlmd-mdx-entity-name">message</code></span>](#message)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#message\}

The error message.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardError</code>.<code class="gqlmd-mdx-entity-name">code</code></span>](#code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">GiftCardErrorCode!</code></span>](/api-reference/gift-cards/enums/gift-card-error-code) \{#code\}

The error code.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardError</code>.<code class="gqlmd-mdx-entity-name">tags</code></span>](#tags)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#tags\}

List of tag values that cause the error.

### Member Of

[`GiftCardActivate`](/api-reference/gift-cards/objects/gift-card-activate) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`GiftCardAddNote`](/api-reference/gift-cards/objects/gift-card-add-note) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`GiftCardAssignUser`](/api-reference/gift-cards/objects/gift-card-assign-user) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`GiftCardBalanceAdjust`](/api-reference/gift-cards/objects/gift-card-balance-adjust) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`GiftCardBulkActivate`](/api-reference/gift-cards/objects/gift-card-bulk-activate) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`GiftCardBulkCreate`](/api-reference/gift-cards/objects/gift-card-bulk-create) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`GiftCardBulkDeactivate`](/api-reference/gift-cards/objects/gift-card-bulk-deactivate) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`GiftCardBulkDelete`](/api-reference/gift-cards/objects/gift-card-bulk-delete) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`GiftCardCreate`](/api-reference/gift-cards/objects/gift-card-create) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`GiftCardDeactivate`](/api-reference/gift-cards/objects/gift-card-deactivate) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`GiftCardDelete`](/api-reference/gift-cards/objects/gift-card-delete) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`GiftCardResend`](/api-reference/gift-cards/objects/gift-card-resend) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`GiftCardUnassignUser`](/api-reference/gift-cards/objects/gift-card-unassign-user) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`GiftCardUpdate`](/api-reference/gift-cards/objects/gift-card-update) <mark class="gqlmd-mdx-badge">object</mark>
