---
api_reference: true
id: webhook-event-type-async-enum
title: WebhookEventTypeAsyncEnum
---

Enum determining type of webhook.

```graphql
enum WebhookEventTypeAsyncEnum {
  ANY_EVENTS @deprecated
  ACCOUNT_CONFIRMATION_REQUESTED
  ACCOUNT_CHANGE_EMAIL_REQUESTED
  ACCOUNT_EMAIL_CHANGED
  ACCOUNT_SET_PASSWORD_REQUESTED
  ACCOUNT_CONFIRMED
  ACCOUNT_DELETE_REQUESTED
  ACCOUNT_DELETED
  ADDRESS_CREATED
  ADDRESS_UPDATED
  ADDRESS_DELETED
  APP_INSTALLED
  APP_UPDATED
  APP_DELETED
  APP_STATUS_CHANGED
  ATTRIBUTE_CREATED
  ATTRIBUTE_UPDATED
  ATTRIBUTE_DELETED
  ATTRIBUTE_VALUE_CREATED
  ATTRIBUTE_VALUE_UPDATED
  ATTRIBUTE_VALUE_DELETED
  CATEGORY_CREATED
  CATEGORY_UPDATED
  CATEGORY_DELETED
  CHANNEL_CREATED
  CHANNEL_UPDATED
  CHANNEL_DELETED
  CHANNEL_STATUS_CHANGED
  CHANNEL_METADATA_UPDATED
  GIFT_CARD_CREATED
  GIFT_CARD_UPDATED
  GIFT_CARD_DELETED
  GIFT_CARD_SENT
  GIFT_CARD_STATUS_CHANGED
  GIFT_CARD_METADATA_UPDATED
  GIFT_CARD_EXPORT_COMPLETED
  MENU_CREATED
  MENU_UPDATED
  MENU_DELETED
  MENU_ITEM_CREATED
  MENU_ITEM_UPDATED
  MENU_ITEM_DELETED
  ORDER_CREATED
  ORDER_CONFIRMED
  ORDER_PAID
  ORDER_FULLY_PAID
  ORDER_REFUNDED
  ORDER_FULLY_REFUNDED
  ORDER_UPDATED
  ORDER_CANCELLED
  ORDER_EXPIRED
  ORDER_FULFILLED
  ORDER_METADATA_UPDATED
  ORDER_BULK_CREATED
  FULFILLMENT_CREATED
  FULFILLMENT_CANCELED
  FULFILLMENT_APPROVED
  FULFILLMENT_METADATA_UPDATED
  FULFILLMENT_TRACKING_NUMBER_UPDATED
  DRAFT_ORDER_CREATED
  DRAFT_ORDER_UPDATED
  DRAFT_ORDER_DELETED
  SALE_CREATED
  SALE_UPDATED
  SALE_DELETED
  SALE_TOGGLE
  PROMOTION_CREATED
  PROMOTION_UPDATED
  PROMOTION_DELETED
  PROMOTION_STARTED
  PROMOTION_ENDED
  PROMOTION_RULE_CREATED
  PROMOTION_RULE_UPDATED
  PROMOTION_RULE_DELETED
  INVOICE_REQUESTED
  INVOICE_DELETED
  INVOICE_SENT
  CUSTOMER_CREATED
  CUSTOMER_UPDATED
  CUSTOMER_DELETED
  CUSTOMER_METADATA_UPDATED
  COLLECTION_CREATED
  COLLECTION_UPDATED
  COLLECTION_DELETED
  COLLECTION_METADATA_UPDATED
  PRODUCT_CREATED
  PRODUCT_UPDATED
  PRODUCT_DELETED
  PRODUCT_METADATA_UPDATED
  PRODUCT_EXPORT_COMPLETED
  PRODUCT_MEDIA_CREATED
  PRODUCT_MEDIA_UPDATED
  PRODUCT_MEDIA_DELETED
  PRODUCT_VARIANT_CREATED
  PRODUCT_VARIANT_UPDATED
  PRODUCT_VARIANT_DELETED
  PRODUCT_VARIANT_METADATA_UPDATED
  PRODUCT_VARIANT_OUT_OF_STOCK
  PRODUCT_VARIANT_BACK_IN_STOCK
  PRODUCT_VARIANT_STOCK_UPDATED
  PRODUCT_VARIANT_OUT_OF_STOCK_IN_CHANNEL
  PRODUCT_VARIANT_BACK_IN_STOCK_IN_CHANNEL
  PRODUCT_VARIANT_OUT_OF_STOCK_FOR_CLICK_AND_COLLECT
  PRODUCT_VARIANT_BACK_IN_STOCK_FOR_CLICK_AND_COLLECT
  PRODUCT_VARIANT_DISCOUNTED_PRICE_UPDATED
  CHECKOUT_CREATED
  CHECKOUT_UPDATED
  CHECKOUT_FULLY_AUTHORIZED
  CHECKOUT_FULLY_PAID
  CHECKOUT_METADATA_UPDATED
  NOTIFY_USER @deprecated
  PAGE_CREATED
  PAGE_UPDATED
  PAGE_DELETED
  PAGE_TYPE_CREATED
  PAGE_TYPE_UPDATED
  PAGE_TYPE_DELETED
  PERMISSION_GROUP_CREATED
  PERMISSION_GROUP_UPDATED
  PERMISSION_GROUP_DELETED
  SHIPPING_PRICE_CREATED
  SHIPPING_PRICE_UPDATED
  SHIPPING_PRICE_DELETED
  SHIPPING_ZONE_CREATED
  SHIPPING_ZONE_UPDATED
  SHIPPING_ZONE_DELETED
  SHIPPING_ZONE_METADATA_UPDATED
  STAFF_CREATED
  STAFF_UPDATED
  STAFF_DELETED
  STAFF_SET_PASSWORD_REQUESTED
  TRANSACTION_ITEM_METADATA_UPDATED
  TRANSLATION_CREATED
  TRANSLATION_UPDATED
  WAREHOUSE_CREATED
  WAREHOUSE_UPDATED
  WAREHOUSE_DELETED
  WAREHOUSE_METADATA_UPDATED
  VOUCHER_CREATED
  VOUCHER_UPDATED
  VOUCHER_DELETED
  VOUCHER_CODES_CREATED
  VOUCHER_CODES_DELETED
  VOUCHER_METADATA_UPDATED
  VOUCHER_CODE_EXPORT_COMPLETED
  OBSERVABILITY @deprecated
  THUMBNAIL_CREATED
  SHOP_METADATA_UPDATED
}
```

