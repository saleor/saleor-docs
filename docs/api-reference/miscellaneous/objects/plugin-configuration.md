---
api_reference: true
id: plugin-configuration
title: PluginConfiguration
---

Stores information about a configuration of plugin.

```graphql
type PluginConfiguration {
  active: Boolean!
  channel: Channel
  configuration: [ConfigurationItem!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PluginConfiguration</code>.<code class="gqlmd-mdx-entity-name">active</code></span>](#active)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#active\}

Determines if plugin is active or not.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PluginConfiguration</code>.<code class="gqlmd-mdx-entity-name">channel</code></span>](#channel)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Channel</code></span>](/api-reference/channels/objects/channel) \{#channel\}

The channel to which the plugin configuration is assigned to.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PluginConfiguration</code>.<code class="gqlmd-mdx-entity-name">configuration</code></span>](#configuration)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ConfigurationItem!]</code></span>](/api-reference/miscellaneous/objects/configuration-item) \{#configuration\}

Configuration of the plugin.

### Member Of

[`Plugin`](/api-reference/miscellaneous/objects/plugin) <mark class="gqlmd-mdx-badge">object</mark>
