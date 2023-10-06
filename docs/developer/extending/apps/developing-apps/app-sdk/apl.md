# Auth Persistence Layer (APL)

Auth Persistence Layer (APL) is a technology-agnostic interface for managing auth data of registered Apps. APL provides a common set of operations that can be used by your application and App SDK.

## Available methods

- `get: (saleorApiUrl: string) => Promise<AuthData | undefined>` - If the entry for given saleorApiUrl exists, returns AuthData object.

- `set: (authData: AuthData) => Promise<void>` - Save auth data.

- `delete: (saleorApiUrl: string) => Promise<void>` - Remove auth data from the given API URL.

- `getAll: () => Promise<AuthData[]>` - Returns all auth data available.

- `isReady: () => Promise<AplReadyResult>` - Check if the persistence layer behind APL is ready. For example, when a database connection was established.

- `isConfigured: () => Promise<AplConfiguredResult>` - Check if the persistence layer behind APL is configured. For example, when an env variable is required by the database connection.

## AuthData

Interface containing data used for communication with the Saleor API:

```ts
export interface AuthData {
  domain: string;
  token: string;
  saleorApiUrl: string;
  appId: string;
  jwks: string;
}
```

- `domain` - Domain of the API
- `token` - Authorization token
- `saleorApiUrl` - Full URL to the Saleor GraphQL API
- `appID` - ID of the app assigned during the installation process
- `jwks` - JSON Web Key Set available at `https://<your-saleor-domain>/.well-known/jwks.json`, cached in the APL for the faster webhook validation

## AplReadyResult & AplConfiguredResult

Responses from `isReady()` and `isConfigured()` should match following:

```ts
type AplReadyResult =
  | {
      ready: true;
    }
  | {
      ready: false;
      error: Error;
    };

type AplConfiguredResult =
  | {
      configured: true;
    }
  | {
      configured: false;
      error: Error;
    };
```

## Example implementation

Let's create an APL which uses Redis for data storage:

```ts
import { createClient } from "redis";
import { APL, AuthData } from "@saleor/app-sdk/apl";

const client = createClient();
await client.connect();

/**
 * The APL uses API URL as a key to store and retrieve AuthData.
 * If you intend to use the same Redis instance for multiple Apps,
 * add prefix to the keys to avoid overwriting the data by different apps.
 * Keys will be formatted as below:
 * - `APPID1:https://other-example.saleor.cloud/graphql`
 * - `APPID1:https://example.saleor.cloud/graphql/`
 * - `APPID2:https://example.saleor.cloud/graphql/`
 **/
const prepareAuthDataKey = (apiUrl: string) => `${APP_ID}:${apiUrl}`;

const redisAPL: APL = {
  get: async (saleorApiUrl: string) => {
    const response = await client.get(prepareAuthDataKey(saleorApiUrl));
    if (response) {
      return JSON.parse(response);
    }
    return;
  },
  set: async (authData: AuthData) => {
    await client.set(
      prepareAuthDataKey(authData.saleorApiUrl),
      JSON.stringify(authData)
    );
  },
  delete: async (saleorApiUrl: string) => {
    await client.del(prepareAuthDataKey(saleorApiUrl));
  },
  getAll: async () => {
    throw new Exception("Not implemented.");
  },
};
```

You'll be able to use it directly:

```ts
import { redisAPL } from "./apl";

const getSavedAuthData = async () => {
  await redisAPL.get("https://example.saleor.cloud/graphql/");
};
```

Or access it from the context of API helpers from the SDK:

- [Protected API Handlers](./protected-handlers)
- [Webhook Handlers](./saleor-webhook)

### Using different APL depending on the environment

Depending on the environment your app is working on, you may want to use a different APL. For example, you may like to use `FileAPL` during local development because it does not require any additional infrastructure. Deployed apps, on the other hand, need a more robust solution.

To handle both scenarios, initialize the proper APLs in your code based on its environment. In your application code:

```ts
// lib/saleorApp.ts

import { FileAPL, UpstashAPL } from "@saleor/app-sdk/APL";

