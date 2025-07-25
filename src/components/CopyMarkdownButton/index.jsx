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

  const copyMarkdown = useCallback(async () => {
    if (!metadata?.editUrl) {
      console.warn("No edit URL available for this page");
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

      await navigator.clipboard.writeText(processedContent);
      setCopied(true);

      // Reset the copied state after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy markdown:", error);
      // Fallback: just indicate we couldn't copy
      setCopied(false);
    }
  }, [metadata?.editUrl]);

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
