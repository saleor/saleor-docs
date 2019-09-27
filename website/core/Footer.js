/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");
const MailchimpSubscribe = require("react-mailchimp-subscribe");

const NewsletterForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = React.useState("");
  const [inputFocus, setInputFocus] = React.useState(false);
  const [inputError, setInputError] = React.useState(false);
  const inputRef = React.useRef(null);
  let timeoutID;

  const submit = e => {
    e.preventDefault();
    setInputError(false);
    if (status !== "success") {
      email && email.indexOf("@") > -1 && onValidated({ EMAIL: email });
    }
    if (email.length === 0) {
      setInputError(true);
    }
  };

  const onClick = () => {
    setInputFocus(true);
  };

  const onBlur = () => {
    timeoutID = setTimeout(() => {
      if (inputFocus) {
        setInputFocus(false);
        inputRef.current.value = "";
      }
    }, 0);
  };

  const onFocus = () => {
    clearTimeout(timeoutID);
    if (!inputFocus) {
      setInputFocus(true);
    }
  };

  const onHandleChange = event => {
    setEmail(event.target.value);
  };

  return (
    <form method="POST" id="newsletter" onSubmit={submit}>
      <div
        className="newsletter-input-wrapper"
        onFocus={onFocus}
        onBlur={onBlur}
        ref={inputRef}
        onClick={onClick}
      >
        <input
          className="newsletter-input"
          type="email"
          name="EMAIL"
          value={email}
          placeholder="Enter email here"
          onChange={onHandleChange}
          autoComplete="email"
        />
        <small></small>
        <div className="newsletter-submit">
          <button type="submit" className="newsletter-submit-button">
            {status === "sending" && (
              <div className="newsletter-submit-button-inner">
                <span>Processing</span>
              </div>
            )}
            {status === "success" && (
              <div className="newsletter-submit-button-inner">
                <span>Thanks, check your inbox!</span>
              </div>
            )}
            {status === null && (
              <div className="newsletter-submit-button-inner">SIGN UP</div>
            )}
            {status === "error" && (
              <div className="newsletter-submit-button-inner">SIGN UP</div>
            )}
          </button>
        </div>
        {inputError ? (
          <div className="newsletter-error">Please enter email address</div>
        ) : (
          <div
            className="newsletter-error"
            dangerouslySetInnerHTML={{ __html: message }}
          ></div>
        )}
      </div>
    </form>
  );
};

class Footer extends React.Component {
  render() {
    const url =
      "//cloud.us19.list-manage.com/subscribe/post?u=8bd6297e7e63c06d9c242a92d&amp;id=7fdc003416";
    return (
      <footer className="docs-footer">
        <div className="wrapper">
          <div className="docs-footer-top">
            <div className="newsletter">
              {/* <span>Get updates from Saleor:</span>
              <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => (
                  <NewsletterForm
                    status={status}
                    message={message}
                    onValidated={formData => subscribe(formData)}
                  />
                )}
              /> */}
            </div>
            <div className="social-icons">
              <span>Contact us:</span>
              <a className="twitter-icon" href="/">
                <img
                  src={
                    this.props.config.baseUrl + this.props.config.twitterIcon
                  }
                  alt={this.props.config.title}
                  height="29"
                  width="30"
                />
              </a>
              <a className="fb-icon" href="/">
                <img
                  src={this.props.config.baseUrl + this.props.config.fbIcon}
                  alt={this.props.config.title}
                  height="29"
                  width="30"
                />
              </a>
              <a className="so-icon" href="/">
                <img
                  src={this.props.config.baseUrl + this.props.config.soIcon}
                  alt={this.props.config.title}
                  height="29"
                  width="30"
                />
              </a>
              <a className="github-icon" href="/">
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
              <span>{`Copyright © 2003 - ${new Date().getFullYear()}`}</span>
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
