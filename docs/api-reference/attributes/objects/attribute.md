---
api_reference: true
id: attribute
title: Attribute
---

Custom attribute of a product. Attributes can be assigned to products and variants at the product type level.

```graphql
type Attribute implements Node, ObjectWithMetadata {
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
  inputType: AttributeInputTypeEnum
  entityType: AttributeEntityTypeEnum
  referenceTypes(
    limit: PositiveInt = 100
  ): [ReferenceType!]
  name: String!
  slug: String!
  type: AttributeTypeEnum!
  unit: MeasurementUnitsEnum
  choices(
    sortBy: AttributeChoicesSortingInput
    filter: AttributeValueFilterInput
    where: AttributeValueWhereInput
    search: String
    before: String
    after: String
    first: Int
    last: Int
  ): AttributeValueCountableConnection
  valueRequired: Boolean!
  visibleInStorefront: Boolean!
  filterableInStorefront: Boolean! @deprecated
  filterableInDashboard: Boolean!
  availableInGrid: Boolean! @deprecated
  storefrontSearchPosition: Int! @deprecated
  translation(
    languageCode: LanguageCodeEnum!
  ): AttributeTranslation
  withChoices: Boolean!
  productTypes(
    before: String
    after: String
    first: Int
    last: Int
  ): ProductTypeCountableConnection!
  productVariantTypes(
    before: String
    after: String
    first: Int
    last: Int
  ): ProductTypeCountableConnection!
  externalReference: String
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of the attribute.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute</code>.<code class="gqlmd-mdx-entity-name">privateMetadata</code></span>](#private-metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataItem!]!</code></span>](/api-reference/miscellaneous/objects/metadata-item) \{#private-metadata\}

List of private metadata items. Requires staff permissions to access.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute</code>.<code class="gqlmd-mdx-entity-name">privateMetafield</code></span>](#private-metafield)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#private-metafield\}

A single key from private metadata. Requires staff permissions to access.

Tip: Use GraphQL aliases to fetch multiple keys.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute.privateMetafield</code>.<code class="gqlmd-mdx-entity-name">key</code></span>](#attribute-private-metafield-key)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#attribute-private-metafield-key\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute</code>.<code class="gqlmd-mdx-entity-name">privateMetafields</code></span>](#private-metafields)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Metadata</code></span>](/api-reference/miscellaneous/scalars/metadata) \{#private-metafields\}

Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute.privateMetafields</code>.<code class="gqlmd-mdx-entity-name">keys</code></span>](#attribute-private-metafields-keys)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#attribute-private-metafields-keys\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute</code>.<code class="gqlmd-mdx-entity-name">metadata</code></span>](#metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataItem!]!</code></span>](/api-reference/miscellaneous/objects/metadata-item) \{#metadata\}

List of public metadata items. Can be accessed without permissions.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute</code>.<code class="gqlmd-mdx-entity-name">metafield</code></span>](#metafield)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#metafield\}

A single key from public metadata.

Tip: Use GraphQL aliases to fetch multiple keys.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute.metafield</code>.<code class="gqlmd-mdx-entity-name">key</code></span>](#attribute-metafield-key)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#attribute-metafield-key\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute</code>.<code class="gqlmd-mdx-entity-name">metafields</code></span>](#metafields)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Metadata</code></span>](/api-reference/miscellaneous/scalars/metadata) \{#metafields\}

Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute.metafields</code>.<code class="gqlmd-mdx-entity-name">keys</code></span>](#attribute-metafields-keys)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#attribute-metafields-keys\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute</code>.<code class="gqlmd-mdx-entity-name">inputType</code></span>](#input-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AttributeInputTypeEnum</code></span>](/api-reference/attributes/enums/attribute-input-type-enum) \{#input-type\}

The input type to use for entering attribute values in the dashboard.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute</code>.<code class="gqlmd-mdx-entity-name">entityType</code></span>](#entity-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AttributeEntityTypeEnum</code></span>](/api-reference/attributes/enums/attribute-entity-type-enum) \{#entity-type\}

The entity type which can be used as a reference.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute</code>.<code class="gqlmd-mdx-entity-name">referenceTypes</code></span>](#reference-types)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ReferenceType!]</code></span>](/api-reference/miscellaneous/unions/reference-type) \{#reference-types\}

The reference types (product or page type) that are used to narrow down the choices of reference objects.

Added in Saleor 3.22.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute.referenceTypes</code>.<code class="gqlmd-mdx-entity-name">limit</code></span>](#attribute-reference-types-limit)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveInt</code></span>](/api-reference/miscellaneous/scalars/positive-int) \{#attribute-reference-types-limit\}

Maximum number of objects to return. Value must be greater than 0. Default is 100.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Name of an attribute displayed in the interface.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute</code>.<code class="gqlmd-mdx-entity-name">slug</code></span>](#slug)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#slug\}

Internal representation of an attribute name.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute</code>.<code class="gqlmd-mdx-entity-name">type</code></span>](#type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AttributeTypeEnum!</code></span>](/api-reference/attributes/enums/attribute-type-enum) \{#type\}

The attribute type.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute</code>.<code class="gqlmd-mdx-entity-name">unit</code></span>](#unit)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">MeasurementUnitsEnum</code></span>](/api-reference/miscellaneous/enums/measurement-units-enum) \{#unit\}

The unit of attribute values.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute</code>.<code class="gqlmd-mdx-entity-name">choices</code></span>](#choices)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AttributeValueCountableConnection</code></span>](/api-reference/attributes/objects/attribute-value-countable-connection) \{#choices\}

A list of predefined attribute choices available for selection. Available only for attributes with predefined choices.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute.choices</code>.<code class="gqlmd-mdx-entity-name">sortBy</code></span>](#attribute-choices-sort-by)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AttributeChoicesSortingInput</code></span>](/api-reference/attributes/inputs/attribute-choices-sorting-input) \{#attribute-choices-sort-by\}

Sort attribute choices.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute.choices</code>.<code class="gqlmd-mdx-entity-name">filter</code></span>](#attribute-choices-filter)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AttributeValueFilterInput</code></span>](/api-reference/attributes/inputs/attribute-value-filter-input) \{#attribute-choices-filter\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `where` filter instead.

</span>
</fieldset>

Filtering options for attribute choices.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute.choices</code>.<code class="gqlmd-mdx-entity-name">where</code></span>](#attribute-choices-where)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AttributeValueWhereInput</code></span>](/api-reference/attributes/inputs/attribute-value-where-input) \{#attribute-choices-where\}

Where filtering options for attribute choices.

Added in Saleor 3.22.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute.choices</code>.<code class="gqlmd-mdx-entity-name">search</code></span>](#attribute-choices-search)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#attribute-choices-search\}

Search attribute choices.

Added in Saleor 3.22.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute.choices</code>.<code class="gqlmd-mdx-entity-name">before</code></span>](#attribute-choices-before)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#attribute-choices-before\}

Return the elements in the list that come before the specified cursor.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute.choices</code>.<code class="gqlmd-mdx-entity-name">after</code></span>](#attribute-choices-after)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#attribute-choices-after\}

Return the elements in the list that come after the specified cursor.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute.choices</code>.<code class="gqlmd-mdx-entity-name">first</code></span>](#attribute-choices-first)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#attribute-choices-first\}

Retrieve the first n elements from the list. Note that the system only allows fetching a maximum of 100 objects in a single query.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute.choices</code>.<code class="gqlmd-mdx-entity-name">last</code></span>](#attribute-choices-last)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#attribute-choices-last\}

Retrieve the last n elements from the list. Note that the system only allows fetching a maximum of 100 objects in a single query.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute</code>.<code class="gqlmd-mdx-entity-name">valueRequired</code></span>](#value-required)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#value-required\}

Whether the attribute requires values to be passed or not. Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES, MANAGE_PRODUCTS, MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute</code>.<code class="gqlmd-mdx-entity-name">visibleInStorefront</code></span>](#visible-in-storefront)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#visible-in-storefront\}

Whether the attribute should be visible or not in storefront. Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES, MANAGE_PRODUCTS, MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute</code>.<code class="gqlmd-mdx-entity-name">filterableInDashboard</code></span>](#filterable-in-dashboard)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#filterable-in-dashboard\}

Whether the attribute can be filtered in dashboard. Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES, MANAGE_PRODUCTS, MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute</code>.<code class="gqlmd-mdx-entity-name">translation</code></span>](#translation)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AttributeTranslation</code></span>](/api-reference/attributes/objects/attribute-translation) \{#translation\}

Returns translated attribute fields for the given language code.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute.translation</code>.<code class="gqlmd-mdx-entity-name">languageCode</code></span>](#attribute-translation-language-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LanguageCodeEnum!</code></span>](/api-reference/miscellaneous/enums/language-code-enum) \{#attribute-translation-language-code\}

A language code to return the translation for attribute.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute</code>.<code class="gqlmd-mdx-entity-name">withChoices</code></span>](#with-choices)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#with-choices\}

Flag indicating that attribute has predefined choices.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute</code>.<code class="gqlmd-mdx-entity-name">productTypes</code></span>](#product-types)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductTypeCountableConnection!</code></span>](/api-reference/products/objects/product-type-countable-connection) \{#product-types\}

A list of product types that use this attribute as a product attribute.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute.productTypes</code>.<code class="gqlmd-mdx-entity-name">before</code></span>](#attribute-product-types-before)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#attribute-product-types-before\}

Return the elements in the list that come before the specified cursor.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute.productTypes</code>.<code class="gqlmd-mdx-entity-name">after</code></span>](#attribute-product-types-after)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#attribute-product-types-after\}

Return the elements in the list that come after the specified cursor.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute.productTypes</code>.<code class="gqlmd-mdx-entity-name">first</code></span>](#attribute-product-types-first)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#attribute-product-types-first\}

Retrieve the first n elements from the list. Note that the system only allows fetching a maximum of 100 objects in a single query.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute.productTypes</code>.<code class="gqlmd-mdx-entity-name">last</code></span>](#attribute-product-types-last)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#attribute-product-types-last\}

Retrieve the last n elements from the list. Note that the system only allows fetching a maximum of 100 objects in a single query.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute</code>.<code class="gqlmd-mdx-entity-name">productVariantTypes</code></span>](#product-variant-types)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductTypeCountableConnection!</code></span>](/api-reference/products/objects/product-type-countable-connection) \{#product-variant-types\}

A list of product types that use this attribute as a product variant attribute.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute.productVariantTypes</code>.<code class="gqlmd-mdx-entity-name">before</code></span>](#attribute-product-variant-types-before)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#attribute-product-variant-types-before\}

Return the elements in the list that come before the specified cursor.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute.productVariantTypes</code>.<code class="gqlmd-mdx-entity-name">after</code></span>](#attribute-product-variant-types-after)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#attribute-product-variant-types-after\}

Return the elements in the list that come after the specified cursor.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute.productVariantTypes</code>.<code class="gqlmd-mdx-entity-name">first</code></span>](#attribute-product-variant-types-first)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#attribute-product-variant-types-first\}

Retrieve the first n elements from the list. Note that the system only allows fetching a maximum of 100 objects in a single query.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute.productVariantTypes</code>.<code class="gqlmd-mdx-entity-name">last</code></span>](#attribute-product-variant-types-last)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#attribute-product-variant-types-last\}

Retrieve the last n elements from the list. Note that the system only allows fetching a maximum of 100 objects in a single query.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute</code>.<code class="gqlmd-mdx-entity-name">externalReference</code></span>](#external-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#external-reference\}

External ID of this attribute.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute</code>.<code class="gqlmd-mdx-entity-name">filterableInStorefront</code></span>](#filterable-in-storefront)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#filterable-in-storefront\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

No longer supported

</span>
</fieldset>

Whether the attribute can be filtered in storefront. Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES, MANAGE_PRODUCTS, MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute</code>.<code class="gqlmd-mdx-entity-name">availableInGrid</code></span>](#available-in-grid)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#available-in-grid\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

No longer supported

</span>
</fieldset>

Whether the attribute can be displayed in the admin product list. Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES, MANAGE_PRODUCTS, MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Attribute</code>.<code class="gqlmd-mdx-entity-name">storefrontSearchPosition</code></span>](#storefront-search-position)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span>](/api-reference/miscellaneous/scalars/int) \{#storefront-search-position\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

No longer supported

</span>
</fieldset>

The position of the attribute in the storefront navigation (0 by default). Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES, MANAGE_PRODUCTS, MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.

</details>

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Node</code></span>](/api-reference/miscellaneous/interfaces/node)

An object with an ID

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ObjectWithMetadata</code></span>](/api-reference/miscellaneous/interfaces/object-with-metadata)

### Returned By

[`attribute`](/api-reference/attributes/queries/attribute) <mark class="gqlmd-mdx-badge">query</mark>

### Member Of

[`AssignedAttribute`](/api-reference/attributes/interfaces/assigned-attribute) <mark class="gqlmd-mdx-badge">interface</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AssignedBooleanAttribute`](/api-reference/attributes/objects/assigned-boolean-attribute) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AssignedDateAttribute`](/api-reference/attributes/objects/assigned-date-attribute) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AssignedDateTimeAttribute`](/api-reference/attributes/objects/assigned-date-time-attribute) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AssignedFileAttribute`](/api-reference/attributes/objects/assigned-file-attribute) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AssignedMultiCategoryReferenceAttribute`](/api-reference/attributes/objects/assigned-multi-category-reference-attribute) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AssignedMultiChoiceAttribute`](/api-reference/attributes/objects/assigned-multi-choice-attribute) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AssignedMultiCollectionReferenceAttribute`](/api-reference/attributes/objects/assigned-multi-collection-reference-attribute) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AssignedMultiPageReferenceAttribute`](/api-reference/attributes/objects/assigned-multi-page-reference-attribute) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AssignedMultiProductReferenceAttribute`](/api-reference/attributes/objects/assigned-multi-product-reference-attribute) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AssignedMultiProductVariantReferenceAttribute`](/api-reference/attributes/objects/assigned-multi-product-variant-reference-attribute) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AssignedNumericAttribute`](/api-reference/attributes/objects/assigned-numeric-attribute) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AssignedPlainTextAttribute`](/api-reference/attributes/objects/assigned-plain-text-attribute) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AssignedSingleCategoryReferenceAttribute`](/api-reference/attributes/objects/assigned-single-category-reference-attribute) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AssignedSingleChoiceAttribute`](/api-reference/attributes/objects/assigned-single-choice-attribute) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AssignedSingleCollectionReferenceAttribute`](/api-reference/attributes/objects/assigned-single-collection-reference-attribute) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AssignedSinglePageReferenceAttribute`](/api-reference/attributes/objects/assigned-single-page-reference-attribute) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AssignedSingleProductReferenceAttribute`](/api-reference/attributes/objects/assigned-single-product-reference-attribute) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AssignedSingleProductVariantReferenceAttribute`](/api-reference/attributes/objects/assigned-single-product-variant-reference-attribute) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AssignedSwatchAttribute`](/api-reference/attributes/objects/assigned-swatch-attribute) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AssignedTextAttribute`](/api-reference/attributes/objects/assigned-text-attribute) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AssignedVariantAttribute`](/api-reference/attributes/objects/assigned-variant-attribute) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AttributeBulkCreateResult`](/api-reference/attributes/objects/attribute-bulk-create-result) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AttributeBulkUpdateResult`](/api-reference/attributes/objects/attribute-bulk-update-result) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AttributeCountableEdge`](/api-reference/attributes/objects/attribute-countable-edge) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AttributeCreate`](/api-reference/attributes/objects/attribute-create) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AttributeCreated`](/api-reference/attributes/objects/attribute-created) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AttributeDelete`](/api-reference/attributes/objects/attribute-delete) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AttributeDeleted`](/api-reference/attributes/objects/attribute-deleted) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AttributeReorderValues`](/api-reference/attributes/objects/attribute-reorder-values) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AttributeTranslatableContent`](/api-reference/attributes/objects/attribute-translatable-content) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AttributeTranslate`](/api-reference/attributes/objects/attribute-translate) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AttributeUpdate`](/api-reference/attributes/objects/attribute-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AttributeUpdated`](/api-reference/attributes/objects/attribute-updated) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AttributeValueCreate`](/api-reference/attributes/objects/attribute-value-create) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AttributeValueDelete`](/api-reference/attributes/objects/attribute-value-delete) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AttributeValueUpdate`](/api-reference/attributes/objects/attribute-value-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PageType`](/api-reference/pages/objects/page-type) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductType`](/api-reference/products/objects/product-type) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`SelectedAttribute`](/api-reference/attributes/objects/selected-attribute) <mark class="gqlmd-mdx-badge">object</mark>
