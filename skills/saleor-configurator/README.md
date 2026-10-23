# saleor-configurator

Agent skill for [Saleor Configurator](https://github.com/saleor/saleor-configurator) — a "commerce as code" CLI that lets you manage your entire Saleor store configuration declaratively in YAML.

## What This Skill Covers

- Writing and editing `config.yml` for any Saleor store
- Using the `deploy`, `introspect`, and `diff` CLI commands
- Understanding entity identity (slug vs name) and why it matters
- Deployment pipeline order and entity dependencies
- How the diff engine detects creates, updates, and deletes
- CI/CD integration patterns

## Installation

```bash
npx skills add . --skill saleor-configurator
```

## Who This Is For

Developers and teams who:

- Manage Saleor store configuration as code (GitOps)
- Need reproducible, version-controlled store deployments
- Want to sync configuration across staging and production environments
- Are setting up automation for store configuration changes

## What's Included

| File                           | Purpose                                          |
| ------------------------------ | ------------------------------------------------ |
| `SKILL.md`                     | Agent entry point — overview and quick reference |
| `AGENTS.md`                    | Full compiled guide with all rules expanded      |
| `rules/config-schema.md`       | YAML structure and entity examples               |
| `rules/identity-strategies.md` | Slug vs name identification rules                |
| `rules/cli-commands.md`        | All CLI commands, flags, and env vars            |
| `rules/deploy-pipeline.md`     | Stage order, dependencies, failure handling      |
| `rules/diff-behavior.md`       | How diff detects changes                         |
