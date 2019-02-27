import React from "react";

const Banner = () => (
  <div className="banner banner-background-1">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <h2>Connect to:</h2>
        </div>
        <div className="col-lg-6">
          <ul className="list-inline banner-social-buttons">
            <li>
              <a
                href="https://twitter.com/embengineering"
                className="btn btn-default btn-lg"
              >
                <i className="fa fa-twitter fa-fw" />{" "}
                <span className="network-name">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/embengineering"
                className="btn btn-default btn-lg"
              >
                <i className="fa fa-linkedin fa-fw" />{" "}
                <span className="network-name">Linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/embengineering"
                className="btn btn-default btn-lg"
              >
                <i className="fa fa-github fa-fw" />{" "}
                <span className="network-name">Github</span>
              </a>
            </li>
            <li>
              <a
                href="https://medium.embengineering.com"
                className="btn btn-default btn-lg"
              >
                <i className="fa fa-rss fa-fw" />{" "}
                <span className="network-name">Blog</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Banner;
