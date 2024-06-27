/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");
import { Redirect } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const Index = () => {
  const {
    siteConfig: { url },
  } = useDocusaurusContext();
  const path = url === "https://docs.saleor.io" ? "/docs/" : "/docs/";

  return <Redirect to={path} />;
};

export default Index;
