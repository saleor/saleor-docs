---
api_reference: true
id: attribute-value-create
title: AttributeValueCreate
---

Creates a value for an attribute.

Requires one of the following permissions, depending on the attribute type: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES for `PRODUCT_TYPE` attributes, MANAGE_PAGE_TYPES_AND_ATTRIBUTES for `PAGE_TYPE` attributes.

Triggers the following webhook events:

- ATTRIBUTE_VALUE_CREATED (async): An attribute value was created.
- ATTRIBUTE_UPDATED (async): An attribute was updated.

```graphql
type AttributeValueCreate {
  attribute: Attribute
  attributeErrors: [AttributeError!]! @deprecated
  errors: [AttributeError!]!
  attributeValue: AttributeValue
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeValueCreate</code>.<code class="gqlmd-mdx-entity-name">attribute</code></span>](#attribute)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Attribute</code></span>](/api-reference/attributes/objects/attribute) \{#attribute\}

The updated attribute.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeValueCreate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AttributeError!]!</code></span>](/api-reference/attributes/objects/attribute-error) \{#errors\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeValueCreate</code>.<code class="gqlmd-mdx-entity-name">attributeValue</code></span>](#attribute-value)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AttributeValue</code></span>](/api-reference/attributes/objects/attribute-value) \{#attribute-value\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeValueCreate</code>.<code class="gqlmd-mdx-entity-name">attributeErrors</code></span>](#attribute-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AttributeError!]!</code></span>](/api-reference/attributes/objects/attribute-error) \{#attribute-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`attributeValueCreate`](/api-reference/attributes/mutations/attribute-value-create) <mark class="gqlmd-mdx-badge">mutation</mark>
