---
api_reference: true
id: app-retry-install
title: AppRetryInstall
---

Retry failed installation of new app.

Requires one of the following permissions: MANAGE_APPS.

Triggers the following webhook events:

- APP_INSTALLED (async): An app was installed.

```graphql
type AppRetryInstall {
  appErrors: [AppError!]! @deprecated
  errors: [AppError!]!
  appInstallation: AppInstallation
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppRetryInstall</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AppError!]!</code></span>](/api-reference/apps/objects/app-error) \{#errors\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppRetryInstall</code>.<code class="gqlmd-mdx-entity-name">appInstallation</code></span>](#app-installation)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AppInstallation</code></span>](/api-reference/apps/objects/app-installation) \{#app-installation\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppRetryInstall</code>.<code class="gqlmd-mdx-entity-name">appErrors</code></span>](#app-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AppError!]!</code></span>](/api-reference/apps/objects/app-error) \{#app-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`appRetryInstall`](/api-reference/apps/mutations/app-retry-install) <mark class="gqlmd-mdx-badge">mutation</mark>
