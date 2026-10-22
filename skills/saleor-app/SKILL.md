---
name: saleor-app
description: >
  Universal Saleor app development patterns. Covers the app protocol (manifest, registration,
  webhooks, authentication), payment processing, SDK abstractions, settings persistence, and
  Dashboard integration. Framework-agnostic with Next.js examples.
license: MIT
metadata:
  author: saleor
  version: "1.0.0"
---

# Saleor App

Guide for building apps that extend Saleor via webhooks and the GraphQL API.
Framework-agnostic protocol documentation with Next.js examples using `@saleor/app-sdk`.

## When to Apply

- Defining an app manifest or registering webhooks
- Handling async/sync webhook events from Saleor
- Building payment apps with the Transaction API and provider webhooks
- Authenticating requests (registration handshake, JWT, signature verification)
- Storing app settings in Saleor metadata
- Building Dashboard UI inside the iframe
- Making GraphQL calls with app tokens
- Debugging webhook failures, auth errors, or permission issues
- Deciding who can view the app and what they should see (user vs app scope)

## Rule Categories by Priority

| Priority | Category        | Impact   | Prefix          |
| -------- | --------------- | -------- | --------------- |
| 1        | Protocol        | CRITICAL | `protocol-`     |
| 2        | Permissions     | CRITICAL | `permissions-`  |
| 3        | Payment Apps    | CRITICAL | `payment-`      |
| 4        | Webhooks        | HIGH     | `webhook-`      |
| 5        | Data & Settings | HIGH     | `data-`         |
| 6        | Dashboard UI    | MEDIUM   | `dashboard-`    |
| 7        | Development     | MEDIUM   | `dev-`          |

## Quick Reference

### 1. Protocol (CRITICAL)

- `protocol-manifest` — App manifest, required endpoints, permissions, extensions
- `protocol-auth` — Registration handshake, APL, token scopes, JWT/signature verification

### 2. Permissions (CRITICAL)

- `permissions-access-scopes` — Define per-feature permissions; guard user JWT on every API route; baseline + per-route meta; UI mirrors server

### 3. Payment Apps (CRITICAL)

- `payment-app` — Financial truth, stable references, unknown outcomes, refunds, and reconciliation

### 4. Webhooks (HIGH)

- `webhook-async` — Async event handling, payload typing, retry policy, signature verification
- `webhook-sync` — Sync event handling, response schemas, performance constraints
- `webhook-external` — Receiving webhooks from external services, multi-tenant routing

### 5. Data & Settings (HIGH)

- `data-graphql` — GraphQL from apps: client setup, auth headers, codegen, app vs user tokens
- `data-settings` — MetadataManager, EncryptedMetadataManager, domain-scoped persistence

### 6. Dashboard UI (MEDIUM)

- `dashboard-appbridge` — AppBridge iframe protocol, actions, events, theme/locale sync

### 7. Development (MEDIUM)

- `dev-debug` — Common errors, webhook dry runs, tunnel setup, debugging checklist
