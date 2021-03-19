---
title: OpenID Connect
---
:::note

 The OIDC plugin is available only on Saleor Cloud. 

:::

### Enabling OpenID Connect plugin

The OIDC plugin supports two way of integrations:
  - _Saleor as a client for authorization server_ - uses authorization code flow to authorize user.
  - _Saleor as a resource server_ - grant access users to Saleor by using the OAuth access token

Go to Configuration -> Plugins -> OpenID Connect and fill in the fields:

- **Client ID:** Your client ID, required to authenticate on the OAuth provider side.
- **Client secret:** Your client secret, required to authenticate on the OAuth provider side.
- **Enable refresh token:** Determine if the refresh token should be also fetched from the provider. By disabling it, users will need to re-login after the access token expired. By enabling it, frontend apps will be able to refresh the access token (Optional for flow: _Saleor as a client for authorization server_).
- **OAuth authorization URL:** Based on the authorization URL, Saleor will generate the redirect URL for the authorization request (Required for flow: _Saleor as a client for authorization server_).
- **OAuth token URL:** The URL used to exchange received OAuth code to the OAuth token (Required for flow: _Saleor as a client for authorization server_).
- **JSON web key set URL:** The JSON Web Key Set (JWKS) is a set of keys containing the public 
keys used to verify any JSON Web Token (JWT) issued by the authorization server (Required for both integration flows).
- **User info URL:** The URL which can be used to fetch user details by using an access token (Required for flow: _Saleor as a resource server_).
- **OAuth logout URL:** The logout URL which Saleor will return for frontend's logout request (Optional for flow: _Saleor as a client for authorization server_).
- **Audience:** The Oauth resource identifier. If provided, Saleor will define the audience for each authorization request.  Used to fetch user permissions from OAuth provider and map it to Saleor's permission (Optional for both integration flows).
- **Use OAuth scope permissions:** Use OAuth scope permissions to grant a logged-in user access to protected resources. Your OAuth provider needs to have defined Saleor's permission scopes in format _saleor:<saleor-permission\> (Required for both integration flows).


### Using OAuth permissions in Saleor

If `Use OAuth scope permissions` is enabled, Saleor will request his own permissions as OAuth scopes.  Each permission has the prefix `saleor:`.  If the user has assigned Saleor's permissions on the OAuth side, Saleor will grant them to the logged-in user.

:::note

Your OAuth provider needs to have an assigned audience with proper Saleor's permissions with prefix `saleor:`.

:::

>*UserA* has assigned permissions on the OAuth side - `saleor:manage_apps` and `saleor:manage_orders`, *UserB* has assigned 
> permission - `saleor:manage_users`. When *UserA* logs in to the Saleor using *OpenID Connect* plugin, the plugin will grant the *UserA*
> permissions to *MANAGE_APPS* and *MANAGE_ORDERS*. The *UserB* will have access to resources protected by *MANAGE_USERS*
