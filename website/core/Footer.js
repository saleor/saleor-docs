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
        <div className="wrapper">
          <div className="docs-footer-top">
            <div className="newsletter">
              <span>Get updates from Saleor:</span>
              <div id="mc_embed_signup">
                <form
                  action="https://getsaleor.us19.list-manage.com/subscribe/post?u=8bd6297e7e63c06d9c242a92d&amp;id=f8dadd63b8"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  className="validate"
                  target="_blank"
                  noValidate
                >
                  <div id="mc_embed_signup_scroll">
                    <div className="mc-field-group newsletter-input-wrapper">
                      <input
                        type="email"
                        value=""
                        name="EMAIL"
                        className="required email newsletter-input"
                        id="mce-EMAIL"
                        placeholder="Email address"
                      />
                      <small></small>
                      <div className="clear">
                        <input
                          type="submit"
                          value="Sign up"
                          name="Sign up"
                          id="mc-embedded-subscribe"
                          className="newsletter-submit-button"
                        />
                      </div>
                    </div>
                    <div id="mce-responses" className="clear">
                      <div
                        className="response"
                        id="mce-error-response"
                        style={{ display: "none" }}
                      ></div>
                      <div
                        className="response"
                        id="mce-success-response"
                        style={{ display: "none" }}
                      ></div>
                    </div>
                    <div
                      style={{ position: "absolute", left: "-5000px" }}
                      aria-hidden="true"
                    >
                      <input
                        type="text"
                        name="b_8bd6297e7e63c06d9c242a92d_f8dadd63b8"
                        tabIndex="-1"
                        value=""
                      />
                    </div>
                  </div>
                </form>
              </div>
              <script
                type="text/javascript"
                src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
              ></script>
            </div>
            <div className="social-icons">
              <span>Contact us:</span>
              <a
                className="twitter-icon"
                href="https://github.com/mirumee/saleor"
                target="_blank"
              >
                <img
                  src={
                    this.props.config.baseUrl + this.props.config.twitterIcon
                  }
                  alt={this.props.config.title}
                  height="29"
                  width="30"
                />
              </a>
              <a
                className="fb-icon"
                href="https://www.facebook.com/mirumeelabs/"
                target="_blank"
              >
                <img
                  src={this.props.config.baseUrl + this.props.config.fbIcon}
                  alt={this.props.config.title}
                  height="29"
                  width="30"
                />
              </a>
              <a
                className="so-icon"
                href="https://spectrum.chat/saleor"
                target="_blank"
              >
                <img
                  src={this.props.config.baseUrl + this.props.config.soIcon}
                  alt={this.props.config.title}
                  height="29"
                  width="30"
                />
              </a>
              <a
                className="github-icon"
                href="https://twitter.com/getsaleor"
                target="_blank"
              >
                <img
                  src={this.props.config.baseUrl + this.props.config.githubIcon}
                  alt={this.props.config.title}
                  height="29"
                  width="30"
                />
              </a>
            </div>
          </div>
          {/* <div className="docs-footer-menu">
            <div className="logo">
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                height="29"
                width="30"
              />
            </div>
            <div className="footer-menu">
              <div className="footer-menu-wrapper">
                <h2>Why Saleor</h2>
                <ul>
                  <li>
                    <a href="">Switching from Magento </a>
                  </li>
                  <li>
                    <a href="">Events</a>
                  </li>
                  <li>
                    <a href="">Company</a>
                  </li>
                  <li>
                    <a href="">Resources</a>
                  </li>
                  <li>
                    <a href="">Blog</a>
                  </li>
                </ul>
              </div>
              <div className="footer-menu-wrapper">
                <h2>Product</h2>
                <ul>
                  <li>
                    <a href="">Core functionalities</a>
                  </li>
                  <li>
                    <a href="">Marchandising</a>
                  </li>
                  <li>
                    <a href="">Internalisation</a>
                  </li>
                  <li>
                    <a href="">Open platform</a>
                  </li>
                  <li>
                    <a href="">PWA</a>
                  </li>
                  <li>
                    <a href="">API-driven</a>
                  </li>
                  <li>
                    <a href="">Launch support</a>
                  </li>
                  <li>
                    <a href="">Success support</a>
                  </li>
                </ul>
              </div>
              <div className="footer-menu-wrapper">
                <h2>Solutions</h2>
                <ul>
                  <li>
                    <a href="">Magento Migration</a>
                  </li>
                  <li>
                    <a href="">Multi-channel</a>
                  </li>
                  <li>
                    <a href="">International</a>
                  </li>
                  <li>
                    <a href="">B2B</a>
                  </li>
                  <li>
                    <a href="">Case studies</a>
                  </li>
                  <li>
                    <a href="">Open source</a>
                  </li>
                  <li>
                    <a href="">Custom development</a>
                  </li>
                </ul>
              </div>
              <div className="footer-menu-wrapper">
                <h2>Developers</h2>
                <ul>
                  <li>
                    <a href="">API documentation</a>
                  </li>
                  <li>
                    <a href="">Become a partner</a>
                  </li>
                  <li>
                    <a href="">Status</a>
                  </li>
                  <li>
                    <a href="">Roadmap</a>
                  </li>
                  <li>
                    <a href="">Open source community</a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          <div className="dosc-footer-copyrights">
            <div className="copyrights">
              <span>{`Copyright © 2009 - ${new Date().getFullYear()}`}</span>
              <span>
                <a href="https://mirumee.com" target="_blank">
                  Mirumee Software
                </a>
              </span>
            </div>
            <div className="dosc-footer-links">
              <a href="/">Terms of use</a>
              <a href="/">Privacy policy</a>
            </div>
          </div>
          <link
            rel="stylesheet"
            href="https://use.typekit.net/itf4hxr.css"
          ></link>
        </div>
      </footer>
    );
  }
}

module.exports = Footer;
