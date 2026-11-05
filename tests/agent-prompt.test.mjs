import test from "node:test";
import assert from "node:assert/strict";
import { mkdir } from "node:fs/promises";
import { build } from "esbuild";
import { JSDOM } from "jsdom";
import { createElement, act } from "react";
import { agentPromptMarkdown, agentPrompts } from "../components/playground/agent-prompts.mjs";

test("an unknown app fails the build instead of rendering an empty prompt", () => {
  assert.throws(() => agentPromptMarkdown("nope"), /Unknown agent prompt "nope"/);
});

test("copy prompt puts the exact prompt on the clipboard", async () => {
  await mkdir("artifacts", { recursive: true });
  await build({
    entryPoints: ["components/playground/AgentPrompt.tsx"],
    outfile: "artifacts/agent-prompt-test.mjs", bundle: true, format: "esm", platform: "node",
    packages: "external", jsx: "automatic", loader: { ".css": "empty" },
  });
  const dom = new JSDOM('<!doctype html><div id="root"></div>', { url: "https://docs.example.test" });
  Object.assign(globalThis, { window: dom.window, document: dom.window.document, HTMLElement: dom.window.HTMLElement, IS_REACT_ACT_ENVIRONMENT: true });
  let copied;
  const clipboard = Object.getOwnPropertyDescriptor(globalThis.navigator, "clipboard");
  Object.defineProperty(globalThis.navigator, "clipboard", { configurable: true, value: { writeText: async text => { copied = text; } } });
  const { createRoot } = await import("react-dom/client");
  const { default: Prompt } = await import(`../artifacts/agent-prompt-test.mjs?${Date.now()}`);
  try {
    for (const [app, { title, prompt }] of Object.entries(agentPrompts)) {
      const root = createRoot(document.getElementById("root"));
      try {
        await act(async () => root.render(createElement(Prompt, { app })));
        assert.equal(document.querySelector(".agent-prompt-title").textContent, title);
        const button = document.querySelector(".agent-prompt-copy");
        assert.equal(button.textContent, "Copy prompt");
        await act(async () => button.click());
        assert.equal(copied, prompt, `${app}: the copied text isn't the prompt`);
        assert.equal(button.textContent, "Copied");
        assert.equal(document.querySelector(".agent-prompt-text").textContent, prompt, `${app}: the visible prompt is what gets copied`);
      } finally {
        await act(async () => root.unmount());
      }
    }
  } finally {
    if (clipboard) Object.defineProperty(globalThis.navigator, "clipboard", clipboard); else delete globalThis.navigator.clipboard;
  }
});
