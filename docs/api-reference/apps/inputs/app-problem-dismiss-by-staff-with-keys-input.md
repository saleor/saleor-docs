---
api_reference: true
id: app-problem-dismiss-by-staff-with-keys-input
title: AppProblemDismissByStaffWithKeysInput
---

Input for staff callers to dismiss problems by keys.

```graphql
input AppProblemDismissByStaffWithKeysInput {
  keys: [String!]!
  app: ID!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppProblemDismissByStaffWithKeysInput</code>.<code class="gqlmd-mdx-entity-name">keys</code></span>](#keys)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]!</code></span>](/api-reference/miscellaneous/scalars/string) \{#keys\}

List of problem keys to dismiss. Max 100.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppProblemDismissByStaffWithKeysInput</code>.<code class="gqlmd-mdx-entity-name">app</code></span>](#app)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#app\}

ID of the app whose problems to dismiss.

### Member Of

[`AppProblemDismissInput`](/api-reference/apps/inputs/app-problem-dismiss-input) <mark class="gqlmd-mdx-badge">input</mark>
