---
api_reference: true
id: staff-create-input
title: StaffCreateInput
---

Fields required to create a staff user.

```graphql
input StaffCreateInput {
  firstName: String
  lastName: String
  email: String
  isActive: Boolean
  note: String
  metadata: [MetadataInput!]
  privateMetadata: [MetadataInput!]
  addGroups: [ID!]
  redirectUrl: String
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StaffCreateInput</code>.<code class="gqlmd-mdx-entity-name">firstName</code></span>](#first-name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#first-name\}

Given name.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StaffCreateInput</code>.<code class="gqlmd-mdx-entity-name">lastName</code></span>](#last-name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#last-name\}

Family name.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StaffCreateInput</code>.<code class="gqlmd-mdx-entity-name">email</code></span>](#email)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#email\}

The unique email address of the user.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StaffCreateInput</code>.<code class="gqlmd-mdx-entity-name">isActive</code></span>](#is-active)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-active\}

User account is active.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StaffCreateInput</code>.<code class="gqlmd-mdx-entity-name">note</code></span>](#note)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#note\}

A note about the user.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StaffCreateInput</code>.<code class="gqlmd-mdx-entity-name">metadata</code></span>](#metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataInput!]</code></span>](/api-reference/miscellaneous/inputs/metadata-input) \{#metadata\}

Fields required to update the user metadata. Can be read by any API client authorized to read the object it's attached to.

Warning: never store sensitive information, including financial data such as credit card details.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StaffCreateInput</code>.<code class="gqlmd-mdx-entity-name">privateMetadata</code></span>](#private-metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataInput!]</code></span>](/api-reference/miscellaneous/inputs/metadata-input) \{#private-metadata\}

Fields required to update the user private metadata. Requires permissions to modify and to read the metadata of the object it's attached to.

Warning: never store sensitive information, including financial data such as credit card details.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StaffCreateInput</code>.<code class="gqlmd-mdx-entity-name">addGroups</code></span>](#add-groups)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#add-groups\}

List of permission group IDs to which user should be assigned.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StaffCreateInput</code>.<code class="gqlmd-mdx-entity-name">redirectUrl</code></span>](#redirect-url)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#redirect-url\}

URL of a view where users should be redirected to set the password. URL in RFC 1808 format.

### Member Of

[`staffCreate`](/api-reference/users/mutations/staff-create) <mark class="gqlmd-mdx-badge">mutation</mark>
