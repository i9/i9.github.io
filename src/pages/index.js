import React, { Component } from "react";
import Layout from "../components/layout";
import Hero from "../components/home/Hero2";
import Games from "../components/home/Games2"
import Feature from "../components/home/FeatureOpt2";
//import Partners from "../components/home/Partner"
//import Steps from "../components/home/Steps"
// import CTA from "../components/home/CTA";
import SEO from "../components/seo";




export default class IndexPage extends Component {
  render() {
    return (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Games/>
  </Layout>
    );
  }
}
