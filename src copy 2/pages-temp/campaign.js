import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/campaign/Hero"
import Download from "../components/campaign/Download"
import Actiity2 from "../components/campaign/Activity2"
import Rank from "../components/campaign/Rank"
import Term from "../components/campaign/Note"

export default function campaign() {
  return (
    <Layout>
      <Hero />
      <Actiity2 />
      <Rank />
      <Term />
    </Layout>
  )
}
