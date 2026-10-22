# Saleor Configurator — Complete Guide

> Compiled from all rule files. Use this for a single-pass read of all Configurator patterns.

## Abstract

Saleor Configurator is a "commerce as code" CLI that lets you define your entire Saleor store configuration in a single `config.yml` file and deploy it declaratively. Changes are version-controlled, reproducible across environments, and diffable before apply.

## Table of Contents

1. [Config Schema](#1-config-schema)
2. [Entity Identity Strategies](#2-entity-identity-strategies)
3. [CLI Commands](#3-cli-commands)
4. [Deployment Pipeline](#4-deployment-pipeline)
5. [Diff & Sync Behavior](#5-diff--sync-behavior)

---

## 1. Config Schema

`config.yml` is the single source of truth for your Saleor store. Each top-level key maps to an entity type. All sections are optional — omit a section to leave that part of the store unchanged.

### Top-Level Structure

```yaml
shop:               # Global store settings (singleton)
channels:           # Sales channels
taxClasses:         # Tax classifications
productTypes:       # Product templates
pageTypes:          # CMS page templates
productAttributes:  # Attributes for products and variants
contentAttributes:  # Attributes for CMS pages
categories:         # Product category hierarchy
collections:        # Product groupings
warehouses:         # Fulfillment locations
shippingZones:      # Geographic shipping rules
products:           # Product catalog
menus:              # Navigation menus
models:             # Custom data models
```

### Key Rules

- **Deploy is additive only** — Configurator does not delete entities; it only creates and updates
- **Omitted and empty sections are both ignored** — neither causes any remote changes
- **Cross-references use the target entity's identifier** — products reference `productType` by name, `category` by slug (see section 2)
- **Validation runs before any mutations** — duplicate slugs/names or broken references abort the deploy

### Minimal Example

```yaml
shop:
  name: "My Store"
  defaultCurrency: USD
  defaultCountry: US

productTypes:
  - name: "Physical Product"
    kind: NORMAL

categories:
  - name: "Electronics"
    slug: "electronics"
```

### Full Schema Reference

- **Schema docs**: [SCHEMA.md](https://github.com/saleor/configurator/blob/main/SCHEMA.md)
- **JSON schema**: [schema.json](https://github.com/saleor/configurator/blob/main/schema.json)
- **Full example**: [example.yml](https://github.com/saleor/configurator/blob/main/example.yml)

### Config Anti-Patterns

❌ Don't mix up cross-reference identifier types — see section 2 for which entity uses slug vs name

❌ Don't use duplicate slugs or names — validation aborts the deployment

---

## 2. Entity Identity Strategies

Every entity has exactly **one** identification strategy. Using the wrong one causes mismatches.

### Strategy Matrix

| Entity        | Strategy  | Field  | Example               |
| ------------- | --------- | ------ | --------------------- |
| Categories    | slug      | `slug` | `smartphones`         |
| Channels      | slug      | `slug` | `default-channel`     |
| Collections   | slug      | `slug` | `summer-sale`         |
| Menus         | slug      | `slug` | `main-navigation`     |
| Products      | slug      | `slug` | `iphone-15-pro`       |
| Warehouses    | slug      | `slug` | `us-east-warehouse`   |
| ProductTypes  | name      | `name` | `Physical Product`    |
| PageTypes     | name      | `name` | `Blog Post`           |
| TaxClasses    | name      | `name` | `Standard Rate`       |
| ShippingZones | name      | `name` | `North America`       |
| Attributes    | name      | `name` | `Color`               |
| Shop          | singleton | N/A    | (only one per store)  |

### Slug Rules

- Lowercase alphanumeric with hyphens only: `/^[a-z0-9-]+$/`
- Case-sensitive: `Default-Channel` ≠ `default-channel`
- Changing a slug = delete old + create new

### Name Rules

- Any printable characters, case-sensitive and exact
- `Physical Product` ≠ `physical product`

### Cross-Reference Consistency

When entities reference each other, use the **target entity's** identifier type:

```yaml
products:
  productType: "Physical Product"   # ProductType is name-based → name
  category: "electronics"           # Category is slug-based → slug

warehouses:
  shippingZones:
    - "North America"               # ShippingZone is name-based → name
```

### Why Two Strategies Exist

**Slug-based entities** are customer-facing (URLs). Slugs must be stable and URL-safe.

**Name-based entities** are internal configuration (product templates, tax rules). Not exposed in URLs.

### Identity Anti-Patterns

❌ Don't use name when slug is expected — `category: "Electronics"` fails when the slug is `electronics`

❌ Don't change slugs casually — breaks downstream storefront URLs

❌ Don't assume case-insensitive matching — all comparisons are exact

---

## 3. CLI Commands

### Authentication

```bash
# Via flags
pnpm dlx @saleor/configurator deploy --url=https://your-store.saleor.cloud/graphql/ --token=YOUR_TOKEN

# Via environment variables (recommended for CI)
export SALEOR_URL=https://your-store.saleor.cloud/graphql/
export SALEOR_TOKEN=YOUR_TOKEN
pnpm dlx @saleor/configurator deploy
```

### Core Commands

**`introspect`** — Downloads remote state → writes `config.yml`

```bash
pnpm dlx @saleor/configurator introspect
```

Use to bootstrap or re-sync after Dashboard edits. Overwrites local `config.yml`.

**`deploy`** — Applies `config.yml` to the remote store

```bash
pnpm dlx @saleor/configurator deploy
pnpm dlx @saleor/configurator deploy --report-path=reports/deploy.json
```

**`diff`** — Previews what would change (read-only)

```bash
pnpm dlx @saleor/configurator diff
```

**`start`** — Interactive first-time setup wizard

### Non-Interactive Mode

In CI/CD and non-TTY environments, confirmations are automatically skipped. No flag needed.

### Selective Deployment

```bash
pnpm dlx @saleor/configurator deploy --include=productTypes,categories
pnpm dlx @saleor/configurator deploy --exclude=products
```

### Useful Flags

| Flag | Purpose |
| ---- | ------- |
| `--url` | Saleor GraphQL endpoint |
| `--token` | API token |
| `--report-path` | Custom path for deployment report |
| `--include=a,b` | Only deploy listed entity types |
| `--exclude=a,b` | Skip listed entity types |

### Environment Variables

| Variable | Purpose |
| -------- | ------- |
| `SALEOR_URL` | Saleor GraphQL endpoint |
| `SALEOR_TOKEN` | API authentication token |
| `LOG_LEVEL` | Logging verbosity (`info`, `debug`) |
| `GRAPHQL_MAX_CONCURRENCY` | Max concurrent requests (default: 4) |
| `GRAPHQL_INTERVAL_CAP` | Max requests per interval (default: 20) |

### Recommended Workflow

```bash
pnpm dlx @saleor/configurator introspect   # Bootstrap from remote
# Edit config.yml
pnpm dlx @saleor/configurator diff         # Preview changes
pnpm dlx @saleor/configurator deploy       # Apply changes
pnpm dlx @saleor/configurator deploy       # Verify idempotency (0 changes)
```

### CLI Anti-Patterns

❌ Don't commit `.env.local` or tokens

❌ Don't skip `diff` before first production deploy

❌ Don't run `introspect` after editing config — it overwrites your changes

---

## 4. Deployment Pipeline

### Stage Order

```
 1. Validation       → Pre-flight checks (schema, duplicates, references)
 2. Shop Settings    → Global store configuration
 3. Product Types    → Product templates
 4. Page Types       → CMS page templates
 5. Attributes       → Shared attribute definitions
 6. Categories       → Product hierarchy
 7. Collections      → Product groupings
 8. Warehouses       → Fulfillment locations
 9. Shipping Zones   → Geographic shipping rules
10. Products         → Full catalog
11. Tax Config       → Tax classes
12. Channels         → Sales channels
13. Menus            → Navigation
14. Models           → Custom data models
```

### Dependency Graph

```
Shop Settings
    ├── Product Types ──────────────────────────────────────┐
    ├── Page Types                                           │
    ├── Attributes                                           │
    ├── Categories                                           │
    ├── Collections                                          │
    ├── Warehouses ──── Shipping Zones                       │
    └───────────────────────────────────────────────────────┴──► Products
                                                                      │
    Tax Classes  ◄────────────────────────────────────────────────────┤
    Channels     ◄────────────────────────────────────────────────────┤
    Menus        ◄────────────────────────────────────────────────────┘
    Models (independent)
```

### Stage Execution Pattern

Each stage: Fetch remote state → Compare → Plan creates/updates/deletes → Execute (chunked at 50) → Report

### Failure Behavior

Default: Stop on first stage failure. No automatic rollback. Check deployment report for what succeeded.

### Idempotency

Running deploy twice with the same `config.yml` should produce zero changes on the second run.

### Performance

Large catalogs can take minutes. Rate limiting (HTTP 429) is handled automatically with exponential backoff (max 5 retries).

### Deployment Report

Auto-saved as `deployment-report-YYYY-MM-DD_HH-MM-SS.json`. Includes per-stage counts, errors, timing, and resilience stats.

### Pipeline Anti-Patterns

❌ Don't use `--include` to skip dependency stages without ensuring dependencies exist remotely

❌ Don't treat partial failure as success — check the report

---

## 5. Diff & Sync Behavior

### Deploy is Additive Only

Configurator **does not delete entities**. It only creates and updates. Remote entities not present in `config.yml` are left untouched.

### How Comparison Works

For each entity type:
1. Fetch all remote entities
2. Match each local entity to remote by slug or name
3. Compare field values
4. Produce result: `create`, `update`, or `unchanged`

### Diff Result Types

| Result      | Meaning                                        |
| ----------- | ---------------------------------------------- |
| `create`    | Exists locally, not remotely                   |
| `update`    | Exists in both, fields differ                  |
| `unchanged` | Exists in both, all fields match               |

### Omitted or Empty Sections = No Changes

Both omitted sections and empty arrays are treated identically — no remote changes.

```yaml
# Only shop and productTypes will be synced
# Everything else untouched
shop:
  name: "My Store"
productTypes:
  - name: "Physical Product"
    kind: NORMAL
```

### Nested Comparison

Nested structures are also diffed:
- ProductType → assigned attributes
- Category → parent hierarchy
- Menu → items and children
- Product → variants, pricing, stocks, attributes
- Attribute → allowed values

### Debugging Unexpected Diffs

1. Run `introspect` to capture current remote state
2. `git diff` to see what changed
3. Decide whether to keep local or remote state
4. Re-deploy to reconcile

### Diff Anti-Patterns

❌ Don't rely on list order — entities matched by slug/name, not position

❌ Don't run `introspect` to check state — use `diff` instead (read-only)
