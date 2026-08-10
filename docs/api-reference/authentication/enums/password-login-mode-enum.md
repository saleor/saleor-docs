---
api_reference: true
id: password-login-mode-enum
title: PasswordLoginModeEnum
---

Controls whether password-based authentication is allowed.

    ENABLED - any user can log in with a password. This is the default behavior.
    CUSTOMERS&#x005F;ONLY - only customer users can log in with a password.
        If a staff user logs in with a password, they will be treated as a customer
        — the issued token will not contain any staff permissions.
    DISABLED - no user can log in with a password.

```graphql
enum PasswordLoginModeEnum {
  ENABLED
  CUSTOMERS_ONLY
  DISABLED
}
```

### Values

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PasswordLoginModeEnum</code>.<code class="gqlmd-mdx-entity-name">ENABLED</code></span>](#enabled) \{#enabled\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PasswordLoginModeEnum</code>.<code class="gqlmd-mdx-entity-name">CUSTOMERS_ONLY</code></span>](#customers-only) \{#customers-only\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PasswordLoginModeEnum</code>.<code class="gqlmd-mdx-entity-name">DISABLED</code></span>](#disabled) \{#disabled\}

### Member Of

[`Shop`](/api-reference/miscellaneous/objects/shop) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ShopSettingsInput`](/api-reference/miscellaneous/inputs/shop-settings-input) <mark class="gqlmd-mdx-badge">input</mark>
