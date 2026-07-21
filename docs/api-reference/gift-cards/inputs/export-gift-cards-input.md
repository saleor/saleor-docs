---
api_reference: true
id: export-gift-cards-input
title: ExportGiftCardsInput
---

No description

```graphql
input ExportGiftCardsInput {
  scope: ExportScope!
  filter: GiftCardFilterInput
  ids: [ID!]
  fileType: FileTypesEnum!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExportGiftCardsInput</code>.<code class="gqlmd-mdx-entity-name">scope</code></span>](#scope)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ExportScope!</code></span>](/api-reference/products/enums/export-scope) \{#scope\}

Determine which gift cards should be exported.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExportGiftCardsInput</code>.<code class="gqlmd-mdx-entity-name">filter</code></span>](#filter)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">GiftCardFilterInput</code></span>](/api-reference/gift-cards/inputs/gift-card-filter-input) \{#filter\}

Filtering options for gift cards.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExportGiftCardsInput</code>.<code class="gqlmd-mdx-entity-name">ids</code></span>](#ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#ids\}

List of gift cards IDs to export.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExportGiftCardsInput</code>.<code class="gqlmd-mdx-entity-name">fileType</code></span>](#file-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">FileTypesEnum!</code></span>](/api-reference/miscellaneous/enums/file-types-enum) \{#file-type\}

Type of exported file.

### Member Of

[`exportGiftCards`](/api-reference/deprecated/gift-cards/mutations/export-gift-cards) <mark class="gqlmd-mdx-badge">mutation</mark>
