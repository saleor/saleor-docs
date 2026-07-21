---
api_reference: true
id: app-problem-dismiss-by-app-input
title: AppProblemDismissByAppInput
---

Input for app callers to dismiss their own problems.

```graphql
input AppProblemDismissByAppInput {
  ids: [ID!]
  keys: [String!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppProblemDismissByAppInput</code>.<code class="gqlmd-mdx-entity-name">ids</code></span>](#ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#ids\}

List of problem IDs to dismiss. Cannot be combined with keys. Max 100.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppProblemDismissByAppInput</code>.<code class="gqlmd-mdx-entity-name">keys</code></span>](#keys)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#keys\}

List of problem keys to dismiss. Cannot be combined with ids. Max 100.

### Member Of

[`AppProblemDismissInput`](/api-reference/apps/inputs/app-problem-dismiss-input) <mark class="gqlmd-mdx-badge">input</mark>
