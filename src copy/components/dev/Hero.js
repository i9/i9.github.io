import React from "react"
import Section from "../global/Section"
import Heroimage from "../../images/developer/hero.png"

export default function Hero() {
  return (
    <Section secStyle={"sec-heroBg"} secHeight={"sec-heroDev"}>
      <div className="row justify-content-center py-5 my-5">
        <div className="col-lg-8 col-md-8 col-sm-12">
          <h3 className="font-w-extrabolditalic text-center space-top-large">
            Develop the Games You Love
          </h3>
          <p className="text-center l-grey font-w-semibold">
            Join one of the world’s fastest growing real-money eSports platforms
            by seamlessly integrating your game with our SDK, enabling players
            to compete for real money and prizes.
          </p>
          <p className="text-center mt-3">
            <a
              href="https://docs.celerx.app/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-celer mt-2 font-w-extrabold"
            >
              Integrate Now
            </a>
          </p>
        </div>
      </div>
      <div
        className="position-absolute"
        style={{
          bottom: "-2rem",
          transform: "translateX(-50%)",
          left: "50%",
          zIndex: "-1",
          width: "100vw",
        }}
      >
        <img src={Heroimage} width="100%" className="d-block mx-auto" />
      </div>
    </Section>
  )
}
