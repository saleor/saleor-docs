# Debugging & Development

Common errors, debugging tools, and local development setup for Saleor apps.

---

## Local Development with Tunnels

Saleor needs to reach your app via HTTPS. Use a tunnel for local development:

```bash
# ngrok, localtunnel, or Cloudflare Tunnel
ngrok http 3000
```

Set the tunnel URL in your manifest. If iframe URL and API URL differ:

```env
APP_IFRAME_BASE_URL=https://abc123.ngrok.io
APP_API_BASE_URL=https://abc123.ngrok.io
```

## Webhook Dry Runs

Test webhook payloads without triggering real events:

```graphql
mutation {
  webhookDryRun(
    objectId: "T3JkZXI6YThjN2Y4Yjg="
    query: "subscription { event { ... on OrderCreated { order { id number } } } }"
  ) {
    payload
    errors { field message }
  }
}
```

Only works for async events. Requires the same permissions as the event.

---

## Common Errors

### Signature Verification Failed

**Cause**: Body was parsed before signature verification.

**Fix**: Disable body parsing in Next.js:
```typescript
export const config = { api: { bodyParser: false } };
```
Other frameworks: read raw body before any middleware processes it.

### "Not registered" / AuthData Not Found

**Cause**: APL has no entry for the `saleor-api-url` header value.

**Debug**:
1. Check APL storage (`.saleor-app-auth.json` for FileAPL)
2. Reinstall the app in Dashboard
3. Verify `saleor-api-url` header matches stored `saleorApiUrl` exactly (trailing slash matters)

### JWT Expired

**Cause**: Dashboard user token expired. AppBridge auto-refreshes, but stale tokens can slip through.

**Fix**: Ensure AppBridge is properly initialized and `tokenRefresh` events update your client.

### Permission Denied

**Cause**: Token lacks required permissions.

**Check**:
- App-scope: verify manifest `permissions` includes needed permission
- User-scope: verify Dashboard user has the permission
- After changing manifest permissions, reinstall the app or update via `appUpdate` mutation (see `protocol-manifest.md`)

### Webhook Not Firing

**Debug**:
1. Check Dashboard → Apps → your app → webhook list
2. Verify webhook is active (`isActive: true`)
3. Check `targetUrl` is reachable from Saleor
4. Check Saleor logs for delivery failures
5. Verify event name matches (case-insensitive, but must be correct event)
6. If you changed webhooks or subscription queries in code, sync to Saleor — reinstall the app or use `webhookUpdate`/`webhookCreate` mutations (see `protocol-manifest.md`)

### CORS Errors in Dashboard

**Cause**: App iframe making requests that violate CORS.

**Fix**: App should call its own backend, not Saleor directly from the iframe. Use `useAuthenticatedFetch()` for your API routes, which then call Saleor server-side.

---

## Debugging Checklist

1. **Is the app installed?** Check Dashboard → Apps
2. **Is the tunnel running?** Verify HTTPS URL is reachable
3. **Check APL storage** — does AuthData exist for this Saleor instance?
4. **Check headers** — log `saleor-api-url`, `saleor-event`, `saleor-signature`
5. **Check permissions** — does the app/user have what's needed?
6. **Check body parsing** — is raw body available for signature verification?
7. **Try reinstalling** — clears stale AuthData and re-registers webhooks. Required after changing webhooks, subscription queries, or permissions in the manifest (alternatively use GraphQL mutations to sync — see `protocol-manifest.md`)

---

## SaleorApp Initialization

```typescript
// src/saleor-app.ts
import { SaleorApp } from "@saleor/app-sdk/saleor-app";
import { FileAPL } from "@saleor/app-sdk/APL";

export const saleorApp = new SaleorApp({
  apl: new FileAPL(), // dev only
});
```

This singleton is imported by all handlers. Switch APL implementation per environment.
