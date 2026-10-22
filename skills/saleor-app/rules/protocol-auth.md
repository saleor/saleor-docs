# Authentication & Registration

Apps authenticate via a registration handshake during installation. Credentials are stored in an APL (Auth Persistence Layer). Subsequent requests are verified via JWT or webhook signature.

> **Docs**: [App SDK APL](https://docs.saleor.io/developer/extending/apps/developing-apps/app-sdk/apl)

---

## Installation Flow

```
Dashboard → Install App
  │
  ├─ 1. GET /api/manifest → Saleor fetches manifest
  │
  ├─ 2. POST /api/register → Saleor sends credentials
  │     Headers: saleor-domain, saleor-api-url
  │     Body: { auth_token: "<token>" }
  │
  ├─ 3. App fetches app ID: query { app { id } }
  │     using auth_token against saleorApiUrl
  │
  ├─ 4. App fetches JWKS from {origin}/.well-known/jwks.json
  │
  ├─ 5. App stores AuthData in APL
  │
  └─ 6. Returns { success: true }
```

### AuthData (stored per Saleor instance)

```typescript
interface AuthData {
  token: string;        // App token for GraphQL API
  saleorApiUrl: string; // GraphQL endpoint (used as tenant key)
  appId: string;        // App ID (changes on reinstall)
  domain: string;       // Saleor domain
  jwks?: string;        // Cached JWKS for signature verification
}
```

---

## APL (Auth Persistence Layer)

APL stores `AuthData` keyed by `saleorApiUrl`. For multi-tenant apps, one APL entry per Saleor instance.

### Interface

```typescript
interface APL {
  get(saleorApiUrl: string): Promise<AuthData | undefined>;
  set(authData: AuthData): Promise<void>;
  delete(saleorApiUrl: string): Promise<void>;
  getAll(): Promise<AuthData[]>;
}
```

### Implementations

| APL | Use Case | Storage |
|-----|----------|---------|
| `FileAPL` | Dev only | `.saleor-app-auth.json` file |
| `EnvAPL` | Single-tenant | Environment variables |
| `UpstashAPL` | Serverless production | Upstash Redis |
| `RedisAPL` | Self-hosted production | Redis |
| `VercelKvApl` | Vercel deployments | Vercel KV |
| `SaleorCloudAPL` | Saleor Cloud apps | Saleor Cloud API |

See `references/apl-implementations.md` for setup details.

### Selection Pattern

```typescript
import { FileAPL, UpstashAPL } from "@saleor/app-sdk/APL";

const apl = process.env.NODE_ENV === "production"
  ? new UpstashAPL()   // reads UPSTASH_URL, UPSTASH_TOKEN from env
  : new FileAPL();
```

---

## SDK: `createAppRegisterHandler`

```typescript
import { createAppRegisterHandler } from "@saleor/app-sdk/handlers/next";

export default createAppRegisterHandler({
  apl: saleorApp.apl,
  allowedSaleorUrls: ["https://my-shop.saleor.cloud/graphql/"],
  // Lifecycle hooks (all optional):
  onRequestStart(request, context) {},
  onRequestVerified(request, context) {},
  onAuthAplSaved(request, context) {},
  onAplSetFailed(request, context) {},
});
```

### Without SDK

1. Parse `auth_token` from request body/params
2. Read `saleor-api-url` and `saleor-domain` headers
3. Call `{ app { id } }` with `Authorization: Bearer <auth_token>` against `saleorApiUrl`
4. Fetch JWKS from `{origin}/.well-known/jwks.json`
5. Store `{ token, saleorApiUrl, appId, domain, jwks }` in your database
6. Return `{ "success": true }`

---

## JWT Verification (Dashboard Requests)

Dashboard users access app UI via iframe. The AppBridge provides a JWT token. **Every user-scoped API route must verify it and check `requiredPermissions` for that route** — not only the iframe UI. See `permissions-access-scopes` for the full model (baseline + per-route meta, extension visibility vs server gates).

### Headers from Dashboard (via AppBridge)

```
authorization-bearer: <jwt>
saleor-api-url: https://api.saleor.cloud/graphql/
saleor-domain: my-shop.saleor.cloud
```

### JWT Claims

```json
{
  "app": "<app-id>",
  "user_permissions": ["MANAGE_PRODUCTS"],
  "email": "user@example.com",
  "exp": 1704067200,
  "iss": "https://api.saleor.cloud"
}
```

### Verification Steps

1. Decode JWT, check `exp` > now
2. Verify `token.app` === stored `appId`
3. Check `user_permissions` includes required permissions
4. Verify signature against JWKS from `{saleorApiUrl origin}/.well-known/jwks.json`

### SDK: `createProtectedHandler`

```typescript
import { createProtectedHandler } from "@saleor/app-sdk/handlers/next";

export default createProtectedHandler(
  (req, res, ctx) => {
    // ctx.authData — APL credentials (app token)
    // ctx.user.email, ctx.user.userPermissions — Dashboard user
    res.json({ ok: true });
  },
  saleorApp.apl,
  ["MANAGE_ORDERS"]  // required permissions (optional)
);
```

---

## Webhook Signature Verification

Webhook payloads are signed with JWS. The `saleor-signature` header contains a compact JWS: `header.payload.signature`.

Verification:
1. Parse JWS from `saleor-signature` header
2. Use JWKS (cached in APL or fetched from `{origin}/.well-known/jwks.json`)
3. Verify with `jose.flattenedVerify()` — payload must match raw request body
4. If verification fails with cached JWKS, fetch fresh JWKS and retry once

The SDK handles this automatically in webhook handlers.

---

## Anti-patterns

- **Don't store app tokens client-side** — use user-scope JWT from AppBridge for client requests
- **Don't skip `allowedSaleorUrls`** in production — prevents unauthorized Saleor instances from registering
- **Don't use `FileAPL` in production** — it's single-tenant and file-based
- **Don't cache JWKS forever** — keys rotate; the SDK handles refresh-on-failure
