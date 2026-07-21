---
api_reference: true
id: transaction-action-enum
title: TransactionActionEnum
---

Represents possible actions on payment transaction.

    The following actions are possible:
    CHARGE - Represents the charge action.
    REFUND - Represents a refund action.
    CANCEL - Represents a cancel action. Added in Saleor 3.12.

```graphql
enum TransactionActionEnum {
  CHARGE
  REFUND
  CANCEL
}
```

### Values

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionActionEnum</code>.<code class="gqlmd-mdx-entity-name">CHARGE</code></span>](#charge) \{#charge\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionActionEnum</code>.<code class="gqlmd-mdx-entity-name">REFUND</code></span>](#refund) \{#refund\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionActionEnum</code>.<code class="gqlmd-mdx-entity-name">CANCEL</code></span>](#cancel) \{#cancel\}

### Member Of

[`TransactionAction`](/api-reference/payments/objects/transaction-action) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`TransactionCreateInput`](/api-reference/payments/inputs/transaction-create-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`transactionEventReport`](/api-reference/payments/mutations/transaction-event-report) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`TransactionItem`](/api-reference/payments/objects/transaction-item) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`transactionRequestAction`](/api-reference/payments/mutations/transaction-request-action) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`TransactionUpdateInput`](/api-reference/payments/inputs/transaction-update-input) <mark class="gqlmd-mdx-badge">input</mark>
