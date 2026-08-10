---
api_reference: true
id: publishable-channel-listing-input
title: PublishableChannelListingInput
---

No description

```graphql
input PublishableChannelListingInput {
  channelId: ID!
  isPublished: Boolean
  publicationDate: Date @deprecated
  publishedAt: DateTime
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PublishableChannelListingInput</code>.<code class="gqlmd-mdx-entity-name">channelId</code></span>](#channel-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#channel-id\}

ID of a channel.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PublishableChannelListingInput</code>.<code class="gqlmd-mdx-entity-name">isPublished</code></span>](#is-published)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-published\}

Determines if object is visible to customers.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PublishableChannelListingInput</code>.<code class="gqlmd-mdx-entity-name">publishedAt</code></span>](#published-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#published-at\}

Publication date time. ISO 8601 standard.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PublishableChannelListingInput</code>.<code class="gqlmd-mdx-entity-name">publicationDate</code></span>](#publication-date)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Date</code></span>](/api-reference/miscellaneous/scalars/date) \{#publication-date\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `publishedAt` field instead.

</span>
</fieldset>

Publication date. ISO 8601 standard.

</details>

### Member Of

[`CollectionChannelListingUpdateInput`](/api-reference/products/inputs/collection-channel-listing-update-input) <mark class="gqlmd-mdx-badge">input</mark>
