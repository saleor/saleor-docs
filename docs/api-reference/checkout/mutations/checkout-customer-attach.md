---
api_reference: true
id: checkout-customer-attach
title: checkoutCustomerAttach
---

Sets the customer as the owner of the checkout.

Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_USER.

Triggers the following webhook events:

- CHECKOUT_UPDATED (async): A checkout was updated.

```graphql
checkoutCustomerAttach(
  checkoutId: ID
  customerId: ID
  id: ID
  token: UUID
): CheckoutCustomerAttach
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">checkoutCustomerAttach</code>.<code class="gqlmd-mdx-entity-name">customerId</code></span>](#customer-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#customer-id\}

ID of customer to attach to checkout. Requires IMPERSONATE_USER permission when customerId is different than the logged-in user.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">checkoutCustomerAttach</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The checkout's ID.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">checkoutCustomerAttach</code>.<code class="gqlmd-mdx-entity-name">checkoutId</code></span>](#checkout-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#checkout-id\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `id` instead.

</span>
</fieldset>

The ID of the checkout.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">checkoutCustomerAttach</code>.<code class="gqlmd-mdx-entity-name">token</code></span>](#token)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">UUID</code></span>](/api-reference/miscellaneous/scalars/uuid) \{#token\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `id` instead.

</span>
</fieldset>

Checkout token.

</details>

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CheckoutCustomerAttach</code></span>](/api-reference/checkout/objects/checkout-customer-attach)

Sets the customer as the owner of the checkout.

Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_USER.

Triggers the following webhook events:

- CHECKOUT_UPDATED (async): A checkout was updated.
