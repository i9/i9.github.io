import React from "react"
import Section from "../../components/global/Section"
import coin from "../../images/home/coin2.png"
import Secured from "../../images/home/secured.png"

export default function App2() {
  return (
    <Section>
      <div className="row align-items-center">
        <div className="offset-md-1 offset-lg-1  col-md-5 col-lg-5 col-sm-12">
          <img src={coin} width="100px" alt="coin" />
          <h3 className="font-w-bold">Secured by blockchain</h3>
          <p className="d-grey content-medium">
            For some of the games in CelerX, we enable decentralized game state
            dispute with Celer Network’s advanced layer-2 technology to ensure
            competition fairness.
          </p>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 order-md-first order-lg-first py-2">
          <img src={Secured} width="100%" alt="secured" />
        </div>
      </div>
    </Section>
  )
}
