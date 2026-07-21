---
api_reference: true
id: file-upload
title: FileUpload
---

Upload a file. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec

Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.

```graphql
type FileUpload {
  uploadedFile: File
  uploadErrors: [UploadError!]! @deprecated
  errors: [UploadError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">FileUpload</code>.<code class="gqlmd-mdx-entity-name">uploadedFile</code></span>](#uploaded-file)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">File</code></span>](/api-reference/miscellaneous/objects/file) \{#uploaded-file\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">FileUpload</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[UploadError!]!</code></span>](/api-reference/miscellaneous/objects/upload-error) \{#errors\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">FileUpload</code>.<code class="gqlmd-mdx-entity-name">uploadErrors</code></span>](#upload-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[UploadError!]!</code></span>](/api-reference/miscellaneous/objects/upload-error) \{#upload-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`fileUpload`](/api-reference/miscellaneous/mutations/file-upload) <mark class="gqlmd-mdx-badge">mutation</mark>
