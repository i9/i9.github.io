import React from "react"
import Games from "../components/home/Games"
import SEO from "../components/seo"
import GameBanner from "../components/home/Gamesbanner"
import Layout from "../components/layout"

export default function games() {
  return (
    <Layout>
      <SEO title="CelerX Games" />
      <GameBanner />
    </Layout>
  )
}
