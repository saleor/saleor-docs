// The prompt a reader copies into their coding agent to integrate the Square App.
// tests/square-prompt.test.mjs checks it against the Square App docs pages.
import { dataSchemas } from "../data-schemas.mjs";

const gatewayId = "saleor.app.square";
const dataVersion = "saleor.app.square.v1";

// What the storefront does after transactionInitialize, by transactionEvent.type.
export const outcomes = {
  CHARGE_SUCCESS: "Payment is complete. Complete the checkout.",
  CHARGE_REQUEST: "Square accepted the payment but hasn't completed it yet. Wait and re-read the checkout before completing it. Don't start a new payment.",
  CHARGE_ACTION_REQUIRED: "The outcome is unknown (data.square.pending is true). Retry with the same idempotency key, or wait. Don't let the customer start a new payment.",
  CHARGE_FAILURE: "Show the error from data.square.errors and let the customer try again with a new idempotency key.",
  AUTHORIZATION_SUCCESS: "A gift card covered part of the total. Pay data.square.remainingAmount with another method, a new idempotency key, and giftCardRemainder: true.",
};

// Square sandbox test tokens: https://developer.squareup.com/docs/devtools/sandbox/payments
// `code` is what the app returns in data.square.errors, checked against a Square sandbox.
export const testTokens = [
  { label: "Card approved", sourceId: "cnon:card-nonce-ok" },
  { label: "Card declined", sourceId: "cnon:card-nonce-declined", code: "GENERIC_DECLINE" },
  { label: "Wrong CVV", sourceId: "cnon:card-nonce-rejected-cvv", code: "CVV_FAILURE" },
];

const docsUrl = "https://docs.saleor.io/developer/app-store/apps/square";
export const promptPages = { "storefront-integration": "Storefront integration", webhooks: "Request data shapes", "supported-payment-methods": "Supported payment methods", errors: "Errors" };

// Methods the app accepts in transactionInitialize `data`, as documented on the webhooks page.
export const promptMethods = ["card", "apple-pay", "cash-app-pay", "afterpay-clearpay", "gift-card", "saved-card"];
// Error codes the storefront should branch on. Each one is listed on the errors page.
export const promptErrorCodes = ["PARSE_ERROR", "MISSING_CONFIG", "SQUARE_PAYMENT_RECOVERY_PENDING", "SQUARE_ORDER_TOTAL_MISMATCH",
  "SQUARE_GIFT_CARD_ALREADY_AUTHORIZED", "SQUARE_GIFT_CARD_REMAINDER_MARKER_REQUIRED", "SQUARE_STORED_PAYMENT_METHOD_NOT_FOUND"];

// The prompt walks through the API surface so the agent can start without fetching anything,
// and links the docs as the source of truth.
export const agentPrompt = `Integrate Square payments into this Saleor storefront's checkout using the Saleor Square App.

The docs below are the source of truth. Read them before writing code, and follow them if anything here disagrees:
${Object.entries(promptPages).map(([page, title]) => `- ${title}: ${docsUrl}/${page}.md`).join("\n")}

How it works:
- The storefront renders the Square Web Payments SDK, gets a one-time token from it, and sends the token to Saleor. Saleor calls the Square App, and the app calls Square. The storefront never calls Square's API and never handles secrets or raw card data.
- The payment gateway ID is \`${gatewayId}\`. Square charges during transactionInitialize. There's no transactionProcess step.
- All calls below use the Saleor storefront GraphQL API. Saved cards need a logged-in customer; everything else works for guests.

Build the payment step:
1. Check the app. Query the checkout's availablePaymentGateways { id } and offer Square only if \`${gatewayId}\` is listed.
2. Initialize the gateway. Call paymentGatewayInitialize(id: <checkout ID>, paymentGateways: { id: "${gatewayId}" }, amount: <checkout total>) and read gatewayConfigs[0].data. Check gatewayConfigs[].errors and errors first.
   - square.environment is "sandbox" or "production". Load https://sandbox.web.squarecdn.com/v1/square.js or https://web.squarecdn.com/v1/square.js to match.
   - Create the SDK with Square.payments(square.applicationId, square.locationId). Wallets also need square.countryCode for their payment request.
   - methods lists what to offer, from: ${promptMethods.join(", ")}. Render only these, and only if the SDK initializes them.
3. Pay. Tokenize, then call transactionInitialize(id: <checkout ID>, amount: <amount to pay>, idempotencyKey: <key>, paymentGateway: { id: "${gatewayId}", data: <data> }) and read transaction { id }, transactionEvent { type message }, data, and errors. \`data\` is untyped JSON and strictly validated: unknown fields, a wrong version, or an unsupported method fail with PARSE_ERROR. The app publishes a JSON Schema for it at ${dataSchemas.square.transactionInitialize}. Use it to type data or check it in tests.
   - Card, Apple Pay, Cash App Pay, Afterpay/Clearpay: { "version": "${dataVersion}", "method": "card" | "apple-pay" | "cash-app-pay" | "afterpay-clearpay", "sourceId": "<token>" }, plus "verificationToken" if you run buyer verification separately.
   - Square gift card: { "version": "${dataVersion}", "method": "gift-card", "sourceId": "<token>" }, with the full amount due.
   - Saved card: { "version": "${dataVersion}", "method": "saved-card", "paymentMethodId": "<storedPaymentMethods id>" }. No tokenizing.
   - Never put the amount, currency, or lines in data. They come from Saleor.
4. React to transactionEvent.type:
${Object.entries(outcomes).map(([type, next]) => `   - ${type}: ${next}`).join("\n")}
5. Complete. Call checkoutComplete(id: <checkout ID>) only when the checkout is fully paid. After a gift card or a pending result, re-read the checkout first.

Idempotency:
- Generate an idempotency key when the customer starts a payment attempt, and store it with the checkout.
- Reuse it for every retry of that attempt, including network errors, timeouts, CHARGE_ACTION_REQUIRED, and CHARGE_REQUEST. While an attempt is unresolved, a new key is rejected with SQUARE_PAYMENT_RECOVERY_PENDING.
- Use a new key only after CHARGE_FAILURE, or for the payment that covers a gift card remainder.

Gift card remainders:
- After AUTHORIZATION_SUCCESS, pay data.square.remainingAmount with another method, a new idempotency key, and "giftCardRemainder": true in data. Without the flag, the app rejects it with SQUARE_GIFT_CARD_REMAINDER_MARKER_REQUIRED.
- Square cancels the gift card authorization if the rest isn't paid within 30 minutes, so show the customer the time left. Only one gift card per checkout.

Errors:
- Branch on data.square.errors[].code and errors[].code, never on messages, which can change. Treat unknown codes as a generic failure.
- Codes to handle: ${promptErrorCodes.join(", ")}. Declines carry Square's own code, such as ${testTokens.filter(token => token.code).map(token => token.code).join(" or ")}.

Verify:
- Against a Square sandbox connection, send these test tokens as sourceId with method "card", no card form needed: ${testTokens.map(token => `${token.sourceId} (${token.label}${token.code ? `, returns ${token.code}` : ""})`).join(", ")}.
- Then pay once in the browser with the SDK in sandbox, and confirm the order is created.

When you're done, tell me which files you changed and what you verified.`;
