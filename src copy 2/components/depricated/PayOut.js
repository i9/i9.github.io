import React from "react"
import Section from "../global/Section"
import payOut from "../../images/home/instancePrize.png"

export default function PayOut() {
  return (
    <Section bgColor={"black"}>
      <div className="row justify-content-center">
        <div className="col-lg-7 col-md-7 col-sm-12">
          <img src={payOut} width="100%" alt="payout" />
          <h3 className="w text-center space-top-exsmall font-w-bold">
            Instant prize payout
            <br /> 100% your control
          </h3>
          <p className="content-medium l-grey text-center px-lg-2 space-top-exsmall">
            Get your prizes whenever you win. If you choose to use
            cryptocurrency, you take full control of your crypto funds and
            prizes. Neither Celer nor any other entity holds your crypto assets.
            You can also choose traditional payment methods in the games
            separate from blockchain payments.
          </p>
        </div>
      </div>
    </Section>
  )
}
