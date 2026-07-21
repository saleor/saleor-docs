---
api_reference: true
id: stored-payment-method-request-delete-result
title: StoredPaymentMethodRequestDeleteResult
---

Result of deleting a stored payment method.

    This enum is used to determine the result of deleting a stored payment method.
    SUCCESSFULLY&#x005F;DELETED - The stored payment method was successfully deleted.
    FAILED&#x005F;TO&#x005F;DELETE - The stored payment method was not deleted.
    FAILED&#x005F;TO&#x005F;DELIVER - The request to delete the stored payment method was not
    delivered.

```graphql
enum StoredPaymentMethodRequestDeleteResult {
  SUCCESSFULLY_DELETED
  FAILED_TO_DELETE
  FAILED_TO_DELIVER
}
```

### Values

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StoredPaymentMethodRequestDeleteResult</code>.<code class="gqlmd-mdx-entity-name">SUCCESSFULLY_DELETED</code></span>](#successfully-deleted) \{#successfully-deleted\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StoredPaymentMethodRequestDeleteResult</code>.<code class="gqlmd-mdx-entity-name">FAILED_TO_DELETE</code></span>](#failed-to-delete) \{#failed-to-delete\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StoredPaymentMethodRequestDeleteResult</code>.<code class="gqlmd-mdx-entity-name">FAILED_TO_DELIVER</code></span>](#failed-to-deliver) \{#failed-to-deliver\}

### Member Of

[`StoredPaymentMethodRequestDelete`](/api-reference/payments/objects/stored-payment-method-request-delete) <mark class="gqlmd-mdx-badge">object</mark>
