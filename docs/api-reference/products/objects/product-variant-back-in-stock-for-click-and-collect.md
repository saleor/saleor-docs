---
api_reference: true
id: product-variant-back-in-stock-for-click-and-collect
title: ProductVariantBackInStockForClickAndCollect
---

Event sent when a product variant becomes available again across click-and-collect warehouses in a channel.

Note: Only triggered when the `useLegacyShippingZoneStockAvailability` shop setting is disabled.

Added in Saleor 3.23.

```graphql
type ProductVariantBackInStockForClickAndCollect implements Event {
  issuedAt: DateTime
  version: String
  issuingPrincipal: IssuingPrincipal
  recipient: App
  productVariant: ProductVariant!
  channel: Channel!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantBackInStockForClickAndCollect</code>.<code class="gqlmd-mdx-entity-name">issuedAt</code></span>](#issued-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#issued-at\}

Time of the event.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantBackInStockForClickAndCollect</code>.<code class="gqlmd-mdx-entity-name">version</code></span>](#version)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#version\}

Saleor version that triggered the event.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantBackInStockForClickAndCollect</code>.<code class="gqlmd-mdx-entity-name">issuingPrincipal</code></span>](#issuing-principal)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">IssuingPrincipal</code></span>](/api-reference/miscellaneous/unions/issuing-principal) \{#issuing-principal\}

The user or application that triggered the event.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantBackInStockForClickAndCollect</code>.<code class="gqlmd-mdx-entity-name">recipient</code></span>](#recipient)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">App</code></span>](/api-reference/apps/objects/app) \{#recipient\}

The application receiving the webhook.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantBackInStockForClickAndCollect</code>.<code class="gqlmd-mdx-entity-name">productVariant</code></span>](#product-variant)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductVariant!</code></span>](/api-reference/products/objects/product-variant) \{#product-variant\}

The product variant the event relates to.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantBackInStockForClickAndCollect</code>.<code class="gqlmd-mdx-entity-name">channel</code></span>](#channel)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Channel!</code></span>](/api-reference/channels/objects/channel) \{#channel\}

The channel the stock availability changed in.

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Event</code></span>](/api-reference/miscellaneous/interfaces/event)

### Returned By

[`productVariantBackInStockForClickAndCollect`](/api-reference/products/subscriptions/product-variant-back-in-stock-for-click-and-collect) <mark class="gqlmd-mdx-badge">subscription</mark>
