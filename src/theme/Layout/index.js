import ErrorBoundary from "@docusaurus/ErrorBoundary";
import siteConfig from "@generated/docusaurus.config";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import Layout from "@theme-original/Layout";
import React from "react";

const sentryDSN = siteConfig.customFields.sentryDSN;

if (sentryDSN) {
  Sentry.init({
    dsn: sentryDSN,
    integrations: [new BrowserTracing()],
    tracesSampleRate: 0,
    enableTracing: false,
  });
}

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
