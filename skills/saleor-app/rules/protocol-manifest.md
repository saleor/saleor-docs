# App Manifest & Endpoints

Every Saleor app must expose two required HTTP endpoints: **manifest** (GET) and **register** (POST). The manifest declares the app's identity, permissions, webhooks, and Dashboard extensions. The register endpoint is used to register the app with the Saleor instance.

> **Docs**: [App Manifest](https://docs.saleor.io/developer/extending/apps/architecture/overview)

---

## Required Endpoints

| Endpoint                    | Method | Purpose                                       |
| --------------------------- | ------ | --------------------------------------------- |
| Manifest                    | GET    | Returns app metadata JSON                     |
| Register (`tokenTargetUrl`) | POST   | Receives auth credentials during installation |

## Manifest Structure

```json
{
  "id": "my.app.id",
  "version": "1.0.0",
  "name": "My App",
  "appUrl": "https://my-app.com/",
  "tokenTargetUrl": "https://my-app.com/api/register",
  "permissions": ["MANAGE_ORDERS"],
  "webhooks": [],
  "extensions": []
}
```

### Key Fields

| Field                   | Required | Purpose                            |
| ----------------------- | -------- | ---------------------------------- |
| `id`                    | Yes      | Unique identifier                  |
| `version`               | Yes      | Semver string                      |
| `name`                  | Yes      | Display name in Dashboard          |
| `appUrl`                | Yes      | Main iframe URL                    |
| `tokenTargetUrl`        | Yes      | Registration endpoint URL          |
| `permissions`           | Yes      | Permissions the app needs          |
| `requiredSaleorVersion` | No       | Semver constraint (e.g. `"^3.15"`) |
| `webhooks`              | No       | Webhook subscriptions              |
| `extensions`            | No       | Dashboard UI mount points          |
| `brand.logo.default`    | No       | Logo URL (Saleor 3.15+)            |

### Webhook Entries

```json
{
  "name": "Order Created",
  "asyncEvents": ["ORDER_CREATED"],
  "query": "subscription { event { ... on OrderCreated { order { id } } } }",
  "targetUrl": "https://my-app.com/api/webhooks/order-created",
  "isActive": true
}
```

Webhook payloads are shaped by the `query` field — a GraphQL subscription document. Only requested fields are sent.

### Extensions (Dashboard UI)

```json
{
  "label": "My Action",
  "mount": "PRODUCT_DETAILS_MORE_ACTIONS",
  "target": "POPUP",
  "permissions": ["MANAGE_PRODUCTS"],
  "url": "/extensions/product-action"
}
```

`target`: `"POPUP"` (overlay) or `"APP_PAGE"` (full page). `mount`: determines where in the Dashboard the extension appears.

---

## Permissions

Apps request permissions in the manifest. The installing user must hold `MANAGE_APPS` **plus** all permissions the app requests.

Two token scopes exist:

| Scope                        | Token Source                       | Permissions                  |
| ---------------------------- | ---------------------------------- | ---------------------------- |
| **App scope** (server-side)  | APL (`authData.token`)             | Full app permissions         |
| **User scope** (client-side) | AppBridge (`appBridgeState.token`) | Dashboard user's permissions |

**Never expose the app token to the client.** Use user-scope tokens for client-side GraphQL.

---

## SDK: `createManifestHandler`

```typescript
import { createManifestHandler } from "@saleor/app-sdk/handlers/next";

export default createManifestHandler({
  manifestFactory({ appBaseUrl, request, schemaVersion }) {
    // appBaseUrl: from Host header
    // schemaVersion: from saleor-schema-version header (null if <3.15)
    return {
      id: "my.app",
      version: "1.0.0",
      name: "My App",
      appUrl: appBaseUrl,
      tokenTargetUrl: `${appBaseUrl}/api/register`,
      permissions: ["MANAGE_ORDERS"],
      webhooks: [orderCreatedWebhook.getWebhookManifest(appBaseUrl)],
    };
  },
});
```

The SDK extracts `appBaseUrl` from request headers and parses `schemaVersion`. The factory returns an `AppManifest` object served as JSON.

### Without SDK

Serve a GET endpoint that returns the manifest JSON. No special logic needed — just ensure `tokenTargetUrl` points to your registration endpoint.

---

## Environment Variables for Tunnels/Docker

When the app URL differs between iframe and API (e.g. ngrok tunnel):

```typescript
const iframeBaseUrl = process.env.APP_IFRAME_BASE_URL ?? appBaseUrl;
const apiBaseURL = process.env.APP_API_BASE_URL ?? appBaseUrl;
```

Use `iframeBaseUrl` for `appUrl` (what the browser loads) and `apiBaseURL` for `tokenTargetUrl` and webhook URLs (what Saleor calls server-to-server).

---

## Syncing Manifest Changes to Saleor

Saleor reads the manifest **only during installation**. Any changes to permissions, webhooks, subscription queries, or extensions are not picked up automatically. You must explicitly sync them.

### Option 1: Reinstall the App

Uninstall and reinstall via Dashboard. Simplest approach, but resets the `appId` and clears stored metadata/settings.

### Option 2: Update via GraphQL API

Use Saleor's GraphQL mutations to update the App object in-place — preserves `appId`, tokens, and metadata.

```graphql
# Update permissions
mutation {
  appUpdate(id: "APP_ID", input: { permissions: [MANAGE_ORDERS, MANAGE_PRODUCTS] }) {
    app { id }
    errors { field message }
  }
}

# Update a webhook's subscription query
mutation {
  webhookUpdate(id: "WEBHOOK_ID", input: {
    query: "subscription { event { ... on OrderCreated { order { id number userEmail } } } }"
  }) {
    webhook { id }
    errors { field message }
  }
}

# Create a new webhook
mutation {
  webhookCreate(input: {
    app: "APP_ID"
    name: "Order Updated"
    targetUrl: "https://my-app.com/api/webhooks/order-updated"
    asyncEvents: [ORDER_UPDATED]
    query: "subscription { event { ... on OrderUpdated { order { id status } } } }"
    isActive: true
  }) {
    webhook { id }
    errors { field message }
  }
}
```

You can build a script that reads the current manifest and reconciles it with the live App object in Saleor. This is the preferred approach for production apps where reinstalling would cause downtime or data loss.

---

## Anti-patterns

- **Don't hardcode URLs in the manifest** — derive from `appBaseUrl` or env vars
- **Don't request permissions you don't need** — users must hold all requested permissions to install
- **Don't assume manifest changes are live** — Saleor only reads the manifest at install time; sync changes via reinstall or GraphQL mutations
- **Don't forget `requiredSaleorVersion`** — prevents installation on incompatible instances
- **Don't use user-scope tokens for server-side operations** — they have limited permissions and expire
