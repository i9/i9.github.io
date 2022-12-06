import React from "react"
import Section from "../../components/global/Section"
import CTAimg from "../../images/developer/CTA.png"

export default function CTA() {
  return (
    <Section>
      <div
        className="row justify-content-center pt-5 my-5"
        style={{
          background:
            "linear-gradient(88.4deg,rgba(247, 249, 255, 0.4) 4.22%,rgba(227, 235, 255, 0.4) 35.74%,rgba(245, 207, 226, 0.4) 71.03%,rgba(251, 249, 250, 0.4) 94.55%)",
          borderRadius: "2rem",
          filter: "drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));",
        }}
      >
        <div className="col-lg-8 col-md-8 col-sm-12">
          <h3 className="font-w-extrabolditalic text-center space-top-large">
            Integrate Now
          </h3>
          <p className="text-center l-grey font-w-semibold">
            Launch into mobile eSports by transforming a copy of your game into
            a competitive play. Generate revenue from each match played without
            ads by enabling players to compete head-to-head for practice coins
            and real money.{" "}
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
        <div className="col-sm-12 mt-5 p-0">
          <img src={CTAimg} width="100%" />
        </div>
      </div>
    </Section>
  )
}
