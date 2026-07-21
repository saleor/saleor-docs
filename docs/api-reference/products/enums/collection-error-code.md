---
api_reference: true
id: collection-error-code
title: CollectionErrorCode
---

No description

```graphql
enum CollectionErrorCode {
  DUPLICATED_INPUT_ITEM
  GRAPHQL_ERROR
  INVALID
  NOT_FOUND
  REQUIRED
  UNIQUE
  CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT @deprecated
  FILE_SIZE_LIMIT_EXCEEDED
}
```

### Values

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CollectionErrorCode</code>.<code class="gqlmd-mdx-entity-name">DUPLICATED_INPUT_ITEM</code></span>](#duplicated-input-item) \{#duplicated-input-item\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CollectionErrorCode</code>.<code class="gqlmd-mdx-entity-name">GRAPHQL_ERROR</code></span>](#graphql-error) \{#graphql-error\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CollectionErrorCode</code>.<code class="gqlmd-mdx-entity-name">INVALID</code></span>](#invalid) \{#invalid\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CollectionErrorCode</code>.<code class="gqlmd-mdx-entity-name">NOT_FOUND</code></span>](#not-found) \{#not-found\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CollectionErrorCode</code>.<code class="gqlmd-mdx-entity-name">REQUIRED</code></span>](#required) \{#required\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CollectionErrorCode</code>.<code class="gqlmd-mdx-entity-name">UNIQUE</code></span>](#unique) \{#unique\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CollectionErrorCode</code>.<code class="gqlmd-mdx-entity-name">FILE_SIZE_LIMIT_EXCEEDED</code></span>](#file-size-limit-exceeded) \{#file-size-limit-exceeded\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CollectionErrorCode</code>.<code class="gqlmd-mdx-entity-name">CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT</code></span>](#cannot-manage-product-without-variant) \{#cannot-manage-product-without-variant\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Products without variants can now be assigned to collections. This error will never be returned.

</span>
</fieldset>

</details>

### Member Of

[`CollectionError`](/api-reference/products/objects/collection-error) <mark class="gqlmd-mdx-badge">object</mark>
