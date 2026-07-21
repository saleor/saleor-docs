---
api_reference: true
id: translation
title: translation
---

Lookup a translatable item by ID.

Requires one of the following permissions: MANAGE_TRANSLATIONS.

```graphql
translation(
  id: ID!
  kind: TranslatableKinds!
): TranslatableItem
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">translation</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of the object to retrieve.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">translation</code>.<code class="gqlmd-mdx-entity-name">kind</code></span>](#kind)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TranslatableKinds!</code></span>](/api-reference/miscellaneous/enums/translatable-kinds) \{#kind\}

Kind of the object to retrieve.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TranslatableItem</code></span>](/api-reference/miscellaneous/unions/translatable-item)
