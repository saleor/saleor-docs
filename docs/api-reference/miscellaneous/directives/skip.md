---
api_reference: true
id: skip
title: skip
---

Directs the executor to skip this field or fragment when the `if` argument is true.

```graphql
directive @skip(if: Boolean!) on FIELD | FRAGMENT_SPREAD | INLINE_FRAGMENT
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">skip</code>.<code class="gqlmd-mdx-entity-name">if</code></span>](#if)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#if\}

Skipped when true.
