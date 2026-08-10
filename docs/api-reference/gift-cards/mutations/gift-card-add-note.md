---
api_reference: true
id: gift-card-add-note
title: giftCardAddNote
---

Adds note to the gift card.

Requires one of the following permissions: MANAGE_GIFT_CARD.

Triggers the following webhook events:

- GIFT_CARD_UPDATED (async): A gift card was updated.

```graphql
giftCardAddNote(
  id: ID!
  input: GiftCardAddNoteInput!
): GiftCardAddNote
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">giftCardAddNote</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of the gift card to add a note for.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">giftCardAddNote</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">GiftCardAddNoteInput!</code></span>](/api-reference/gift-cards/inputs/gift-card-add-note-input) \{#input\}

Fields required to create a note for the gift card.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">GiftCardAddNote</code></span>](/api-reference/gift-cards/objects/gift-card-add-note)

Adds note to the gift card.

Requires one of the following permissions: MANAGE_GIFT_CARD.

Triggers the following webhook events:

- GIFT_CARD_UPDATED (async): A gift card was updated.
