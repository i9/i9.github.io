import React from "react"
import Section from "../global/Section"
import Step1 from "../../images/home/step1.png"
import Step2 from "../../images/home/step2.png"
import Step3 from "../../images/home/step3.png"

export default function Steps() {
  return (
    <Section>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12 pb-4">
          <img src={Step1} width="100%" alt="Download CelerX" />
          <p className="content-medium-title font-w-bold py-2">
            Download CelerX games
          </p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 pb-4">
          <img src={Step2} width="100%" alt="Play skill-based games" />
          <p className="content-medium-title font-w-bold py-2">
            Play skill-based games
          </p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 pb-4">
          <img src={Step3} width="100%" alt="Win crypto prizes" />
          <p className="content-medium-title font-w-bold py-2">
            Have fun with friends
          </p>
        </div>
      </div>
    </Section>
  )
}
