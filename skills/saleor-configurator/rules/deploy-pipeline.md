# Deployment Pipeline

The deploy command processes entities in a fixed order. This order exists because some entities depend on others — products need their product types to already exist.

## Stage Order

```
 1. Validation       → Pre-flight checks (schema, duplicates, references)
 2. Shop Settings    → Global store configuration
 3. Product Types    → Product templates (depends on Attributes)
 4. Page Types       → CMS page templates (depends on Attributes)
 5. Attributes       → Shared attribute definitions
 6. Categories       → Product hierarchy
 7. Collections      → Product groupings
 8. Warehouses       → Fulfillment locations
 9. Shipping Zones   → Geographic shipping rules
10. Products         → Full catalog (depends on Types, Categories, Attributes)
11. Tax Config       → Tax classes
12. Channels         → Sales channels (depends on Warehouses)
13. Menus            → Navigation (may reference Categories, Collections, Products)
14. Models           → Custom data models
```

## Dependency Graph

```
Shop Settings
    ├── Product Types ──────────────────────────────┐
    ├── Page Types                                   │
    ├── Attributes                                   │
    ├── Categories                                   │
    ├── Collections                                  │
    ├── Warehouses ──── Shipping Zones               │
    └───────────────────────────────────────────────┴──► Products
                                                              │
    Tax Classes  ◄────────────────────────────────────────────┤
    Channels     ◄────────────────────────────────────────────┤
    Menus        ◄────────────────────────────────────────────┘
    Models (independent)
```

## Stage 1: Validation

Runs before any mutations. Aborts the entire deployment on failure.

Checks:
- Schema validation against Zod schemas
- Duplicate slug/name detection within each entity type
- Required field presence
- Cross-reference integrity (e.g., product's `productType` must exist)

## What Each Stage Does

Each stage follows the same pattern:

1. **Fetch** current remote state
2. **Compare** local config vs remote state
3. **Plan** which entities to create, update, or delete
4. **Execute** in chunks (default: 50 items per chunk)
5. **Report** results (counts, errors, timing)

## Failure Behavior

**Default**: Stop on first stage failure. Later stages do not run.

Partial deployments leave the store in a partially updated state — there is no automatic rollback. Check the deployment report to see what succeeded.

## Idempotency

Deploy is designed to be idempotent. Running it twice with the same `config.yml` should result in zero changes on the second run. If the second run shows changes, something external modified the store between runs.

```bash
# Verify idempotency
configurator deploy    # First run: applies changes
configurator deploy    # Second run: should show 0 changes
```

## Performance

Large catalogs can take minutes. Approximate estimates:

| Entity    | Typical Count | Chunk Size | Estimated Time |
| --------- | ------------- | ---------- | -------------- |
| Products  | 100–10,000    | 50         | 2–30 min       |
| Categories| 10–500        | 50         | 1–5 min        |
| Attributes| 10–100        | 50         | < 1 min        |
| Others    | Variable      | 50         | < 1 min        |

Rate limiting (HTTP 429) is handled automatically with exponential backoff (max 5 retries).

## Deployment Report

Every deploy writes a JSON report to `deployment-report-YYYY-MM-DD_HH-MM-SS.json`. It includes:
- Per-stage results (created / updated / deleted / unchanged counts)
- Errors with entity context
- Timing breakdown
- Resilience stats (retries, rate limit hits)

```bash
# Custom report path
configurator deploy --report-path=reports/staging-deploy.json
```

## Anti-Patterns

❌ **Don't define products before their productType** — the pipeline handles order, but your YAML must be valid (productType reference must exist in config)

❌ **Don't use `--include` to skip dependency stages** — excluding `productTypes` while deploying `products` will fail if types don't exist remotely

❌ **Don't treat partial failure as success** — always check the report for per-stage errors
