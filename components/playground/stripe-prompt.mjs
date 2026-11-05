// The prompt a reader copies into their coding agent to integrate the Stripe App.
// tests/stripe-prompt.test.mjs checks it against the Stripe App docs pages.

const gatewayId = "saleor.app.payment.stripe";

// What the storefront does after transactionProcess, by transactionEvent.type. The prefix is
// CHARGE_ or AUTHORIZATION_, depending on the channel's transaction flow and the payment method.
export const outcomes = {
  SUCCESS: "Payment is complete (AUTHORIZATION_SUCCESS: authorized, captured later from the Dashboard). Complete the checkout.",
  REQUEST: "Stripe is still processing the payment, which is normal for bank debits. Complete the checkout; the order shows the payment as pending until Stripe confirms it.",
  ACTION_REQUIRED: "The payment isn't finished, for example the customer abandoned a redirect or the payment failed. Don't complete the checkout. Let the customer pay again, starting from transactionInitialize.",
  FAILURE: "The app couldn't read the payment from Stripe, for example during a Stripe outage. This doesn't mean the payment failed: wait a moment and call transactionProcess again before showing an error.",
};

// Stripe test cards: https://docs.stripe.com/testing
const testCards = [
  { label: "succeeds", number: "4242 4242 4242 4242" },
  { label: "is declined", number: "4000 0000 0000 0002" },
  { label: "requires 3D Secure", number: "4000 0025 0000 3155" },
];

const docsUrl = "https://docs.saleor.io/developer/app-store/apps/stripe";
export const promptPages = { "storefront-integration": "Storefront integration", webhooks: "Request data shapes", "supported-payment-methods": "Supported payment methods", errors: "Errors" };

// paymentMethod values the app accepts in transactionInitialize `data`, as listed on the supported payment methods page.
export const promptMethods = ["card", "apple_pay", "google_pay", "link", "klarna", "paypal", "us_bank_account", "sepa_debit", "pay_by_bank", "mobilepay", "revolut_pay"];
// Codes in data.paymentIntent.errors, as listed on the webhooks page.
export const promptErrorCodes = ["ParseError", "UnsupportedPaymentMethodError", "StripeCardError", "StripeApiError"];

// The prompt walks through the API surface so the agent can start without fetching anything,
// and links the docs as the source of truth.
export const agentPrompt = `Integrate Stripe payments into this Saleor storefront's checkout using the Saleor Stripe App.

The docs below are the source of truth. Read them before writing code, and follow them if anything here disagrees:
${Object.entries(promptPages).map(([page, title]) => `- ${title}: ${docsUrl}/${page}.md`).join("\n")}

How it works:
- The storefront renders Stripe's Payment Element (@stripe/stripe-js, plus @stripe/react-stripe-js in React) and confirms the payment with Stripe.js. Saleor calls the Stripe App, and the app creates the PaymentIntent in Stripe. The storefront never calls Stripe's API with a secret key and never handles raw card data.
- The payment gateway ID is \`${gatewayId}\`. The flow is: paymentGatewayInitialize, transactionInitialize, stripe.confirmPayment, then transactionProcess and checkoutComplete on the page Stripe returns to.
- All calls below use the Saleor storefront GraphQL API and work for guests.

Build the payment step:
1. Check the app. Query the checkout's availablePaymentGateways { id } and offer Stripe only if \`${gatewayId}\` is listed.
2. Initialize the gateway. Call paymentGatewayInitialize(id: <checkout ID>, paymentGateways: { id: "${gatewayId}" }, amount: <checkout total>) and read gatewayConfigs[0].data.stripePublishableKey. Check gatewayConfigs[].errors and errors first.
3. Render the Payment Element. Call loadStripe(<publishable key>) once and create Elements in deferred mode: { mode: "payment", amount: <checkout total in the currency's smallest unit>, currency: <lowercase currency code> }. Convert the amount with a decimal library, and remember that some currencies have no minor unit. Update Elements when the total changes.
   - Don't set paymentMethodTypes. The app uses the payment methods enabled in the Stripe Dashboard.
4. Pay. When the customer submits:
   - Call elements.submit() and stop on error. Read the selected method from its selectedPaymentMethod. Link isn't returned there: read it from the Payment Element's onChange event (event.value.type) instead.
   - Call transactionInitialize(id: <checkout ID>, amount: <amount to pay>, paymentGateway: { id: "${gatewayId}", data: { "paymentIntent": { "paymentMethod": "<method>" } } }) and read transaction { id }, transactionEvent { type message }, data, and errors. \`data\` is untyped JSON and strictly validated: anything other than this shape fails with ParseError.
   - paymentMethod is one of: ${promptMethods.join(", ")}. Any other method fails with UnsupportedPaymentMethodError, so make sure only these are enabled in the Stripe Dashboard.
   - On success, transactionEvent.type is CHARGE_ACTION_REQUIRED or AUTHORIZATION_ACTION_REQUIRED and the client secret is in data.paymentIntent.stripeClientSecret.
   - On CHARGE_FAILURE or AUTHORIZATION_FAILURE, show an error from data.paymentIntent.errors and let the customer try again.
   - Never put the amount, currency, or lines in data. They come from Saleor.
5. Confirm. Call stripe.confirmPayment({ elements, clientSecret, confirmParams: { return_url } }). Put the checkout ID and the transaction ID in return_url, because the page reloads after a redirect and React state is lost. Stripe adds payment_intent_client_secret to the URL when it redirects back. If confirmPayment returns an error, Stripe didn't redirect: show error.message and let the customer try again.
6. Process on the return page. Call transactionProcess(id: <transaction ID>) and read transactionEvent { type message } and errors. It asks the app to read the PaymentIntent from Stripe, so the storefront doesn't have to wait for Stripe's webhook. Saleor ignores whichever of the two reports arrives second.
7. React to transactionEvent.type, which starts with CHARGE_ or AUTHORIZATION_:
${Object.entries(outcomes).map(([type, next]) => `   - *_${type}: ${next}`).join("\n")}
8. Complete. Call checkoutComplete(id: <checkout ID>) and show the order. Its errors mean the checkout isn't paid yet.

Idempotency:
- Saleor generates an idempotency key for each transactionInitialize, and the app passes it to Stripe. To make retries safe after a network error or timeout, generate your own key per payment attempt, pass it as transactionInitialize(idempotencyKey: <key>), and reuse it when retrying that attempt. Use a new key for a new attempt.

Errors:
- Branch on data.paymentIntent.errors[].code and errors[].code, never on messages, which can change. Treat unknown codes as a generic failure.
- Codes in data.paymentIntent.errors: ${promptErrorCodes.join(", ")}. Card declines during confirmPayment come from Stripe.js as error.type "card_error", not from Saleor.
- In live mode the app hides error details. Stripe test mode returns them in messages, which helps while building.

Verify:
- Connect the app to a Stripe test mode account, then pay in the browser with Stripe test cards (any future expiry date and any CVC): ${testCards.map(card => `${card.number} ${card.label}`).join(", ")}. See https://docs.stripe.com/testing for other methods.
- Check that the declined card shows Stripe's error and creates no order, and that the other two reach *_SUCCESS after transactionProcess, create an order, and show up in the Stripe Dashboard.

When you're done, tell me which files you changed and what you verified.`;
