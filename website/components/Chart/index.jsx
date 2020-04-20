import React, { useEffect, useMemo, useState } from "react";
import mermaid from "mermaid";

import "./styles.css";

mermaid.initialize({
  startOnLoad: false,
  theme: null,
});

const Chart = ({ definition }) => {
  const id = useMemo(() => `mermaid-${Date.now().toString()}`, [definition]);
  const [fontsLoaded, setFontsLoaded] = useState(
    typeof window !== "undefined" && document.fonts.status === "loaded"
  );
  const [svg, setSvg] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined" && !fontsLoaded) {
      document.fonts.ready.then(() => setFontsLoaded(true));
    }
  }, [id]);

  useEffect(() => {
    mermaid.render(id, definition, (svg) => setSvg(svg));
  }, [id, fontsLoaded]);

  return (
    <div className="mermaid" dangerouslySetInnerHTML={{ __html: svg }}></div>
  );
};

export default Chart;
