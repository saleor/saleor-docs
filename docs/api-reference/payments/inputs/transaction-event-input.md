---
api_reference: true
id: transaction-event-input
title: TransactionEventInput
---

No description

```graphql
input TransactionEventInput {
  pspReference: String
  message: String
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionEventInput</code>.<code class="gqlmd-mdx-entity-name">pspReference</code></span>](#psp-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#psp-reference\}

PSP Reference related to this action.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionEventInput</code>.<code class="gqlmd-mdx-entity-name">message</code></span>](#message)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#message\}

The message related to the event.

### Member Of

[`transactionCreate`](/api-reference/payments/mutations/transaction-create) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`transactionUpdate`](/api-reference/payments/mutations/transaction-update) <mark class="gqlmd-mdx-badge">mutation</mark>
