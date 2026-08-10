---
api_reference: true
id: gift-card-update-input
title: GiftCardUpdateInput
---

No description

```graphql
input GiftCardUpdateInput {
  addTags: [String!]
  expiryDate: Date
  metadata: [MetadataInput!]
  privateMetadata: [MetadataInput!]
  startDate: Date @deprecated
  endDate: Date @deprecated
  removeTags: [String!]
  balanceAmount: PositiveDecimal
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardUpdateInput</code>.<code class="gqlmd-mdx-entity-name">addTags</code></span>](#add-tags)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#add-tags\}

The gift card tags to add.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardUpdateInput</code>.<code class="gqlmd-mdx-entity-name">expiryDate</code></span>](#expiry-date)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Date</code></span>](/api-reference/miscellaneous/scalars/date) \{#expiry-date\}

The gift card expiry date.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardUpdateInput</code>.<code class="gqlmd-mdx-entity-name">metadata</code></span>](#metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataInput!]</code></span>](/api-reference/miscellaneous/inputs/metadata-input) \{#metadata\}

Gift Card public metadata.

Added in Saleor 3.21. Can be read by any API client authorized to read the object it's attached to.

Warning: never store sensitive information, including financial data such as credit card details.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardUpdateInput</code>.<code class="gqlmd-mdx-entity-name">privateMetadata</code></span>](#private-metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataInput!]</code></span>](/api-reference/miscellaneous/inputs/metadata-input) \{#private-metadata\}

Gift Card private metadata.

Added in Saleor 3.21. Requires permissions to modify and to read the metadata of the object it's attached to.

Warning: never store sensitive information, including financial data such as credit card details.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardUpdateInput</code>.<code class="gqlmd-mdx-entity-name">removeTags</code></span>](#remove-tags)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#remove-tags\}

The gift card tags to remove.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardUpdateInput</code>.<code class="gqlmd-mdx-entity-name">balanceAmount</code></span>](#balance-amount)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveDecimal</code></span>](/api-reference/miscellaneous/scalars/positive-decimal) \{#balance-amount\}

The gift card balance amount.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardUpdateInput</code>.<code class="gqlmd-mdx-entity-name">startDate</code></span>](#start-date)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Date</code></span>](/api-reference/miscellaneous/scalars/date) \{#start-date\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

No longer supported

</span>
</fieldset>

Start date of the gift card in ISO 8601 format.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">GiftCardUpdateInput</code>.<code class="gqlmd-mdx-entity-name">endDate</code></span>](#end-date)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Date</code></span>](/api-reference/miscellaneous/scalars/date) \{#end-date\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `expiryDate` from `expirySettings` instead.

</span>
</fieldset>

End date of the gift card in ISO 8601 format.

</details>

### Member Of

[`giftCardUpdate`](/api-reference/gift-cards/mutations/gift-card-update) <mark class="gqlmd-mdx-badge">mutation</mark>
