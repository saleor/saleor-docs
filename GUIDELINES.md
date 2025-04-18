# Writing Documentation Guidelines

## Overview

This document outlines the guidelines for writing documentation for Saleor. Our primary audience is developers, but we also serve merchants and technical evaluators. Write clearly, consistently, and with empathy. For maximum efficiency 🚀, we recommend enforcing these standards using an LLM.

## Tooling

- [Grammarly](https://grammarly.com/) - everything you write goes through our editing process, but we would appreciate it if you used Grammarly for spell-checking. We recommend installing the [VS Code extension](https://marketplace.visualstudio.com/items?itemName=znck.grammarly). If you are a Saleor team member, log in with your work email to join the organization.
- [Hemingway App](https://hemingwayapp.com/) - for extra clarity, we recommend using the excellent Hemingway App. It helps evaluate sentence complexity and encourages shorter, clearer phrasing.

## Guidelines

### Writing

#### Audience

When writing a piece of documentation, you should always consider the audience. Is it targeted at a developer, a merchant, or an evaluator? This choice will determine the tone of the documentation, the level of detail, and the examples used.

#### Tone

- Use a professional, friendly tone.
- Speak directly to the reader using "you".
- Avoid jokes, slang, or informal phrases.
- Focus on what the user wants to accomplish.
- Do not call things "easy", "obvious", or "simple". Instead, explain them clearly.

#### Be Concise

Avoid unnecessary complexity. Prioritize clarity over cleverness.

```diff
- Bad: The implementation of this functionality necessitates the utilization of asynchronous API calls.
+ Good: This feature uses async API calls for better performance.
```

#### Be Consistent

Use consistent terminology and phrasing.

```diff
- Bad: First, log into your account. After signing in, navigate to settings.
+ Good: First, log into your account. After logging in, navigate to settings.
```

#### Avoid Passive Voice

Avoid constructions that obscure who is doing the action.

```diff
- Bad: The command "npm i -g @saleor/cli" must be executed before...
+ Good: You must execute the command "npm i -g @saleor/cli" before...
```

#### Be Conversational

Use second person ("you") to engage the user.

```diff
- Bad: Users should configure their settings before proceeding.
+ Good: You should configure your settings before proceeding.
```

#### Start With an Overview

Introduce each doc with a short paragraph that gives context and sets expectations.

```md
## Product API Overview

This API allows you to programmatically access and manage product data. This guide covers authentication, available endpoints, and common use cases.
```

#### Link Internal Pages

Always link to other relevant docs using relative links.

```diff
- Bad: See the setup instructions.
+ Good: See the [Setup Guide](./getting-started.md).
```

### Structure

#### Format Titles

Titles should follow [The Chicago Manual of Style](https://en.wikipedia.org/wiki/Title_case#Chicago_Manual_of_Style). This applies to both page titles and sidebar entries.

#### Use Logical Markdown Headings

Use headings to break documentation into meaningful sections:

```md
# Authentication

## Obtaining API Keys

### API Key Permissions
```

#### Make It Accessible and Localizable

- Avoid idioms or cultural references.
- Use clear, literal language.
- Minimize text in images or provide alt text.
- Don’t translate code, variable names, or UI keywords.
- Prefer gender-neutral and inclusive language when applicable.

### Code

#### Format Code

Use backticks for inline code elements:

```diff
- Bad: Enter your API key in the apiKey field.
+ Good: Enter your API key in the `apiKey` field.
```

Make sure to annotate code blocks with the language they are written in.

````md
```js
const saleor = new SaleorClient(API_URL);
```
````

#### Test Your Code

All examples must be runnable and verified. Do not include broken or speculative code.

#### Keep It Copy-Pasteable

Make it easy to copy and reuse examples. Avoid prompts like `$` unless explicitly required.

### Visuals

#### Use Screenshots Sparingly

Only include screenshots when absolutely necessary. They age quickly and are hard to maintain. If something can't be easily described or is UX-dependent, a screenshot is acceptable—but keep them updated.

#### Prefer Mermaid Diagrams for Architecture

If explaining a flow or system, use a simple Mermaid diagram.

## Checklist

Things to check before publishing:

- [ ] Proper nouns are capitalized:
  - **GraphQL**, not graphql, Graphql, graphQl
  - **GitHub**, not Github, github
- [ ] Snippets and screenshots are up to date (especially when documenting active development)
- [ ] Technical terms and variable names are consistently formatted with `code blocks`
- [ ] Each reference to another page is linked
- [ ] All code examples are tested and accurate
- [ ] Headings follow a logical Markdown hierarchy
- [ ] The tone is active, direct, and uses second person ("you")
- [ ] The document starts with a short overview paragraph
