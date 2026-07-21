---
api_reference: true
id: staff-notification-recipient-create
title: StaffNotificationRecipientCreate
---

Creates a new staff notification recipient.

Requires one of the following permissions: MANAGE_SETTINGS.

```graphql
type StaffNotificationRecipientCreate {
  shopErrors: [ShopError!]! @deprecated
  errors: [ShopError!]!
  staffNotificationRecipient: StaffNotificationRecipient
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StaffNotificationRecipientCreate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ShopError!]!</code></span>](/api-reference/shop/objects/shop-error) \{#errors\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StaffNotificationRecipientCreate</code>.<code class="gqlmd-mdx-entity-name">staffNotificationRecipient</code></span>](#staff-notification-recipient)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">StaffNotificationRecipient</code></span>](/api-reference/miscellaneous/objects/staff-notification-recipient) \{#staff-notification-recipient\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StaffNotificationRecipientCreate</code>.<code class="gqlmd-mdx-entity-name">shopErrors</code></span>](#shop-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ShopError!]!</code></span>](/api-reference/shop/objects/shop-error) \{#shop-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`staffNotificationRecipientCreate`](/api-reference/users/mutations/staff-notification-recipient-create) <mark class="gqlmd-mdx-badge">mutation</mark>
