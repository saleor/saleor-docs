---
id: error-handling
title: Error Handling
---

There are several error types in GraphQL API and you may come across several different error types, depending on the operations you are trying to perform.  

The Saleor GraphQL API handles the following three errors:

## Syntax error

This error occurs if, when performing some specified operation, you provide wrong or unrecognized input data. The GraphQL checks the syntax as you write and if you are trying to perform an operation which is unknown, the editor you are using will notify you about that. However, if you proceed with sending the request, you will get a syntax error.

Below is an example of an error triggered by wrong syntax:

CODE SNIPPET NEEDED

## Validation error

This type of error occurs when, for example, while you are trying to create a new user, you are providing their email address and it happens to be already used in another user's account. It is therefore not unique and as a result you will get a validation error.

Below is an example of an error triggered by validation issues:

CODE SNIPPET NEEDED

## Permission error

This type of error occurs when you are trying to perform a specific operation but you are not authorized to do so, in other words, you have no sufficient permissions assigned.

Below is an example of an error triggered by insufficient authorization:

CODE SNIPPET NEEDED
