---
api_reference: true
id: app-problem-dismissed
title: AppProblemDismissed
---

Dismissal information for an app problem.

Added in Saleor 3.22.

```graphql
type AppProblemDismissed {
  by: AppProblemDismissedByEnum!
  user: User
  userEmail: String
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppProblemDismissed</code>.<code class="gqlmd-mdx-entity-name">by</code></span>](#by)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AppProblemDismissedByEnum!</code></span>](/api-reference/apps/enums/app-problem-dismissed-by-enum) \{#by\}

Whether the problem was dismissed by an App or a User.

Added in Saleor 3.22.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppProblemDismissed</code>.<code class="gqlmd-mdx-entity-name">user</code></span>](#user)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">User</code></span>](/api-reference/users/objects/user) \{#user\}

The user who dismissed this problem. Null if dismissed by an app or the user was deleted.

Added in Saleor 3.22.

Requires one of the following permissions: MANAGE_STAFF.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppProblemDismissed</code>.<code class="gqlmd-mdx-entity-name">userEmail</code></span>](#user-email)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#user-email\}

Email of the user who dismissed this problem. Preserved even if the user is deleted.

Added in Saleor 3.22.

Requires one of the following permissions: AUTHENTICATED_STAFF_USER.

### Member Of

[`AppProblem`](/api-reference/apps/objects/app-problem) <mark class="gqlmd-mdx-badge">object</mark>
