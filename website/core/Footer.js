/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

class Footer extends React.Component {
  render() {
    return (
      <footer className="docs-footer">
        <div className="footer-icon">
          {this.props.config.footerIcon && (
            <div>
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                height="29"
                width="30"
              />
            </div>
          )}
        </div>
        <div className="footer-body">
          <div className="wrapper">
            <a href="https://mirumee.com" target="_blank">
              <span>{`Copyright © ${new Date().getFullYear()}`}</span>
              <span>Mirumee Software</span>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

module.exports = Footer;
