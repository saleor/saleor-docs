import { ThemeProvider } from "@saleor/macaw-ui/next";
import "@saleor/macaw-ui/next/style";
import Layout from "@theme-original/Layout";
import React from "react";

import ErrorBoundary from "@docusaurus/ErrorBoundary";
import siteConfig from "@generated/docusaurus.config";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

const sentryDSN = siteConfig.customFields.sentryDSN;

if (sentryDSN) {
  Sentry.init({
    dsn: sentryDSN,
    integrations: [new BrowserTracing()],
    tracesSampleRate: 1.0,
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
      <ThemeProvider>
        <Layout {...props} />
      </ThemeProvider>
    </ErrorBoundary>
  );
}
