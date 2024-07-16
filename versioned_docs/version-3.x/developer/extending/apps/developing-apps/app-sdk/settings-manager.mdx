# Settings Manager

Settings managers are used to persist configuration data like API keys, preferences, etc.

## SettingsValue interface

Entries in the manager are stored using the structure:

```typescript
  key: string;
  value: string;
  domain?: string;
```

## DeleteMetadataArg interface

The argument that can be used to remove metadata via `manager.delete()` method

It contains the key and domain:

```typescript
type DeleteMetadataArg = {
  key: string;
  domain: string;
};
```

For values that should not be migrated during environment cloning (as private keys to payment provider), the developer should use the `domain` field to bind it to a particular store instance.

## Available methods

- `get: (key: string, domain?: string) => Promise<string | undefined>`
- `set: (settings: SettingsValue[] | SettingsValue) => Promise<void>`
- `delete: (args: string | string[] | DeleteMetadataArg | DeleteMetadataArg[]) => Promise<void>`

:::warning
`delete` method can throw if the instance of SettingsManager was not configured with a proper mutation in the constructor.
:::

# MetadataManager

Default manager used by the [App Template](developer/extending/apps/developing-apps/app-template.mdx). Uses the app metadata as storage. Since the app developer can use any GraphQL client, the constructor must be parametrized with fetch and mutate functions:

```ts
import { MetadataEntry } from "@saleor/app-sdk/settings-manager";
import { Client } from "urql";

import {
  FetchAppDetailsDocument,
  FetchAppDetailsQuery,
  UpdateAppMetadataDocument,
  DeleteMetadataDocument,
} from "../generated/graphql";

export async function fetchAllMetadata(
  client: Client
): Promise<MetadataEntry[]> {
  const { error, data } = await client
    .query<FetchAppDetailsQuery>(FetchAppDetailsDocument, {})
    .toPromise();

  return (
    data?.app?.privateMetadata.map((md) => ({
      key: md.key,
      value: md.value,
    })) || []
  );
}

export async function mutateMetadata(
  client: Client,
  metadata: MetadataEntry[]
) {
  const { error: mutationError, data: mutationData } = await client
    .mutation(UpdateAppMetadataDocument, {
      id: appId,
      input: metadata,
    })
    .toPromise();

  return (
    mutationData?.updatePrivateMetadata?.item?.privateMetadata.map((md) => ({
      key: md.key,
      value: md.value,
    })) || []
  );
}

export async function deleteMetadata(client: Client, keys: string[]) {
  return client.mutation(DeleteMetadataDocument, { keys }).toPromise();
}
```

And create MetadataManager instance:

```ts
const settings = new MetadataManager({
  fetchMetadata: () => fetchAllMetadata(client),
  mutateMetadata: (md) => mutateMetadata(client, md),
  deleteMetadata: (keys) => deleteMetadata(client, keys),
});
```

# EncryptedMetadataManager

This manager adds a layer of encryption for all the stored data.
To operate correctly, the encryption key needs to be passed to the constructor:

```ts
new EncryptedMetadataManager({
  encryptionKey: process.env.SECRET_KEY, // secrets should be saved in the environment variables, never in the source code
  fetchMetadata: () => fetchAllMetadata(client),
  mutateMetadata: (metadata) => mutateMetadata(client, metadata),
  deleteMetadata: (keys) => deleteMetadata(client, keys),
});
```

:::warning
If the encryption key won't be passed, the application will exit.
:::
