---
name: saleor-configurator
description: >
  Saleor Configurator patterns for managing store configuration as code. Use when
  writing config.yml, running deploy/introspect/diff commands, understanding entity
  identification (slug vs name), deployment pipeline order, or debugging sync issues.
license: MIT
metadata:
  author: saleor
  version: "1.0.0"
---

# Saleor Configurator

Guide for using Saleor Configurator — a "commerce as code" CLI that lets you define
your entire Saleor store configuration in YAML and deploy it declaratively.

## When to Apply

- Writing or editing `config.yml` for a Saleor store
- Running `deploy`, `introspect`, or `diff` commands
- Understanding which identifier to use (`slug` vs `name`) for each entity
- Debugging mismatches between local config and remote state
- Setting up CI/CD pipelines for automated deployments
- Migrating store configuration between environments

## Rule Categories by Priority

| Priority | Category           | Impact   | Prefix       |
| -------- | ------------------ | -------- | ------------ |
| 1        | Config Schema      | CRITICAL | `config-`    |
| 2        | Entity Identity    | CRITICAL | `identity-`  |
| 3        | CLI Workflow       | HIGH     | `cli-`       |
| 4        | Deployment         | HIGH     | `deploy-`    |
| 5        | Diff & Sync        | MEDIUM   | `diff-`      |

## Quick Reference

### 1. Config Schema (CRITICAL)

- `config-schema` — YAML structure, all top-level keys, entity examples

### 2. Entity Identity (CRITICAL)

- `identity-strategies` — Slug-based vs name-based vs singleton; which entity uses which

### 3. CLI Workflow (HIGH)

- `cli-commands` — All commands, flags, env vars, credential setup, non-interactive mode

### 4. Deployment (HIGH)

- `deploy-pipeline` — Stage order, dependency graph, selective deployment, failure handling

### 5. Diff & Sync (MEDIUM)

- `diff-behavior` — How diff detects changes, what triggers create/update/delete

## How to Use

Read individual rule files for detailed explanations and examples:

```
rules/config-schema.md
rules/identity-strategies.md
rules/cli-commands.md
rules/deploy-pipeline.md
rules/diff-behavior.md
```

## Full Compiled Document

For the complete guide with all rules expanded: `AGENTS.md`
