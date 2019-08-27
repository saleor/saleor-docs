---
id: error-handling
title: Error Handling
---

There are several error types in GraphQL API and you may come across several different error types, depending on the operations you are trying to perform.

The Saleor GraphQL API handles the following three errors:

## Syntax error

This error occurs if, when performing some specified operation, you provide wrong or unrecognized input data. The GraphQL checks the syntax as you write and if you are trying to perform an operation which is unknown, the editor you are using will notify you about that. However, if you proceed with sending the request, you will get a syntax error.

Below is an example of an error triggered by wrong syntax. The following query tries to fetch the `fullName` field which doesn't exists on the `User` type:

```graphql
{
  me {
    email
    fullName
  }
}
```

Sending this query to the server would result in the syntax error:

```json
{
  "error": {
    "errors": [
      {
        "message": "Cannot query field \"fullName\" on type \"User\". Did you mean \"firstName\" or \"lastName\"?",
        "locations": [
          {
            "line": 4,
            "column": 5
          }
        ]
      }
    ]
  }
}
```

## Validation error

This type of error occurs when user passed bad data as the mutation input. For example, while you are trying to create a new user, you are providing their email address and it happens to be already used in another user's account. It is therefore not unique and as a result you will get a validation error.

Validation errors are part of the schema which means that we need to explicitly include them in the query to get them. For example in all mutations they can be obtained through the `errors` field.

Below is an example of an error triggered by validation issues:

```graphql
mutation {
  accountRegister(input: { email: "customer@example.com", password: "" }) {
    errors {
      field
      message
    }
    user {
      email
    }
  }
}
```

```json
{
  "data": {
    "accountRegister": {
      "errors": [
        {
          "field": "email",
          "message": "User with this email already exists."
        }
      ],
      "user": null
    }
  }
}
```

Validation errors are returned in the `errors` field.

## Permission error

This type of error occurs when you are trying to perform a specific operation but you are not authorized to do so, in other words, you have no sufficient permissions assigned.

Below is an example of an error triggered by insufficient authorization. The `staffUsers` query requires particular admin permissions:

```graphql
{
  staffUsers(first: 20) {
    edges {
      node {
        id
      }
    }
  }
}
```

Executing it without proper permission would result in the error:

```json
{
  "errors": [
    {
      "message": "You do not have permission to perform this action",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": ["staffUsers"]
    }
  ],
  "data": {
    "staffUsers": null
  }
}
```
