# Saleor Webhook utilities

Apps are usually connected via webhooks - one App sends an HTTP request to another App, informing about some event or requesting some action to be performed.

To inform your App about events originating from Saleor, you need to expose a webhook handler, which Saleor will call with a POST request.

The App SDK provides a utility that abstracts connection details and auth, allowing developers to focus on business logic.

Depending on the type of the webhook, you can choose one of the classes:

- `SaleorAsyncWebhook`
- `SaleorSyncWebhook`

## Common configuration

Both `SaleorSyncWebhook` and `SaleorAsyncWebhook` contain a similar API with few differences.

### Constructing Webhook instance

In Next.js `pages` directory, create a page, e.g., `pages/api/webhooks/order-created.ts`. We recommend keeping the webhook type in the file name, which Next.js will resolve to route the path.

```typescript
import { SaleorAsyncWebhook } from "@saleor/app-sdk/handlers/next";

/**
 * Default body parser must be turned off - the raw body is needed to verify the signature
 */
export const config = {
  api: {
    bodyParser: false,
  },
};

/**
 * To be type-safe, define payload from API. This should be imported from generated GraphQL code
 */
type OrderPayload = {
  id: string;
};

export const orderCreatedWebhook = new SaleorAsyncWebhook<OrderPayload>(
  options
);
```

For `SaleorSyncWebhook`, it will be similar. Create e.g., `order-calculate-taxes.ts` page and create a new instance:

```typescript
import { SaleorSyncWebhook } from "@saleor/app-sdk/handlers/next";

/**
 * Default body parser must be turned off - the raw body is needed to verify the signature
 */
export const config = {
  api: {
    bodyParser: false,
  },
};

/**
 * To be type-safe, define payload from API. This should be imported from generated GraphQL code
 */
type CalculateTaxedPayload = {
  // taxes payload from subscription
};

export const orderCalculateTaxesWebhook = new SaleorSyncWebhook<OrderPayload>(
  options
);
```

### Configuring Webhook instance

`options` in the constructor must be specified. Here are all options:

```typescript
type Options = {
  /**
   * Additional webhook name, optional.
   */
  name?: string;
  /**
   * Path to webhook. It should represent a relative path from the base app URL. In Next.js, it will start with `api/`, e.g. `api/webhooks/order-created`.
   */
  webhookPath: string;
  /**
   * Valid Async or Sync webhook. Constructor is statically typed, so only valid Sync/Async webhooks will be allowed
   */
  event: Event;
  /**
   * Should event be active after installation, enabled by default
   */
  isActive?: boolean;
  /**
   * APL instance - see docs/apl/md
   */
  apl: APL;
  /**
   * Optional callback that allows to inject custom error handling and take control of the response
   */
  onError?(
    error: WebhookError | Error,
    req: NextApiRequest,
    res: NextApiResponse
  ): void;
  /**
   * Optional callback that allows formatting error messages. Useful to control how many details should be returned in the response
   */
  formatErrorResponse?(
    error: WebhookError | Error,
    req: NextApiRequest,
    res: NextApiResponse
  ): Promise<{
    code: number;
    body: object | string;
  }>;
  /**
   * Required subscription query. Can be raw GraphQL string or the instance of query wrapped in `gql` tags
   */
  query: string | ASTNode;
};
```

#### Configuration examples

##### SaleorAsyncWebhook configuration example

```typescript
// pages/api/webhooks/order-created.ts

/**
 * To be type-safe, define payload from API. This should be imported from generated GraphQL code
 */
type OrderPayload = {
  id: string;
};

/**
 * Default body parser must be turned off - the raw body is needed to verify the signature
 */
export const config = {
  api: {
    bodyParser: false,
  },
};

export const orderCreatedWebhook = new SaleorAsyncWebhook<OrderPayload>({
  name: "Order Created",
  webhookPath: "api/webhooks/order-created",
  event: "ORDER_CREATED",
  isActive: true,
  apl: require("../lib/apl"),
  query: `
 subscription {
 event {
 ... on OrderCreated {
 order {
 id
          }
        }
      }
    }
  `,
  onError(error: WebhookError | Error) {
    // Can be used to e.g. trace errors
    sentry.captureError(error);
  },
  async formatErrorResponse(
    error: WebhookError | Error,
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    return {
      code: 400,
      body: "My custom response",
    };
  },
});
```

##### SyncAsyncWebhook configuration example

