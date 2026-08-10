---
api_reference: true
id: export-file
title: exportFile
---

Look up a export file by ID.

Requires one of the following permissions: MANAGE_PRODUCTS.

```graphql
exportFile(
  id: ID!
): ExportFile
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">exportFile</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of the export file job.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ExportFile</code></span>](/api-reference/miscellaneous/objects/export-file)

Represents a job data of exported file.
