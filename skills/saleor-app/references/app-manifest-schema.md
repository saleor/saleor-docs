# App Manifest Schema

Full field reference for the app manifest JSON.

```typescript
interface AppManifest {
  // Required
  id: string;                          // Unique app identifier
  version: string;                     // Semver
  name: string;                        // Display name
  appUrl: string;                      // Main iframe URL
  tokenTargetUrl: string;              // Registration endpoint
  permissions: AppPermission[];        // Required permissions

  // Optional
  about?: string;                      // Description
  author?: string;                     // Author name
  dataPrivacyUrl?: string;
  homepageUrl?: string;
  supportUrl?: string;
  configurationUrl?: string;           // Settings page URL
  requiredSaleorVersion?: string;      // Semver constraint (e.g. "^3.15")
  brand?: {
    logo: { default: string };         // Logo URL (Saleor 3.15+)
  };

  // Webhooks
  webhooks?: WebhookManifest[];

  // Dashboard extensions
  extensions?: AppExtension[];
}

interface WebhookManifest {
  name: string;
  asyncEvents?: string[];              // e.g. ["ORDER_CREATED"]
  syncEvents?: string[];               // e.g. ["CHECKOUT_CALCULATE_TAXES"]
  query: string;                       // GraphQL subscription document
  targetUrl: string;                   // Webhook endpoint URL
  isActive?: boolean;                  // default true
}

interface AppExtension {
  label: string;                       // Button/menu text
  mount: AppExtensionMount;            // Dashboard location
  target: "POPUP" | "APP_PAGE";        // Render mode
  permissions: AppPermission[];        // Required user permissions
  url: string;                         // Extension URL (relative to appUrl)
}
```

## Extension Mounts

See [Saleor Docs](https://docs.saleor.io/developer/extending/apps/architecture/overview) for the current list of mount points (e.g. `PRODUCT_DETAILS_MORE_ACTIONS`, `ORDER_DETAILS_WIDGETS`, etc.).

## Permissions

See [Saleor Docs](https://docs.saleor.io/developer/permissions) for the full list (e.g. `MANAGE_ORDERS`, `MANAGE_PRODUCTS`, `MANAGE_USERS`, etc.).
