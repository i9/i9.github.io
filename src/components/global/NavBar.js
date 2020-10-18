import React, { Component } from "react";
import logo from "../../images/logo/logo.png";
import { Link } from "gatsby";
import "../style/navbar.scss";

import NavDropdown from "react-bootstrap/NavDropdown";

if (typeof window !== "undefined") {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]');
}

export default class NavBar extends Component {
  state = {
    navbarOpen: false,
    navToggle: "nav-bg",
    navLinkToggle: "links links-collapse",
    menuToggle: "",
  };

  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({
          navbarOpen: false,
          navToggle: "nav-bg",
          navLinkToggle: "links links-collapse",
          menuToggle: "",
        })
      : this.setState({
          navbarOpen: true,
          navToggle: "nav-bg-active",
          navLinkToggle: "links links-collapse-active",
          menuToggle: "change",
        });
  };

  render() {
    return (
      <div className="nav-menu">
        <div className="container">
          <nav className="nav-container">
            <div className="brand">
              <Link to="/">
                <img src={logo} height="44px" className="my-lg-3 my-md-3" />
              </Link>
            </div>

            <div className="toggler">
              <button onClick={this.navbarHandler}>
                <span className={this.state.menuToggle}>
                  <div className="bar1"></div>
                  <div className="bar2"></div>
                  <div className="bar3"></div>
                </span>
              </button>
            </div>

            <div className={this.state.navLinkToggle}>
              <ul className="link-container align-items-center">
                <li>
                  {" "}
                  <NavDropdown title="Doc" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="https://docs.celerx.app/docs/h5-guide">
                      HTML5
                    </NavDropdown.Item>
                    <NavDropdown.Item href="https://docs.celerx.app/docs/unity-ios-game">
                      Unity
                    </NavDropdown.Item>
                    <NavDropdown.Item href="https://docs.celerx.app/docs/native-ios-game">
                      iOS
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Cocos 2dx (coming soon)
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Android (coming soon)
                    </NavDropdown.Item>
                  </NavDropdown>
                </li>
                <li>
                  <a
                    href="https://portal.celerx.app"
                    target="_blank"
                    className="btn btn-celer"
                  >
                    Integrate Now
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className={this.state.navToggle} />
      </div>
    );
  }
}
