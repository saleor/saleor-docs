import React, { useEffect, useState } from "react";
import { mermaidAPI } from "mermaid";

import "./styles.css";

mermaidAPI.initialize({
  startOnLoad: false,
  theme: null,
  sequence: {
    mirrorActors: false
  }
});

const Chart = ({ definition }) => {
  const [fontsLoaded, setFontsLoaded] = useState(
    typeof window !== "undefined" && document.fonts.status === "loaded"
  );
  const [svg, setSvg] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined" && !fontsLoaded) {
      document.fonts.ready.then(() => setFontsLoaded(true));
    }
  });

  useEffect(() => {
    mermaidAPI.render(`mermaid-${Date.now().toString()}`, definition, (svg) => setSvg(svg));
  }, [fontsLoaded]);

  return (
    <div className="mermaid" dangerouslySetInnerHTML={{ __html: svg }}></div>
  );
};

export default Chart;
