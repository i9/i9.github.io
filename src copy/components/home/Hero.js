import React from "react"
import Section from "../global/Section"
// import heroImg from "../../images/home/heroImg.png"
import heroImg from "../../images/india/heroImg.png"
import waveform from "../../images/home/waveform.svg"
import "../style/main.scss"

export default function Hero() {
  return (
    <Section
      secHeight={"sec-outer"}
      extraMargin={"80px 0 0 0"}
      secStyle={"sec-heroBg"}
    >
      <div className="row align-items-top space-top-large">
        <div className="col-md-5 col-sm-12 col-lg-7 my-lg-5">
          <h2 className="font-w-extrabold text-center d-block text-md-left text-lg-left space-top-large">
            Transform your mobile<br/>game into a multiplayer<br/>eSports experience
          </h2>
          <h4 className="font-w-medium pt-4  text-center text-md-left text-lg-left">
            <span className="font-weight-bold">2</span> lines of code,{" "}
            <span className="font-weight-bold">10X</span> the engagement
          </h4>
          <p className="text-center text-md-left text-lg-left mt-5">
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
        {/* <div className="col-md-2 col-sm-0 col-lg-2 my-lg-5"/> */}
        <div className="col-md-5 col-sm-12 col-lg-5 my-lg-5">
          <img src={heroImg} width="80%" class="center" />
        </div>
      </div>
      <div
        className="position-absolute"
        style={{
          bottom: "-10px",
          transform: "translateX(-50%)",
          left: "50%",
          zIndex: "-1",
          width: "100vw",
        }}
      >
        <img src={waveform} width="100%" />
      </div>
    </Section>
  )
}
