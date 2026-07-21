---
api_reference: true
id: bulk-attribute-value-input
title: BulkAttributeValueInput
---

No description

```graphql
input BulkAttributeValueInput {
  id: ID
  externalReference: String
  values: [String!] @deprecated
  dropdown: AttributeValueSelectableTypeInput
  swatch: AttributeValueSelectableTypeInput
  multiselect: [AttributeValueSelectableTypeInput!]
  numeric: String
  file: String
  contentType: String
  reference: ID
  references: [ID!]
  richText: JSONString
  plainText: String
  boolean: Boolean
  date: Date
  dateTime: DateTime
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">BulkAttributeValueInput</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of the selected attribute.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">BulkAttributeValueInput</code>.<code class="gqlmd-mdx-entity-name">externalReference</code></span>](#external-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#external-reference\}

External ID of this attribute.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">BulkAttributeValueInput</code>.<code class="gqlmd-mdx-entity-name">dropdown</code></span>](#dropdown)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AttributeValueSelectableTypeInput</code></span>](/api-reference/attributes/inputs/attribute-value-selectable-type-input) \{#dropdown\}

Attribute value ID.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">BulkAttributeValueInput</code>.<code class="gqlmd-mdx-entity-name">swatch</code></span>](#swatch)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AttributeValueSelectableTypeInput</code></span>](/api-reference/attributes/inputs/attribute-value-selectable-type-input) \{#swatch\}

Attribute value ID.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">BulkAttributeValueInput</code>.<code class="gqlmd-mdx-entity-name">multiselect</code></span>](#multiselect)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AttributeValueSelectableTypeInput!]</code></span>](/api-reference/attributes/inputs/attribute-value-selectable-type-input) \{#multiselect\}

List of attribute value IDs.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">BulkAttributeValueInput</code>.<code class="gqlmd-mdx-entity-name">numeric</code></span>](#numeric)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#numeric\}

Numeric value of an attribute.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">BulkAttributeValueInput</code>.<code class="gqlmd-mdx-entity-name">file</code></span>](#file)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#file\}

URL of the file attribute. Every time, a new value is created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">BulkAttributeValueInput</code>.<code class="gqlmd-mdx-entity-name">contentType</code></span>](#content-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#content-type\}

File content type.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">BulkAttributeValueInput</code>.<code class="gqlmd-mdx-entity-name">reference</code></span>](#reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#reference\}

ID of the referenced entity for single reference attribute.

Added in Saleor 3.22.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">BulkAttributeValueInput</code>.<code class="gqlmd-mdx-entity-name">references</code></span>](#references)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#references\}

List of entity IDs that will be used as references.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">BulkAttributeValueInput</code>.<code class="gqlmd-mdx-entity-name">richText</code></span>](#rich-text)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSONString</code></span>](/api-reference/miscellaneous/scalars/jsonstring) \{#rich-text\}

Text content in JSON format.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">BulkAttributeValueInput</code>.<code class="gqlmd-mdx-entity-name">plainText</code></span>](#plain-text)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#plain-text\}

Plain text content.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">BulkAttributeValueInput</code>.<code class="gqlmd-mdx-entity-name">boolean</code></span>](#boolean)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#boolean\}

The boolean value of an attribute to resolve. If the passed value is non-existent, it will be created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">BulkAttributeValueInput</code>.<code class="gqlmd-mdx-entity-name">date</code></span>](#date)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Date</code></span>](/api-reference/miscellaneous/scalars/date) \{#date\}

Represents the date value of the attribute value.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">BulkAttributeValueInput</code>.<code class="gqlmd-mdx-entity-name">dateTime</code></span>](#date-time)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#date-time\}

Represents the date/time value of the attribute value.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">BulkAttributeValueInput</code>.<code class="gqlmd-mdx-entity-name">values</code></span>](#values)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#values\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

No longer supported

</span>
</fieldset>

The value or slug of an attribute to resolve. If the passed value is non-existent, it will be created.

</details>

### Member Of

[`ProductVariantBulkCreateInput`](/api-reference/products/inputs/product-variant-bulk-create-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariantBulkUpdateInput`](/api-reference/products/inputs/product-variant-bulk-update-input) <mark class="gqlmd-mdx-badge">input</mark>
