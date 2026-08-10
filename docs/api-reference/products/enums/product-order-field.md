---
api_reference: true
id: product-order-field
title: ProductOrderField
---

No description

```graphql
enum ProductOrderField {
  NAME
  RANK
  PRICE
  MINIMAL_PRICE
  LAST_MODIFIED @deprecated
  DATE @deprecated
  TYPE
  PUBLISHED
  PUBLICATION_DATE @deprecated
  PUBLISHED_AT
  LAST_MODIFIED_AT
  COLLECTION
  RATING
  CREATED_AT
}
```

### Values

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductOrderField</code>.<code class="gqlmd-mdx-entity-name">NAME</code></span>](#name) \{#name\}

Sort products by name.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductOrderField</code>.<code class="gqlmd-mdx-entity-name">RANK</code></span>](#rank) \{#rank\}

Sort products by rank. Note: This option is available only with the `search` filter.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductOrderField</code>.<code class="gqlmd-mdx-entity-name">PRICE</code></span>](#price) \{#price\}

Sort products by price.

This option requires a channel filter to work as the values can vary between channels.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductOrderField</code>.<code class="gqlmd-mdx-entity-name">MINIMAL_PRICE</code></span>](#minimal-price) \{#minimal-price\}

Sort products by a minimal price of a product's variant.

This option requires a channel filter to work as the values can vary between channels.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductOrderField</code>.<code class="gqlmd-mdx-entity-name">TYPE</code></span>](#type) \{#type\}

Sort products by type.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductOrderField</code>.<code class="gqlmd-mdx-entity-name">PUBLISHED</code></span>](#published) \{#published\}

Sort products by publication status.

This option requires a channel filter to work as the values can vary between channels.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductOrderField</code>.<code class="gqlmd-mdx-entity-name">PUBLISHED_AT</code></span>](#published-at) \{#published-at\}

Sort products by publication date.

This option requires a channel filter to work as the values can vary between channels.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductOrderField</code>.<code class="gqlmd-mdx-entity-name">LAST_MODIFIED_AT</code></span>](#last-modified-at) \{#last-modified-at\}

Sort products by update date.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductOrderField</code>.<code class="gqlmd-mdx-entity-name">COLLECTION</code></span>](#collection) \{#collection\}

Sort products by collection. Note: This option is available only for the `Collection.products` query.

This option requires a channel filter to work as the values can vary between channels.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductOrderField</code>.<code class="gqlmd-mdx-entity-name">RATING</code></span>](#rating) \{#rating\}

Sort products by rating.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductOrderField</code>.<code class="gqlmd-mdx-entity-name">CREATED_AT</code></span>](#created-at) \{#created-at\}

Sort products by creation date.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductOrderField</code>.<code class="gqlmd-mdx-entity-name">LAST_MODIFIED</code></span>](#last-modified) \{#last-modified\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `LAST_MODIFIED_AT` instead.

</span>
</fieldset>

Sort products by update date.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductOrderField</code>.<code class="gqlmd-mdx-entity-name">DATE</code></span>](#date) \{#date\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `LAST_MODIFIED_AT` instead.

</span>
</fieldset>

Sort products by update date.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductOrderField</code>.<code class="gqlmd-mdx-entity-name">PUBLICATION_DATE</code></span>](#publication-date) \{#publication-date\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `PUBLISHED_AT` instead.

</span>
</fieldset>

Sort products by publication date.

This option requires a channel filter to work as the values can vary between channels.

</details>

### Member Of

[`ProductOrder`](/api-reference/products/inputs/product-order) <mark class="gqlmd-mdx-badge">input</mark>
