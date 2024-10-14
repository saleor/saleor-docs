import { usePrismTheme, useThemeConfig } from "@docusaurus/theme-common";
import {
  containsLineNumbers,
  parseCodeBlockTitle,
  parseLanguage,
  parseLines,
  useCodeWordWrap,
} from "@docusaurus/theme-common/internal";
import Container from "@theme/CodeBlock/Container";
import CopyButton from "@theme/CodeBlock/CopyButton";
import Line from "@theme/CodeBlock/Line";
import WordWrapButton from "@theme/CodeBlock/WordWrapButton";
import clsx from "clsx";
import { Highlight } from "prism-react-renderer";
import React, { useState } from "react";

import styles from "./styles.module.css";
export default function CodeBlockString({
  children,
  className: blockClassName = "",
  metastring,
  title: titleProp,
  showLineNumbers: showLineNumbersProp,
  language: languageProp,
}) {
  const {
    prism: { defaultLanguage, magicComments },
  } = useThemeConfig();
  const language =
    languageProp ?? parseLanguage(blockClassName) ?? defaultLanguage;
  const prismTheme = usePrismTheme();
  const wordWrap = useCodeWordWrap();
  // We still parse the metastring in case we want to support more syntax in the
  // future. Note that MDX doesn't strip quotes when parsing metastring:
  // "title=\"xyz\"" => title: "\"xyz\""
  const title = parseCodeBlockTitle(metastring) || titleProp;
  const { lineClassNames, code } = parseLines(children, {
    metastring,
    language,
    magicComments,
  });
  const showLineNumbers =
    showLineNumbersProp ?? containsLineNumbers(metastring);

  const [codeBlockExpanded, setCodeBlockExpanded] = useState(false);

  const handleExpand = (e) => {
    e.preventDefault();
    setCodeBlockExpanded(!codeBlockExpanded);
  };

  const expandContent = codeBlockExpanded ? "Collapse ▲" : "Expand ▼";

  const longCode = code.split(/\r\n|\r|\n/).length > 18;

  return (
    <Container
      as="div"
      className={clsx(
        blockClassName,
        language &&
          !blockClassName.includes(`language-${language}`) &&
          `language-${language}`
      )}
    >
      {title && <div className={styles.codeBlockTitle}>{title}</div>}
      <div
        className={clsx(
          styles.codeBlockContent,
          codeBlockExpanded && styles.expanded
        )}
      >
        <Highlight theme={prismTheme} code={code} language={language ?? "text"}>
          {({ className, tokens, getLineProps, getTokenProps }) => (
            <pre
              tabIndex={0}
              ref={wordWrap.codeBlockRef}
              className={clsx(className, styles.codeBlock, "thin-scrollbar")}
            >
              <code
                className={clsx(
                  styles.codeBlockLines,
                  showLineNumbers && styles.codeBlockLinesWithNumbering
                )}
              >
                {tokens.map((line, i) => (
                  <Line
                    key={i}
                    line={line}
                    getLineProps={getLineProps}
                    getTokenProps={getTokenProps}
                    classNames={lineClassNames[i]}
                    showLineNumbers={showLineNumbers}
                  />
                ))}
              </code>
            </pre>
          )}
        </Highlight>
        <div className={styles.buttonGroup}>
          {(wordWrap.isEnabled || wordWrap.isCodeScrollable) && (
            <WordWrapButton
              className={styles.codeButton}
              onClick={() => wordWrap.toggle()}
              isEnabled={wordWrap.isEnabled}
            />
          )}
          <CopyButton className={styles.codeButton} code={code} />
          {/* <button onClick={toggleMaxHeight}>Toggle Max Height</button> */}
        </div>

        {longCode && (
          <div className={styles.slidingBox} onClick={handleExpand}>
            {expandContent}
          </div>
        )}
      </div>
    </Container>
  );
}
