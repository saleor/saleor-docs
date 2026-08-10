---
api_reference: true
id: manifest
title: Manifest
---

The manifest definition.

```graphql
type Manifest {
  identifier: String!
  version: String!
  name: String!
  about: String
  permissions: [Permission!]
  appUrl: String
  configurationUrl: String @deprecated
  tokenTargetUrl: String
  dataPrivacy: String @deprecated
  dataPrivacyUrl: String
  homepageUrl: String
  supportUrl: String
  extensions: [AppManifestExtension!]!
  webhooks: [AppManifestWebhook!]!
  audience: String
  requiredSaleorVersion: AppManifestRequiredSaleorVersion
  author: String
  brand: AppManifestBrand
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Manifest</code>.<code class="gqlmd-mdx-entity-name">identifier</code></span>](#identifier)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#identifier\}

The identifier of the manifest for the app.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Manifest</code>.<code class="gqlmd-mdx-entity-name">version</code></span>](#version)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#version\}

The version of the manifest for the app.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Manifest</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

The name of the manifest for the app .

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Manifest</code>.<code class="gqlmd-mdx-entity-name">about</code></span>](#about)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#about\}

Description of the app displayed in the dashboard.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Manifest</code>.<code class="gqlmd-mdx-entity-name">permissions</code></span>](#permissions)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[Permission!]</code></span>](/api-reference/authentication/objects/permission) \{#permissions\}

The array permissions required for the app.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Manifest</code>.<code class="gqlmd-mdx-entity-name">appUrl</code></span>](#app-url)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#app-url\}

App website rendered in the dashboard.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Manifest</code>.<code class="gqlmd-mdx-entity-name">tokenTargetUrl</code></span>](#token-target-url)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#token-target-url\}

Endpoint used during process of app installation, [see installing an app.](https://docs.saleor.io/developer/extending/apps/installing-apps#installing-an-app)

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Manifest</code>.<code class="gqlmd-mdx-entity-name">dataPrivacyUrl</code></span>](#data-privacy-url)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#data-privacy-url\}

URL to the full privacy policy.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Manifest</code>.<code class="gqlmd-mdx-entity-name">homepageUrl</code></span>](#homepage-url)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#homepage-url\}

External URL to the app homepage.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Manifest</code>.<code class="gqlmd-mdx-entity-name">supportUrl</code></span>](#support-url)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#support-url\}

External URL to the page where app users can find support.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Manifest</code>.<code class="gqlmd-mdx-entity-name">extensions</code></span>](#extensions)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AppManifestExtension!]!</code></span>](/api-reference/apps/objects/app-manifest-extension) \{#extensions\}

List of extensions that will be mounted in Saleor's dashboard. For details, please [see the extension section.](https://docs.saleor.io/developer/extending/apps/extending-dashboard-with-apps#key-concepts)

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Manifest</code>.<code class="gqlmd-mdx-entity-name">webhooks</code></span>](#webhooks)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AppManifestWebhook!]!</code></span>](/api-reference/apps/objects/app-manifest-webhook) \{#webhooks\}

List of the app's webhooks.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Manifest</code>.<code class="gqlmd-mdx-entity-name">audience</code></span>](#audience)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#audience\}

The audience that will be included in all JWT tokens for the app.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Manifest</code>.<code class="gqlmd-mdx-entity-name">requiredSaleorVersion</code></span>](#required-saleor-version)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AppManifestRequiredSaleorVersion</code></span>](/api-reference/apps/objects/app-manifest-required-saleor-version) \{#required-saleor-version\}

Determines the app's required Saleor version as semver range.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Manifest</code>.<code class="gqlmd-mdx-entity-name">author</code></span>](#author)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#author\}

The App's author name.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Manifest</code>.<code class="gqlmd-mdx-entity-name">brand</code></span>](#brand)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AppManifestBrand</code></span>](/api-reference/apps/objects/app-manifest-brand) \{#brand\}

App's brand data.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Manifest</code>.<code class="gqlmd-mdx-entity-name">configurationUrl</code></span>](#configuration-url)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#configuration-url\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `appUrl` instead.

</span>
</fieldset>

URL to iframe with the configuration for the app.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Manifest</code>.<code class="gqlmd-mdx-entity-name">dataPrivacy</code></span>](#data-privacy)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#data-privacy\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `dataPrivacyUrl` instead.

</span>
</fieldset>

Description of the data privacy defined for this app.

</details>

### Member Of

[`AppFetchManifest`](/api-reference/apps/objects/app-fetch-manifest) <mark class="gqlmd-mdx-badge">object</mark>
