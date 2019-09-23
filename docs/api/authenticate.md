---
id: authenticate
title: How to Authenticate with our API
---

If you are entering the API for the first time as a user who is not logged in, you will only have access to the objects available publicly. For example, by default, you can query public data, such as published products or pages.

To fetch protected data, like orders or users, you need to authenticate your access.
Saleor API uses a [JWT token](https://jwt.io/) authentication mechanism.
Once you create a token, you need to include it as a header with every GraphQL request.

The authorization header has the following format:

```
Authorization: JWT your-token
```

## Creating a JWT token

To create a new JWT token for a user, use the `tokenCreate` mutation and provide the user's credentials as the mutation input (`email` and `password`):

```graphql
mutation {
  tokenCreate(email: "admin@example.com", password: "admin") {
    token
    user {
      email
    }
    errors {
      field
      message
    }
  }
}
```

A successful response would look like:

```json
{
  "data": {
    "tokenCreate": {
      "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwiZXhwIjoxNTY2OTEzODc1LCJvcmlnSWF0IjoxNTY2OTEzNTc1fQ.Dw0ccxdxEXsSpM61_Zr_uCyZd-88cNZqM62k_nAjFAE",
      "user": {
        "email": "admin@example.com"
      },
      "errors": []
    }
  }
}
```

To use the token and authorize subsequent requests, you need to include it as a HTTP Authorization request header:

```
Authorization: JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwiZXhwIjoxNTY2OTEzODc1LCJvcmlnSWF0IjoxNTY2OTEzNTc1fQ.Dw0ccxdxEXsSpM61_Zr_uCyZd-88cNZqM62k_nAjFAE
```

## Using JWT tokens in Playground

If you are using Playground to browse the API, you can authorize your requests by providing the JWT token in the HTTP HEADERS tab. To do that, paste the following JSON structure to the tab:

```
{
  "Authorization": "JWT your-token"
}
```

## Using JWT tokens with cURL

To authenticate requests sent with cURL, use the `-H` or `--header` parameter to pass the JWT token:

```console
curl \
  -H "Authorization: JWT your-token" \
  -H "Content-Type: application/json" \
  -X POST \
  -d '{"query": "{ me { email } }"}' \
  http://localhost:8000/graphql/
```

## Verifying and refreshing a token

To verify the token, use the following mutation:

```graphql
mutation {
  tokenVerify(token: "your-token") {
    payload
  }
}
```

A successful response:

```json
{
  "data": {
    "tokenVerify": {
      "payload": {
        "email": "admin@example.com",
        "exp": 1566915066,
        "origIat": 1566548900
      }
    }
  }
}
```

To refresh the token:

```graphql
mutation {
  tokenRefresh(token: "your-token") {
    token
    payload
  }
}
```

A successful response:

```json
{
  "data": {
    "tokenRefresh": {
      "token": "new-token",
      "payload": {
        "email": "admin@example.com",
        "exp": 1566915066,
        "origIat": 1566548900
      }
    }
  }
}
```
