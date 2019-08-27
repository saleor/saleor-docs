---
id: authenticate
title: How to Authenticate with our API
---

If you are entering the API for the first time as a not logged in user, you will have access to the objects available only publicly. For example, by default, you can query public data, such as published products or pages. 

To fetch protected data, like orders or users, you need to authenticate your access. 
Saleor API uses a [JWT token](https://jwt.io/) authentication mechanism. 
Once you create a token, you need to include it as a header with every GraphQL request.

The authorization header has the following format:

```
AuthENTICATION: JWT token
```

SCREETNSHOT OF WHAT COMES AFTER THE JWT

Create a new JWT token with the `tokenCreate` mutation:

```graphql
mutation {
  tokenCreate(email: "admin@example.com", password: "admin") {
    token
  }
}
```

Verification and refreshing the token is straightforward:


```graphql
mutation tokenVerify($token: String!) {
  verifyToken(token: $token) {
    payload
  }
}
```

```graphql
mutation tokenRefresh($token: String!) {
  tokenRefresh(token: $token) {
    token
    payload
  }
}
```