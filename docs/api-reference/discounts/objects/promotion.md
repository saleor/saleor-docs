---
api_reference: true
id: promotion
title: Promotion
---

Represents the promotion that allow creating discounts based on given conditions, and is visible to all the customers.

```graphql
type Promotion implements Node, ObjectWithMetadata {
  id: ID!
  privateMetadata: [MetadataItem!]!
  privateMetafield(
    key: String!
  ): String
  privateMetafields(
    keys: [String!]
  ): Metadata
  metadata: [MetadataItem!]!
  metafield(
    key: String!
  ): String
  metafields(
    keys: [String!]
  ): Metadata
  name: String!
  type: PromotionTypeEnum
  description: JSON
  startDate: DateTime!
  endDate: DateTime
  createdAt: DateTime!
  updatedAt: DateTime!
  rules: [PromotionRule!]
  translation(
    languageCode: LanguageCodeEnum!
  ): PromotionTranslation
  events: [PromotionEvent!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Promotion</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Promotion</code>.<code class="gqlmd-mdx-entity-name">privateMetadata</code></span>](#private-metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataItem!]!</code></span>](/api-reference/miscellaneous/objects/metadata-item) \{#private-metadata\}

List of private metadata items. Requires staff permissions to access.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Promotion</code>.<code class="gqlmd-mdx-entity-name">privateMetafield</code></span>](#private-metafield)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#private-metafield\}

A single key from private metadata. Requires staff permissions to access.

Tip: Use GraphQL aliases to fetch multiple keys.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Promotion.privateMetafield</code>.<code class="gqlmd-mdx-entity-name">key</code></span>](#promotion-private-metafield-key)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#promotion-private-metafield-key\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Promotion</code>.<code class="gqlmd-mdx-entity-name">privateMetafields</code></span>](#private-metafields)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Metadata</code></span>](/api-reference/miscellaneous/scalars/metadata) \{#private-metafields\}

Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Promotion.privateMetafields</code>.<code class="gqlmd-mdx-entity-name">keys</code></span>](#promotion-private-metafields-keys)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#promotion-private-metafields-keys\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Promotion</code>.<code class="gqlmd-mdx-entity-name">metadata</code></span>](#metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataItem!]!</code></span>](/api-reference/miscellaneous/objects/metadata-item) \{#metadata\}

List of public metadata items. Can be accessed without permissions.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Promotion</code>.<code class="gqlmd-mdx-entity-name">metafield</code></span>](#metafield)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#metafield\}

A single key from public metadata.

Tip: Use GraphQL aliases to fetch multiple keys.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Promotion.metafield</code>.<code class="gqlmd-mdx-entity-name">key</code></span>](#promotion-metafield-key)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#promotion-metafield-key\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Promotion</code>.<code class="gqlmd-mdx-entity-name">metafields</code></span>](#metafields)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Metadata</code></span>](/api-reference/miscellaneous/scalars/metadata) \{#metafields\}

Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Promotion.metafields</code>.<code class="gqlmd-mdx-entity-name">keys</code></span>](#promotion-metafields-keys)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#promotion-metafields-keys\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Promotion</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Name of the promotion.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Promotion</code>.<code class="gqlmd-mdx-entity-name">type</code></span>](#type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PromotionTypeEnum</code></span>](/api-reference/discounts/enums/promotion-type-enum) \{#type\}

The type of the promotion. Implicate if the discount is applied on catalogue or order level.

Added in Saleor 3.19.

Note: this API is currently in Feature Preview and can be subject to changes at later point.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Promotion</code>.<code class="gqlmd-mdx-entity-name">description</code></span>](#description)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSON</code></span>](/api-reference/miscellaneous/scalars/json) \{#description\}

Description of the promotion.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Promotion</code>.<code class="gqlmd-mdx-entity-name">startDate</code></span>](#start-date)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime!</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#start-date\}

Start date of the promotion.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Promotion</code>.<code class="gqlmd-mdx-entity-name">endDate</code></span>](#end-date)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#end-date\}

End date of the promotion.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Promotion</code>.<code class="gqlmd-mdx-entity-name">createdAt</code></span>](#created-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime!</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#created-at\}

Date time of promotion creation.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Promotion</code>.<code class="gqlmd-mdx-entity-name">updatedAt</code></span>](#updated-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime!</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#updated-at\}

Date time of last update of promotion.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Promotion</code>.<code class="gqlmd-mdx-entity-name">rules</code></span>](#rules)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[PromotionRule!]</code></span>](/api-reference/discounts/objects/promotion-rule) \{#rules\}

The list of promotion rules.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Promotion</code>.<code class="gqlmd-mdx-entity-name">translation</code></span>](#translation)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PromotionTranslation</code></span>](/api-reference/discounts/objects/promotion-translation) \{#translation\}

Returns translated promotion fields for the given language code.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Promotion.translation</code>.<code class="gqlmd-mdx-entity-name">languageCode</code></span>](#promotion-translation-language-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LanguageCodeEnum!</code></span>](/api-reference/miscellaneous/enums/language-code-enum) \{#promotion-translation-language-code\}

A language code to return the translation for promotion.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Promotion</code>.<code class="gqlmd-mdx-entity-name">events</code></span>](#events)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[PromotionEvent!]</code></span>](/api-reference/miscellaneous/unions/promotion-event) \{#events\}

The list of events associated with the promotion.

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Node</code></span>](/api-reference/miscellaneous/interfaces/node)

An object with an ID

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ObjectWithMetadata</code></span>](/api-reference/miscellaneous/interfaces/object-with-metadata)

### Returned By

[`promotion`](/api-reference/discounts/queries/promotion) <mark class="gqlmd-mdx-badge">query</mark>

### Member Of

[`PromotionCountableEdge`](/api-reference/discounts/objects/promotion-countable-edge) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PromotionCreate`](/api-reference/discounts/objects/promotion-create) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PromotionCreated`](/api-reference/discounts/objects/promotion-created) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PromotionDelete`](/api-reference/discounts/objects/promotion-delete) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PromotionDeleted`](/api-reference/discounts/objects/promotion-deleted) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PromotionEnded`](/api-reference/discounts/objects/promotion-ended) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PromotionRule`](/api-reference/discounts/objects/promotion-rule) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PromotionStarted`](/api-reference/discounts/objects/promotion-started) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PromotionTranslate`](/api-reference/discounts/objects/promotion-translate) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PromotionUpdate`](/api-reference/discounts/objects/promotion-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PromotionUpdated`](/api-reference/discounts/objects/promotion-updated) <mark class="gqlmd-mdx-badge">object</mark>
