import { useDoc } from "@docusaurus/plugin-content-docs/client";
import { useLocation } from "@docusaurus/router";
import { Check, Copy } from "lucide-react";
import React, { useCallback, useState } from "react";

function processMarkdownContent(content) {
  // Remove frontmatter (content between --- at the start)
  let processed = content.replace(/^---\s*[\s\S]*?\n---\s*\n/, "");

  // Remove import statements
  processed = processed.replace(/^import\s+.*$/gm, "");

  // Remove empty lines at the beginning
  processed = processed.replace(/^\s*\n+/, "");

  // Process custom components - convert them to plain markdown
  // Remove <S.Column> and </S.Column> tags but keep the content
  processed = processed.replace(
    /<S\.Column[^>]*>([\s\S]*?)<\/S\.Column>/g,
    "$1",
  );

  // Convert <S> step containers to numbered lists
  processed = processed.replace(
    /<S>\s*([\s\S]*?)\s*<\/S>/g,
    (match, stepsContent) => {
      // Extract individual steps and convert to numbered list
      const stepPattern =
        /<S\.Step>\s*<S\.Details>\s*([\s\S]*?)\s*<\/S\.Details>\s*<\/S\.Step>/g;
      let stepNumber = 1;
      let result = "";
      let stepMatch;

      while ((stepMatch = stepPattern.exec(stepsContent)) !== null) {
        let stepContent = stepMatch[1].trim();

        // Clean up the step content - preserve markdown structure
        stepContent = stepContent
          .replace(/\s*\n\s*/g, "\n") // normalize line breaks
          .replace(/^\s+/gm, "") // remove leading whitespace from lines
          .trim();

        // Add step number and content
        result += `## Step ${stepNumber}\n\n${stepContent}\n\n`;
        stepNumber++;
      }

      return result;
    },
  );

  // Remove any remaining custom component tags
  processed = processed.replace(/<\/?S\.[^>]*>/g, "");
  processed = processed.replace(/<\/?S[^>]*>/g, "");

  // Clean up extra whitespace and normalize line breaks
  processed = processed.replace(/\n\s*\n\s*\n+/g, "\n\n");
  processed = processed.replace(/^\s+/gm, "");
  processed = processed.trim();

  return processed;
}

export default function CopyMarkdownButton() {
  const { metadata } = useDoc();
  const location = useLocation();
  const [copied, setCopied] = useState(false);

  // Define paths where the button should be hidden
  const excludedPaths = ["/"];

  // Check if current path should be excluded
  if (excludedPaths.includes(location.pathname)) {
    return null;
  }

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
    if (!metadata?.editUrl) {
      return;
    }

    try {
      // Convert GitHub edit URL to raw URL
      // From: https://github.com/saleor/saleor-docs/edit/main/docs/path/to/file.md
      // To: https://raw.githubusercontent.com/saleor/saleor-docs/main/docs/path/to/file.md
      const rawUrl = metadata.editUrl
        .replace("github.com", "raw.githubusercontent.com")
        .replace("/edit/", "/");

      const response = await fetch(rawUrl);

      if (!response.ok) {
        throw new Error(`Failed to fetch markdown: ${response.status}`);
      }

      const rawMarkdownContent = await response.text();
      const processedContent = processMarkdownContent(rawMarkdownContent);

      const success = await copyToClipboard(processedContent);

      if (success) {
        setCopied(true);
        // Reset the copied state after 2 seconds
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (error) {
      // Silent error handling - user will not see "Copied!" if it fails
    }
  }, [metadata?.editUrl, copyToClipboard]);

  // Don't show the button if there's no edit URL
  if (!metadata?.editUrl) {
    return null;
  }

  return (
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
      {copied ? "Copied!" : "Copy for LLM"}
    </button>
  );
}
