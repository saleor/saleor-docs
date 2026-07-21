---
api_reference: true
id: collection-channel-listing-update
title: CollectionChannelListingUpdate
---

Manage collection's availability in channels.

Requires one of the following permissions: MANAGE_PRODUCTS.

```graphql
type CollectionChannelListingUpdate {
  collection: Collection
  collectionChannelListingErrors: [CollectionChannelListingError!]! @deprecated
  errors: [CollectionChannelListingError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CollectionChannelListingUpdate</code>.<code class="gqlmd-mdx-entity-name">collection</code></span>](#collection)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Collection</code></span>](/api-reference/products/objects/collection) \{#collection\}

An updated collection instance.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CollectionChannelListingUpdate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CollectionChannelListingError!]!</code></span>](/api-reference/products/objects/collection-channel-listing-error) \{#errors\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CollectionChannelListingUpdate</code>.<code class="gqlmd-mdx-entity-name">collectionChannelListingErrors</code></span>](#collection-channel-listing-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CollectionChannelListingError!]!</code></span>](/api-reference/products/objects/collection-channel-listing-error) \{#collection-channel-listing-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`collectionChannelListingUpdate`](/api-reference/products/mutations/collection-channel-listing-update) <mark class="gqlmd-mdx-badge">mutation</mark>
