# CLI Commands

Saleor Configurator is invoked via `pnpm dlx @saleor/configurator`.

## Authentication

Credentials are required for all commands that talk to Saleor. Provide them via:

```bash
# Flags (explicit)
pnpm dlx @saleor/configurator deploy --url=https://your-store.saleor.cloud/graphql/ --token=YOUR_TOKEN

# Environment variables (recommended for CI)
export SALEOR_URL=https://your-store.saleor.cloud/graphql/
export SALEOR_TOKEN=YOUR_TOKEN
pnpm dlx @saleor/configurator deploy
```

Store credentials in `.env.local` (git-ignored) for local development — never commit tokens.

## Core Commands

### `introspect`

Downloads the current remote store state and writes it to `config.yml`.

```bash
pnpm dlx @saleor/configurator introspect
pnpm dlx @saleor/configurator introspect --url=$SALEOR_URL --token=$SALEOR_TOKEN
```

Use this to:
- Bootstrap `config.yml` from an existing store
- Sync after manual changes in the Saleor Dashboard
- Reset local config to match remote state

### `deploy`

Applies `config.yml` to the remote store. Creates, updates, or deletes entities to match local config.

```bash
pnpm dlx @saleor/configurator deploy
pnpm dlx @saleor/configurator deploy --url=$SALEOR_URL --token=$SALEOR_TOKEN
```

**Output**:
- Console: deployment summary box with timing, changes, and resilience stats
- Report file: auto-saved as `deployment-report-YYYY-MM-DD_HH-MM-SS.json` in CWD
- Use `--report-path=custom.json` to control report location

### `diff`

Compares local `config.yml` with remote store state. Shows what would change on next deploy — no changes applied.

```bash
pnpm dlx @saleor/configurator diff
pnpm dlx @saleor/configurator diff --url=$SALEOR_URL --token=$SALEOR_TOKEN
```

Use this to:
- Preview changes before deploying
- Verify a deploy was idempotent (diff should show no changes after deploy)
- Debug unexpected state differences

### `start`

Interactive first-time setup wizard. Guides through initial configuration.

```bash
pnpm dlx @saleor/configurator start
```

## Non-Interactive Mode

In CI/CD, piped contexts, and non-TTY environments, interactive confirmations are **automatically skipped** — no special flag needed. The tool auto-detects non-TTY and proceeds without prompts.

## Selective Deployment

Deploy only specific entity types using `--include` or `--exclude`:

```bash
# Deploy only product types and categories
pnpm dlx @saleor/configurator deploy --include=productTypes,categories

# Deploy everything except products (faster for config-only changes)
pnpm dlx @saleor/configurator deploy --exclude=products
```

**Warning**: If a dependency is excluded but needed, deployment will fail. For example, excluding `productTypes` when deploying `products` will fail if any product type doesn't exist yet.

## Useful Flags

| Flag | Command | Purpose |
| ---- | ------- | ------- |
| `--url` | all | Saleor GraphQL endpoint URL |
| `--token` | all | API token with required permissions |
| `--report-path` | deploy | Custom path for deployment report JSON |
| `--include=a,b` | deploy | Only deploy listed entity types |
| `--exclude=a,b` | deploy | Skip listed entity types |

## Environment Variables

| Variable | Purpose |
| -------- | ------- |
| `SALEOR_URL` | Saleor GraphQL endpoint |
| `SALEOR_TOKEN` | API authentication token |
| `LOG_LEVEL` | Logging verbosity (`info`, `debug`) |
| `GRAPHQL_GOVERNOR_ENABLED` | Enable/disable request rate governor |
| `GRAPHQL_MAX_CONCURRENCY` | Max concurrent GraphQL requests (default: 4) |
| `GRAPHQL_INTERVAL_CAP` | Max requests per interval (default: 20) |
| `GRAPHQL_INTERVAL_MS` | Interval window in ms (default: 1000) |

## Recommended Workflow

```bash
# 1. Bootstrap from existing store
pnpm dlx @saleor/configurator introspect

# 2. Edit config.yml

# 3. Preview changes
pnpm dlx @saleor/configurator diff

# 4. Apply changes
pnpm dlx @saleor/configurator deploy

# 5. Verify idempotency (no changes expected)
pnpm dlx @saleor/configurator deploy   # Should report 0 changes
```

## CI/CD Integration

```yaml
# Example GitHub Actions step
- name: Deploy Saleor configuration
  env:
    SALEOR_URL: ${{ secrets.SALEOR_URL }}
    SALEOR_TOKEN: ${{ secrets.SALEOR_TOKEN }}
  run: pnpm dlx @saleor/configurator deploy
```

Non-interactive mode is automatic — no flag needed.

## Anti-Patterns

❌ **Don't commit `.env.local` or tokens** — use secrets management in CI

❌ **Don't skip `diff` before first deploy to production** — always preview destructive changes

❌ **Don't run `introspect` after editing config.yml** — it overwrites your local changes with remote state
