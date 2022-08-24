import React from "react";
import Layout from "@theme-original/Layout";

import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import siteConfig from "@generated/docusaurus.config";

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
    <>
      <Layout {...props} />
    </>
  );
}
