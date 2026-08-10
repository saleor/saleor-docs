---
api_reference: true
id: export-file
title: ExportFile
---

Represents a job data of exported file.

```graphql
type ExportFile implements Node, Job {
  id: ID!
  status: JobStatusEnum!
  createdAt: DateTime!
  updatedAt: DateTime!
  message: String
  url: String
  events: [ExportEvent!]
  user: User
  app: App
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExportFile</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of the export file.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExportFile</code>.<code class="gqlmd-mdx-entity-name">status</code></span>](#status)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JobStatusEnum!</code></span>](/api-reference/miscellaneous/enums/job-status-enum) \{#status\}

Job status.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExportFile</code>.<code class="gqlmd-mdx-entity-name">createdAt</code></span>](#created-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime!</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#created-at\}

Created date time of job in ISO 8601 format.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExportFile</code>.<code class="gqlmd-mdx-entity-name">updatedAt</code></span>](#updated-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime!</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#updated-at\}

Date time of job last update in ISO 8601 format.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExportFile</code>.<code class="gqlmd-mdx-entity-name">message</code></span>](#message)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#message\}

Job message.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExportFile</code>.<code class="gqlmd-mdx-entity-name">url</code></span>](#url)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#url\}

The URL of field to download.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExportFile</code>.<code class="gqlmd-mdx-entity-name">events</code></span>](#events)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ExportEvent!]</code></span>](/api-reference/miscellaneous/objects/export-event) \{#events\}

List of events associated with the export.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExportFile</code>.<code class="gqlmd-mdx-entity-name">user</code></span>](#user)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">User</code></span>](/api-reference/users/objects/user) \{#user\}

The user who requests file export.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExportFile</code>.<code class="gqlmd-mdx-entity-name">app</code></span>](#app)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">App</code></span>](/api-reference/apps/objects/app) \{#app\}

The app which requests file export.

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Node</code></span>](/api-reference/miscellaneous/interfaces/node)

An object with an ID

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Job</code></span>](/api-reference/miscellaneous/interfaces/job)

### Returned By

[`exportFile`](/api-reference/miscellaneous/queries/export-file) <mark class="gqlmd-mdx-badge">query</mark>

### Member Of

[`ExportFileCountableEdge`](/api-reference/miscellaneous/objects/export-file-countable-edge) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ExportGiftCards`](/api-reference/gift-cards/objects/export-gift-cards) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ExportProducts`](/api-reference/products/objects/export-products) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ExportVoucherCodes`](/api-reference/discounts/objects/export-voucher-codes) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`GiftCardExportCompleted`](/api-reference/gift-cards/objects/gift-card-export-completed) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductExportCompleted`](/api-reference/products/objects/product-export-completed) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`VoucherCodeExportCompleted`](/api-reference/discounts/objects/voucher-code-export-completed) <mark class="gqlmd-mdx-badge">object</mark>
