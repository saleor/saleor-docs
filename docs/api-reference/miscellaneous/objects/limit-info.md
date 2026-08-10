---
api_reference: true
id: limit-info
title: LimitInfo
---

Store the current and allowed usage.

```graphql
type LimitInfo {
  currentUsage: Limits!
  allowedUsage: Limits!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">LimitInfo</code>.<code class="gqlmd-mdx-entity-name">currentUsage</code></span>](#current-usage)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Limits!</code></span>](/api-reference/miscellaneous/objects/limits) \{#current-usage\}

Defines the current resource usage.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">LimitInfo</code>.<code class="gqlmd-mdx-entity-name">allowedUsage</code></span>](#allowed-usage)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Limits!</code></span>](/api-reference/miscellaneous/objects/limits) \{#allowed-usage\}

Defines the allowed maximum resource usage, null means unlimited.

### Member Of

[`Shop`](/api-reference/miscellaneous/objects/shop) <mark class="gqlmd-mdx-badge">object</mark>
