---
api_reference: true
id: export-gift-cards
title: exportGiftCards
---

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Export functionality is deprecated and will be removed. All data can be fetched via the GraphQL API and parsed into the desired format by apps or external tools.

</span>
</fieldset>

Export gift cards to csv file.

Requires one of the following permissions: MANAGE_GIFT_CARD.

Triggers the following webhook events:

- NOTIFY_USER (async): A notification for the exported file.
- GIFT_CARD_EXPORT_COMPLETED (async): A notification for the exported file.

```graphql
exportGiftCards(
  input: ExportGiftCardsInput!
): ExportGiftCards @deprecated
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">exportGiftCards</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ExportGiftCardsInput!</code></span>](/api-reference/gift-cards/inputs/export-gift-cards-input) \{#input\}

Fields required to export gift cards data.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ExportGiftCards</code></span>](/api-reference/gift-cards/objects/export-gift-cards)

Export gift cards to csv file.

Requires one of the following permissions: MANAGE_GIFT_CARD.

Triggers the following webhook events:

- NOTIFY_USER (async): A notification for the exported file.
- GIFT_CARD_EXPORT_COMPLETED (async): A notification for the exported file.
