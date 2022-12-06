import React from "react"
import Section from "../global/Section"
import DetailImg1 from "../../images/developer/howitworks.png"

export default function Detail() {
  return (
    <Section bgColor={"#f7f7f9"}>
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <h3 className="font-w-extrabolditalic text-sm-center space-top-large text-lg-left text-md-left">
            How it works
          </h3>
          <p className="text-center text-lg-left text-md-left l-grey font-w-semibold">
            Our goal is to achieve a win-win collaboration with our partners by
            enabling an ad-free experience while generating revenue from every
            match played for real money.
          </p>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12 offset-lg-1 offset-md-1">
          <img src={DetailImg1} width="100%" className="d-block mx-auto" />
          <p className="text-center l-grey font-w-semibold pt-2">
            For each real money game, players pay an entry fee to enter a match.
            After the winning is paid out, you and CelerX share the rest.
          </p>
        </div>
      </div>
    </Section>
  )
}
