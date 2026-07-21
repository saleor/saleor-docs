---
api_reference: true
id: promotion-rule-translation-input
title: PromotionRuleTranslationInput
---

No description

```graphql
input PromotionRuleTranslationInput {
  name: String
  description: JSON
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionRuleTranslationInput</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PromotionRuleTranslationInput</code>.<code class="gqlmd-mdx-entity-name">description</code></span>](#description)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSON</code></span>](/api-reference/miscellaneous/scalars/json) \{#description\}

Translated promotion description.

Rich text format. For reference see https://editorjs.io/

### Member Of

[`promotionRuleTranslate`](/api-reference/discounts/mutations/promotion-rule-translate) <mark class="gqlmd-mdx-badge">mutation</mark>
