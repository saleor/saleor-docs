import { useEffect, useRef, useState } from "react";
import { agentPromptFor } from "./agent-prompts.mjs";
import "./playground.css";

export default function AgentPrompt({ app }: { app: string }) {
  const { title, prompt } = agentPromptFor(app);
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  const reset = useRef<ReturnType<typeof setTimeout>>(undefined);
  useEffect(() => () => clearTimeout(reset.current), []);

  async function copy() {
    clearTimeout(reset.current);
    try { await navigator.clipboard.writeText(prompt); setStatus("copied"); }
    catch { setStatus("failed"); }
    reset.current = setTimeout(() => setStatus("idle"), 2500);
  }

  return <section className="agent-prompt not-prose" aria-label="Prompt for your coding agent">
    <div className="agent-prompt-head">
      <div>
        <p className="agent-prompt-title">{title}</p>
        <p>Paste it into your coding agent from your storefront project.</p>
      </div>
      <button type="button" className="agent-prompt-copy" onClick={copy}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><rect x="5" y="5" width="9" height="9" rx="1.5" /><path d="M11 5V3.5A1.5 1.5 0 0 0 9.5 2h-6A1.5 1.5 0 0 0 2 3.5v6A1.5 1.5 0 0 0 3.5 11H5" /></svg>
        {status === "copied" ? "Copied" : "Copy prompt"}
      </button>
    </div>
    <pre tabIndex={0} className="agent-prompt-text"><code>{prompt}</code></pre>
    <p className="agent-prompt-status" role="status">{status === "failed" ? "Couldn't copy. Select the prompt above and copy it." : ""}</p>
  </section>;
}
