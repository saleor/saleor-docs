---
api_reference: true
id: app-problem-dismiss-input
title: AppProblemDismissInput
---

Input for dismissing app problems. Only one can be specified.

```graphql
input AppProblemDismissInput {
  byApp: AppProblemDismissByAppInput
  byStaffWithIds: AppProblemDismissByStaffWithIdsInput
  byStaffWithKeys: AppProblemDismissByStaffWithKeysInput
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppProblemDismissInput</code>.<code class="gqlmd-mdx-entity-name">byApp</code></span>](#by-app)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AppProblemDismissByAppInput</code></span>](/api-reference/apps/inputs/app-problem-dismiss-by-app-input) \{#by-app\}

For app callers only - dismiss own problems.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppProblemDismissInput</code>.<code class="gqlmd-mdx-entity-name">byStaffWithIds</code></span>](#by-staff-with-ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AppProblemDismissByStaffWithIdsInput</code></span>](/api-reference/apps/inputs/app-problem-dismiss-by-staff-with-ids-input) \{#by-staff-with-ids\}

For staff callers - dismiss problems by IDs.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppProblemDismissInput</code>.<code class="gqlmd-mdx-entity-name">byStaffWithKeys</code></span>](#by-staff-with-keys)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AppProblemDismissByStaffWithKeysInput</code></span>](/api-reference/apps/inputs/app-problem-dismiss-by-staff-with-keys-input) \{#by-staff-with-keys\}

For staff callers - dismiss problems by keys for specified app.

### Member Of

[`appProblemDismiss`](/api-reference/apps/mutations/app-problem-dismiss) <mark class="gqlmd-mdx-badge">mutation</mark>
