---
api_reference: true
id: assigned-attribute-reference-input
title: AssignedAttributeReferenceInput
---

No description

```graphql
input AssignedAttributeReferenceInput {
  referencedIds: ContainsFilterInput
  pageSlugs: ContainsFilterInput
  productSlugs: ContainsFilterInput
  productVariantSkus: ContainsFilterInput
  categorySlugs: ContainsFilterInput
  collectionSlugs: ContainsFilterInput
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AssignedAttributeReferenceInput</code>.<code class="gqlmd-mdx-entity-name">referencedIds</code></span>](#referenced-ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ContainsFilterInput</code></span>](/api-reference/miscellaneous/inputs/contains-filter-input) \{#referenced-ids\}

Returns objects with a reference pointing to an object identified by the given ID.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AssignedAttributeReferenceInput</code>.<code class="gqlmd-mdx-entity-name">pageSlugs</code></span>](#page-slugs)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ContainsFilterInput</code></span>](/api-reference/miscellaneous/inputs/contains-filter-input) \{#page-slugs\}

Returns objects with a reference pointing to a page identified by the given slug.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AssignedAttributeReferenceInput</code>.<code class="gqlmd-mdx-entity-name">productSlugs</code></span>](#product-slugs)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ContainsFilterInput</code></span>](/api-reference/miscellaneous/inputs/contains-filter-input) \{#product-slugs\}

Returns objects with a reference pointing to a product identified by the given slug.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AssignedAttributeReferenceInput</code>.<code class="gqlmd-mdx-entity-name">productVariantSkus</code></span>](#product-variant-skus)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ContainsFilterInput</code></span>](/api-reference/miscellaneous/inputs/contains-filter-input) \{#product-variant-skus\}

Returns objects with a reference pointing to a product variant identified by the given sku.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AssignedAttributeReferenceInput</code>.<code class="gqlmd-mdx-entity-name">categorySlugs</code></span>](#category-slugs)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ContainsFilterInput</code></span>](/api-reference/miscellaneous/inputs/contains-filter-input) \{#category-slugs\}

Returns objects with a reference pointing to a category identified by the given slug.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AssignedAttributeReferenceInput</code>.<code class="gqlmd-mdx-entity-name">collectionSlugs</code></span>](#collection-slugs)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ContainsFilterInput</code></span>](/api-reference/miscellaneous/inputs/contains-filter-input) \{#collection-slugs\}

Returns objects with a reference pointing to a collection identified by the given slug.

### Member Of

[`AssignedAttributeValueInput`](/api-reference/miscellaneous/inputs/assigned-attribute-value-input) <mark class="gqlmd-mdx-badge">input</mark>