// Based on the environment variable, the app will use a different APL:
// - For local development store auth data in the `.auth-data.json`.
// - For app deployment on hosted environment like Vercel, use UpstashAPL
export const apl =
  process.env.APL === "upstash" ? new UpstashAPL() : new FileAPL();
```

Now you can use it for in your view:

```ts
import { SALEOR_API_URL_HEADER } from "@saleor/app-sdk/const";
import { NextApiHandler } from "next";

// import created APL
import { apl } from "@lib/saleorApp";

const handler: NextApiHandler = async (request, response) => {
  const saleorApiUrl = request.headers[SALEOR_API_URL_HEADER];

  // Get auth data
  const authData = apl.get(saleorApiUrl);

  // view logic...

  return response.status(200).end();
};

export default handler;
```

## Available APLs

### FileAPL

File-based storage of auth data intended for local development. Data are stored in the `.saleor-app-auth.json` file. You'll be able to develop an app without additional dependencies or infrastructure.

Please note: this APL supports single tenant only (new registrations overwrite previous ones) and should not be used on production.

### UpstashAPL

[Upstash](https://upstash.com) is a Redis SaaS targeting serverless applications. Its free tier is more than enough to start developing multi-tenant Saleor Apps, and credit card info is not required to create an account.

APL implementation uses REST endpoints to store the data, so no extra dependencies are required.

To use UpstashAPL, you'll need an endpoint URL and password. After creating a database, both will be available at [dashboard](https://console.upstash.com/). Credentials can be passed to APL during its creation:

```ts
import { UpstashAPL } from "@saleor/app-sdk/APL";

const apl = new UpstashAPL({
  restToken: "XXXXXXXXXXXXXX",
  restURL: "https://eu2-red-panda-00000.upstash.io",
});
```

Or using environment variables: `UPSTASH_TOKEN`, `UPSTASH_URL`.

Note: Recently, Vercel introduced [KV storage](https://vercel.com/docs/storage/vercel-kv), which uses Upstash under the hood. Upstash APL will work with values provided by Vercel KV Storage too.

### EnvAPL

For static & single-tenant applications, you may want to set everything once, usually in env variables, and leave it.

There is an APL for this use case: `EnvAPL`.

> **Warning**
> Using this APL is highly discouraged in any production environment.
> It will break if the app token is regenerated. It will not work with any flow related to updates of the app.

#### Usage

##### 1. Configuring the app to use env apl

```tsx
import { EnvAPL } from "@saleor/app-sdk/APL";

const apl = new EnvAPL({
  env: {
    /**
     * Map your env variables here. You don't have these values yet
     */
    token: envVars.SALEOR_APP_TOKEN,
    appId: envVars.SALEOR_APP_ID,
    saleorApiUrl: envVars.SALEOR_API_URL,
  },
  /**
   * Set it to "true" - check your app logs during app registration. APL will print the values you need
   */
  printAuthDataOnRegister: true,
});
```

##### 2. Setting env variables

After step 1, you should see your logs in a similar way:

```
┌──────────────┬─────────────────────────────────────────────┐
│   (index)    │                   Values                    │
├──────────────┼─────────────────────────────────────────────┤
│ saleorApiUrl │ 'https://my-saleor-instance.cloud/graphql/' │
│    appId     │                  'app-id'                   │
│    token     │                'some-token'                 │
│     jwks     │                    '{}'                     │
│    domain    │         'my-saleor-instance.cloud'          │
└──────────────┴─────────────────────────────────────────────┘
```

You need to set env variables in your provider, e.g., in Vercel, you need `appId`, `token`, and `saleorApiUrl`.
Ensure the names of the variables match the constructor options from Step 1.

##### 3. Turning off logging and redeploying

After setting the env var, you should disable printing it for security reasons.

Change the constructor to include:

```
printAuthDataOnRegister: false
```

Then, redeploy the app. It should be configured and work for this specific Saleor instance.

Keep in mind that:

- If you promote the environment, you need to update `saleorApiUrl`
- If you reinstall the app, you need to repeat the process to receive a new token and ID
