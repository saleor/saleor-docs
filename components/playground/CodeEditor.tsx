import { useMemo, useRef, type CSSProperties } from "react";
import { createHighlighterCoreSync } from "shiki/core";
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";
import graphql from "shiki/langs/graphql.mjs";
import json from "shiki/langs/json.mjs";
import light from "shiki/themes/github-light.mjs";
import dark from "shiki/themes/github-dark.mjs";

// The same grammars and default light/dark themes as Blume's fenced blocks.
// Only these two languages are included in the interactive editor bundle.
const highlighter = createHighlighterCoreSync({
  themes: [light, dark], langs: [graphql, json], engine: createJavaScriptRegexEngine(),
});

export default function CodeEditor({ value, language, label, rows, disabled, onChange }: {
  value: string; language: "graphql" | "json"; label: string; rows: number; disabled: boolean;
  onChange: (value: string) => void;
}) {
  const backdrop = useRef<HTMLDivElement>(null);
  const tokens = useMemo(() => highlighter.codeToTokens(value, {
    lang: language, themes: { light: "github-light", dark: "github-dark" },
  }).tokens, [value, language]);

  return <div className="example-highlight-editor">
    <div className="example-highlight" ref={backdrop} aria-hidden="true">
      <div className="example-highlight-text">{tokens.map((line, index) => <span className="example-code-line" key={index}>
        {line.map((token, i) => <span key={i} style={{
          "--token-light": token.htmlStyle?.color,
          "--token-dark": token.htmlStyle?.["--shiki-dark"],
        } as CSSProperties}>{token.content}</span>)}{index < tokens.length - 1 ? "\n" : ""}
      </span>)}{"\n"}</div>
    </div>
    <textarea aria-label={label} spellCheck={false} autoCapitalize="off" autoComplete="off" wrap="off"
      value={value} rows={rows} disabled={disabled}
      onScroll={event => {
        if (backdrop.current) {
          backdrop.current.scrollTop = event.currentTarget.scrollTop;
          backdrop.current.scrollLeft = event.currentTarget.scrollLeft;
        }
      }} onChange={event => onChange(event.target.value)} />
  </div>;
}
