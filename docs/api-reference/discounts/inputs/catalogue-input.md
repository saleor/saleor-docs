---
api_reference: true
id: catalogue-input
title: CatalogueInput
---

No description

```graphql
input CatalogueInput {
  products: [ID!]
  categories: [ID!]
  collections: [ID!]
  variants: [ID!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CatalogueInput</code>.<code class="gqlmd-mdx-entity-name">products</code></span>](#products)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#products\}

Products related to the discount.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CatalogueInput</code>.<code class="gqlmd-mdx-entity-name">categories</code></span>](#categories)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#categories\}

Categories related to the discount.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CatalogueInput</code>.<code class="gqlmd-mdx-entity-name">collections</code></span>](#collections)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#collections\}

Collections related to the discount.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CatalogueInput</code>.<code class="gqlmd-mdx-entity-name">variants</code></span>](#variants)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#variants\}

Product variant related to the discount.

### Member Of

[`saleCataloguesAdd`](/api-reference/deprecated/discounts/mutations/sale-catalogues-add) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`saleCataloguesRemove`](/api-reference/deprecated/discounts/mutations/sale-catalogues-remove) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`voucherCataloguesAdd`](/api-reference/discounts/mutations/voucher-catalogues-add) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`voucherCataloguesRemove`](/api-reference/discounts/mutations/voucher-catalogues-remove) <mark class="gqlmd-mdx-badge">mutation</mark>
