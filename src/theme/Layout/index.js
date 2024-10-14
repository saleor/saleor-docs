import ErrorBoundary from "@docusaurus/ErrorBoundary";
import Layout from "@theme-original/Layout";
import React from "react";

export default function LayoutWrapper(props) {
  return (
    <ErrorBoundary
      fallback={({ error }) => {
        if (error.name === "ChunkLoadError") {
          window.location.reload(true);
        }
      }}
    >
      <Layout {...props} />
    </ErrorBoundary>
  );
}
