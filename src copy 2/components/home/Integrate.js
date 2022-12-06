import React from "react"
import Section from "../global/Section"
import celerArch from "../../images/home/celer-arch.png"

export default function Integrate() {
  return (
    <Section>
      <div className="row align-items-center">
        <div className="col-md-5 col-sm-12 col-lg-5">
          <img src={celerArch} className="imgSize-banner_side mx-auto" />
        </div>
        <div className="col-md-7 col-lg-7 col-sm-12">
          <h3 className="font-w-bold text-center text-md-left text-lg-left ">
            Integrate with the most advanced layer-2 blockchain technology
          </h3>
          <p className="content-medium d-grey mt-2 text-center text-md-left text-lg-left">
            Celer Gaming SDK is backed by the most advanced layer-2 blockchain
            technology.
          </p>
          <p className="text-center content-medium text-md-left text-lg-left mt-2 mb-5">
            <a href="https://www.celer.network/">Learn More</a>
          </p>
        </div>
      </div>
    </Section>
  )
}
