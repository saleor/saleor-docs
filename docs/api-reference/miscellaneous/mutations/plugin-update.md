---
api_reference: true
id: plugin-update
title: pluginUpdate
---

Update plugin configuration.

Requires one of the following permissions: MANAGE_PLUGINS.

```graphql
pluginUpdate(
  channelId: ID
  id: ID!
  input: PluginUpdateInput!
): PluginUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">pluginUpdate</code>.<code class="gqlmd-mdx-entity-name">channelId</code></span>](#channel-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#channel-id\}

ID of a channel for which the data should be modified.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">pluginUpdate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of plugin to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">pluginUpdate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PluginUpdateInput!</code></span>](/api-reference/miscellaneous/inputs/plugin-update-input) \{#input\}

Fields required to update a plugin configuration.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PluginUpdate</code></span>](/api-reference/miscellaneous/objects/plugin-update)

Update plugin configuration.

Requires one of the following permissions: MANAGE_PLUGINS.
