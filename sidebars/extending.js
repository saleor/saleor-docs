import { chapterTitle, title } from "./utils";

export const extending = [
  chapterTitle("developer/extending/overview", "Extending", "cli"),

  title("Webhooks"),
  "developer/extending/webhooks/overview",
  "developer/extending/webhooks/creating",
  "developer/extending/webhooks/subscription-webhook-payloads",
  "developer/extending/webhooks/payload-signature",
  "developer/extending/webhooks/asynchronous-events",
  "developer/extending/webhooks/troubleshooting",

  title("Synchronous Events"),
  "developer/extending/webhooks/synchronous-events/overview",
  "developer/extending/webhooks/synchronous-events/shipping",
  "developer/extending/webhooks/synchronous-events/tax",
  "developer/extending/webhooks/synchronous-events/transaction",
  "developer/extending/webhooks/synchronous-events/stored-payment-method",
  "developer/extending/webhooks/synchronous-events/circuit-breakers",

  title("Security"),
  "developer/extending/webhooks/ip-addresses",

  title("Legacy Plugins"),
  "developer/extending/plugins/overview",
  "developer/extending/plugins/payment-gateways",

  title("Legacy Webhooks"),
  "developer/extending/webhooks/synchronous-events/payment",
];
