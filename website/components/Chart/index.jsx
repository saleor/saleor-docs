import React, { useEffect, useMemo, useState } from "react";
import mermaid from "mermaid";

import "./styles.css";

const style = `
.label {
  font-family: var(--ifm-font-family-base);
  color: var(--ifm-font-base-color);
}

.label text {
  fill: var(--ifm-font-base-color);
}

.node rect,
.node circle,
.node ellipse,
.node polygon,
.node path {
  fill: var(--ifm-background-surface-color);
  stroke: var(--ifm-color-primary);
  stroke-width: 1px;
}

.node .label {
  text-align: center;
}
.node.clickable {
  cursor: pointer;
}

.arrowheadPath {
  fill: var(--ifm-color-emphasis-500);
}

.edgePath .path {
  stroke: var(--ifm-color-emphasis-500);
  stroke-width: 1.5px;
}

.edgeLabel {
  background-color: var(--ifm-background-surface-color);
  text-align: center;
}

.cluster rect {
  fill: var(--ifm-background-surface-color);
  stroke: var(--ifm-color-primary);
  stroke-width: 1px;
}

.cluster text {
  fill: var(--ifm-font-base-color);
}

div.mermaidTooltip {
  position: absolute;
  text-align: center;
  max-width: 200px;
  padding: 2px;
  font-family: var(--ifm-font-family-base);
  font-size: 12px;
  background: var(--ifm-background-surface-color);
  border: 1px solid var(--ifm-color-emphasis-500);
  border-radius: 2px;
  pointer-events: none;
  z-index: 100;
}
`;

mermaid.initialize({
  startOnLoad: false,
  theme: null
});

const Chart = ({ definition }) => {
  const id = useMemo(() => `mermaid-${Date.now().toString()}`, [definition]);
  const [fontsLoaded, setFontsLoaded] = useState(
    document.fonts.status === "loaded"
  );
  const [svg, setSvg] = useState("");

  useEffect(() => {
    if (!fontsLoaded) {
      document.fonts.ready.then(() => setFontsLoaded(true));
    }
  }, [id]);

  useEffect(() => {
    mermaid.render(id, definition, svg => setSvg(svg));
  }, [id, fontsLoaded]);

  return (
    <div className="mermaid" dangerouslySetInnerHTML={{ __html: svg }}></div>
  );
};

export default Chart;
