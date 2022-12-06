import React, { Component } from "react"
import Layout from "../components/layout"
import Hero from "../components/about/Hero"
import Team from "../components/about/Team"

export default class about extends Component {
  render() {
    return (
      <Layout>
        <Hero />
        <Team />
      </Layout>
    )
  }
}