```typescript
// pages/api/webhooks/order-created.ts

/**
 * To be type-safe, define payload from API. This should be imported from generated GraphQL code
 */
type Payload = {
  taxBase: {
    currency: string;
  };
};

/**
 * Default body parser must be turned off - the raw body is needed to verify the signature
 */
export const config = {
  api: {
    bodyParser: false,
  },
};

export const orderCalculateTaxesWebhook = new SaleorAsyncWebhook<Payload>({
  name: "Order Calculate Taxes",
  webhookPath: "api/webhooks/order-created",
  event: "ORDER_CALCULATE_TAXES",
  isActive: true,
  apl: require("../lib/apl"),
  query: `
    subscription {
      event {
        ... on CalculateTaxes {
          taxBase {
            currency
          }
        }
      }
    }
  `,
  onError(error: WebhookError | Error) {
    sentry.captureError(error);
  },
  async formatErrorResponse(
    error: WebhookError | Error,
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    return {
      code: 400,
      body: "My custom response",
    };
  },
});
```

### Resources

- Check available events [here](docs/developer/extending/webhooks/asynchronous-events.mdx#available-webhook-events)
- [Read more about APLs](./apl.md)
- [Subscription query documentation](docs/developer/extending/webhooks/subscription-webhook-payloads.mdx)

### Extending app manifest

Webhooks are created in Saleor when the App is installed. Saleor uses [AppManifest](docs/developer/extending/apps/architecture/manifest.mdx) to get information about webhooks to create.  
`SaleorSyncWebhook` & `SaleorAsyncWebhook` utility can generate this manifest:

```typescript
// pages/api/manifest

import { createManifestHandler } from "@saleor/app-sdk/handlers/next";

import { orderCreatedWebhook } from "./order-created.ts";

export default createManifestHandler({
  manifestFactory({ appBaseUrl }) {
    return {
      /**
       * Add one or more webhook manifests.
       */
      webhooks: [orderCreatedWebhook.getWebhookManifest(appBaseUrl)],
      // ...rest of your App's manifest
    };
  },
});
```

Now, try to read your manifest. In the default Next.js config, it will be `GET localhost:3000/api/manifest`. You should see the webhook configuration as part of the manifest response.

### Creating webhook domain logic

Now, let's create a handler that will process webhook data. Let's go back to the handler file `pages/api/webhooks/order-created.ts`.

```typescript
type OrderPayload = {
  id: string;
};

export const orderCreatedWebhook = new SaleorAsyncWebhook<OrderPayload>({
  // ... your configuration
});

/**
 * Handler has to be a default export so the Next.js will be able to use it
 */
export default orderCreatedWebhook.createHandler((req, res, context) => {
  const { baseUrl, event, payload, authData } = context;

  console.log(payload.id); // type is inferred

  // Perform some domain logic

  // End with status 200
  return res.status(200).end();
});
```

### Typed sync webhook response

Sync webhooks need to return a response to Saleor so that the operation can be completed. To achieve that, `SaleorAsyncWebhook` injects an additional context field `buildResponse`.
It infers even from the constructor and provides a typed factory:

```typescript
const webhook = new SaleorAsyncWebhook({
  event: "ORDER_CALCULATE_TAXES" /* ... rest of config */,
});

orderCreatedWebhook.createHandler((req, res, context) => {
  return res.status(200).send(
    context.buildResponse({
      // Fields are typed here
    })
  );
});
```

### query vs subscriptionQueryAst

Subscription query can be specified using plain string or as an `ASTNode` object created by `gql` tag.

If your project does not use any code generation for GraphQL operations, use the string. In case you are using [GraphQL Code Generator](https://the-guild.dev/graphql/codegen), which we highly recommend, you should pass a subscription as GraphQL ASTNode:

```typescript
/**
 * Subscription query, you can define it in the `.ts` file. If you write operations in separate `.graphql` files, codegen will also export them in the generated file.
 */
export const ExampleProductUpdatedSubscription = gql`
  ${ProductUpdatedWebhookPayload}
  subscription ExampleProductUpdated {
    event {
      fragment
      ProductUpdatedWebhookPayload
      on
      ProductUpdated {
        product {
          id
          name
        }
      }
    }
  }
`;

export const productUpdatedWebhook =
  new SaleorAsyncWebhook<ProductUpdatedWebhookPayloadFragment>({
    name: "Example product updated webhook",
    webhookPath: "api/webhooks/saleor/product-updated",
    event: "PRODUCT_UPDATED",
    apl: saleorApp.apl,
    query: ExampleProductUpdatedSubscription, // Or use plain string
  });
```