### Values

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">ACCOUNT_CONFIRMATION_REQUESTED</code></span>](#account-confirmation-requested) \{#account-confirmation-requested\}

An account confirmation is requested.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">ACCOUNT_CHANGE_EMAIL_REQUESTED</code></span>](#account-change-email-requested) \{#account-change-email-requested\}

An account email change is requested.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">ACCOUNT_EMAIL_CHANGED</code></span>](#account-email-changed) \{#account-email-changed\}

An account email was changed

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">ACCOUNT_SET_PASSWORD_REQUESTED</code></span>](#account-set-password-requested) \{#account-set-password-requested\}

Setting a new password for the account is requested.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">ACCOUNT_CONFIRMED</code></span>](#account-confirmed) \{#account-confirmed\}

An account is confirmed.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">ACCOUNT_DELETE_REQUESTED</code></span>](#account-delete-requested) \{#account-delete-requested\}

An account delete is requested.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">ACCOUNT_DELETED</code></span>](#account-deleted) \{#account-deleted\}

An account is deleted.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">ADDRESS_CREATED</code></span>](#address-created) \{#address-created\}

A new address created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">ADDRESS_UPDATED</code></span>](#address-updated) \{#address-updated\}

An address updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">ADDRESS_DELETED</code></span>](#address-deleted) \{#address-deleted\}

An address deleted.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">APP_INSTALLED</code></span>](#app-installed) \{#app-installed\}

A new app installed.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">APP_UPDATED</code></span>](#app-updated) \{#app-updated\}

An app updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">APP_DELETED</code></span>](#app-deleted) \{#app-deleted\}

