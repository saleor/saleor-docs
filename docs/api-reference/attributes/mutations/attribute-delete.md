---
api_reference: true
id: attribute-delete
title: attributeDelete
---

Deletes an attribute.

Requires one of the following permissions, depending on the attribute type: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES for `PRODUCT_TYPE` attributes, MANAGE_PAGE_TYPES_AND_ATTRIBUTES for `PAGE_TYPE` attributes.

Triggers the following webhook events:

- ATTRIBUTE_DELETED (async): An attribute was deleted.

```graphql
attributeDelete(
  externalReference: String
  id: ID
): AttributeDelete
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">attributeDelete</code>.<code class="gqlmd-mdx-entity-name">externalReference</code></span>](#external-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#external-reference\}

External ID of an attribute to delete.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">attributeDelete</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of an attribute to delete.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AttributeDelete</code></span>](/api-reference/attributes/objects/attribute-delete)

Deletes an attribute.

Requires one of the following permissions, depending on the attribute type: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES for `PRODUCT_TYPE` attributes, MANAGE_PAGE_TYPES_AND_ATTRIBUTES for `PAGE_TYPE` attributes.

Triggers the following webhook events:

- ATTRIBUTE_DELETED (async): An attribute was deleted.
