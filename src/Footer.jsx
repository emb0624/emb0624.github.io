import React from "react";

const Footer = () => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <ul className="list-inline">
            <li>
              <a href="#projects">Examples</a>
            </li>
            <li className="footer-menu-divider">&sdot;</li>
            <li>
              <a href="#connect">Connect</a>
            </li>
            <li className="footer-menu-divider">&sdot;</li>
            <li>
              <a href="https://medium.embengineering.com">Blog</a>
            </li>
            <li className="footer-menu-divider">&sdot;</li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
          <p className="copyright text-muted small">
            Copyright &copy; Emmanuel Morales 2017. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
