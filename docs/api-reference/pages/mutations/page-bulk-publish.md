---
api_reference: true
id: page-bulk-publish
title: pageBulkPublish
---

Publish pages.

Requires one of the following permissions: MANAGE_PAGES.

```graphql
pageBulkPublish(
  ids: [ID!]!
  isPublished: Boolean!
): PageBulkPublish
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">pageBulkPublish</code>.<code class="gqlmd-mdx-entity-name">ids</code></span>](#ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]!</code></span>](/api-reference/miscellaneous/scalars/id) \{#ids\}

List of page IDs to (un)publish.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">pageBulkPublish</code>.<code class="gqlmd-mdx-entity-name">isPublished</code></span>](#is-published)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-published\}

Determine if pages will be published or not.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PageBulkPublish</code></span>](/api-reference/pages/objects/page-bulk-publish)

Publish pages.

Requires one of the following permissions: MANAGE_PAGES.
