import {
  DocsSidebarProvider,
  useDocRootMetadata,
} from "@docusaurus/plugin-content-docs/client";
import {
  HtmlClassNameProvider,
  ThemeClassNames,
} from "@docusaurus/theme-common";
import DocRootLayout from "@theme/DocRoot/Layout";
import NotFoundContent from "@theme/NotFound/Content";
import clsx from "clsx";
import React from "react";
export default function DocRoot(props) {
  const currentDocRouteMetadata = useDocRootMetadata(props);
  if (!currentDocRouteMetadata) {
    // We only render the not found content to avoid a double layout
    // see https://github.com/facebook/docusaurus/pull/7966#pullrequestreview-1077276692
    return <NotFoundContent />;
  }
  const { docElement, sidebarName, sidebarItems } = currentDocRouteMetadata;
  return (
    <HtmlClassNameProvider className={clsx(ThemeClassNames.page.docsDocPage)}>
      <DocsSidebarProvider name={sidebarName} items={sidebarItems}>
        <DocRootLayout>{docElement}</DocRootLayout>
      </DocsSidebarProvider>
    </HtmlClassNameProvider>
  );
}
