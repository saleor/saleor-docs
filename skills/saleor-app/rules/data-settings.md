# Settings & Metadata Persistence

Apps store configuration (API keys, preferences, per-tenant config) in Saleor's `privateMetadata` field. No external database needed.

> **Docs**: [Settings Manager](https://docs.saleor.io/developer/extending/apps/developing-apps/app-sdk/settings-manager)

---

## MetadataManager

Wraps Saleor's metadata GraphQL mutations into a key-value interface.

```typescript
import { MetadataManager } from "@saleor/app-sdk/settings-manager";

const settingsManager = new MetadataManager({
  fetchMetadata: async () => {
    // query { app { privateMetadata { key value } } }
    const { data } = await client.query(FetchAppMetadataDocument);
    return data.app.privateMetadata;
  },
  mutateMetadata: async (metadata) => {
    // mutation { updatePrivateMetadata(id: $appId, input: $metadata) { ... } }
    await client.mutation(UpdateAppMetadataDocument, { metadata });
  },
});

// Read
const apiKey = await settingsManager.get("stripe_api_key");

// Write
await settingsManager.set({ key: "stripe_api_key", value: "sk_live_..." });

// Write multiple
await settingsManager.set([
  { key: "api_key", value: "sk_live_..." },
  { key: "webhook_secret", value: "whsec_..." },
]);
```

## Domain-Scoped Settings

For multi-tenant apps, scope settings per Saleor instance:

```typescript
// Store per-tenant
await settingsManager.set({
  key: "api_key",
  value: "sk_live_...",
  domain: "shop-1.saleor.cloud",
});

// Retrieve per-tenant
const key = await settingsManager.get("api_key", "shop-1.saleor.cloud");
```

Internally, domain-scoped keys are serialized as `key__domain` in metadata.

## EncryptedMetadataManager

For sensitive data (API keys, secrets). Same interface, adds AES-256-CBC encryption.

```typescript
import { EncryptedMetadataManager } from "@saleor/app-sdk/settings-manager";

const settingsManager = new EncryptedMetadataManager({
  fetchMetadata: async () => { /* same as above */ },
  mutateMetadata: async (metadata) => { /* same as above */ },
  encryptionKey: process.env.SECRET_KEY, // required
});
```

Values are encrypted before storage and decrypted on read. The `encryptionKey` must be stable — changing it invalidates all stored values.

---

## Storage Model

```
App privateMetadata (Saleor's DB)
├── stripe_api_key: "encrypted_value"
├── stripe_api_key__shop-1.saleor.cloud: "encrypted_value"
├── webhook_secret__shop-1.saleor.cloud: "encrypted_value"
└── feature_flags: "{ ... }"
```

- Auto-cleaned when app is uninstalled
- Per-tenant isolation via `domain` parameter
- No external database infrastructure needed

---

## Anti-patterns

- **Don't store secrets unencrypted** — use `EncryptedMetadataManager` for API keys, tokens
- **Don't lose the encryption key** — all stored values become unreadable
- **Don't store large blobs** — metadata has size limits; use external storage for large data
- **Don't skip domain scoping in multi-tenant apps** — keys leak across tenants without it
