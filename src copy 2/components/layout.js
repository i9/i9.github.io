import React from "react"

import PropTypes from "prop-types"
import Navbar from "../components/global/NavBar"
import Footer from "./global/Footer"
import layoutStyle from "./style/layout.module.scss"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import "bootstrap/dist/css/bootstrap.min.css"
import "../components/style/main.scss"

const Layout = ({ children }) => {
  return (
    <div className={layoutStyle.main}>
      <div className={layoutStyle.mainContent}>
        <Navbar />
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
