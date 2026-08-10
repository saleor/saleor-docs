---
api_reference: true
id: category
title: category
---

Look up a category by ID or slug.

```graphql
category(
  id: ID
  slug: String
  slugLanguageCode: LanguageCodeEnum
): Category
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">category</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of the category.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">category</code>.<code class="gqlmd-mdx-entity-name">slug</code></span>](#slug)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#slug\}

Slug of the category

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">category</code>.<code class="gqlmd-mdx-entity-name">slugLanguageCode</code></span>](#slug-language-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LanguageCodeEnum</code></span>](/api-reference/miscellaneous/enums/language-code-enum) \{#slug-language-code\}

Language code of the category slug, omit to use primary slug.

Added in Saleor 3.21.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Category</code></span>](/api-reference/products/objects/category)

Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront.
