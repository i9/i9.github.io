import React, { Component } from "react"
import logo from "../../images/logo/Black.png"
import { Link } from "gatsby"
import "../style/navbar.scss"
// import PromotionHeader from "../global/PromotionNav"

if (typeof window !== "undefined") {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

export default class NavBar2 extends Component {
  state = {
    navbarOpen: false,
    navToggle: "nav-bg",
    navLinkToggle: "links links-collapse",
    menuToggle: "",
  }

  navbarHandler = event => {
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
                <img src={logo} height="44px" alt="logo" className="my-1" />
              </Link>
            </div>

            {/* <div className="toggler">
              <button onClick={this.navbarHandler}>
                <span className={this.state.menuToggle}>
                  <div className="bar1"></div>
                  <div className="bar2"></div>
                  <div className="bar3"></div>
                </span>
              </button>
            </div> */}

            <div className={this.state.navLinkToggle}>
              <ul className="link-container align-items-center">
                <li>
                  {/* <a href="https://developer.celerx.app/">Developer</a> */}
                </li>
                {/* <li>
                  <Link to="/faq">FAQ</Link>
                </li> */}
                {/* <li className="d-none d-md-none d-lg-block">
                  <a href="#download" className="btn btn-celer">
                    Play Now
                  </a>
                </li> */}
              </ul>
            </div>
          </nav>
        </div>
        <div className={this.state.navToggle} />
      </div>
    )
  }
}
