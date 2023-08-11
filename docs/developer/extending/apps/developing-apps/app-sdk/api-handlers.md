# API Handlers

Saleor Apps are meant to work in a serverless environment, where Cloud Functions are the foundations of server-side code.

Currently, Saleor heavily relies on Next.js, but other platforms will be supported in the future.

## Required handlers

Saleor requires two endpoints to be available for a standalone app:

- Manifest endpoint - Returns JSON object with app properties, like its name or permissions. [Read more](docs/developer/extending/apps/architecture/manifest.mdx)
- Register endpoint - During installation, Saleor sends a `POST` request with auth token to this endpoint. [Read more](docs/developer/extending/apps/installing-apps.mdx#installation-using-graphql-api)

## Built-in API handlers

To hide Saleor's internal logic, app-sdk provides handlers factories. They should work with minimal configuration, leaving
App creators space for domain logic.

### Manifest handler factory

Here is an example usage of a manifest handler in Next.js:

```typescript
// pages/api/manifest.ts

import { createManifestHandler } from "@saleor/app-sdk/handlers/next";

export default createManifestHandler({
  manifestFactory({ request, appBaseUrl }) {
    return {
      name: "My Saleor App",
      tokenTargetUrl: `${appBaseUrl}/api/register`,
      appUrl: appBaseUrl,
      permissions: [],
      id: "my-saleor-app",
      version: "1",
    };
  },
});
```

Options provided to handler factory:

```typescript
type CreateManifestHandlerOptions = {
  manifestFactory(context: {
    appBaseUrl: string;
    request: NextApiRequest;
  }): AppManifest;
};
```

You can use `NextApiRequest` to read additional parameters from the request. An example use case would be enabling some features based on the Saleor version.

See [`createManifestHandler`](https://github.com/saleor/saleor-app-sdk/blob/5c56cf566d2cc6e4a075c8c619f174fa43aad6c9/src/handlers/next/create-manifest-handler.ts#L18) for more details. See [manifest](https://github.com/saleor/saleor-app-sdk/blob/5c56cf566d2cc6e4a075c8c619f174fa43aad6c9/src/types.ts#L223) too.

### App register handler factory

Example usage of app register handler in Next.js

```typescript
// pages/api/register.ts

import { createAppRegisterHandler } from "@saleor/app-sdk/handlers/next";
import { UpstashAPL } from "@saleor/app-sdk/APL";

export default createAppRegisterHandler({
  apl: new UpstashAPL({
    restURL: "...",
    restToken: "...",
  }),
  allowedSaleorUrls: ["https://your-saleor.saleor.cloud/graphql/"], // optional, see options below
  async onRequestVerified(req, { authData, respondWithError }) {
    await doSomethingAndBlockInstallation(authData.token).catch((err) => {
      // Return this method to break installation flow and show error in the Dashboard
      return respondWithError({ message: "Error, installation will fail" });
    });
  },
});
```

Options provided to handler factory

```typescript
export type CreateAppRegisterHandlerOptions = {
  apl: APL;
  /**
   * Provide your Saleor /graphql/ endpoints (or functions),
   * to allow app registration only in allowed Saleor instances.
   */
  allowedSaleorUrls?: Array<string | ((saleorApiUrl: string) => boolean)>;
  /**
   * Optional
   * Run right after Saleor calls this endpoint
   */
  onRequestStart?(
    request: Request,
    context: {
      authToken?: string;
      saleorDomain?: string;
      saleorApiUrl?: string;
      respondWithError: ({ status, message }) => never; // will throw
    }
  ): Promise<void>;
  /**
   * Optional
   * Run after all security checks
   */
  onRequestVerified?(
    request: Request,
    context: {
      authData: AuthData;
      respondWithError: ({ status, message }) => never; // will throw
    }
  ): Promise<void>;
  /**
   * Optional
   * Run after APL successfully AuthData, assuming that APL.set will reject a Promise in case of error
   */
  onAuthAplSaved?(
    request: Request,
    context: {
      authData: AuthData;
      respondWithError: ({ status, message }) => never; // will throw
    }
  ): Promise<void>;
  /**
   * Optional
   * Run after APL fails to set AuthData
   */
  onAplSetFailed?(
    request: Request,
    context: {
      authData: AuthData;
      error: unknown;
      respondWithError: ({ status, message }) => never; // will throw
    }
  ): Promise<void>;
};
```

See [APL](apl) for details on what is Auth Persistence Layer in Saleor apps.

### Async Webhook Handler

App SDK provides a utility that helps build (async) webhook handlers so that the app can react to Saleor events.

Read about it [here](saleor-webhook).
