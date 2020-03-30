/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";

import Layout from "@theme/Layout";

const Index = () => {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      permalink="/"
      title={siteConfig.title}
      description={siteConfig.tagLine}
    >
      <div className="docMainWrapper wrapper">
        <div className="container mainContainer">
          <div className="wrapper">
            <div className="post">
              <header className="postHeader">
                <h1 className="postHeaderTitle">
                  Welcome to the Saleor documentation!
                </h1>
              </header>
              <article>
                <Link to={useBaseUrl("/docs/index")}>
                  Go to documentation contents.
                </Link>
              </article>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
