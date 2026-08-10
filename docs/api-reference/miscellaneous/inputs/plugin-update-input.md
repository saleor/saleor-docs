---
api_reference: true
id: plugin-update-input
title: PluginUpdateInput
---

No description

```graphql
input PluginUpdateInput {
  active: Boolean
  configuration: [ConfigurationItemInput!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PluginUpdateInput</code>.<code class="gqlmd-mdx-entity-name">active</code></span>](#active)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#active\}

Indicates whether the plugin should be enabled.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PluginUpdateInput</code>.<code class="gqlmd-mdx-entity-name">configuration</code></span>](#configuration)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ConfigurationItemInput!]</code></span>](/api-reference/miscellaneous/inputs/configuration-item-input) \{#configuration\}

Configuration of the plugin.

### Member Of

[`pluginUpdate`](/api-reference/miscellaneous/mutations/plugin-update) <mark class="gqlmd-mdx-badge">mutation</mark>
