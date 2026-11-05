// Copyable coding agent prompts, by the `app` prop of <AgentPrompt />.
import { agentPrompt as square } from "./square-prompt.mjs";
import { agentPrompt as stripe } from "./stripe-prompt.mjs";

export const agentPrompts = {
  square: { title: "Square integration prompt", prompt: square },
  stripe: { title: "Stripe integration prompt", prompt: stripe },
};

export const agentPromptFor = app => {
  const entry = agentPrompts[app];
  if (!entry) throw new Error(`Unknown agent prompt "${app}". Use one of: ${Object.keys(agentPrompts).join(", ")}`);
  return entry;
};

export const agentPromptMarkdown = app => `Copy this prompt into your coding agent:

\`\`\`text
${agentPromptFor(app).prompt}
\`\`\`
`;
