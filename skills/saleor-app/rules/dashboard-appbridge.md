# AppBridge & Dashboard Integration

Apps render inside the Saleor Dashboard as iframes. AppBridge handles communication between the iframe and Dashboard via `postMessage`.

> **Docs**: [App Bridge](https://docs.saleor.io/developer/extending/apps/developing-apps/app-sdk/overview)

---

## Iframe URL Parameters

Dashboard loads the app iframe with query params:

```
https://my-app.com/?id=<app-id>&domain=<shop>&saleorApiUrl=<api>&theme=light&locale=en
```

AppBridge reads these automatically.

## Setup

```typescript
import { AppBridge, AppBridgeProvider } from "@saleor/app-sdk/app-bridge";
import { RoutePropagator } from "@saleor/app-sdk/app-bridge/next";

// Create instance (client-side only)
const appBridge = typeof window !== "undefined" ? new AppBridge() : undefined;

function App({ Component, pageProps }) {
  return (
    <AppBridgeProvider appBridgeInstance={appBridge}>
      <RoutePropagator />
      <Component {...pageProps} />
    </AppBridgeProvider>
  );
}
```

## State

```typescript
const { appBridgeState } = useAppBridge();

// appBridgeState:
// .ready       — boolean, true after handshake
// .token       — JWT (user-scope, not app token)
// .saleorApiUrl — GraphQL endpoint
// .domain      — Saleor domain
// .theme       — "light" | "dark"
// .locale      — language code
// .user.email
// .user.permissions — user's permissions (mirror on client; enforce on server via verifyJWT)
// .appPermissions  — app's granted permissions (manifest — not a substitute for user JWT checks)
```

`user.permissions` drives **UI** (hide panels, `enabled: false` on queries). **API routes** must independently call `verifyJWT` with per-route `requiredPermissions`. Extension manifest `permissions` only control whether Saleor shows the mount — see `permissions-access-scopes`.

## Actions (App → Dashboard)

```typescript
import { actions } from "@saleor/app-sdk/app-bridge";

// Navigate
appBridge.dispatch(actions.Redirect({ to: "/orders/123" }));

// Notification
appBridge.dispatch(
  actions.Notification({
    status: "success",
    title: "Saved",
    text: "Settings updated",
  }),
);

// Signal ready (auto-called unless autoNotifyReady: false)
appBridge.dispatch(actions.NotifyReady());

// Request elevated permissions (Saleor 3.15+)
appBridge.dispatch(
  actions.RequestPermissions({
    permissions: ["MANAGE_ORDERS"],
    redirectPath: "/settings",
  }),
);
```

## Events (Dashboard → App)

```typescript
appBridge.subscribe("handshake", ({ token }) => {
  /* initial token */
});
appBridge.subscribe("tokenRefresh", ({ token }) => {
  /* refreshed token */
});
appBridge.subscribe("theme", ({ theme }) => {
  /* "light" | "dark" */
});
appBridge.subscribe("redirect", ({ path }) => {
  /* Dashboard navigated */
});
```

## Authenticated Fetch

For calling your own protected API routes from the iframe:

```typescript
import { useAuthenticatedFetch } from "@saleor/app-sdk/app-bridge";

const fetch = useAuthenticatedFetch();
// Automatically attaches: authorization-bearer, saleor-api-url, saleor-domain headers
const res = await fetch("/api/my-endpoint");
```

## Theme Sync

Match Dashboard theme (light/dark):

```typescript
import { useAppBridge } from "@saleor/app-sdk/app-bridge";

function ThemeSynchronizer() {
  const { appBridgeState } = useAppBridge();
  // Apply appBridgeState.theme to your UI
}
```

## No-SSR Pattern

App UI only renders inside the Dashboard iframe after auth handshake. SSR is unnecessary and can cause hydration issues.

```typescript
import dynamic from "next/dynamic";
const NoSSRWrapper = dynamic(
  () => Promise.resolve(({ children }) => children),
  {
    ssr: false,
  },
);
```

---

## Without SDK (Raw Protocol)

Communication uses `window.postMessage`. The Dashboard sends:

- `handshake` event with JWT token on load
- `tokenRefresh` when token expires
- `theme`, `localeChanged`, `redirect` events

The app sends actions as `postMessage` to `window.parent`:

- `{ type: "redirect", payload: { to, actionId } }`
- `{ type: "notification", payload: { status, title, text, actionId } }`
- `{ type: "notifyReady", payload: { actionId } }`

Dashboard responds with `{ type: "response", payload: { actionId, ok } }`.

---

## Anti-patterns

- **Don't use `<a href>` or `window.open` for external links** — the app runs in an iframe; use `actions.Redirect({ to: url, newContext: true })` to open external URLs
- **Don't use SSR for app pages** — the iframe only works after client-side handshake
- **Don't read `appBridgeState.token` before `ready` is true** — token isn't available yet
- **Don't use `appBridgeState.token` as the app token** — it's a user-scope JWT with limited permissions
