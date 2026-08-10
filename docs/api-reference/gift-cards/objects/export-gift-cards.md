---
api_reference: true
id: export-gift-cards
title: ExportGiftCards
---

Export gift cards to csv file.

Requires one of the following permissions: MANAGE_GIFT_CARD.

Triggers the following webhook events:

- NOTIFY_USER (async): A notification for the exported file.
- GIFT_CARD_EXPORT_COMPLETED (async): A notification for the exported file.

```graphql
type ExportGiftCards {
  exportFile: ExportFile
  errors: [ExportError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExportGiftCards</code>.<code class="gqlmd-mdx-entity-name">exportFile</code></span>](#export-file)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ExportFile</code></span>](/api-reference/miscellaneous/objects/export-file) \{#export-file\}

The newly created export file job which is responsible for export data.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExportGiftCards</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ExportError!]!</code></span>](/api-reference/miscellaneous/objects/export-error) \{#errors\}

### Returned By

[`exportGiftCards`](/api-reference/deprecated/gift-cards/mutations/export-gift-cards) <mark class="gqlmd-mdx-badge">mutation</mark>
