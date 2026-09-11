import { useDoc } from "@docusaurus/plugin-content-docs/client";
import agentDocs from "@site/lib/agent-docs.cjs";
import { Check, Copy } from "lucide-react";
import React, { useCallback, useState } from "react";

export default function CopyMarkdownButton() {
  const { metadata } = useDoc();
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);
  const markdownUrl = agentDocs.markdownPath(metadata.permalink);

  const copyToClipboard = useCallback(async (text) => {
    // Try modern Clipboard API first
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (err) {
        // Fall through to execCommand fallback
      }
    }

    // Safari fallback using execCommand
    try {
      const textArea = document.createElement("textarea");
      textArea.value = text;

      // Position off-screen but keep accessible for Safari
      textArea.style.position = "absolute";
      textArea.style.top = "-9999px";
      textArea.style.left = "0";
      textArea.style.opacity = "0";
      textArea.style.pointerEvents = "none";
      textArea.readOnly = true;

      document.body.appendChild(textArea);

      // Force focus and selection
      textArea.focus();
      textArea.setSelectionRange(0, text.length);

      // Try multiple times - Safari can be flaky
      let successful = false;
      for (let i = 0; i < 3; i++) {
        successful = document.execCommand("copy");
        if (successful) break;

        // Wait a bit and try again
        await new Promise((resolve) => setTimeout(resolve, 10));
      }

      document.body.removeChild(textArea);

      if (successful) {
        return true;
      }
    } catch (err) {
      // Silent fallback failure
    }

    return false;
  }, []);

  const copyMarkdown = useCallback(async () => {
    setError(false);
    try {
      const response = await fetch(markdownUrl);

      if (!response.ok) {
        throw new Error(`Failed to fetch markdown: ${response.status}`);
      }

      const content = await response.text();
      if (/^\s*<!doctype html/i.test(content)) {
        throw new Error("Markdown endpoint returned HTML");
      }
      const success = await copyToClipboard(content);

      if (success) {
        setCopied(true);
        // Reset the copied state after 2 seconds
        setTimeout(() => setCopied(false), 2000);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  }, [markdownUrl, copyToClipboard]);

  if (metadata.unlisted || metadata.draft) {
    return null;
  }

  return (
    <>
      <button
        onClick={copyMarkdown}
        title="Copy page for LLM"
        aria-label="Copy page for LLM"
        style={{
          border: "none",
          background: "none",
          color: "var(--ifm-color-content-secondary)",
          fontSize: "14px",
          padding: 0,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          textDecoration: "none",
        }}
        onMouseEnter={(e) => {
          e.target.style.textDecoration = "underline";
        }}
        onMouseLeave={(e) => {
          e.target.style.textDecoration = "none";
        }}
      >
        {copied ? <Check size={12} /> : <Copy size={12} />}
        {copied ? "Copied!" : "Copy Markdown"}
      </button>
      <a
        href={markdownUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginLeft: 12, fontSize: 14 }}
      >
        View Markdown
      </a>
      {error && (
        <span role="status">
          Could not copy. Open View Markdown to read the page.
        </span>
      )}
    </>
  );
}
