# permissions-access-scopes

> **Source**: [Saleor Docs - App Permissions](https://docs.saleor.io/developer/extending/apps/architecture/app-permissions)

## Rule for app authors

**Define which staff permissions each feature needs, then enforce them on the server using the Dashboard JWT — not only in React.**

Saleor gives every installed app two different credential types. Manifest `permissions` and extension `permissions` are **not** enough on their own. Any route the iframe can call (tRPC, REST, Server Actions) must verify `verifyJWT` (or `createProtectedHandler`) with the correct `requiredPermissions` for that operation.

| Layer | What it controls | Authoritative for API access? |
|-------|------------------|-------------------------------|
| Manifest `permissions` | App service token (APL) — sync, webhooks, server GraphQL | No (server-side only) |
| Extension `permissions` | Whether Saleor **shows** a Dashboard tab/button | **No** — visibility only |
| **JWT `user_permissions` + your route gates** | What the **logged-in staff user** may read/do | **Yes** |

Client-side checks (`useAppBridge`, `appBridgeState.user.permissions`) improve UX but **must mirror** server gates. Never rely on hiding UI alone.

---

## Opening an app requires no permissions

> "A user can open the installed app, but they won't be able to deactivate or delete it."
>
> "Opening the app requires no permissions, so you can not assume the presence of any of them."

`MANAGE_APPS` is only required to **install, deactivate, or delete** an app. Any staff member can open an installed app in the Dashboard. The app must handle users who lack data permissions (empty states, `PermissionDenied`, 401 from API).

---

## Access scopes (two tokens)

| Scope | Token | Where | Permissions |
|-------|-------|-------|-------------|
| **User scope** | Short-lived JWT from App Bridge | Client calls + your API routes invoked from the iframe | The staff user's `user_permissions` |
| **App scope** | Service token from APL | Server-only (webhooks, sync, background jobs) | Manifest `permissions`, independent of any user |

**Never expose the app token to the client.** The iframe JWT is user-scoped.

The Dashboard JWT's effective permissions are the **intersection** of the staff user's permissions and the app's manifest `permissions`. A user with `MANAGE_USERS` still cannot access customer APIs through your app if the app was not installed with that permission — and vice versa: manifest permissions do not bypass per-route gates you add in your API.

---

## Define permissions per feature

Before building UI, map features to Saleor permission codes:

| Feature type | Typical permission | Notes |
|--------------|-------------------|--------|
| Orders, revenue, fulfillment analytics | `MANAGE_ORDERS` | Baseline for commerce data |
| Product catalog / variant insights | `MANAGE_PRODUCTS` | Product-detail widgets |
| Customer PII (email, name, rankings) | `MANAGE_USERS` | Stricter than orders |
| App admin (sync, webhooks, dangerous config) | `MANAGE_APPS` | Not required to *open* the app |

Declare **related** requirements in three places (different purposes — not the same list copied three times):

1. **Manifest `permissions`** — union of everything the **app token** needs server-side (sync, webhooks, Saleor API calls). Must be a superset of extension permissions.
2. **Extension `permissions`** — what a user needs to **see** each Dashboard mount (tab, sidebar widget).
3. **Route meta / handler** — what the user needs to **execute** each API procedure (authoritative for API access).

Extension `permissions` control Dashboard visibility (check Saleor docs for whether the user must hold each listed permission). They can differ from your page-level API baseline — e.g. a mount listed with several permissions may still load an iframe whose API requires only `MANAGE_ORDERS`. **Server gates win.**

---

## Guard JWT on the server (required)

Use `@saleor/app-sdk/auth` `verifyJWT` (or `createProtectedHandler`) on every user-scoped endpoint. Pass `requiredPermissions` **per route**, not one global middleware for the whole app.

### Recommended: baseline + per-route overrides (analytics / commerce apps)

For dashboards that expose order and revenue data, a common baseline is `MANAGE_ORDERS`. Admin-only configuration apps (payments, email) may use `MANAGE_APPS` as baseline or no baseline with explicit per-route gates — pick what matches your audience.

`requiredClientPermissions: ["A", "B"]` means **AND** (user must have both). Use `requiredAnyClientPermissions` for **OR**.

```typescript
import { verifyJWT } from "@saleor/app-sdk/auth";
import type { Permission } from "@saleor/app-sdk/types";

/** Example baseline for commerce analytics — override on sensitive routes. */
export const BASELINE_CLIENT_PERMISSIONS = ["MANAGE_ORDERS"] as const;

export interface ClientPermissionMeta {
  /** User must have every permission (AND). Replaces baseline when set. */
  requiredClientPermissions?: Permission[];
  /** User must have at least one (OR). Replaces baseline and requiredClientPermissions. */
  requiredAnyClientPermissions?: Permission[];
}

export function resolvePermissionChecks(meta?: ClientPermissionMeta): Permission[][] {
  if (meta?.requiredAnyClientPermissions?.length) {
    return meta.requiredAnyClientPermissions.map((p) => [p]);
  }
  return [meta?.requiredClientPermissions ?? [...BASELINE_CLIENT_PERMISSIONS]];
}

export async function verifyClientJwt(params: {
  appId: string;
  token: string;
  saleorApiUrl: string;
  meta?: ClientPermissionMeta;
}): Promise<void> {
  const checks = resolvePermissionChecks(params.meta);
  let lastError: unknown;
  for (const requiredPermissions of checks) {
    try {
      await verifyJWT({
        appId: params.appId,
        token: params.token,
        saleorApiUrl: params.saleorApiUrl,
        requiredPermissions,
      });
      return;
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError;
}
```

Wire into tRPC (or equivalent) middleware that runs **before** `getTenantDb` / business logic:

```typescript
triggerSync: protectedClientProcedure
  .meta({ requiredClientPermissions: ["MANAGE_APPS"] })
  .mutation(async ({ ctx }) => { /* ... */ }),

topCustomers: protectedClientProcedure
  .meta({ requiredClientPermissions: ["MANAGE_USERS"] })
  .query(async ({ ctx }) => { /* ... */ }),

// Shared by dashboard + product widget:
channels: protectedClientProcedure
  .meta({ requiredAnyClientPermissions: ["MANAGE_ORDERS", "MANAGE_PRODUCTS"] })
  .query(async ({ ctx }) => { /* ... */ }),
```

For a single REST route, use `createProtectedHandler(handler, apl, ["MANAGE_ORDERS"])`.

### Headers the client must send

App Bridge / `useAuthenticatedFetch` attaches:

```
authorization-bearer: <user-jwt>
saleor-api-url: https://shop.saleor.cloud/graphql/
```

Your server must also bind `saleorApiUrl` to APL auth (`apl.get(saleorApiUrl)`) so tenants cannot be mixed.

---

## Mirror gates in the Dashboard UI

Read permissions from App Bridge and hide or disable features the user cannot use — **after** server gates exist.

```tsx
import { useAppBridge } from "@saleor/app-sdk/app-bridge";

export function usePermissions() {
  const { appBridgeState } = useAppBridge();
  const ready = appBridgeState?.ready ?? false;
  const permissions = appBridgeState?.user?.permissions ?? [];
  return {
    ready,
    canManageOrders: ready && permissions.includes("MANAGE_ORDERS"),
    canManageProducts: ready && permissions.includes("MANAGE_PRODUCTS"),
    canManageUsers: ready && permissions.includes("MANAGE_USERS"),
    canManageApps: ready && permissions.includes("MANAGE_APPS"),
  };
}
```

```tsx
const { canManageOrders, canManageUsers } = usePermissions();

if (!canManageOrders) {
  return <PermissionDenied permission="MANAGE_ORDERS" />;
}

const customers = trpc.analytics.topCustomers.useQuery(input, {
  enabled: canManageUsers, // matches server meta on topCustomers
});
```

Use `enabled: false` on queries when the user lacks permission so the UI does not spam 401s.

---

## App scope (service token)

The APL token has manifest permissions regardless of who is logged in. Use it when **no user is present** or when the operation needs app-level access:

```typescript
const authData = await apl.get(saleorApiUrl);
const client = createGraphQLClient({
  saleorApiUrl: authData.saleorApiUrl,
  token: authData.token, // never send to browser
});
```

Typical uses: webhook handlers, cron/sync, registering webhooks, fetching data to enrich a **user-gated** response (e.g. resolve customer display names after `MANAGE_USERS` JWT check passed).

Even when data is read from your own database, **user scope JWT gates still apply** if the iframe triggered the request. Pre-aggregated analytics is not a reason to skip permission checks.

---

## When to use each scope

| Operation | Scope | JWT / permission gate |
|-----------|-------|------------------------|
| Sync / cron | App | N/A (use `SYNC_SECRET` or similar) |
| Webhooks | App | JWKS signature |
| Dashboard analytics read (local DB) | User | **Yes** — e.g. `MANAGE_ORDERS` |
| Customer PII | User | **`MANAGE_USERS`** on route + UI |
| Product sidebar widget | User | **`MANAGE_PRODUCTS`** |
| Manual sync / webhook admin | User | **`MANAGE_APPS`** |
| Enrich response from Saleor API | App token **after** user JWT passed | User gate first, then app token server-side |

---

## App extensions and manifest permissions

Extensions declare **visibility** in the Dashboard:

```json
{
  "extensions": [
    {
      "label": "Revenue Analytics",
      "mount": "HOMEPAGE_WIDGETS",
      "target": "WIDGET",
      "permissions": ["MANAGE_ORDERS", "MANAGE_PRODUCTS"],
      "url": "/dashboard"
    }
  ]
}
```

Manifest root `permissions` declares what the **installer** grants the **app token**:

```json
{
  "permissions": ["MANAGE_ORDERS", "MANAGE_PRODUCTS", "MANAGE_USERS"]
}
```

Do not conflate the two. A user may see an extension entry but still get 401 from your API if your server requires a permission they lack.

---

## Anti-patterns

- **UI-only gating** — Hiding a chart without `verifyJWT` on the API route. Users can call tRPC/REST directly.
- **Hardcoding `MANAGE_APPS` on all routes** — Blocks staff who may open the app but are not app admins. Valid only for admin-only tools (payments, SMTP), not analytics dashboards.
- **Assuming extension `permissions` secure your API** — They only hide Dashboard chrome.
- **Assuming any permission because the app opened** — Opening requires none; check JWT claims.
- **Using user JWT for background jobs** — Expires; use app token from APL.
- **Exposing app token to the client** — Full manifest permissions in the browser.
- **Serving PII from local DB without `MANAGE_USERS`** — Even if data was synced with the app token. Using the **app token server-side to enrich** a response (after the user passed a `MANAGE_USERS` route gate) is fine.
- **Calling Saleor from the browser for sensitive data** — Prefer your own API + `verifyJWT`; client-side GraphQL with the user JWT is limited to the JWT ∩ manifest intersection.

---

## Reference implementation

[Saleor Pulse](https://github.com/saleor/saleor-pulse) (`saleor-analytics`): baseline `MANAGE_ORDERS` on tRPC, overrides for `MANAGE_USERS` / `MANAGE_PRODUCTS` / `MANAGE_APPS`, UI mirrors via `usePermissions`, app token only after user gate for customer display enrichment.
