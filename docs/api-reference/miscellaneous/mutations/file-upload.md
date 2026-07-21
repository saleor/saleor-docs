---
api_reference: true
id: file-upload
title: fileUpload
---

Upload a file. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec

Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.

```graphql
fileUpload(
  file: Upload!
): FileUpload
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">fileUpload</code>.<code class="gqlmd-mdx-entity-name">file</code></span>](#file)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Upload!</code></span>](/api-reference/miscellaneous/scalars/upload) \{#file\}

Represents a file in a multipart request.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">FileUpload</code></span>](/api-reference/miscellaneous/objects/file-upload)

Upload a file. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec

Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
