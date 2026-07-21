---
api_reference: true
id: app-problem-create-input
title: AppProblemCreateInput
---

No description

```graphql
input AppProblemCreateInput {
  message: String!
  key: String!
  criticalThreshold: PositiveInt
  aggregationPeriod: Minute
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppProblemCreateInput</code>.<code class="gqlmd-mdx-entity-name">message</code></span>](#message)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#message\}

The problem message to display. Must be at least 3 characters. Messages longer than 2048 characters will be truncated to 2048 characters with '...' suffix.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppProblemCreateInput</code>.<code class="gqlmd-mdx-entity-name">key</code></span>](#key)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#key\}

Key identifying the type of problem. App can add multiple problems under the same key, to merge them together or delete them in batch. Must be between 3 and 128 characters.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppProblemCreateInput</code>.<code class="gqlmd-mdx-entity-name">criticalThreshold</code></span>](#critical-threshold)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveInt</code></span>](/api-reference/miscellaneous/scalars/positive-int) \{#critical-threshold\}

If set, the problem becomes critical when count reaches this value. If sent again with higher value than already counted, problem can be de-escalated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppProblemCreateInput</code>.<code class="gqlmd-mdx-entity-name">aggregationPeriod</code></span>](#aggregation-period)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Minute</code></span>](/api-reference/miscellaneous/scalars/minute) \{#aggregation-period\}

Time window in minutes for aggregating problems with the same key. Defaults to 60. If 0, a new problem is always created.

### Member Of

[`appProblemCreate`](/api-reference/apps/mutations/app-problem-create) <mark class="gqlmd-mdx-badge">mutation</mark>
