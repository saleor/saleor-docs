---
api_reference: true
id: account-confirm-mode-enum
title: AccountConfirmModeEnum
---

AccountConfirmMode set the account merging mode for anonymous objects.

    This dictates the behavior of the `confirmAccount()` mutation for
    password-based authentication when attempting to merge orders & giftcard
    that aren't associated to a user account.

    Modes:

    - MERGE&#x005F;DISABLED disables merging only when the authentication method
      is password (i.e., when not using OIDC)
    - REQUIRE&#x005F;PASSWORD enables account merging who accounts that use password
      authentication but it requires the user to enter their password

```graphql
enum AccountConfirmModeEnum {
  MERGE_DISABLED
  REQUIRE_PASSWORD
}
```

### Values

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AccountConfirmModeEnum</code>.<code class="gqlmd-mdx-entity-name">MERGE_DISABLED</code></span>](#merge-disabled) \{#merge-disabled\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AccountConfirmModeEnum</code>.<code class="gqlmd-mdx-entity-name">REQUIRE_PASSWORD</code></span>](#require-password) \{#require-password\}

### Member Of

[`Shop`](/api-reference/miscellaneous/objects/shop) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ShopSettingsInput`](/api-reference/miscellaneous/inputs/shop-settings-input) <mark class="gqlmd-mdx-badge">input</mark>
