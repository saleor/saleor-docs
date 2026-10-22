# GraphQL from Apps

Apps query Saleor's GraphQL API using app tokens (server-side) or user tokens (client-side). The auth header format differs from standard `Authorization: Bearer`.

---

## Auth Header

Saleor apps use the `Authorization-Bearer` header (not `Authorization: Bearer`):

```
Authorization-Bearer: <token>
```

This applies to both app tokens and user JWT tokens.

## Two Token Contexts

| Context | Token Source | Use For |
|---------|-------------|---------|
| Server-side (webhooks, API routes) | `authData.token` from APL | Full app permissions. Mutations, reading private data. |
| Client-side (Dashboard iframe) | `appBridgeState.token` | User's permissions. UI data fetching. |

**Never send the app token to the client.**

---

## Server-Side Client (Webhook Handlers, API Routes)

```typescript
import { createClient } from "../lib/create-graphql-client";

// In a webhook handler:
export default orderCreatedWebhook.createHandler((req, res, ctx) => {
  const client = createClient(
    ctx.authData.saleorApiUrl,
    async () => ({ token: ctx.authData.token })
  );

  const result = await client.query(MyDocument, { id: "..." });
});
```

### Client Factory Pattern

```typescript
// Generic pattern (any GraphQL client)
function createSaleorClient(saleorApiUrl: string, token: string) {
  return {
    async query(document, variables) {
      const response = await fetch(saleorApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization-Bearer": token,
        },
        body: JSON.stringify({ query: document, variables }),
      });
      return response.json();
    },
  };
}
```

The app template uses URQL with an auth exchange that sets `Authorization-Bearer`. Any GraphQL client works — just set the correct header.

---

## Client-Side (Dashboard UI)

The `GraphQLProvider` creates a client using the AppBridge token:

```typescript
import { useAppBridge } from "@saleor/app-sdk/app-bridge";

function GraphQLProvider({ children }) {
  const { appBridgeState } = useAppBridge();

  const client = createClient(
    appBridgeState.saleorApiUrl,
    async () => ({ token: appBridgeState.token })
  );

  return <Provider value={client}>{children}</Provider>;
}
```

This client operates with the Dashboard user's permissions, not the app's full permissions.

---

## Code Generation

Apps use `graphql-codegen` for type-safe queries, mutations, and webhook subscription types.

```bash
pnpm run generate
```

### What Gets Generated

- Query/mutation hooks (URQL, Apollo, or typed document nodes)
- Fragment types for webhook payloads
- Full Saleor schema types

### Subscription Documents for Webhooks

Webhook payload types come from GraphQL subscription documents:

```graphql
# graphql/subscriptions/order-created.graphql
subscription OrderCreated {
  event {
    ... on OrderCreated {
      order {
        ...OrderCreatedPayload
      }
    }
  }
}
```

The generated `OrderCreatedSubscriptionDocument` is passed to `SaleorAsyncWebhook` constructor and included in the manifest.

---

## Anti-patterns

- **Don't use `Authorization: Bearer`** — Saleor apps use `Authorization-Bearer` (no space, hyphenated)
- **Don't send app tokens to the browser** — use AppBridge user tokens client-side
- **Don't forget to regenerate types** after changing `.graphql` files
- **Don't create one client per request in hot paths** — reuse or pool clients
