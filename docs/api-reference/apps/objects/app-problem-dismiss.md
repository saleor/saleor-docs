---
api_reference: true
id: app-problem-dismiss
title: AppProblemDismiss
---

Dismiss problems for an app.

Added in Saleor 3.22.

Requires one of the following permissions: MANAGE_APPS, AUTHENTICATED_APP.

```graphql
type AppProblemDismiss {
  errors: [AppProblemDismissError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppProblemDismiss</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AppProblemDismissError!]!</code></span>](/api-reference/miscellaneous/objects/app-problem-dismiss-error) \{#errors\}

### Returned By

[`appProblemDismiss`](/api-reference/apps/mutations/app-problem-dismiss) <mark class="gqlmd-mdx-badge">mutation</mark>
