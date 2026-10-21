# Diff & Sync Behavior

Understanding how the Configurator detects changes helps you predict what `diff` and `deploy` will do.

## Deploy is Additive Only

Configurator **does not delete entities**. It only creates and updates. Remote entities not present in `config.yml` are left untouched.

## How Comparison Works

For each entity type, the Configurator:

1. Fetches all remote entities of that type
2. Matches each local entity to its remote counterpart (by slug or name)
3. Compares field values
4. Produces a diff result: `create`, `update`, or `unchanged`

## Match Strategy

Entities are matched by their identifier — **not by position in the list**:

```yaml
categories:
  - slug: "electronics"
  - slug: "clothing"
```

If `electronics` exists remotely → compared for updates.
If `clothing` does not exist remotely → marked as `create`.
If `books` exists remotely but not in config → **left untouched**.

## Diff Result Types

| Result      | Meaning                                        |
| ----------- | ---------------------------------------------- |
| `create`    | Entity exists in local config but not remotely |
| `update`    | Entity exists in both but fields differ        |
| `unchanged` | Entity exists in both and all fields match     |

## Omitted or Empty Sections = No Changes

Both omitted sections and empty arrays (`[]`) are treated identically — the stage exits early without touching that entity type remotely.

```yaml
# Only shop and productTypes will be synced
shop:
  name: "My Store"

productTypes:
  - name: "Physical Product"
    kind: NORMAL

# channels, categories, products, etc. are all untouched
```

## Nested Comparison

Some entities have nested structures that are also diffed:

- **ProductType** → compares assigned product attributes and variant attributes
- **Category** → compares hierarchy (parent relationships)
- **Menu** → compares items and children recursively
- **Product** → compares variants, pricing, stocks, attributes
- **Attribute** → compares allowed values

## Using `diff` Before Deploy

Always run `diff` before deploying to production to review planned changes:

```bash
configurator diff
```

## Debugging Unexpected Diffs

If diff shows unexpected changes after a manual Dashboard edit:

1. Run `introspect` to download current remote state
2. Compare the new `config.yml` with your previous version (git diff)
3. Decide whether to keep local or remote state
4. Re-deploy if you want local config to win

## Anti-Patterns

❌ **Don't rely on list order** — entities are matched by slug/name, not position

❌ **Don't run introspect to "check" state** — introspect overwrites `config.yml`; use `diff` instead to compare without side effects
