---
id: error-handling
title: Error Handling
---

There are several error types in the GraphQL API and you may come across different ones depending on the operations you are trying to perform.

The Saleor GraphQL API handles the following three errors:

## Syntax error

This error occurs if, when performing some specified operation, you provide wrong or unrecognized input data. The GraphQL checks the syntax as you write and, if you are trying to perform an operation which is unknown, the editor you are using will notify you. However, if you proceed with sending the request, you will get a syntax error.

Below is an example of an error triggered by wrong syntax. The following query tries to fetch the `fullName` field which doesn't exist on the `User` type:

```graphql
{
  me {
    email
    fullName
  }
}
```

Sending this query to the server would result in the following syntax error:

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

This type of error occurs when the user passes invalid data as the mutation input. For example, while creating a new user, you provide an email address that is already being used in another user's account. It is therefore not unique and, as a result, you will get a validation error.

Validation errors are part of the schema, which means that we need to include them in the query to get them explicitly. For example, in all mutations, they can be obtained through the `errors` field.

Below is an example of an error triggered by validation issues:

```graphql
mutation {
  accountRegister(input: { email: "customer@example.com", password: "" }) {
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

```json
{
  "data": {
    "accountRegister": {
      "user": null,
      "errors": [
        {
          "field": "email",
          "message": "User with this email already exists."
        }
      ]
    }
  }
}
```

Validation errors are returned in the `errors` field.

## Permission error

This type of error occurs when you are trying to perform a specific operation but you are not authorized to do so; in other words, you have no sufficient permissions assigned.

Below is an example of an error triggered by insufficient authorization. The `staffUsers` query requires appropriate admin permissions:

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

Executing it without proper permission would result in the following error:

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
