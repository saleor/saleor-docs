---
api_reference: true
id: app-problem-dismiss-by-staff-with-ids-input
title: AppProblemDismissByStaffWithIdsInput
---

Input for staff callers to dismiss problems by IDs.

```graphql
input AppProblemDismissByStaffWithIdsInput {
  ids: [ID!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppProblemDismissByStaffWithIdsInput</code>.<code class="gqlmd-mdx-entity-name">ids</code></span>](#ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]!</code></span>](/api-reference/miscellaneous/scalars/id) \{#ids\}

List of problem IDs to dismiss. Max 100.

### Member Of

[`AppProblemDismissInput`](/api-reference/apps/inputs/app-problem-dismiss-input) <mark class="gqlmd-mdx-badge">input</mark>
