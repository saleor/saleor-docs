---
api_reference: true
id: shipping-method-postal-code-rule
title: ShippingMethodPostalCodeRule
---

Represents shipping method postal code rule.

```graphql
type ShippingMethodPostalCodeRule implements Node {
  id: ID!
  start: String
  end: String
  inclusionType: PostalCodeRuleInclusionTypeEnum
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingMethodPostalCodeRule</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of the object.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingMethodPostalCodeRule</code>.<code class="gqlmd-mdx-entity-name">start</code></span>](#start)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#start\}

Start address range.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingMethodPostalCodeRule</code>.<code class="gqlmd-mdx-entity-name">end</code></span>](#end)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#end\}

End address range.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingMethodPostalCodeRule</code>.<code class="gqlmd-mdx-entity-name">inclusionType</code></span>](#inclusion-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PostalCodeRuleInclusionTypeEnum</code></span>](/api-reference/shipping/enums/postal-code-rule-inclusion-type-enum) \{#inclusion-type\}

Inclusion type of the postal code rule.

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Node</code></span>](/api-reference/miscellaneous/interfaces/node)

An object with an ID

### Member Of

[`ShippingMethodType`](/api-reference/shipping/objects/shipping-method-type) <mark class="gqlmd-mdx-badge">object</mark>
