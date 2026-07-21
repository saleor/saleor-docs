---
api_reference: true
id: configuration-item
title: ConfigurationItem
---

Stores information about a single configuration field.

```graphql
type ConfigurationItem {
  name: String!
  value: String
  type: ConfigurationTypeFieldEnum
  helpText: String
  label: String
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ConfigurationItem</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Name of the field.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ConfigurationItem</code>.<code class="gqlmd-mdx-entity-name">value</code></span>](#value)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#value\}

Current value of the field.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ConfigurationItem</code>.<code class="gqlmd-mdx-entity-name">type</code></span>](#type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ConfigurationTypeFieldEnum</code></span>](/api-reference/miscellaneous/enums/configuration-type-field-enum) \{#type\}

Type of the field.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ConfigurationItem</code>.<code class="gqlmd-mdx-entity-name">helpText</code></span>](#help-text)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#help-text\}

Help text for the field.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ConfigurationItem</code>.<code class="gqlmd-mdx-entity-name">label</code></span>](#label)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#label\}

Label for the field.

### Member Of

[`PluginConfiguration`](/api-reference/miscellaneous/objects/plugin-configuration) <mark class="gqlmd-mdx-badge">object</mark>
