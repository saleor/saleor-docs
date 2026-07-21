---
api_reference: true
id: app-type-enum
title: AppTypeEnum
---

Enum determining type of your App.

```graphql
enum AppTypeEnum {
  LOCAL
  THIRDPARTY
}
```

### Values

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppTypeEnum</code>.<code class="gqlmd-mdx-entity-name">LOCAL</code></span>](#local) \{#local\}

Local Saleor App. The app is fully manageable from dashboard. You can change assigned permissions, add webhooks, or authentication token

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppTypeEnum</code>.<code class="gqlmd-mdx-entity-name">THIRDPARTY</code></span>](#thirdparty) \{#thirdparty\}

Third party external App. Installation is fully automated. Saleor uses a defined App manifest to gather all required information.

### Member Of

[`App`](/api-reference/apps/objects/app) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AppFilterInput`](/api-reference/apps/inputs/app-filter-input) <mark class="gqlmd-mdx-badge">input</mark>
