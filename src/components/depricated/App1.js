import React from "react"
import Section from "../global/Section"
import coin from "../../images/home/coin1.png"
import appImg from "../../images/home/app.png"

export default function App1() {
  return (
    <Section>
      <div className="row align-items-center">
        <div className="col-md-5 col-lg-5 col-sm-12">
          <img src={coin} width="100px" alt="coin" />
          <h3 className="font-w-bold">
            Game of skills,
            <br />
            not chance
          </h3>
          <p className="d-grey content-medium">
            All of the games in CelerX are skill-based without any randomness.
            You compete by your skill level, not by chance. Keep practicing to
            ramp up your game skills and win more prizes!
          </p>
        </div>
        <div className="offset-md-1 offset-lg-1 col-md-6 col-lg-6 col-sm-12 py-2">
          <img
            src={appImg}
            className="ml-md-auto mx-sm-auto d-block"
            width="100%"
            alt="appimg"
          />
        </div>
      </div>
    </Section>
  )
}