An app deleted.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">APP_STATUS_CHANGED</code></span>](#app-status-changed) \{#app-status-changed\}

An app status is changed.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">ATTRIBUTE_CREATED</code></span>](#attribute-created) \{#attribute-created\}

A new attribute is created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">ATTRIBUTE_UPDATED</code></span>](#attribute-updated) \{#attribute-updated\}

An attribute is updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">ATTRIBUTE_DELETED</code></span>](#attribute-deleted) \{#attribute-deleted\}

An attribute is deleted.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">ATTRIBUTE_VALUE_CREATED</code></span>](#attribute-value-created) \{#attribute-value-created\}

A new attribute value is created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">ATTRIBUTE_VALUE_UPDATED</code></span>](#attribute-value-updated) \{#attribute-value-updated\}

An attribute value is updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">ATTRIBUTE_VALUE_DELETED</code></span>](#attribute-value-deleted) \{#attribute-value-deleted\}

An attribute value is deleted.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">CATEGORY_CREATED</code></span>](#category-created) \{#category-created\}

A new category created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">CATEGORY_UPDATED</code></span>](#category-updated) \{#category-updated\}

A category is updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">CATEGORY_DELETED</code></span>](#category-deleted) \{#category-deleted\}

A category is deleted.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">CHANNEL_CREATED</code></span>](#channel-created) \{#channel-created\}

A new channel created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">CHANNEL_UPDATED</code></span>](#channel-updated) \{#channel-updated\}

A channel is updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">CHANNEL_DELETED</code></span>](#channel-deleted) \{#channel-deleted\}

A channel is deleted.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">CHANNEL_STATUS_CHANGED</code></span>](#channel-status-changed) \{#channel-status-changed\}

A channel status is changed.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">CHANNEL_METADATA_UPDATED</code></span>](#channel-metadata-updated) \{#channel-metadata-updated\}

A channel metadata is updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">GIFT_CARD_CREATED</code></span>](#gift-card-created) \{#gift-card-created\}

A new gift card created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">GIFT_CARD_UPDATED</code></span>](#gift-card-updated) \{#gift-card-updated\}

A gift card is updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">GIFT_CARD_DELETED</code></span>](#gift-card-deleted) \{#gift-card-deleted\}

A gift card is deleted.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">GIFT_CARD_SENT</code></span>](#gift-card-sent) \{#gift-card-sent\}

A gift card has been sent.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">GIFT_CARD_STATUS_CHANGED</code></span>](#gift-card-status-changed) \{#gift-card-status-changed\}

A gift card status is changed.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">GIFT_CARD_METADATA_UPDATED</code></span>](#gift-card-metadata-updated) \{#gift-card-metadata-updated\}

A gift card metadata is updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">GIFT_CARD_EXPORT_COMPLETED</code></span>](#gift-card-export-completed) \{#gift-card-export-completed\}

A gift card export is completed.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">MENU_CREATED</code></span>](#menu-created) \{#menu-created\}

A new menu created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">MENU_UPDATED</code></span>](#menu-updated) \{#menu-updated\}

A menu is updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">MENU_DELETED</code></span>](#menu-deleted) \{#menu-deleted\}

A menu is deleted.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">MENU_ITEM_CREATED</code></span>](#menu-item-created) \{#menu-item-created\}

A new menu item created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">MENU_ITEM_UPDATED</code></span>](#menu-item-updated) \{#menu-item-updated\}

A menu item is updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">MENU_ITEM_DELETED</code></span>](#menu-item-deleted) \{#menu-item-deleted\}

A menu item is deleted.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">ORDER_CREATED</code></span>](#order-created) \{#order-created\}

A new order is placed.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">ORDER_CONFIRMED</code></span>](#order-confirmed) \{#order-confirmed\}

