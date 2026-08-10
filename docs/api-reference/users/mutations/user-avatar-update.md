---
api_reference: true
id: user-avatar-update
title: userAvatarUpdate
---

Create a user avatar. Only for staff members. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec

Requires one of the following permissions: AUTHENTICATED_STAFF_USER.

```graphql
userAvatarUpdate(
  image: Upload!
): UserAvatarUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">userAvatarUpdate</code>.<code class="gqlmd-mdx-entity-name">image</code></span>](#image)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Upload!</code></span>](/api-reference/miscellaneous/scalars/upload) \{#image\}

Represents an image file in a multipart request.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">UserAvatarUpdate</code></span>](/api-reference/users/objects/user-avatar-update)

Create a user avatar. Only for staff members. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec

Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
