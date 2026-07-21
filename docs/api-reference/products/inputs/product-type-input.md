---
api_reference: true
id: product-type-input
title: ProductTypeInput
---

No description

```graphql
input ProductTypeInput {
  name: String
  slug: String
  kind: ProductTypeKindEnum
  hasVariants: Boolean @deprecated
  productAttributes: [ID!]
  variantAttributes: [ID!]
  isShippingRequired: Boolean
  isDigital: Boolean
  weight: WeightScalar
  taxCode: String @deprecated
  taxClass: ID
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductTypeInput</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Name of the product type.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductTypeInput</code>.<code class="gqlmd-mdx-entity-name">slug</code></span>](#slug)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#slug\}

Product type slug.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductTypeInput</code>.<code class="gqlmd-mdx-entity-name">kind</code></span>](#kind)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductTypeKindEnum</code></span>](/api-reference/products/enums/product-type-kind-enum) \{#kind\}

The product type kind.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductTypeInput</code>.<code class="gqlmd-mdx-entity-name">productAttributes</code></span>](#product-attributes)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#product-attributes\}

List of attributes shared among all product variants.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductTypeInput</code>.<code class="gqlmd-mdx-entity-name">variantAttributes</code></span>](#variant-attributes)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#variant-attributes\}

List of attributes used to distinguish between different variants of a product.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductTypeInput</code>.<code class="gqlmd-mdx-entity-name">isShippingRequired</code></span>](#is-shipping-required)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-shipping-required\}

Determines if shipping is required for products of this variant.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductTypeInput</code>.<code class="gqlmd-mdx-entity-name">isDigital</code></span>](#is-digital)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-digital\}

Determines if products are digital - doesn't have any effect, it's present for backward-compatibility.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductTypeInput</code>.<code class="gqlmd-mdx-entity-name">weight</code></span>](#weight)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">WeightScalar</code></span>](/api-reference/miscellaneous/scalars/weight-scalar) \{#weight\}

Weight of the ProductType items.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductTypeInput</code>.<code class="gqlmd-mdx-entity-name">taxClass</code></span>](#tax-class)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#tax-class\}

ID of a tax class to assign to this product type. All products of this product type would use this tax class, unless it's overridden in the `Product` type.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductTypeInput</code>.<code class="gqlmd-mdx-entity-name">hasVariants</code></span>](#has-variants)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#has-variants\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

The field has no effect on the API behavior. This is a leftover from the past Simple/Configurable product distinction. Products can have multiple variants regardless of this setting.

</span>
</fieldset>

Determines if product of this type has multiple variants. This option mainly simplifies product management in the dashboard. There is always at least one variant created under the hood.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductTypeInput</code>.<code class="gqlmd-mdx-entity-name">taxCode</code></span>](#tax-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#tax-code\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use tax classes to control the tax calculation for a product type. If taxCode is provided, Saleor will try to find a tax class with given code (codes are stored in metadata) and assign it. If no tax class is found, it would be created and assigned.

</span>
</fieldset>

Tax rate for enabled tax gateway.

</details>

### Member Of

[`productTypeCreate`](/api-reference/products/mutations/product-type-create) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`productTypeUpdate`](/api-reference/products/mutations/product-type-update) <mark class="gqlmd-mdx-badge">mutation</mark>
