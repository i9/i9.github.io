import React from "react"
import Layout from "../components/layout"
import Section from "../components/global/Section"
import demo from "../images/404/ios14.png"

export default function ios14Support() {
  return (
    <Layout>
      <Section secStyle={"sec-heroBg"} secHeight={"sec-heroDev"}>
        <div className="row justify-content-center py-5 my-5">
          <div className="col-sm-12">
            <h3 className="font-w-extrabolditalic text-center space-top-large">
              iOS 14 support coming soon
            </h3>
            <p className="text-center l-grey font-w-semibold">
              We are aware of the report that some of our games have issues
              after upgrading to iOS14. We are working hard to address the
              issues and will release an update soon! We suggest you to not
              upgrade to iOS 14 just yet. If you have experienced iOS 14 related
              issues, please contact our customer support and we would be more
              than happy to help.
            </p>
          </div>
          <div className="col-sm-12 col-md-10 col-lg-10 mt-5">
            <img src={demo} width="100%" className="d-block m-auto" />
          </div>
        </div>
      </Section>
    </Layout>
  )
}
