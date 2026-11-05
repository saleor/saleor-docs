import { apps, appUrl } from "./app-list";
import { exampleMarkdown } from "./playground/examples.mjs";
import { agentPromptMarkdown } from "./playground/agent-prompts.mjs";
export const markdownComponents = {
  SiteUrlCode: ({ props }) => props.mcpConfig
    ? 'Use this JSON configuration, replacing `<site-origin>` with the origin of this documentation site:\n\n```json\n' + JSON.stringify({ mcpServers: { "saleor-docs": { url: `<site-origin>${props.path}` } } }, null, 2) + '\n```'
    : `[${props.path}](${props.path}) (relative to this documentation site's origin)`,
  Permissions: ({ props }) => `${props.label ?? "Required permissions"}: ${String(props.values ?? "").split(",").map(value => "`" + value.trim() + "`").join(", ")}.`,
  DataSchema: ({ props }) => `**Data schema** for \`${props.mutation}\` \`data\`: <${props.src}>. Saleor doesn't check \`data\`, but the app does. This JSON Schema is generated from the app's own validation, so it always matches what the app accepts. Save it in your repository to generate types (for example, with json-schema-to-typescript) or check \`data\` in tests (for example, with Ajv). A self-hosted app serves it at the same path.`,
  GraphQLExample: ({ props }) => exampleMarkdown(props.exampleId),
  AgentPrompt: ({ props }) => agentPromptMarkdown(props.app),
  Video: ({ props }) => `[${props.title ?? "Watch video"}](${props.src})`,
  Apps: () => apps.map(([name, route]) => `- [${name}](${appUrl(route)})`).join("\n"),
};
