---
api_reference: true
id: export-file-filter-input
title: ExportFileFilterInput
---

No description

```graphql
input ExportFileFilterInput {
  createdAt: DateTimeRangeInput
  updatedAt: DateTimeRangeInput
  status: JobStatusEnum
  user: String
  app: String
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExportFileFilterInput</code>.<code class="gqlmd-mdx-entity-name">createdAt</code></span>](#created-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTimeRangeInput</code></span>](/api-reference/miscellaneous/inputs/date-time-range-input) \{#created-at\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExportFileFilterInput</code>.<code class="gqlmd-mdx-entity-name">updatedAt</code></span>](#updated-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTimeRangeInput</code></span>](/api-reference/miscellaneous/inputs/date-time-range-input) \{#updated-at\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExportFileFilterInput</code>.<code class="gqlmd-mdx-entity-name">status</code></span>](#status)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JobStatusEnum</code></span>](/api-reference/miscellaneous/enums/job-status-enum) \{#status\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExportFileFilterInput</code>.<code class="gqlmd-mdx-entity-name">user</code></span>](#user)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#user\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExportFileFilterInput</code>.<code class="gqlmd-mdx-entity-name">app</code></span>](#app)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#app\}

### Member Of

[`exportFiles`](/api-reference/miscellaneous/queries/export-files) <mark class="gqlmd-mdx-badge">query</mark>
