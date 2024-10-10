/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");
import { Redirect } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

const NotFound = () => {
  const context = useDocusaurusContext();
  // check if url is in old, non versioned format
  const regex = /^\/docs\/(dashboard|developer)/gm;
  const requestedUrl =
    typeof window !== "undefined" ? window.location.pathname : "";
  const matched = !!requestedUrl.match(regex);
  if (matched) {
    // redirect user to the latest version of docs
    const availableVersions =
      context.globalData["docusaurus-plugin-content-docs"].default.versions;
    const currentVersion = availableVersions.filter((v) => v.isLast);
    if (currentVersion.length > 0) {
      const currentVersionPath = currentVersion[0].path;
      const newUrl = requestedUrl.replace("/docs", currentVersionPath);
      return <Redirect to={newUrl} />;
    }
  }

  return (
    <Layout
      title={`Page not found`}
      permalink="/404"
      description="List of all documented versions of Saleor"
    >
      <div className="container margin-vert--xl">
        <h1>Requested page could not be found.</h1>
        <div className="margin-bottom--lg">
          <article>
            <a href="/">Return to documentation.</a>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
