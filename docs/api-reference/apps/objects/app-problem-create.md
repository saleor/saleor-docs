---
api_reference: true
id: app-problem-create
title: AppProblemCreate
---

Add a problem to the calling app.

Added in Saleor 3.22.

Requires one of the following permissions: AUTHENTICATED_APP.

```graphql
type AppProblemCreate {
  appProblem: AppProblem
  errors: [AppProblemCreateError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppProblemCreate</code>.<code class="gqlmd-mdx-entity-name">appProblem</code></span>](#app-problem)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AppProblem</code></span>](/api-reference/apps/objects/app-problem) \{#app-problem\}

The created or updated app problem.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppProblemCreate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AppProblemCreateError!]!</code></span>](/api-reference/miscellaneous/objects/app-problem-create-error) \{#errors\}

### Returned By

[`appProblemCreate`](/api-reference/apps/mutations/app-problem-create) <mark class="gqlmd-mdx-badge">mutation</mark>
