import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

// import {NavLink} from 'react-router-dom';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <div id="footer">
          <div className="link_section">
            <div className="container">
              <div className="main">
                <div className="logo">
                  <a className="logo_icon" href="#navbar">
                    Logo
                  </a>
                  <p>
                    We are a community of graduate student entrepreneurs and
                    creatives from Russell Group universities.
                  </p>
                </div>
                <div className="social">
                  <a target="_blank" href="social_link">
                    <span>
                      <svg
                        width="9"
                        height="17"
                        viewBox="0 0 9 17"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5.87399 5.72799V3.72215C5.87399 3.16853 6.3233 2.71922 6.87691 2.71922H7.87984V0.211914H5.87399C4.21215 0.211914 2.86522 1.55884 2.86522 3.22068V5.72799H0.859375V8.2353H2.86522V16.2587H5.87399V8.2353H7.87984L8.88276 5.72799H5.87399Z" />
                      </svg>
                    </span>
                  </a>

                  <a target="_blank" href="social_link">
                    <span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="my-path"
                          d="M7.82471 11.8027C5.65284 11.8027 3.89453 10.0425 3.89453 7.87255C3.89453 5.70067 5.65475 3.94237 7.82471 3.94237C9.99659 3.94237 11.7549 5.70259 11.7549 7.87255C11.7549 10.0444 9.99468 11.8027 7.82471 11.8027ZM7.82471 5.32157C6.41488 5.32157 5.27373 6.46335 5.27373 7.87255C5.27373 9.28175 6.41552 10.4235 7.82471 10.4235C9.23391 10.4235 10.3757 9.28175 10.3757 7.87255C10.3763 6.46335 9.23455 5.32157 7.82471 5.32157Z"
                        />
                        <path
                          className="my-path"
                          d="M10.9808 15.4802C9.57163 15.5459 6.08118 15.5428 4.67071 15.4802C3.43128 15.4221 2.338 15.1228 1.45661 14.2414C-0.0164099 12.7684 0.171866 10.7835 0.171866 7.87257C0.171866 4.89334 0.00592799 2.95442 1.45661 1.50374C2.93538 0.0256081 4.94897 0.21899 7.82545 0.21899C10.7766 0.21899 11.7952 0.217076 12.8387 0.621072C14.2575 1.17186 15.3284 2.44001 15.4331 4.71783C15.4995 6.12767 15.4956 9.61748 15.4331 11.028C15.3067 13.7168 13.8637 15.3475 10.9808 15.4802ZM13.2114 2.4783C12.2458 1.51267 10.9062 1.59883 7.80694 1.59883C4.61582 1.59883 3.33618 1.5516 2.40246 2.48788C1.32705 3.55818 1.52171 5.27692 1.52171 7.88279C1.52171 11.409 1.15984 13.9485 4.69879 14.1297C5.51189 14.1584 5.75122 14.168 7.79801 14.168L7.82673 14.1489C11.2278 14.1489 13.8962 14.505 14.0564 10.9667C14.0928 10.1593 14.1011 9.91681 14.1011 7.87321C14.1005 4.71911 14.1605 3.43181 13.2114 2.4783Z"
                        />
                        <path
                          className="my-path"
                          d="M11.9106 11.0401C12.4178 11.0401 12.829 11.4513 12.829 11.9585C12.829 12.4658 12.4178 12.877 11.9106 12.877C11.4034 12.877 10.9922 12.4658 10.9922 11.9585C10.9922 11.4513 11.4034 11.0401 11.9106 11.0401Z"
                        />
                      </svg>
                    </span>
                  </a>
                  <a target="_blank" href="social_link">
                    <span>
                      <svg
                        width="15"
                        height="13"
                        viewBox="0 0 15 13"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="my-path"
                          d="M4.71738 12.9999C10.378 12.9999 13.4736 7.99887 13.4736 3.66234C13.4736 3.52031 13.4708 3.37886 13.4649 3.23819C14.0657 2.7749 14.5879 2.19678 15 1.53873C14.4486 1.80021 13.8551 1.976 13.2327 2.05553C13.868 1.64908 14.3559 1.00639 14.5859 0.24025C13.9913 0.616178 13.3328 0.889296 12.6318 1.03681C12.0702 0.398916 11.2706 0 10.3853 0C8.68586 0 7.30759 1.46967 7.30759 3.28133C7.30759 3.53899 7.33465 3.78941 7.3874 4.02966C4.82965 3.89242 2.56151 2.5866 1.04381 0.60082C0.779625 1.08572 0.627167 1.64917 0.627167 2.25039C0.627167 3.38883 1.17049 4.39415 1.99662 4.98205C1.49173 4.96552 1.01748 4.81771 0.602858 4.57169C0.6024 4.58548 0.6024 4.59889 0.6024 4.61356C0.6024 6.20296 1.66318 7.53001 3.07153 7.83072C2.81285 7.90575 2.54068 7.94615 2.25998 7.94615C2.06203 7.94615 1.86903 7.92541 1.68153 7.88696C2.07331 9.19093 3.2095 10.1398 4.55648 10.1664C3.50313 11.0468 2.17623 11.5712 0.734126 11.5712C0.486084 11.5712 0.240886 11.5561 0 11.5257C1.36203 12.4567 2.97934 13 4.71747 13"
                        />
                      </svg>
                    </span>
                  </a>
                  <a target="_blank" href="social_link">
                    <span>
                      <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="my-path"
                          d="M2.01173 0.211914C0.836649 0.211914 0.0683594 0.983529 0.0683594 1.99771C0.0683594 2.98949 0.813762 3.78312 1.96664 3.78312H1.98894C3.187 3.78312 3.9326 2.98949 3.9326 1.99771C3.9102 0.983529 3.187 0.211914 2.01173 0.211914Z"
                        />
                        <path
                          className="my-path"
                          d="M0.271484 5.19336H3.70673V15.5284H0.271484V5.19336Z"
                        />
                        <path
                          className="my-path"
                          d="M12.1386 4.95117C10.2854 4.95117 9.04277 6.69256 9.04277 6.69256V5.19374H5.60742V15.5288H9.04257V9.75731C9.04257 9.44833 9.06497 9.13984 9.15574 8.91889C9.40407 8.30191 9.96921 7.66273 10.9183 7.66273C12.1613 7.66273 12.6585 8.6105 12.6585 9.99988V15.5288H16.0934V9.60287C16.0934 6.42838 14.3986 4.95117 12.1386 4.95117Z"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
                <div className="quickLink">
                  <div className="our-coach footer-common">
                    <h3>Our Coaches</h3>
                    <p>Foundation HTML, CSS + JS</p>
                    <p>Visual Design + Branding</p>
                    <p>Shopify Theming</p>
                    <p>WordPress</p>
                    <p>Advanced CSS + Javascript</p>
                    <p>React.js</p>
                  </div>

                  <div className="learn-more footer-common">
                    <h3>Learn More</h3>
                    <p>First Steps to Coding guide</p>
                    <p>Learn To Code Now book</p>
                    <p>Tutorials</p>
                    <p>Blog</p>
                    <p>FAQs</p>
                  </div>

                  <div className="company footer-common">
                    <h3>Company</h3>
                    <p> About Us</p>
                    <p>Why learn online?</p>
                    <p>Code of Conduct</p>
                    <p>Return Policy</p>
                    <p>
                      <Link to="/shortlink">short link</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="container">
              <span className="copy"> &copy; </span>{" "}
              <span className="name">
                Copyright 2020. All rights reserved by Someone
              </span>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Footer;
