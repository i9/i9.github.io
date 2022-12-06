import React from "react"
import Section from "../global/Section"
import Intro1 from "../../images/developer/fairplay.png"
import Intro2 from "../../images/developer/tournament.png"
import Intro3 from "../../images/developer/league.png"
import Intro4 from "../../images/developer/realmoney.png"

export default function Intro() {
  return (
    <Section extraMargin={"2rem 0 0 0"}>
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-12 py-2">
          <img src={Intro1} className="d-block mx-auto" width="160px" />
          <h5 className="text-center font-w-bold py-3">
            Fair Play <br /> And Security
          </h5>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 py-2">
          <img src={Intro2} className="d-block mx-auto" width="160px" />
          <h5 className="text-center font-w-bold py-3">
            Tournaments <br /> And Social Challenge
          </h5>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 py-2">
          <img src={Intro3} className="d-block mx-auto" width="160px" />
          <h5 className="text-center font-w-bold py-3">
            Leagues <br /> And Leaderboards
          </h5>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 py-2">
          <img src={Intro4} className="d-block mx-auto" width="160px" />
          <h5 className="text-center font-w-bold py-3">
            Real Money Winnings <br /> And Prizes
          </h5>
        </div>
      </div>
    </Section>
  )
}
