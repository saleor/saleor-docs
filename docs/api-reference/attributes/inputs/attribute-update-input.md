---
api_reference: true
id: attribute-update-input
title: AttributeUpdateInput
---

Represents an input for update of attribute.

NOTE: Deprecated fields `filterableInStorefront`, `storefrontSearchPosition` and `availableInGrid` are not supported in bulk mutations: `attributeBulkCreate`, `attributeBulkUpdate`.

```graphql
input AttributeUpdateInput {
  name: String
  slug: String
  unit: MeasurementUnitsEnum
  removeValues: [ID!]
  addValues: [AttributeValueUpdateInput!]
  valueRequired: Boolean
  isVariantOnly: Boolean
  visibleInStorefront: Boolean
  filterableInStorefront: Boolean @deprecated
  filterableInDashboard: Boolean
  storefrontSearchPosition: Int @deprecated
  availableInGrid: Boolean @deprecated
  externalReference: String
  referenceTypes: [ID!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeUpdateInput</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Name of an attribute displayed in the interface.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeUpdateInput</code>.<code class="gqlmd-mdx-entity-name">slug</code></span>](#slug)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#slug\}

Internal representation of an attribute name.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeUpdateInput</code>.<code class="gqlmd-mdx-entity-name">unit</code></span>](#unit)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">MeasurementUnitsEnum</code></span>](/api-reference/miscellaneous/enums/measurement-units-enum) \{#unit\}

The unit of attribute values.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeUpdateInput</code>.<code class="gqlmd-mdx-entity-name">removeValues</code></span>](#remove-values)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#remove-values\}

IDs of values to be removed from this attribute.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeUpdateInput</code>.<code class="gqlmd-mdx-entity-name">addValues</code></span>](#add-values)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AttributeValueUpdateInput!]</code></span>](/api-reference/attributes/inputs/attribute-value-update-input) \{#add-values\}

New values to be created for this attribute.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeUpdateInput</code>.<code class="gqlmd-mdx-entity-name">valueRequired</code></span>](#value-required)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#value-required\}

Whether the attribute requires values to be passed or not.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeUpdateInput</code>.<code class="gqlmd-mdx-entity-name">isVariantOnly</code></span>](#is-variant-only)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-variant-only\}

Whether the attribute is for variants only.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeUpdateInput</code>.<code class="gqlmd-mdx-entity-name">visibleInStorefront</code></span>](#visible-in-storefront)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#visible-in-storefront\}

Whether the attribute should be visible or not in storefront.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeUpdateInput</code>.<code class="gqlmd-mdx-entity-name">filterableInDashboard</code></span>](#filterable-in-dashboard)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#filterable-in-dashboard\}

Whether the attribute can be filtered in dashboard.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeUpdateInput</code>.<code class="gqlmd-mdx-entity-name">externalReference</code></span>](#external-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#external-reference\}

External ID of this product.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeUpdateInput</code>.<code class="gqlmd-mdx-entity-name">referenceTypes</code></span>](#reference-types)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#reference-types\}

Specifies reference types to narrow down the choices of reference objects. Applicable only for `REFERENCE` and `SINGLE_REFERENCE` attributes with `PRODUCT`, `PRODUCT_VARIANT` and `PAGE` entity types. Accepts `ProductType` IDs for `PRODUCT` and `PRODUCT_VARIANT` entity types, and `PageType` IDs for `PAGE` entity type. If omitted, all objects of the selected entity type are available as attribute values.

A maximum of 100 reference types can be specified.

Added in Saleor 3.22.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeUpdateInput</code>.<code class="gqlmd-mdx-entity-name">filterableInStorefront</code></span>](#filterable-in-storefront)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#filterable-in-storefront\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

No longer supported

</span>
</fieldset>

Whether the attribute can be filtered in storefront.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeUpdateInput</code>.<code class="gqlmd-mdx-entity-name">storefrontSearchPosition</code></span>](#storefront-search-position)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#storefront-search-position\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

No longer supported

</span>
</fieldset>

The position of the attribute in the storefront navigation (0 by default).

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeUpdateInput</code>.<code class="gqlmd-mdx-entity-name">availableInGrid</code></span>](#available-in-grid)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#available-in-grid\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

No longer supported

</span>
</fieldset>

Whether the attribute can be displayed in the admin product list.

</details>

### Member Of

[`AttributeBulkUpdateInput`](/api-reference/attributes/inputs/attribute-bulk-update-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`attributeUpdate`](/api-reference/attributes/mutations/attribute-update) <mark class="gqlmd-mdx-badge">mutation</mark>
