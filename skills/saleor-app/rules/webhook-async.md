# Async Webhooks

Async webhooks fire after Saleor processes a request. They don't affect API response time. Use for: order notifications, search indexing, warehouse sync, cache invalidation.

> **Docs**: [Async Events](https://docs.saleor.io/developer/extending/webhooks/asynchronous-events)

---

## Protocol

```
Saleor (after processing) → POST https://my-app.com/api/webhooks/order-created

Headers:
  saleor-event: order_created
  saleor-domain: my-shop.saleor.cloud
  saleor-api-url: https://api.saleor.cloud/graphql/
  saleor-signature: <JWS compact>
  saleor-schema-version: 3.20 (optional)
  content-type: application/json

Body: JSON shaped by subscription query

Expected response: HTTP 200 (body ignored)
```

### Retry Policy

- Max 5 attempts
- Exponential backoff: `10 * 2^attempt` seconds
- Retries on: unreachable, timeout, 5xx
- No retry on: 3xx, 4xx

### Timeout

20 seconds including network latency. If your handler needs more time, offload to a queue and return 200 immediately.

---

## Payload Typing via GraphQL Subscriptions

Webhook payloads are shaped by a GraphQL subscription query declared in the manifest:

```graphql
# graphql/subscriptions/order-created.graphql
subscription OrderCreated {
  event {
    ... on OrderCreated {
      order {
        id
        number
        userEmail
        total {
          gross { amount currency }
        }
      }
    }
  }
}
```

Only requested fields are sent. Run codegen to generate TypeScript types from these subscriptions.

---

## SDK Pattern

```typescript
import { SaleorAsyncWebhook } from "@saleor/app-sdk/handlers/next";
import { saleorApp } from "@/saleor-app";
import {
  OrderCreatedWebhookPayloadFragment,
  OrderCreatedSubscriptionDocument,
} from "@/generated/graphql";

export const orderCreatedWebhook =
  new SaleorAsyncWebhook<OrderCreatedWebhookPayloadFragment>({
    name: "Order Created",
    webhookPath: "api/webhooks/order-created",
    event: "ORDER_CREATED",
    apl: saleorApp.apl,
    query: OrderCreatedSubscriptionDocument,
  });

export default orderCreatedWebhook.createHandler((req, res, ctx) => {
  const { payload, authData } = ctx;
  // payload: typed from fragment
  // authData.token: app token for GraphQL calls
  // authData.saleorApiUrl: API endpoint

  console.log(`Order ${payload.order?.number} by ${payload.order?.userEmail}`);

  return res.status(200).end();
});

// Required: SDK needs raw body for signature verification
export const config = { api: { bodyParser: false } };
```

### Registering in Manifest

```typescript
// In manifest handler
webhooks: [
  orderCreatedWebhook.getWebhookManifest(appBaseUrl),
],
```

`getWebhookManifest()` generates the webhook manifest entry with the correct `targetUrl`, `asyncEvents`, and `query`.

---

## Without SDK

1. Accept POST request
2. Read raw body (do not parse yet — needed for signature verification)
3. Verify `saleor-event` header matches expected event
4. Verify `saleor-signature` against raw body using JWKS (see `protocol-auth.md`)
5. Look up AuthData by `saleor-api-url` header
6. Parse JSON body
7. Process event
8. Return HTTP 200

```typescript
// Generic handler (no SDK)
export async function handleWebhook(request: Request) {
  const rawBody = await request.text();
  const event = request.headers.get("saleor-event");
  const signature = request.headers.get("saleor-signature");
  const saleorApiUrl = request.headers.get("saleor-api-url");

  if (event !== "order_created") return new Response("Wrong event", { status: 400 });

  const authData = await myApl.get(saleorApiUrl);
  if (!authData) return new Response("Not registered", { status: 401 });

  await verifyWebhookSignature(signature, rawBody, authData.jwks);

  const payload = JSON.parse(rawBody);
  // ... process
  return new Response("OK", { status: 200 });
}
```

---

## `bodyParser: false`

**Critical in Next.js**: Disable body parsing so the SDK receives the raw body for signature verification.

```typescript
export const config = { api: { bodyParser: false } };
```

Other frameworks: ensure you read the raw request body before any middleware parses it.

---

## Anti-patterns

- **Don't forget `bodyParser: false`** — signature verification fails on parsed bodies
- **Don't do heavy work synchronously** — offload to queues if >20s timeout risk
- **Don't return non-200 for successful processing** — Saleor will retry on 5xx
- **Don't ignore the event header** — always validate the event type matches
