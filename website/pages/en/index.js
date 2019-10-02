/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const Index = () => (
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
            <a href="/docs/">Go to documentation contents.</a>
          </article>
        </div>
      </div>
    </div>
  </div>
);

module.exports = Index;
