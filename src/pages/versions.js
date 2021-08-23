/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";

import Layout from "@theme/Layout";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

import versions from "../../versions.json";

function Versions() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  let currentLabel = 'Next' 
  let currentPath = 'next' 
  const configVersions = context.siteConfig.presets[0][1].docs.versions
  if (configVersions.current){
    currentLabel = configVersions.current.label;
    currentPath = configVersions.current.path;
  }
  const latestStableVersion = versions[0];
  const pastVersions = versions.filter((version) => version !== latestStableVersion);
  const repoUrl = `https://github.com/${siteConfig.organizationName}/${siteConfig.projectName}`;
  return (
    <Layout
      title={`${siteConfig.title} Versions`}
      permalink="/versions/"
      description="List of all documented versions of Saleor"
    >
      <div className="container margin-vert--xl">
        <h1>Docusaurus documentation versions</h1>
        <div className="margin-bottom--lg">
          <h3 id="latest">Latest stable version</h3>
          <p>Here you can find the latest documentation.</p>
          <table>
            <tbody>
              <tr>
                <th>{latestStableVersion}</th>
                <td>
                  <Link to={useBaseUrl(`/docs/${latestStableVersion}/`)}>Documentation</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="margin-bottom--lg">
          <h3 id="next">{currentLabel} version</h3>
          <p>Here you can find the documentation for currently developed version.</p>
          <table>
            <tbody>
              <tr>
                <th>master</th>
                <td>
                  <Link to={useBaseUrl(`/docs/${currentPath}/`)}>Documentation</Link>
                </td>
                <td>
                  <a href={repoUrl}>Source Code</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {pastVersions.length > 0 && (
          <div className="margin-bottom--lg">
            <h3 id="archive">Past Versions</h3>
            <p>
              Here you can find documentation for previous versions of
              Docusaurus.
            </p>
            <table>
              <tbody>
                {pastVersions.map((version) => (
                  <tr key={version}>
                    <th>{version}</th>
                    <td>
                      <Link to={useBaseUrl(`/docs/${version}/`)}>
                        Documentation
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Versions;
