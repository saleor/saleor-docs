---
api_reference: true
id: announcement
title: Announcement
---

Lists current announcements that the user should see.

```graphql
type Announcement {
  createdAt: DateTime!
  updatedAt: DateTime!
  title: String!
  messageHtml: String!
  importance: AnnouncementImportanceEnum!
  type: String!
  extra: Metadata!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Announcement</code>.<code class="gqlmd-mdx-entity-name">createdAt</code></span>](#created-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime!</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#created-at\}

The date & time at which this announcement was created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Announcement</code>.<code class="gqlmd-mdx-entity-name">updatedAt</code></span>](#updated-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime!</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#updated-at\}

The date & time at which this announcement was last updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Announcement</code>.<code class="gqlmd-mdx-entity-name">title</code></span>](#title)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#title\}

The announcement's title.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Announcement</code>.<code class="gqlmd-mdx-entity-name">messageHtml</code></span>](#message-html)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#message-html\}

The announcement's description, may contain HTML formatting.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Announcement</code>.<code class="gqlmd-mdx-entity-name">importance</code></span>](#importance)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AnnouncementImportanceEnum!</code></span>](/api-reference/shop/enums/announcement-importance-enum) \{#importance\}

Determine the how critical the announcement is. UNSET if no severity level was defined for this announcement.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Announcement</code>.<code class="gqlmd-mdx-entity-name">type</code></span>](#type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#type\}

The announcement's type, for example "CUSTOM". Used to programatically distinguish between message types thus allowing to render the message differently, and allows to know the expected shape for the `extra` field.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Announcement</code>.<code class="gqlmd-mdx-entity-name">extra</code></span>](#extra)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Metadata!</code></span>](/api-reference/miscellaneous/scalars/metadata) \{#extra\}

Additional information about this announcement.

### Member Of

[`Shop`](/api-reference/miscellaneous/objects/shop) <mark class="gqlmd-mdx-badge">object</mark>
