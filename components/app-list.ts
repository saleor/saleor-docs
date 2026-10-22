export const apps = [
  ["Adyen", "adyen/overview", "adyen"],
  ["AvaTax", "avatax/overview", "avatax"],
  ["CMS", "cms", "cms-hub"],
  ["Product Feed", "product-feed", "app-products-feed"],
  ["Pulse", "pulse/overview", "pulse"],
  ["Search", "search", "search-hub"],
  ["Customer Emails", "customer-emails/overview", "notification-hub"],
  ["SMTP", "smtp/overview", "notification-hub"],
  ["Twilio Segment", "segment/overview", "segment"],
  ["Stripe", "stripe/overview", "app-payment-stripe"],
];
export const appUrl = (route: string) =>
  `/developer/app-store/apps/${route}`;
