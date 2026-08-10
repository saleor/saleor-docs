---
api_reference: true
id: plugin-update
title: PluginUpdate
---

Update plugin configuration.

Requires one of the following permissions: MANAGE_PLUGINS.

```graphql
type PluginUpdate {
  plugin: Plugin
  pluginsErrors: [PluginError!]! @deprecated
  errors: [PluginError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PluginUpdate</code>.<code class="gqlmd-mdx-entity-name">plugin</code></span>](#plugin)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Plugin</code></span>](/api-reference/miscellaneous/objects/plugin) \{#plugin\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PluginUpdate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[PluginError!]!</code></span>](/api-reference/miscellaneous/objects/plugin-error) \{#errors\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PluginUpdate</code>.<code class="gqlmd-mdx-entity-name">pluginsErrors</code></span>](#plugins-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[PluginError!]!</code></span>](/api-reference/miscellaneous/objects/plugin-error) \{#plugins-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`pluginUpdate`](/api-reference/miscellaneous/mutations/plugin-update) <mark class="gqlmd-mdx-badge">mutation</mark>
