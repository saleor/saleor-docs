---
api_reference: true
id: translatable-item
title: TranslatableItem
---

No description

```graphql
union TranslatableItem =
  | ProductTranslatableContent
  | CollectionTranslatableContent
  | CategoryTranslatableContent
  | AttributeTranslatableContent
  | AttributeValueTranslatableContent
  | ProductVariantTranslatableContent
  | PageTranslatableContent
  | ShippingMethodTranslatableContent
  | VoucherTranslatableContent
  | MenuItemTranslatableContent
  | PromotionTranslatableContent
  | PromotionRuleTranslatableContent
  | SaleTranslatableContent
```

### Possible types

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TranslatableItem</code>.<code class="gqlmd-mdx-entity-name">ProductTranslatableContent</code></span>](/api-reference/products/objects/product-translatable-content)

Represents product's original translatable fields and related translations.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TranslatableItem</code>.<code class="gqlmd-mdx-entity-name">CollectionTranslatableContent</code></span>](/api-reference/products/objects/collection-translatable-content)

Represents collection's original translatable fields and related translations.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TranslatableItem</code>.<code class="gqlmd-mdx-entity-name">CategoryTranslatableContent</code></span>](/api-reference/products/objects/category-translatable-content)

Represents category original translatable fields and related translations.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TranslatableItem</code>.<code class="gqlmd-mdx-entity-name">AttributeTranslatableContent</code></span>](/api-reference/attributes/objects/attribute-translatable-content)

Represents attribute's original translatable fields and related translations.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TranslatableItem</code>.<code class="gqlmd-mdx-entity-name">AttributeValueTranslatableContent</code></span>](/api-reference/attributes/objects/attribute-value-translatable-content)

Represents attribute value's original translatable fields and related translations.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TranslatableItem</code>.<code class="gqlmd-mdx-entity-name">ProductVariantTranslatableContent</code></span>](/api-reference/products/objects/product-variant-translatable-content)

Represents product variant's original translatable fields and related translations.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TranslatableItem</code>.<code class="gqlmd-mdx-entity-name">PageTranslatableContent</code></span>](/api-reference/pages/objects/page-translatable-content)

Represents page's original translatable fields and related translations.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TranslatableItem</code>.<code class="gqlmd-mdx-entity-name">ShippingMethodTranslatableContent</code></span>](/api-reference/shipping/objects/shipping-method-translatable-content)

Represents shipping method's original translatable fields and related translations.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TranslatableItem</code>.<code class="gqlmd-mdx-entity-name">VoucherTranslatableContent</code></span>](/api-reference/discounts/objects/voucher-translatable-content)

Represents voucher's original translatable fields and related translations.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TranslatableItem</code>.<code class="gqlmd-mdx-entity-name">MenuItemTranslatableContent</code></span>](/api-reference/menu/objects/menu-item-translatable-content)

Represents menu item's original translatable fields and related translations.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TranslatableItem</code>.<code class="gqlmd-mdx-entity-name">PromotionTranslatableContent</code></span>](/api-reference/discounts/objects/promotion-translatable-content)

Represents promotion's original translatable fields and related translations.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TranslatableItem</code>.<code class="gqlmd-mdx-entity-name">PromotionRuleTranslatableContent</code></span>](/api-reference/discounts/objects/promotion-rule-translatable-content)

Represents promotion rule's original translatable fields and related translations.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TranslatableItem</code>.<code class="gqlmd-mdx-entity-name">SaleTranslatableContent</code></span>](/api-reference/discounts/objects/sale-translatable-content)

Represents sale's original translatable fields and related translations.

DEPRECATED: this type will be removed. Use `PromotionTranslatableContent` instead.

### Returned By

[`translation`](/api-reference/miscellaneous/queries/translation) <mark class="gqlmd-mdx-badge">query</mark>

### Member Of

[`TranslatableItemEdge`](/api-reference/miscellaneous/objects/translatable-item-edge) <mark class="gqlmd-mdx-badge">object</mark>
