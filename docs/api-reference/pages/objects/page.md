---
api_reference: true
id: page
title: Page
---

A static page that can be manually added by a shop operator through the dashboard.

```graphql
type Page implements Node, ObjectWithMetadata, ObjectWithAttributes {
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
  assignedAttribute(
    slug: String!
  ): AssignedAttribute
  assignedAttributes(
    limit: PositiveInt = 100
  ): [AssignedAttribute!]!
  seoTitle: String
  seoDescription: String
  title: String!
  content: JSONString
  publicationDate: Date @deprecated
  publishedAt: DateTime
  isPublished: Boolean!
  slug: String!
  pageType: PageType!
  created: DateTime!
  contentJson: JSONString! @deprecated
  translation(
    languageCode: LanguageCodeEnum!
  ): PageTranslation
  attribute(
    slug: String!
  ): SelectedAttribute @deprecated
  attributes: [SelectedAttribute!]! @deprecated
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Page</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of the page.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Page</code>.<code class="gqlmd-mdx-entity-name">privateMetadata</code></span>](#private-metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataItem!]!</code></span>](/api-reference/miscellaneous/objects/metadata-item) \{#private-metadata\}

List of private metadata items. Requires staff permissions to access.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Page</code>.<code class="gqlmd-mdx-entity-name">privateMetafield</code></span>](#private-metafield)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#private-metafield\}

A single key from private metadata. Requires staff permissions to access.

Tip: Use GraphQL aliases to fetch multiple keys.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Page.privateMetafield</code>.<code class="gqlmd-mdx-entity-name">key</code></span>](#page-private-metafield-key)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#page-private-metafield-key\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Page</code>.<code class="gqlmd-mdx-entity-name">privateMetafields</code></span>](#private-metafields)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Metadata</code></span>](/api-reference/miscellaneous/scalars/metadata) \{#private-metafields\}

Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Page.privateMetafields</code>.<code class="gqlmd-mdx-entity-name">keys</code></span>](#page-private-metafields-keys)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#page-private-metafields-keys\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Page</code>.<code class="gqlmd-mdx-entity-name">metadata</code></span>](#metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataItem!]!</code></span>](/api-reference/miscellaneous/objects/metadata-item) \{#metadata\}

List of public metadata items. Can be accessed without permissions.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Page</code>.<code class="gqlmd-mdx-entity-name">metafield</code></span>](#metafield)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#metafield\}

A single key from public metadata.

Tip: Use GraphQL aliases to fetch multiple keys.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Page.metafield</code>.<code class="gqlmd-mdx-entity-name">key</code></span>](#page-metafield-key)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#page-metafield-key\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Page</code>.<code class="gqlmd-mdx-entity-name">metafields</code></span>](#metafields)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Metadata</code></span>](/api-reference/miscellaneous/scalars/metadata) \{#metafields\}

Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Page.metafields</code>.<code class="gqlmd-mdx-entity-name">keys</code></span>](#page-metafields-keys)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#page-metafields-keys\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Page</code>.<code class="gqlmd-mdx-entity-name">assignedAttribute</code></span>](#assigned-attribute)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AssignedAttribute</code></span>](/api-reference/attributes/interfaces/assigned-attribute) \{#assigned-attribute\}

Get a single attribute attached to page by attribute slug.

Added in Saleor 3.22.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Page.assignedAttribute</code>.<code class="gqlmd-mdx-entity-name">slug</code></span>](#page-assigned-attribute-slug)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#page-assigned-attribute-slug\}

Slug of the attribute

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Page</code>.<code class="gqlmd-mdx-entity-name">assignedAttributes</code></span>](#assigned-attributes)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AssignedAttribute!]!</code></span>](/api-reference/attributes/interfaces/assigned-attribute) \{#assigned-attributes\}

List of attributes assigned to this page.

Added in Saleor 3.22.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Page.assignedAttributes</code>.<code class="gqlmd-mdx-entity-name">limit</code></span>](#page-assigned-attributes-limit)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveInt</code></span>](/api-reference/miscellaneous/scalars/positive-int) \{#page-assigned-attributes-limit\}

Maximum number of attributes to return. Default is 100.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Page</code>.<code class="gqlmd-mdx-entity-name">seoTitle</code></span>](#seo-title)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#seo-title\}

Title of the page for SEO.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Page</code>.<code class="gqlmd-mdx-entity-name">seoDescription</code></span>](#seo-description)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#seo-description\}

Description of the page for SEO.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Page</code>.<code class="gqlmd-mdx-entity-name">title</code></span>](#title)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#title\}

Title of the page.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Page</code>.<code class="gqlmd-mdx-entity-name">content</code></span>](#content)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSONString</code></span>](/api-reference/miscellaneous/scalars/jsonstring) \{#content\}

Content of the page.

Rich text format. For reference see https://editorjs.io/

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Page</code>.<code class="gqlmd-mdx-entity-name">publishedAt</code></span>](#published-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#published-at\}

The page publication date.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Page</code>.<code class="gqlmd-mdx-entity-name">isPublished</code></span>](#is-published)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-published\}

Determines if the page is published.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Page</code>.<code class="gqlmd-mdx-entity-name">slug</code></span>](#slug)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#slug\}

Slug of the page.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Page</code>.<code class="gqlmd-mdx-entity-name">pageType</code></span>](#page-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PageType!</code></span>](/api-reference/pages/objects/page-type) \{#page-type\}

Determines the type of page

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Page</code>.<code class="gqlmd-mdx-entity-name">created</code></span>](#created)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime!</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#created\}

Date and time at which page was created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Page</code>.<code class="gqlmd-mdx-entity-name">translation</code></span>](#translation)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PageTranslation</code></span>](/api-reference/pages/objects/page-translation) \{#translation\}

Returns translated page fields for the given language code.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Page.translation</code>.<code class="gqlmd-mdx-entity-name">languageCode</code></span>](#page-translation-language-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LanguageCodeEnum!</code></span>](/api-reference/miscellaneous/enums/language-code-enum) \{#page-translation-language-code\}

A language code to return the translation for page.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Page</code>.<code class="gqlmd-mdx-entity-name">publicationDate</code></span>](#publication-date)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Date</code></span>](/api-reference/miscellaneous/scalars/date) \{#publication-date\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use the `publishedAt` field to fetch the publication date.

</span>
</fieldset>

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Page</code>.<code class="gqlmd-mdx-entity-name">contentJson</code></span>](#content-json)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSONString!</code></span>](/api-reference/miscellaneous/scalars/jsonstring) \{#content-json\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use the `content` field instead.

</span>
</fieldset>

Content of the page.

Rich text format. For reference see https://editorjs.io/

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Page</code>.<code class="gqlmd-mdx-entity-name">attribute</code></span>](#attribute)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">SelectedAttribute</code></span>](/api-reference/attributes/objects/selected-attribute) \{#attribute\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `assignedAttribute` field instead.

</span>
</fieldset>

Get a single attribute attached to page by attribute slug.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Page.attribute</code>.<code class="gqlmd-mdx-entity-name">slug</code></span>](#page-attribute-slug)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#page-attribute-slug\}

Slug of the attribute

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Page</code>.<code class="gqlmd-mdx-entity-name">attributes</code></span>](#attributes)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[SelectedAttribute!]!</code></span>](/api-reference/attributes/objects/selected-attribute) \{#attributes\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `assignedAttributes` field instead.

</span>
</fieldset>

List of attributes assigned to this page.

</details>

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Node</code></span>](/api-reference/miscellaneous/interfaces/node)

An object with an ID

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ObjectWithMetadata</code></span>](/api-reference/miscellaneous/interfaces/object-with-metadata)

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ObjectWithAttributes</code></span>](/api-reference/attributes/interfaces/object-with-attributes)

An object with attributes.

Added in Saleor 3.22.

### Returned By

[`page`](/api-reference/pages/queries/page) <mark class="gqlmd-mdx-badge">query</mark>

### Member Of

[`AssignedMultiPageReferenceAttribute`](/api-reference/attributes/objects/assigned-multi-page-reference-attribute) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AssignedSinglePageReferenceAttribute`](/api-reference/attributes/objects/assigned-single-page-reference-attribute) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`Fulfillment`](/api-reference/orders/objects/fulfillment) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`FulfillmentLine`](/api-reference/orders/objects/fulfillment-line) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`MenuItem`](/api-reference/menu/objects/menu-item) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderGrantedRefund`](/api-reference/orders/objects/order-granted-refund) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderGrantedRefundLine`](/api-reference/miscellaneous/objects/order-granted-refund-line) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PageCountableEdge`](/api-reference/pages/objects/page-countable-edge) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PageCreate`](/api-reference/pages/objects/page-create) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PageCreated`](/api-reference/pages/objects/page-created) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PageDelete`](/api-reference/pages/objects/page-delete) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PageDeleted`](/api-reference/pages/objects/page-deleted) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PageReorderAttributeValues`](/api-reference/pages/objects/page-reorder-attribute-values) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PageTranslatableContent`](/api-reference/pages/objects/page-translatable-content) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PageUpdate`](/api-reference/pages/objects/page-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PageUpdated`](/api-reference/pages/objects/page-updated) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`TransactionEvent`](/api-reference/payments/objects/transaction-event) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`TransactionItem`](/api-reference/payments/objects/transaction-item) <mark class="gqlmd-mdx-badge">object</mark>
