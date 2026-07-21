---
api_reference: true
id: app-fetch-manifest
title: AppFetchManifest
---

Fetch and validate manifest.

Requires one of the following permissions: MANAGE_APPS.

```graphql
type AppFetchManifest {
  manifest: Manifest
  appErrors: [AppError!]! @deprecated
  errors: [AppError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppFetchManifest</code>.<code class="gqlmd-mdx-entity-name">manifest</code></span>](#manifest)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Manifest</code></span>](/api-reference/apps/objects/manifest) \{#manifest\}

The validated manifest.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppFetchManifest</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AppError!]!</code></span>](/api-reference/apps/objects/app-error) \{#errors\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppFetchManifest</code>.<code class="gqlmd-mdx-entity-name">appErrors</code></span>](#app-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AppError!]!</code></span>](/api-reference/apps/objects/app-error) \{#app-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`appFetchManifest`](/api-reference/apps/mutations/app-fetch-manifest) <mark class="gqlmd-mdx-badge">mutation</mark>
