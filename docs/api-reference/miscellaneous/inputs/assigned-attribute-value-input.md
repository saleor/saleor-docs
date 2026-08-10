---
api_reference: true
id: assigned-attribute-value-input
title: AssignedAttributeValueInput
---

No description

```graphql
input AssignedAttributeValueInput {
  slug: StringFilterInput
  name: StringFilterInput
  numeric: DecimalFilterInput
  date: DateRangeInput
  dateTime: DateTimeRangeInput
  boolean: Boolean
  reference: AssignedAttributeReferenceInput
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AssignedAttributeValueInput</code>.<code class="gqlmd-mdx-entity-name">slug</code></span>](#slug)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">StringFilterInput</code></span>](/api-reference/miscellaneous/inputs/string-filter-input) \{#slug\}

Filter by slug assigned to AttributeValue.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AssignedAttributeValueInput</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">StringFilterInput</code></span>](/api-reference/miscellaneous/inputs/string-filter-input) \{#name\}

Filter by name assigned to AttributeValue.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AssignedAttributeValueInput</code>.<code class="gqlmd-mdx-entity-name">numeric</code></span>](#numeric)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DecimalFilterInput</code></span>](/api-reference/miscellaneous/inputs/decimal-filter-input) \{#numeric\}

Filter by numeric value for attributes of numeric type.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AssignedAttributeValueInput</code>.<code class="gqlmd-mdx-entity-name">date</code></span>](#date)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateRangeInput</code></span>](/api-reference/miscellaneous/inputs/date-range-input) \{#date\}

Filter by date value for attributes of date type.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AssignedAttributeValueInput</code>.<code class="gqlmd-mdx-entity-name">dateTime</code></span>](#date-time)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTimeRangeInput</code></span>](/api-reference/miscellaneous/inputs/date-time-range-input) \{#date-time\}

Filter by date time value for attributes of date time type.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AssignedAttributeValueInput</code>.<code class="gqlmd-mdx-entity-name">boolean</code></span>](#boolean)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#boolean\}

Filter by boolean value for attributes of boolean type.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AssignedAttributeValueInput</code>.<code class="gqlmd-mdx-entity-name">reference</code></span>](#reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AssignedAttributeReferenceInput</code></span>](/api-reference/miscellaneous/inputs/assigned-attribute-reference-input) \{#reference\}

Filter by reference attribute value.

### Member Of

[`AssignedAttributeWhereInput`](/api-reference/miscellaneous/inputs/assigned-attribute-where-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AttributeInput`](/api-reference/attributes/inputs/attribute-input) <mark class="gqlmd-mdx-badge">input</mark>
