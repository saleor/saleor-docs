# Writing Documentation Guidelines

This guide outlines the standards for writing documentation for Saleor. Whether you're documenting features for developers, creating merchant guides, or writing technical evaluations, these guidelines will help you create clear, consistent, and user-friendly content. For maximum efficiency 🚀, we recommend using an LLM to enforce these standards.

## Tooling

- [Grammarly](https://grammarly.com/) - Use Grammarly for spell-checking. We recommend installing the [VS Code extension](https://marketplace.visualstudio.com/items?itemName=znck.grammarly). If you're a Saleor team member, log in with your work email to join the organization.
- [Hemingway App](https://hemingwayapp.com/) - Use the Hemingway App to evaluate sentence complexity and encourage shorter, clearer phrasing.

## Guidelines

### Writing

#### Audience

When writing documentation, consider your audience. Are you writing for developers, merchants, or evaluators? This choice determines your tone, level of detail, and examples.

#### Tone

- Use a professional, friendly tone
- Speak directly to the reader using "you"
- Avoid jokes, slang, or informal phrases
- Focus on what the user wants to accomplish
- Explain concepts clearly instead of calling them "easy" or "simple"

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

#### Use Active Voice

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

Begin each document with a short paragraph that provides context and sets expectations.

```md
## Product API Overview

This API lets you programmatically access and manage product data. This guide covers authentication, available endpoints, and common use cases.
```

#### Link Internal Pages

Always link to other relevant docs using relative links.

```diff
- Bad: See the setup instructions.
+ Good: See the [Setup Guide](./getting-started.md).
```

### Structure

#### Format Titles

Follow [The Chicago Manual of Style](https://en.wikipedia.org/wiki/Title_case#Chicago_Manual_of_Style) for both page titles and sidebar entries.

#### Use Logical Markdown Headings

Use headings to break documentation into meaningful sections:

```md
# Authentication

## Obtaining API Keys

### API Key Permissions
```

#### Make It Accessible and Localizable

- Avoid idioms or cultural references
- Use clear, literal language
- Minimize text in images or provide alt text
- Don't translate code, variable names, or UI keywords
- Use gender-neutral and inclusive language when applicable

### Code

#### Format Code

Use backticks for inline code elements:

```diff
- Bad: Enter your API key in the apiKey field.
+ Good: Enter your API key in the `apiKey` field.
```

Annotate code blocks with the language:

````md
```js
const saleor = new SaleorClient(API_URL);
```
````

#### Test Your Code

Verify that all examples are runnable. Don't include broken or speculative code.

#### Keep It Copy-Pasteable

Make examples easy to copy and reuse. Avoid prompts like `$` unless explicitly required.

### Visuals

#### Use Screenshots Sparingly

Only include screenshots when necessary. They age quickly and are hard to maintain. Use them only for UX-dependent features that can't be easily described.

#### Prefer Mermaid Diagrams for Architecture

Use Mermaid diagrams to explain flows or systems.

## Publishing Checklist

Before publishing, verify:

- [ ] Proper nouns are capitalized:
  - **GraphQL**, not graphql, Graphql, graphQl
  - **GitHub**, not Github, github
- [ ] Snippets and screenshots are up to date
- [ ] Technical terms and variable names use `code blocks`
- [ ] Each reference to another page is linked
- [ ] All code examples are tested and accurate
- [ ] Headings follow a logical Markdown hierarchy
- [ ] The tone is active, direct, and uses second person ("you")
- [ ] The document starts with a short overview paragraph
