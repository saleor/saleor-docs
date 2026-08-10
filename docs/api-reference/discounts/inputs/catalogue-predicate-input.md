---
api_reference: true
id: catalogue-predicate-input
title: CataloguePredicateInput
---

No description

```graphql
input CataloguePredicateInput {
  variantPredicate: ProductVariantWhereInput
  productPredicate: ProductWhereInput
  categoryPredicate: CategoryWhereInput
  collectionPredicate: CollectionWhereInput
  AND: [CataloguePredicateInput!]
  OR: [CataloguePredicateInput!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CataloguePredicateInput</code>.<code class="gqlmd-mdx-entity-name">variantPredicate</code></span>](#variant-predicate)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductVariantWhereInput</code></span>](/api-reference/products/inputs/product-variant-where-input) \{#variant-predicate\}

Defines the product variant conditions to be met.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CataloguePredicateInput</code>.<code class="gqlmd-mdx-entity-name">productPredicate</code></span>](#product-predicate)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductWhereInput</code></span>](/api-reference/products/inputs/product-where-input) \{#product-predicate\}

Defines the product conditions to be met.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CataloguePredicateInput</code>.<code class="gqlmd-mdx-entity-name">categoryPredicate</code></span>](#category-predicate)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CategoryWhereInput</code></span>](/api-reference/products/inputs/category-where-input) \{#category-predicate\}

Defines the category conditions to be met.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CataloguePredicateInput</code>.<code class="gqlmd-mdx-entity-name">collectionPredicate</code></span>](#collection-predicate)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CollectionWhereInput</code></span>](/api-reference/products/inputs/collection-where-input) \{#collection-predicate\}

Defines the collection conditions to be met.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CataloguePredicateInput</code>.<code class="gqlmd-mdx-entity-name">AND</code></span>](#and)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CataloguePredicateInput!]</code></span>](/api-reference/discounts/inputs/catalogue-predicate-input) \{#and\}

List of conditions that must be met.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CataloguePredicateInput</code>.<code class="gqlmd-mdx-entity-name">OR</code></span>](#or)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CataloguePredicateInput!]</code></span>](/api-reference/discounts/inputs/catalogue-predicate-input) \{#or\}

A list of conditions of which at least one must be met.

### Member Of

[`CataloguePredicateInput`](/api-reference/discounts/inputs/catalogue-predicate-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PromotionRuleCreateInput`](/api-reference/miscellaneous/inputs/promotion-rule-create-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PromotionRuleInput`](/api-reference/discounts/inputs/promotion-rule-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PromotionRuleUpdateInput`](/api-reference/miscellaneous/inputs/promotion-rule-update-input) <mark class="gqlmd-mdx-badge">input</mark>
