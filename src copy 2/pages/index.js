import React, { Component } from "react"
import Layout from "../components/layout"
import Hero from "../components/home/Hero"
import SEO from "../components/seo"
import Feature from "../components/home/FeatureOpt2"
import CTA from "../components/home/CTA"
import Partner from "../components/home/Partner"
import Axios from "axios"

export default class IndexPage extends Component {
  state = {
    countryCode: "",
  }

  componentDidMount() {
    this.getIp()
  }
  getIp = () => {
    Axios.get("https://ipapi.co/json/")
      .then(Response => {
        let data = Response.data
        this.setState({
          countryCode: data.country_code,
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    if (this.state.countryCode === "IND") {
      window.location = `/india/`
    } else {
      return (
        <Layout>
          <SEO title="Mobile eSports | CelerX" />
          <Hero />
          <CTA />
          <Partner />
          <Feature />
        </Layout>
      )
    }
  }
}
