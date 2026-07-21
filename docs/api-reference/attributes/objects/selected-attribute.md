---
api_reference: true
id: selected-attribute
title: SelectedAttribute
---

Represents an assigned attribute to an object.

```graphql
type SelectedAttribute {
  attribute: Attribute!
  values: [AttributeValue!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SelectedAttribute</code>.<code class="gqlmd-mdx-entity-name">attribute</code></span>](#attribute)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Attribute!</code></span>](/api-reference/attributes/objects/attribute) \{#attribute\}

Name of an attribute displayed in the interface.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SelectedAttribute</code>.<code class="gqlmd-mdx-entity-name">values</code></span>](#values)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AttributeValue!]!</code></span>](/api-reference/attributes/objects/attribute-value) \{#values\}

Values of an attribute.

### Member Of

[`Page`](/api-reference/pages/objects/page) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`Product`](/api-reference/products/objects/product) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariant`](/api-reference/products/objects/product-variant) <mark class="gqlmd-mdx-badge">object</mark>
