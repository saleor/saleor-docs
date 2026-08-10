---
api_reference: true
id: delete-private-metadata
title: DeletePrivateMetadata
---

Delete object's private metadata. To use it, you need to be an authenticated staff user or an app and have access to the modified object.

```graphql
type DeletePrivateMetadata {
  metadataErrors: [MetadataError!]! @deprecated
  errors: [MetadataError!]!
  item: ObjectWithMetadata
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DeletePrivateMetadata</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataError!]!</code></span>](/api-reference/miscellaneous/objects/metadata-error) \{#errors\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DeletePrivateMetadata</code>.<code class="gqlmd-mdx-entity-name">item</code></span>](#item)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ObjectWithMetadata</code></span>](/api-reference/miscellaneous/interfaces/object-with-metadata) \{#item\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DeletePrivateMetadata</code>.<code class="gqlmd-mdx-entity-name">metadataErrors</code></span>](#metadata-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataError!]!</code></span>](/api-reference/miscellaneous/objects/metadata-error) \{#metadata-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`deletePrivateMetadata`](/api-reference/miscellaneous/mutations/delete-private-metadata) <mark class="gqlmd-mdx-badge">mutation</mark>
