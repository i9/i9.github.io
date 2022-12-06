import React from "react"
import Layout from "../components/campaign/Layout"
import SEO from "../components/seo"
import MyRank from "../components/campaign/MyRank"

export default function rank() {
  return (
    <Layout>
      <SEO title="Rank" />
      <MyRank />
    </Layout>
  )
}