An order is confirmed (status change unconfirmed -&#x003E; unfulfilled) by a staff user using the OrderConfirm mutation. It also triggers when the user completes the checkout and the shop setting `automatically_confirm_all_new_orders` is enabled.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">ORDER_PAID</code></span>](#order-paid) \{#order-paid\}

Payment has been made. The order may be partially or fully paid.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">ORDER_FULLY_PAID</code></span>](#order-fully-paid) \{#order-fully-paid\}

Payment is made and an order is fully paid.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">ORDER_REFUNDED</code></span>](#order-refunded) \{#order-refunded\}

The order received a refund. The order may be partially or fully refunded.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">ORDER_FULLY_REFUNDED</code></span>](#order-fully-refunded) \{#order-fully-refunded\}

The order is fully refunded.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">ORDER_UPDATED</code></span>](#order-updated) \{#order-updated\}

An order is updated; triggered for all changes related to an order; covers all other order webhooks, except for ORDER_CREATED.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">ORDER_CANCELLED</code></span>](#order-cancelled) \{#order-cancelled\}

An order is cancelled.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">ORDER_EXPIRED</code></span>](#order-expired) \{#order-expired\}

An order is expired.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">ORDER_FULFILLED</code></span>](#order-fulfilled) \{#order-fulfilled\}

An order is fulfilled.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">ORDER_METADATA_UPDATED</code></span>](#order-metadata-updated) \{#order-metadata-updated\}

An order metadata is updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">ORDER_BULK_CREATED</code></span>](#order-bulk-created) \{#order-bulk-created\}

Orders are imported.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">FULFILLMENT_CREATED</code></span>](#fulfillment-created) \{#fulfillment-created\}

A new fulfillment is created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">FULFILLMENT_CANCELED</code></span>](#fulfillment-canceled) \{#fulfillment-canceled\}

A fulfillment is cancelled.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">FULFILLMENT_APPROVED</code></span>](#fulfillment-approved) \{#fulfillment-approved\}

A fulfillment is approved.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">FULFILLMENT_METADATA_UPDATED</code></span>](#fulfillment-metadata-updated) \{#fulfillment-metadata-updated\}

A fulfillment metadata is updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">FULFILLMENT_TRACKING_NUMBER_UPDATED</code></span>](#fulfillment-tracking-number-updated) \{#fulfillment-tracking-number-updated\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">DRAFT_ORDER_CREATED</code></span>](#draft-order-created) \{#draft-order-created\}

A draft order is created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">DRAFT_ORDER_UPDATED</code></span>](#draft-order-updated) \{#draft-order-updated\}

A draft order is updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">DRAFT_ORDER_DELETED</code></span>](#draft-order-deleted) \{#draft-order-deleted\}

A draft order is deleted.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">SALE_CREATED</code></span>](#sale-created) \{#sale-created\}

A sale is created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">SALE_UPDATED</code></span>](#sale-updated) \{#sale-updated\}

A sale is updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">SALE_DELETED</code></span>](#sale-deleted) \{#sale-deleted\}

A sale is deleted.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">SALE_TOGGLE</code></span>](#sale-toggle) \{#sale-toggle\}

A sale is activated or deactivated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">PROMOTION_CREATED</code></span>](#promotion-created) \{#promotion-created\}

A promotion is created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">PROMOTION_UPDATED</code></span>](#promotion-updated) \{#promotion-updated\}

A promotion is updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">PROMOTION_DELETED</code></span>](#promotion-deleted) \{#promotion-deleted\}

A promotion is deleted.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">PROMOTION_STARTED</code></span>](#promotion-started) \{#promotion-started\}

A promotion is activated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">PROMOTION_ENDED</code></span>](#promotion-ended) \{#promotion-ended\}

A promotion is deactivated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">PROMOTION_RULE_CREATED</code></span>](#promotion-rule-created) \{#promotion-rule-created\}

A promotion rule is created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">PROMOTION_RULE_UPDATED</code></span>](#promotion-rule-updated) \{#promotion-rule-updated\}

A promotion rule is updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">PROMOTION_RULE_DELETED</code></span>](#promotion-rule-deleted) \{#promotion-rule-deleted\}

A promotion rule is deleted.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">INVOICE_REQUESTED</code></span>](#invoice-requested) \{#invoice-requested\}

An invoice for order requested.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">INVOICE_DELETED</code></span>](#invoice-deleted) \{#invoice-deleted\}

An invoice is deleted.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">INVOICE_SENT</code></span>](#invoice-sent) \{#invoice-sent\}

Invoice has been sent.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">CUSTOMER_CREATED</code></span>](#customer-created) \{#customer-created\}

A new customer account is created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">CUSTOMER_UPDATED</code></span>](#customer-updated) \{#customer-updated\}

A customer account is updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">CUSTOMER_DELETED</code></span>](#customer-deleted) \{#customer-deleted\}

A customer account is deleted.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">CUSTOMER_METADATA_UPDATED</code></span>](#customer-metadata-updated) \{#customer-metadata-updated\}

A customer account metadata is updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">COLLECTION_CREATED</code></span>](#collection-created) \{#collection-created\}

A new collection is created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">COLLECTION_UPDATED</code></span>](#collection-updated) \{#collection-updated\}

A collection is updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">COLLECTION_DELETED</code></span>](#collection-deleted) \{#collection-deleted\}

A collection is deleted.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">COLLECTION_METADATA_UPDATED</code></span>](#collection-metadata-updated) \{#collection-metadata-updated\}

A collection metadata is updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">PRODUCT_CREATED</code></span>](#product-created) \{#product-created\}

A new product is created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">PRODUCT_UPDATED</code></span>](#product-updated) \{#product-updated\}

A product is updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">PRODUCT_DELETED</code></span>](#product-deleted) \{#product-deleted\}

A product is deleted.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">PRODUCT_METADATA_UPDATED</code></span>](#product-metadata-updated) \{#product-metadata-updated\}

A product metadata is updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">PRODUCT_EXPORT_COMPLETED</code></span>](#product-export-completed) \{#product-export-completed\}

A product export is completed.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">PRODUCT_MEDIA_CREATED</code></span>](#product-media-created) \{#product-media-created\}

A new product media is created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">PRODUCT_MEDIA_UPDATED</code></span>](#product-media-updated) \{#product-media-updated\}

A product media is updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">PRODUCT_MEDIA_DELETED</code></span>](#product-media-deleted) \{#product-media-deleted\}

A product media is deleted.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">PRODUCT_VARIANT_CREATED</code></span>](#product-variant-created) \{#product-variant-created\}

A new product variant is created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">PRODUCT_VARIANT_UPDATED</code></span>](#product-variant-updated) \{#product-variant-updated\}

A product variant is updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">PRODUCT_VARIANT_DELETED</code></span>](#product-variant-deleted) \{#product-variant-deleted\}

A product variant is deleted. Warning: this event will not be executed when parent product has been deleted. Check PRODUCT_DELETED.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">PRODUCT_VARIANT_METADATA_UPDATED</code></span>](#product-variant-metadata-updated) \{#product-variant-metadata-updated\}

A product variant metadata is updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">PRODUCT_VARIANT_OUT_OF_STOCK</code></span>](#product-variant-out-of-stock) \{#product-variant-out-of-stock\}

A product variant is out of stock.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">PRODUCT_VARIANT_BACK_IN_STOCK</code></span>](#product-variant-back-in-stock) \{#product-variant-back-in-stock\}

A product variant is back in stock.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">PRODUCT_VARIANT_STOCK_UPDATED</code></span>](#product-variant-stock-updated) \{#product-variant-stock-updated\}

A product variant stock is updated

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">PRODUCT_VARIANT_OUT_OF_STOCK_IN_CHANNEL</code></span>](#product-variant-out-of-stock-in-channel) \{#product-variant-out-of-stock-in-channel\}

A product variant becomes out of stock across all non click-and-collect warehouses in a channel.

Note: Only triggered when the `useLegacyShippingZoneStockAvailability` shop setting is disabled.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">PRODUCT_VARIANT_BACK_IN_STOCK_IN_CHANNEL</code></span>](#product-variant-back-in-stock-in-channel) \{#product-variant-back-in-stock-in-channel\}

A product variant becomes available again across non click-and-collect warehouses in a channel.

Note: Only triggered when the `useLegacyShippingZoneStockAvailability` shop setting is disabled.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">PRODUCT_VARIANT_OUT_OF_STOCK_FOR_CLICK_AND_COLLECT</code></span>](#product-variant-out-of-stock-for-click-and-collect) \{#product-variant-out-of-stock-for-click-and-collect\}

A product variant becomes out of stock across all click-and-collect warehouses in a channel.

Note: Only triggered when the `useLegacyShippingZoneStockAvailability` shop setting is disabled.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">PRODUCT_VARIANT_BACK_IN_STOCK_FOR_CLICK_AND_COLLECT</code></span>](#product-variant-back-in-stock-for-click-and-collect) \{#product-variant-back-in-stock-for-click-and-collect\}

A product variant becomes available again across click-and-collect warehouses in a channel.

Note: Only triggered when the `useLegacyShippingZoneStockAvailability` shop setting is disabled.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">PRODUCT_VARIANT_DISCOUNTED_PRICE_UPDATED</code></span>](#product-variant-discounted-price-updated) \{#product-variant-discounted-price-updated\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">CHECKOUT_CREATED</code></span>](#checkout-created) \{#checkout-created\}

A new checkout is created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">CHECKOUT_UPDATED</code></span>](#checkout-updated) \{#checkout-updated\}

A checkout is updated. It also triggers all updates related to the checkout.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">CHECKOUT_FULLY_AUTHORIZED</code></span>](#checkout-fully-authorized) \{#checkout-fully-authorized\}

A checkout was fully authorized (its `authorizeStatus` is `FULL`).

This event is emitted only for checkouts whose payments are processed through the Transaction API.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">CHECKOUT_FULLY_PAID</code></span>](#checkout-fully-paid) \{#checkout-fully-paid\}

A checkout was fully paid (its `chargeStatus` is `FULL` or `OVERCHARGED`). This event is not sent if payments are only authorized but not fully charged.

This event is emitted only for checkouts whose payments are processed through the Transaction API.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">CHECKOUT_METADATA_UPDATED</code></span>](#checkout-metadata-updated) \{#checkout-metadata-updated\}

A checkout metadata is updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">PAGE_CREATED</code></span>](#page-created) \{#page-created\}

A new page is created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">PAGE_UPDATED</code></span>](#page-updated) \{#page-updated\}

A page is updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">PAGE_DELETED</code></span>](#page-deleted) \{#page-deleted\}

A page is deleted.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">PAGE_TYPE_CREATED</code></span>](#page-type-created) \{#page-type-created\}

A new page type is created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">PAGE_TYPE_UPDATED</code></span>](#page-type-updated) \{#page-type-updated\}

A page type is updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">PAGE_TYPE_DELETED</code></span>](#page-type-deleted) \{#page-type-deleted\}

A page type is deleted.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">PERMISSION_GROUP_CREATED</code></span>](#permission-group-created) \{#permission-group-created\}

A new permission group is created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">PERMISSION_GROUP_UPDATED</code></span>](#permission-group-updated) \{#permission-group-updated\}

A permission group is updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">PERMISSION_GROUP_DELETED</code></span>](#permission-group-deleted) \{#permission-group-deleted\}

A permission group is deleted.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">SHIPPING_PRICE_CREATED</code></span>](#shipping-price-created) \{#shipping-price-created\}

A new shipping price is created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">SHIPPING_PRICE_UPDATED</code></span>](#shipping-price-updated) \{#shipping-price-updated\}

A shipping price is updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">SHIPPING_PRICE_DELETED</code></span>](#shipping-price-deleted) \{#shipping-price-deleted\}

A shipping price is deleted.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">SHIPPING_ZONE_CREATED</code></span>](#shipping-zone-created) \{#shipping-zone-created\}

A new shipping zone is created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">SHIPPING_ZONE_UPDATED</code></span>](#shipping-zone-updated) \{#shipping-zone-updated\}

A shipping zone is updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">SHIPPING_ZONE_DELETED</code></span>](#shipping-zone-deleted) \{#shipping-zone-deleted\}

A shipping zone is deleted.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">SHIPPING_ZONE_METADATA_UPDATED</code></span>](#shipping-zone-metadata-updated) \{#shipping-zone-metadata-updated\}

A shipping zone metadata is updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">STAFF_CREATED</code></span>](#staff-created) \{#staff-created\}

A new staff user is created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">STAFF_UPDATED</code></span>](#staff-updated) \{#staff-updated\}

A staff user is updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">STAFF_DELETED</code></span>](#staff-deleted) \{#staff-deleted\}

A staff user is deleted.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">STAFF_SET_PASSWORD_REQUESTED</code></span>](#staff-set-password-requested) \{#staff-set-password-requested\}

Setting a new password for the staff account is requested.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">TRANSACTION_ITEM_METADATA_UPDATED</code></span>](#transaction-item-metadata-updated) \{#transaction-item-metadata-updated\}

Transaction item metadata is updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">TRANSLATION_CREATED</code></span>](#translation-created) \{#translation-created\}

A new translation is created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">TRANSLATION_UPDATED</code></span>](#translation-updated) \{#translation-updated\}

A translation is updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">WAREHOUSE_CREATED</code></span>](#warehouse-created) \{#warehouse-created\}

A new warehouse created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">WAREHOUSE_UPDATED</code></span>](#warehouse-updated) \{#warehouse-updated\}

A warehouse is updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">WAREHOUSE_DELETED</code></span>](#warehouse-deleted) \{#warehouse-deleted\}

A warehouse is deleted.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">WAREHOUSE_METADATA_UPDATED</code></span>](#warehouse-metadata-updated) \{#warehouse-metadata-updated\}

A warehouse metadata is updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">VOUCHER_CREATED</code></span>](#voucher-created) \{#voucher-created\}

A new voucher created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">VOUCHER_UPDATED</code></span>](#voucher-updated) \{#voucher-updated\}

A voucher is updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">VOUCHER_DELETED</code></span>](#voucher-deleted) \{#voucher-deleted\}

A voucher is deleted.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">VOUCHER_CODES_CREATED</code></span>](#voucher-codes-created) \{#voucher-codes-created\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">VOUCHER_CODES_DELETED</code></span>](#voucher-codes-deleted) \{#voucher-codes-deleted\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">VOUCHER_METADATA_UPDATED</code></span>](#voucher-metadata-updated) \{#voucher-metadata-updated\}

A voucher metadata is updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">VOUCHER_CODE_EXPORT_COMPLETED</code></span>](#voucher-code-export-completed) \{#voucher-code-export-completed\}

A voucher code export is completed.

Added in Saleor 3.18.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">THUMBNAIL_CREATED</code></span>](#thumbnail-created) \{#thumbnail-created\}

A thumbnail is created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">SHOP_METADATA_UPDATED</code></span>](#shop-metadata-updated) \{#shop-metadata-updated\}

Shop metadata is updated.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">ANY_EVENTS</code></span>](#any-events) \{#any-events\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

No longer supported

</span>
</fieldset>

All the events.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">NOTIFY_USER</code></span>](#notify-user) \{#notify-user\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

See the docs for more details about migrating from NOTIFY_USER to other events: https://docs.saleor.io/upgrade-guides/core/3-16-to-3-17#migrating-from-notify&#x005F;user

</span>
</fieldset>

User notification triggered.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeAsyncEnum</code>.<code class="gqlmd-mdx-entity-name">OBSERVABILITY</code></span>](#observability) \{#observability\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

The observability feature is no longer supported. This event will be removed in Saleor 3.24.

</span>
</fieldset>

An observability event is created.

</details>

### Member Of

[`AppManifestWebhook`](/api-reference/apps/objects/app-manifest-webhook) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`WebhookCreateInput`](/api-reference/webhooks/inputs/webhook-create-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`WebhookEventAsync`](/api-reference/webhooks/objects/webhook-event-async) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`webhookEventsInfo`](/api-reference/miscellaneous/directives/webhook-events-info) <mark class="gqlmd-mdx-badge">directive</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`WebhookUpdateInput`](/api-reference/webhooks/inputs/webhook-update-input) <mark class="gqlmd-mdx-badge">input</mark>
