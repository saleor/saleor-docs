# AppBridge

App bridge is an interface that connects App (running inside Dashboard) with Dashboard itself.

## Setup

Create instance of AppBridge by running following code

```js
import { AppBridge } from "@saleor/app-sdk/app-bridge";

const appBridge = new AppBridge(options);
```

Options object is following:

```
type AppBridgeOptions = {
  targetDomain?: string;
  saleorApiUrl?: string;
  initialLocale?: LocaleCode;
  autoNotifyReady?: boolean;
  initialTheme?: "dark" | "light"
};
```

## Access app state:

```js
const { token, saleorApiUrl, ready, id } = appBridge.getState();
```

Available state represents `AppBridgeState`:

```typescript
type AppBridgeState = {
  token?: string;
  id: string;
  ready: boolean;
  domain: string;
  path: string;
  theme: ThemeType;
  locale: LocaleCode; // See src/locales.ts
  /**
   * Full URL including protocol and path where GraphQL API is available
   **/
  saleorApiUrl: string;
  /**
   * Versions of Saleor that app is being installed. Available from 3.15.
   */
  saleorVersion?: string;
  dashboardVersion?: string;
  user?: {
    /**
     * Original permissions of the user that is using the app.
     * *Not* the same permissions as the app itself.
     *
     * Can be used by app to check if user is authorized to perform
     * domain specific actions
     */
    permissions: Permission[];
    email: string;
  };
  /**
   * Permissions of the app itself
   */
  appPermissions?: AppPermission[];
};
```

## AppBridgeProvider

`AppBridgeProvider` and `useAppBridge` hook are exposed from app-sdk

```tsx
// app.tsx
import { AppBridgeProvider } from "@saleor/app-sdk/app-bridge";

<AppBridgeProvider>
  <YourApp />
</AppBridgeProvider>;
```

`AppBridgeProvider` can optionally receive AppBridge instance in props, otherwise will create one automatically

### useAppBridge hook

In components wrapped with `AppBridgeProvider`, `useAppBridge` hook is available

```tsx
import { useAppBridge } from "@saleor/app-sdk/app-bridge";
import { useEffect } from "react";

const MyComponent = () => {
  const { appBridge, appBridgeState } = useAppBridge();

  useEffect(() => {
    appBridge?.dispatch(/* Something */);
  }, [appBridge]);

  return <div>Current locale is: {appBridgeState?.locale}</div>;
};
```

`appBridgeState?` and `appBridge` can be nullish, because in server side context it's not available

## Events

Events are messages that originate in Saleor Dashboard. AppBridge can subscribe on events and app can react on them

### Subscribing to events

`subscribe(eventType, callback)` - can be used to listen to particular [event type](#available-event-types). It returns an unsubscribe function, which unregisters the callback.

Example:

```typescript
const unsubscribe = appBridge.subscribe("handshake", (payload) => {
  setToken(payload.token); // do something with event payload

  const { token } = appState.getState(); // you can also get app's current state here
});

// unsubscribe when callback is no longer needed
unsubscribe();
```

### Unsubscribing multiple listeners

`unsubscribeAll(eventType?)` - unregisters all callbacks of provided type. If no type was provided, it will remove all event callbacks.

Example:

```js
// unsubscribe from all handshake events
appBridge.unsubscribeAll("handshake");

// unsubscribe from all events
appBridge.unsubscribeAll();
```

### Available event types

| Event type      | Description                                                                  |
| :-------------- | :--------------------------------------------------------------------------- |
| `handshake`     | Fired when iFrame containing the App is initialized or new token is assigned |
| `response`      | Fired when Dashboard responds to an Action                                   |
| `redirect`      | Fired when Dashboard changes a subpath within the app path                   |
| `theme`         | Fired when Dashboard changes the theme                                       |
| `localeChanged` | Fired when Dashboard changes locale (and passes locale code in payload)      |
| `tokenRefresh`  | Fired when Dashboard receives a new auth token and passes it to the app      |

See [source code for detailed payload](./src/app-bridge/events.ts)

## Actions

Actions expose a high-level API to communicate with Saleor Dashboard. They're exported under an `actions` namespace.

### Available methods

**`dispatch(action)`** - dispatches an Action. Returns a promise which resolves when action is successfully completed.

Example:

```js
import { actions } from "@saleor/app-sdk/app-bridge";

const handleRedirect = async () => {
  await appBridge.dispatch(actions.Redirect({ to: "/orders" }));

  console.log("Redirect complete!");
};

handleRedirect();
```

### Available actions

| Action                        | Arguments                                                                                                    | Description                                                                                                                                                                                                   |
| :---------------------------- | :----------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Redirect`                    | `to` (string) - relative (inside Dashboard) or absolute URL path                                             |                                                                                                                                                                                                               |
|                               | `newContext` (boolean) - should open in a new browsing context                                               |                                                                                                                                                                                                               |
| `Notification`                | `status` (`info` / `success` / `warning` / `error` / undefined)                                              |                                                                                                                                                                                                               |
|                               | `title` (string / undefined) - title of the notification                                                     |                                                                                                                                                                                                               |
|                               | `text` (string / undefined) - content of the notification                                                    |                                                                                                                                                                                                               |
|                               | `apiMessage` (string / undefined) - error log from api                                                       |                                                                                                                                                                                                               |
| `NotifyReady`                 |                                                                                                              | Inform Dashboard that AppBridge is ready                                                                                                                                                                      |
| `UpdateRouting`               | `newRoute` - current path of App to be set in URL                                                            |                                                                                                                                                                                                               |
| `RequestPermissions` (>=3.15) | `permissions` - array of AppPermission, `redirectPath` - path app will be redirected to after operation ends | Ask Dashboard to give more permissions to the app. Dashboard will unmount app. After user approves or denies, Dashboard will redirect to `redirectPath`. If operation fails, `?error=REASON` will be appended |
