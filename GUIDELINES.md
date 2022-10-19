# Writing documentation guidelines
## Language
You can use Polish 🇵🇱, English 🇬🇧, or a mix of both.

We want the experience of writing to be frictionless for you, that's why we handle rephrasing and translating the content.

## Tooling
- [Grammarly](https://grammarly.com/) - everything you write goes through our editing process, but we would appreciate it if you used Grammarly for spell-checking.
  - [VS Code extension](https://marketplace.visualstudio.com/items?itemName=znck.grammarly)
- [Hemingway App](https://hemingwayapp.com/) - for extra clarity, we recommend using the excellent Hemingway App. It mainly helps with evaluating the complexity of sentences.

## Writing
### Avoid using passive voice
We are writing tutorials and instructions, so it's more suitable to talk directly to the users.

```diff
- Bad: The command "npm i -g @saleor/cli" must be executed before...
+ Good: You must execute the command "npm i -g @saleor/cli" before...
```

### Screenshots
Try not to use screenshots. Screenshots come at a high cost of maintenance because they tend to go out of date quickly. If we need a screenshot to explain something, it's possible we are not doing the best job at describing it, or our UX is lacking. Only if we can't do anything about it, a screenshot is fine.

## Checklist
Things to check before publishing:
- [ ] - proper nouns are correctly capitalized. Some common cases include:
  - **GraphQL**, not graphql, Graphql, graphQl
  - **GitHub**, not Github, github
- [ ] - snippets and screenshots are up to date (especially when documentation is being written in parallel with the feature development)
- [ ] - the technical names / variables are consistently formatted with a `code block`
- [ ] - each mention to another page in the documentation is linked
