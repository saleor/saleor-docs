# External Webhooks

Receiving webhooks from external services (Stripe, CMS, shipping providers) back into a multi-tenant Saleor app.

---

## Problem

External services call your app with status updates (payment confirmed, content published, shipment tracked). Your app serves multiple Saleor instances — you need to route the webhook to the correct tenant.

## Multi-Tenant Routing

Embed the Saleor API URL in the webhook endpoint:

```
https://my-app.com/api/webhooks/stripe?saleorApiUrl=https://shop-1.saleor.cloud/graphql/
```

When registering webhooks with the external service, include the `saleorApiUrl` as a query parameter. On receipt, look up the tenant's AuthData from APL.

```typescript
export async function handleStripeWebhook(request: Request) {
  const url = new URL(request.url);
  const saleorApiUrl = url.searchParams.get("saleorApiUrl");

  const authData = await apl.get(saleorApiUrl);
  if (!authData) return new Response("Unknown tenant", { status: 401 });

  // Verify Stripe signature using per-tenant secret
  const secret = await settingsManager.get("stripe_webhook_secret", saleorApiUrl);
  verifyStripeSignature(request, secret);

  // Use authData.token to call Saleor GraphQL API
  await updateOrderInSaleor(authData, payload);

  return new Response("OK", { status: 200 });
}
```

## Security

1. **Domain allowlisting** — reject unknown `saleorApiUrl` values
2. **Per-tenant secrets** — store webhook signing secrets in Saleor metadata via `MetadataManager` (see `data-settings.md`)
3. **HMAC verification** — verify the external service's signature before processing

## Anti-patterns

- **Don't use a single shared secret for all tenants** — compromising one exposes all
- **Don't skip signature verification** — external webhooks are unauthenticated HTTP POST
- **Don't trust `saleorApiUrl` blindly** — validate it exists in your APL
