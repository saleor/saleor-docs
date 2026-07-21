---
api_reference: true
id: shipping-price-translation-input
title: ShippingPriceTranslationInput
---

No description

```graphql
input ShippingPriceTranslationInput {
  name: String
  description: JSONString
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingPriceTranslationInput</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingPriceTranslationInput</code>.<code class="gqlmd-mdx-entity-name">description</code></span>](#description)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSONString</code></span>](/api-reference/miscellaneous/scalars/jsonstring) \{#description\}

Translated shipping method description.

Rich text format. For reference see https://editorjs.io/

### Member Of

[`shippingPriceTranslate`](/api-reference/shipping/mutations/shipping-price-translate) <mark class="gqlmd-mdx-badge">mutation</mark>
