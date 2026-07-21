---
api_reference: true
id: plugin
title: Plugin
---

Plugin.

```graphql
type Plugin {
  id: ID!
  name: String!
  description: String!
  globalConfiguration: PluginConfiguration
  channelConfigurations: [PluginConfiguration!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Plugin</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

Identifier of the plugin.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Plugin</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Name of the plugin.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Plugin</code>.<code class="gqlmd-mdx-entity-name">description</code></span>](#description)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#description\}

Description of the plugin.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Plugin</code>.<code class="gqlmd-mdx-entity-name">globalConfiguration</code></span>](#global-configuration)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PluginConfiguration</code></span>](/api-reference/miscellaneous/objects/plugin-configuration) \{#global-configuration\}

Global configuration of the plugin (not channel-specific).

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Plugin</code>.<code class="gqlmd-mdx-entity-name">channelConfigurations</code></span>](#channel-configurations)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[PluginConfiguration!]!</code></span>](/api-reference/miscellaneous/objects/plugin-configuration) \{#channel-configurations\}

Channel-specific plugin configuration.

### Returned By

[`plugin`](/api-reference/miscellaneous/queries/plugin) <mark class="gqlmd-mdx-badge">query</mark>

### Member Of

[`PluginCountableEdge`](/api-reference/miscellaneous/objects/plugin-countable-edge) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PluginUpdate`](/api-reference/miscellaneous/objects/plugin-update) <mark class="gqlmd-mdx-badge">object</mark>
