---
api_reference: true
id: shipping-price-input
title: ShippingPriceInput
---

No description

```graphql
input ShippingPriceInput {
  name: String
  description: JSONString
  minimumOrderWeight: WeightScalar
  maximumOrderWeight: WeightScalar
  maximumDeliveryDays: Int
  minimumDeliveryDays: Int
  type: ShippingMethodTypeEnum
  shippingZone: ID
  addPostalCodeRules: [ShippingPostalCodeRulesCreateInputRange!]
  deletePostalCodeRules: [ID!]
  inclusionType: PostalCodeRuleInclusionTypeEnum
  taxClass: ID
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingPriceInput</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Name of the shipping method.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingPriceInput</code>.<code class="gqlmd-mdx-entity-name">description</code></span>](#description)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSONString</code></span>](/api-reference/miscellaneous/scalars/jsonstring) \{#description\}

Shipping method description.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingPriceInput</code>.<code class="gqlmd-mdx-entity-name">minimumOrderWeight</code></span>](#minimum-order-weight)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">WeightScalar</code></span>](/api-reference/miscellaneous/scalars/weight-scalar) \{#minimum-order-weight\}

Minimum order weight to use this shipping method.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingPriceInput</code>.<code class="gqlmd-mdx-entity-name">maximumOrderWeight</code></span>](#maximum-order-weight)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">WeightScalar</code></span>](/api-reference/miscellaneous/scalars/weight-scalar) \{#maximum-order-weight\}

Maximum order weight to use this shipping method.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingPriceInput</code>.<code class="gqlmd-mdx-entity-name">maximumDeliveryDays</code></span>](#maximum-delivery-days)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#maximum-delivery-days\}

Maximum number of days for delivery.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingPriceInput</code>.<code class="gqlmd-mdx-entity-name">minimumDeliveryDays</code></span>](#minimum-delivery-days)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#minimum-delivery-days\}

Minimal number of days for delivery.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingPriceInput</code>.<code class="gqlmd-mdx-entity-name">type</code></span>](#type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ShippingMethodTypeEnum</code></span>](/api-reference/shipping/enums/shipping-method-type-enum) \{#type\}

Shipping type: price or weight based.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingPriceInput</code>.<code class="gqlmd-mdx-entity-name">shippingZone</code></span>](#shipping-zone)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#shipping-zone\}

Shipping zone this method belongs to.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingPriceInput</code>.<code class="gqlmd-mdx-entity-name">addPostalCodeRules</code></span>](#add-postal-code-rules)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ShippingPostalCodeRulesCreateInputRange!]</code></span>](/api-reference/shipping/inputs/shipping-postal-code-rules-create-input-range) \{#add-postal-code-rules\}

Postal code rules to add.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingPriceInput</code>.<code class="gqlmd-mdx-entity-name">deletePostalCodeRules</code></span>](#delete-postal-code-rules)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#delete-postal-code-rules\}

Postal code rules to delete.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingPriceInput</code>.<code class="gqlmd-mdx-entity-name">inclusionType</code></span>](#inclusion-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PostalCodeRuleInclusionTypeEnum</code></span>](/api-reference/shipping/enums/postal-code-rule-inclusion-type-enum) \{#inclusion-type\}

Inclusion type for currently assigned postal code rules.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingPriceInput</code>.<code class="gqlmd-mdx-entity-name">taxClass</code></span>](#tax-class)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#tax-class\}

ID of a tax class to assign to this shipping method. If not provided, the default tax class will be used.

### Member Of

[`shippingPriceCreate`](/api-reference/shipping/mutations/shipping-price-create) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`shippingPriceUpdate`](/api-reference/shipping/mutations/shipping-price-update) <mark class="gqlmd-mdx-badge">mutation</mark>
