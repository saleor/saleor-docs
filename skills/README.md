# Saleor skills

These skills are maintained with the documentation in this repository. The complete original skill directories, rules, compiled guides, references, and license were imported from commit `fb1a57255f58950962f6e474ccba1cade40f5163`. Source: [saleor/agent-skills](https://github.com/saleor/agent-skills/tree/fb1a57255f58950962f6e474ccba1cade40f5163).

| Skill | Use it for |
| --- | --- |
| `saleor-app` | Apps, registration, permissions, payments, and webhooks |
| `saleor-storefront` | Storefront API patterns, checkout, channels, and variants |
| `storefront-builder` | Storefront data contracts and user experience |
| `saleor-configurator` | Store configuration as code |
| `saleor-core` | Backend internals and implementation details |

From this checkout, install a skill into your agent's supported location with:

```sh
npx skills add . --skill saleor-app
```

Replace `saleor-app` with any name above. The docs build also publishes `/.well-known/agent-skills/index.json`, which lists downloadable skills with their supporting files. No download from the former skills repository is needed. Maintain individual rules and any corresponding compiled `AGENTS.md` together.

The original repository license is preserved in `LICENSE`; individual skill license declarations are retained unchanged.
