/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import NavbarCampaign from "./global/NavBarCampaign"
import Footer from "./global/Footer"
import layoutStyle from "./style/layout.module.scss"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"

import "bootstrap/dist/css/bootstrap.min.css"

const Layout = ({ children }) => {
  return (
    <div className={layoutStyle.main}>
      <div className={layoutStyle.mainContent}>
        <NavbarCampaign />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

library.add(fab)

export default Layout
