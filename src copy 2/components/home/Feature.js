import React from "react";
import Section from "../global/Section";
import GlobalReach from "../home/Global";
import feature1 from "../../images/home/coin.png";
import feature3 from "../../images/home/developersIcon2.svg";
import feature2 from "../../images/home/developersIcon.svg";
import feature4 from "../../images/home/global.png";

export default function Feature() {
  return (
    <Section>
      <div className="row align-items-start">
        <div className="col-md-6 col-lg-6 col-sm-12 py-4">
          <img src={feature1} height="100px" />
          <p className="content-large font-w-semibold mt-2">
            New Monetization Mode
          </p>
          <p className="content-medium d-grey mt-2">
            Integrating with Celer Gaming SDK and launching with CelerX equips
            your HTML5 game with real-money competition and built-in
            monetization capability. Start this new monetization mode for your
            game in addition to your existing monetization sources.
          </p>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 py-4">
          <img src={feature2} height="100px" />
          <p className="content-large font-w-semibold mt-2 ">
            Easy Integration with Two Lines of Code
          </p>
          <p className="content-medium d-grey mt-2">
            Developers who already had an HTML5 game can easily integrate with
            Celer Gaming SDK. For some integration modes, you only need to add
            two lines of code to your game before launching and generating
            revenue with CelerX.
          </p>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 py-4">
          <img src={feature3} height="100px" />
          <p className="content-large font-w-semibold mt-2">
            No Blockchain Experience Needed
          </p>
          <p className="content-medium d-grey mt-2">
            With the flexible integration modes provided by Celer Gaming SDK,
            even developers with ZERO blockchain experience can easily transform
            their game to an eSports crypto-based game.
          </p>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 py-4">
          <img src={feature4} height="100px" />
          <p className="content-large font-w-semibold mt-2">Global Reach</p>
          <GlobalReach />
        </div>
      </div>
    </Section>
  );
}
