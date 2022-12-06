import React from "react"
import Section from "../global/Section"
import feature1 from "../../images/home/feature1.png"
import feature2 from "../../images/home/feature2.png"
import feature3 from "../../images/home/feature3.png"

export default function Features() {
  return (
    <Section>
      <div className="row">
        <div className="col-md-3 col-lg-3 col-sm-12 py-4 px-5 px-md-0">
          <img src={feature1} width="100px" alt="feature" />
          <p className="content-medium-title font-w-bold mt-2">
            Real-time interactive
          </p>
          <p className="content-medium d-grey mt-2">
            CelerX accelerates traditionally slow blockchain functions. Now you
            can play games with little to no latency!
          </p>
        </div>
        <div className="offset-lg-1 offset-md-1 col-md-3 col-lg-3 col-sm-12 py-4 px-5 px-md-0">
          <img src={feature2} width="100px" alt="feature" />
          <p className="content-medium-title font-w-bold mt-2">Zero gas fee</p>
          <p className="content-medium d-grey mt-2">
            Play in the blockchain gaming world instantly without paying any gas
            fees.
          </p>
        </div>
        <div className="offset-lg-1 offset-md-1 col-md-3 col-lg-3 col-sm-12 py-4 px-5 px-md-0">
          <img src={feature3} width="100px" alt="feature" />
          <p className="content-medium-title font-w-bold mt-2">
            Various game types
          </p>
          <p className="content-medium d-grey mt-2">
            Compete on solo, turn-based, and real-time battle games.
          </p>
        </div>
      </div>
    </Section>
  )
}
