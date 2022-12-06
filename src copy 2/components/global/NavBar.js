import React, { Component } from "react"
import logo from "../../images/logo/celerx.svg"
import { Link } from "gatsby"
import "../style/navbar.scss"

if (typeof window !== "undefined") {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

export default class NavBar extends Component {
  state = {
    navbarOpen: false,
    navToggle: "nav-bg",
    navLinkToggle: "links links-collapse",
    menuToggle: "",
  }

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
        })
  }

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
                  <Link to="https://docs.celerx.app/">Developer</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className={this.state.navToggle} />
      </div>
    )
  }
}
