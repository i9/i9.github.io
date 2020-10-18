import React from "react";
import Section from "../global/Section";

import Banner from "../../images/home/devBanner.png";

export default function Hero() {
  return (
    <Section
      secHeight={"sec-hero"}
      bgColor={"#f7f7f9"}
      extraMargin={"44px 0 0 0"}
    >
      <div className="row align-items-center">
        <div className="col-md-8 col-lg-8 col-sm-12">
          <h2 className="font-w-bold text-center d-block text-md-left text-lg-left">
            Transform your games to
            <br /> real money eSports
          </h2>
          <h3 className="font-w-thin pt-4 text-center text-md-left text-lg-left">
            <span className="font-weight-bold">2</span> lines of code,{" "}
            <span className="font-weight-bold">10X</span> monetization
          </h3>
          <p className="text-center text-md-left text-lg-left space-top-small">
            <a
              href="https://portal.celerx.app"
              target="_blank"
              rel="noreferrer"
              className="btn btn-celer"
            >
              Integrate Now
            </a>
          </p>
        </div>
        <div className="col-md-4 col-sm-12 col-lg-4 order-md-first">
          <img src={Banner} className="imgSize-banner_side mx-auto py-3 my-5" />
        </div>
      </div>
    </Section>
  );
}
