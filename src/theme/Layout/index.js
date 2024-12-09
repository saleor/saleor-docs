import siteConfig from "@generated/docusaurus.config";
import * as Sentry from "@sentry/react";
import Layout from "@theme-original/Layout";
import React from "react";

const sentryDSN = siteConfig.customFields.sentryDSN;

if (sentryDSN) {
  Sentry.init({
    dsn: sentryDSN,
    integrations: [],
  });
}

export default function LayoutWrapper(props) {
  return (
    <Sentry.ErrorBoundary
      fallback={({ error }) => {
        if (error.name === "ChunkLoadError") {
          window.location.reload(true);
        }
      }}
    >
      <Layout {...props} />
    </Sentry.ErrorBoundary>
  );
}
