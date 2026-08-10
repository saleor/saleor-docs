---
api_reference: true
id: shop-translation
title: ShopTranslation
---

Represents shop translations.

```graphql
type ShopTranslation implements Node {
  id: ID!
  language: LanguageDisplay!
  headerText: String!
  description: String!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShopTranslation</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of the shop translation.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShopTranslation</code>.<code class="gqlmd-mdx-entity-name">language</code></span>](#language)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LanguageDisplay!</code></span>](/api-reference/miscellaneous/objects/language-display) \{#language\}

Translation language.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShopTranslation</code>.<code class="gqlmd-mdx-entity-name">headerText</code></span>](#header-text)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#header-text\}

Translated header text of sale.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShopTranslation</code>.<code class="gqlmd-mdx-entity-name">description</code></span>](#description)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#description\}

Translated description of sale.

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Node</code></span>](/api-reference/miscellaneous/interfaces/node)

An object with an ID

### Member Of

[`Shop`](/api-reference/miscellaneous/objects/shop) <mark class="gqlmd-mdx-badge">object</mark>
