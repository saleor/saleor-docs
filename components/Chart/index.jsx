import { useColorMode } from "@docusaurus/theme-common";
import React, { useEffect, useState } from "react";
import { mermaidAPI } from "mermaid";

import "./styles.css";

const Chart = ({ definition }) => {
  const [svg, setSvg] = useState("");
  const { isDarkTheme } = useColorMode();

  useEffect(() => {
    mermaidAPI.initialize({
      startOnLoad: false,
      theme: isDarkTheme ? "dark" : "neutral",
      sequence: {
        mirrorActors: false,
      },
    });
  }, [isDarkTheme]);

  useEffect(() => {
    mermaidAPI.render(`mermaid-${Date.now().toString()}`, definition, (svg) =>
      setSvg(svg)
    );
  }, [isDarkTheme]);

  return (
    <div className="mermaid" dangerouslySetInnerHTML={{ __html: svg }}></div>
  );
};

export default Chart;
