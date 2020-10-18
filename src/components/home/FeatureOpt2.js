import React from "react";
import Section from "../global/Section";
import feature1 from "../../images/home/monetization.svg";

import feature2 from "../../images/home/code.svg";
import feature3 from "../../images/home/battery.svg";
import feature4 from "../../images/home/cuttingEdge.svg";

export default function Feature() {
  return (
    <Section>
      <div className="row align-items-center py-5">
        <div className="col-md-6 col-lg-6 col-sm-12 py-4 offset-md-1">
          <h3 className="font-w-bold mt-2">
            Efficient monetization, <br /> better player experience
          </h3>
          <p className="content-medium d-grey mt-2">
            IAP conversion is low and showing Ads hurts player experiences. Both
            traditional monetization mechanisms are statorating in the market.
            CelerX adds a new path to game monetization by enabling real money
            tournaments in any skill-based games. Players can enjoy the game
            completely for free or compete in real money tournaments
            eSport-style. You can tap into a 10X stronger global revenue stream
            with ZERO disruption of your existing monetization strategies.
          </p>
        </div>
        <div className="col-md-5 col-lg-5 col-sm-12 py-4 order-md-first">
          <img src={feature1} width="90%" />
        </div>
      </div>
      <div className="row align-items-center py-5">
        <div className="col-md-6 col-lg-6 col-sm-12 py-4">
          <h3 className="font-w-bold mt-2 ">
            Easy Integration
            <br /> with Two Lines of Code
          </h3>
          <p className="content-medium d-grey mt-2">
            Integrating CelerX is simpler than integrating with IAP or ads
            SDKs.We support all popular gaming engines like Phaser, HTML5,
            Unity, Cocos and native SDKs (coming soon). Register our game
            developer portal and try it out 100% free.
          </p>
        </div>
        <div className="col-md-5 col-lg-5 col-sm-12 py-4 offset-md-1 offset-lg-1">
          <img src={feature2} width="100%" />
        </div>
      </div>
      <div className="row align-items-center py-5">
        <div className="col-md-6 col-lg-6 col-sm-12 py-4 offset-md-1">
          <h3 className="font-w-bold mt-2">Battery Included</h3>
          <p className="content-medium d-grey mt-2">
            But wait, do I need to integrate this with my own user management
            game servers? How do I process payment for users? Do I need to build
            the UI to matchmaking? Great questions! CelerX not only abstracts
            away all the complexities such as player systems, matchmaking,
            payment processing, game security and compliance for you, but also
            includes a full-fledged UI flow and LiveOps and data analytic tools.
            In short, ZERO server-side logic needed and simple app-side API
            integration guaranteed.
          </p>
        </div>
        <div className="col-md-5 col-lg-5 col-sm-12 py-4 order-md-first">
          <img src={feature3} width="100%" />
        </div>
      </div>
      <div className="row align-items-center py-5">
        <div className="col-md-6 col-lg-6 col-sm-12 py-4">
          <h3 className="font-w-bold mt-2 ">
            Cutting-edge Intelligence <br /> and Security
          </h3>
          <p className="content-medium d-grey mt-2">
            CelerX was built by a team of highly regarded computer scientists
            not only with PhDs from MIT, UC Berkeley, Princeton and UIUC, but
            also with a track record of industry leadership in Artificial
            Intelligence, Blockchain, and security. CelerX is powered by
            proprietary reinforcement learning matchmaking and
            cheating-detection algorithms and blockchain-based game security
            solutions to provide a fair and fun platform for players all over
            the world.
          </p>
        </div>
        <div className="col-md-5 col-lg-5 col-sm-12 py-4 offset-md-1 offset-lg-1">
          <img src={feature4} width="100%" />
        </div>
      </div>
    </Section>
  );
}
