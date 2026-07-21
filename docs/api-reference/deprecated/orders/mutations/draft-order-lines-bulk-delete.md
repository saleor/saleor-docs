---
api_reference: true
id: draft-order-lines-bulk-delete
title: draftOrderLinesBulkDelete
---

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

No longer supported

</span>
</fieldset>

Deletes order lines.

Requires one of the following permissions: MANAGE_ORDERS.

```graphql
draftOrderLinesBulkDelete(
  ids: [ID!]!
): DraftOrderLinesBulkDelete @deprecated
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">draftOrderLinesBulkDelete</code>.<code class="gqlmd-mdx-entity-name">ids</code></span>](#ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]!</code></span>](/api-reference/miscellaneous/scalars/id) \{#ids\}

List of order lines IDs to delete.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DraftOrderLinesBulkDelete</code></span>](/api-reference/orders/objects/draft-order-lines-bulk-delete)

Deletes order lines.

Requires one of the following permissions: MANAGE_ORDERS.
