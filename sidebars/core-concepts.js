import { chapterTitle, hr, title } from "./utils";

export const coreConcepts = [
  chapterTitle("developer/index", "Core concepts", "guides"),

  title("Channels"),
  "developer/channels/overview",
  "developer/channels/configuration",
  "developer/channels/lifecycle",
  "developer/channels/troubleshooting",
  "developer/channels/api",

  title("Products"),
  "developer/products/overview",
  "developer/products/configuration",
  "developer/products/lifecycle",
  "developer/products/troubleshooting",
  "developer/products/cookbook",
  "developer/products/api",

  title("Attributes"),
  "developer/attributes/overview",
  "developer/attributes/configuration",
  "developer/attributes/lifecycle",
  "developer/attributes/api",

  title("Checkout"),
  "developer/checkout/overview",
  "developer/checkout/lines",
  "developer/checkout/address",
  "developer/checkout/problems",
  "developer/checkout/finalizing",
  "developer/checkout/lifecycle",
  "developer/checkout/troubleshooting",

  title("Orders"),
  "developer/checkout/order-status",
  "developer/checkout/order-expiration",
  "developer/checkout/order-to-checkout",

  title("Payments"),
  "developer/payments/overview",
  "developer/payments/payment-apps",
  "developer/payments/transactions",
  "developer/payments/lifecycle",
  "developer/payments/refunds",
  "developer/payments/stored-payments",

  title("Stock"),
  "developer/checkout/stock",
  "developer/stock-allocation",

  title("Discounts"),
  "developer/discounts/overview",
  "developer/discounts/promotions",
  "developer/discounts/vouchers",
  "developer/discounts/sales",

  title("Miscellaneous"),

  "developer/gift-cards",
  "developer/address",
  "developer/users",
  "developer/permissions",
  "developer/taxes",
  "developer/thumbnails",

  title("Importing"),
  "developer/bulks/bulk-orders",
  "developer/bulks/bulk-attributes",
  "developer/bulks/error-policy",

  title("Exporting"),
  "developer/export/export-gift-cards",
  "developer/export/export-overview",
  "developer/export/export-products",
  "developer/export/export-voucher-codes",
];
