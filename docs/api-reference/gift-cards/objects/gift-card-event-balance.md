---
api_reference: true
id: gift-card-event-balance
title: GiftCardEventBalance
---

No description

```graphql
type GiftCardEventBalance {
  initialBalance: Money
  currentBalance: Money!
  oldInitialBalance: Money
  oldCurrentBalance: Money
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardEventBalance</code>.<code class="gqlmd-mdx-entity-name">initialBalance</code></span>](#initial-balance)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Money</code></span>](/api-reference/miscellaneous/objects/money) \{#initial-balance\}

Initial balance of the gift card.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardEventBalance</code>.<code class="gqlmd-mdx-entity-name">currentBalance</code></span>](#current-balance)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Money!</code></span>](/api-reference/miscellaneous/objects/money) \{#current-balance\}

Current balance of the gift card.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardEventBalance</code>.<code class="gqlmd-mdx-entity-name">oldInitialBalance</code></span>](#old-initial-balance)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Money</code></span>](/api-reference/miscellaneous/objects/money) \{#old-initial-balance\}

Previous initial balance of the gift card.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardEventBalance</code>.<code class="gqlmd-mdx-entity-name">oldCurrentBalance</code></span>](#old-current-balance)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Money</code></span>](/api-reference/miscellaneous/objects/money) \{#old-current-balance\}

Previous current balance of the gift card.

### Member Of

[`GiftCardEvent`](/api-reference/gift-cards/objects/gift-card-event) <mark class="gqlmd-mdx-badge">object</mark>
