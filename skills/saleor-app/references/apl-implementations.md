# APL Implementations

## FileAPL (Development)

```typescript
import { FileAPL } from "@saleor/app-sdk/APL";
const apl = new FileAPL();
```

Stores in `.saleor-app-auth.json`. Single-tenant. Overwrites on each `set()`.

## EnvAPL (Single-Tenant Static)

```typescript
import { EnvAPL } from "@saleor/app-sdk/APL";
const apl = new EnvAPL({
  env: {
    appId: process.env.SALEOR_APP_ID,
    token: process.env.SALEOR_APP_TOKEN,
    saleorApiUrl: process.env.SALEOR_API_URL,
  },
});
```

Read-only from env vars. `set()` logs to console (for initial setup). No external storage.

## UpstashAPL (Serverless)

```typescript
import { UpstashAPL } from "@saleor/app-sdk/APL";
const apl = new UpstashAPL();
// Reads: UPSTASH_URL, UPSTASH_TOKEN from env
```

Key format: `base64url(saleorApiUrl)`. Multi-tenant. `getAll()` returns empty (Redis limitation).

## RedisAPL (Self-Hosted)

```typescript
import { RedisAPL } from "@saleor/app-sdk/APL";
const apl = new RedisAPL({ client: redisClient });
```

Uses `redis` library. Default hash key: `"saleor_app_auth"`. Multi-tenant.

## VercelKvApl (Vercel)

```typescript
import { VercelKvApl } from "@saleor/app-sdk/APL/vercel-kv";
const apl = new VercelKvApl();
// Reads: KV_URL, KV_REST_API_URL, KV_REST_API_TOKEN, KV_STORAGE_NAMESPACE from env
```

Requires `@vercel/kv` peer dependency.

## SaleorCloudAPL (Saleor Cloud)

```typescript
import { SaleorCloudAPL } from "@saleor/app-sdk/APL";
const apl = new SaleorCloudAPL({ token: process.env.SALEOR_CLOUD_TOKEN });
```

REST API to Saleor Cloud management. Optional in-memory cache. Pagination support.

## Custom APL

Implement the `APL` interface:

```typescript
const customApl: APL = {
  get: async (saleorApiUrl) => db.findOne({ saleorApiUrl }),
  set: async (authData) => db.upsert(authData.saleorApiUrl, authData),
  delete: async (saleorApiUrl) => db.remove({ saleorApiUrl }),
  getAll: async () => db.findAll(),
  isReady: async () => ({ ready: true }),
  isConfigured: async () => ({ configured: true }),
};
```

## Selection Guide

| Scenario | APL |
|----------|-----|
| Local development | FileAPL |
| Single-tenant, env-only deploy | EnvAPL |
| Vercel + serverless | UpstashAPL or VercelKvApl |
| Self-hosted, multi-tenant | RedisAPL |
| Saleor Cloud marketplace | SaleorCloudAPL |
