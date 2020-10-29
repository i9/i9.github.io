import React, { Component } from "react";

import Layout from "../components/layout";
import Hero from "../components/home/Hero3";
import Games from "../components/home/Games2"
import Feature from "../components/home/FeatureOpt2";
//import Partners from "../components/home/Partner"
//import Steps from "../components/home/Steps"
// import CTA from "../components/home/CTA";
import SEO from "../components/seo";



if (typeof window !== `undefined`) window.location.replace(`https://celerx.app/`) 


export default class IndexPage extends Component {
  
  render() {
   
    
    return (
  // <Layout>
  //   <SEO title="Home" />
  //   <Hero />
  //   <Games/>
  // </Layout>
  <a href="celerx.app">celerx.app</a>
    );
  }
}
