import React from "react"
import Section from "../../components/global/Section"
import Bullet1 from "../../images/developer/bullet1.png"
import Bullet2 from "../../images/developer/bullet2.svg"
import Bullet3 from "../../images/developer/bullet3.png"
import Bullet4 from "../../images/developer/bullet4.svg"
import Bullet5 from "../../images/developer/bullet5.png"

export default function Bulletpoints() {
  return (
    <Section>
      <div className="row align-items-center">
        <div className="col-md-6 col-lg-6 col-sm-12 py-4">
          <h5 className="font-w-extrabolditalic primary">10X higher ARPDAU</h5>
          <h3 className="font-w-bold mt-2 ">Higher Monetization</h3>
          <p className="content-medium d-grey mt-2">
            Integrating CelerX is simpler than integrating with In-App purchase
            or ads SDKs.We support all popular gaming engines like Phaser,
            HTML5, Unity, Cocos and many more including native SDKs (coming
            soon). Register to access our game developer portal and try it out
            100% free.
          </p>
        </div>
        <div className="col-md-5 col-lg-5 col-sm-12 py-4 offset-md-1 offset-lg-1">
          <img src={Bullet1} width="100%" />
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-6 col-lg-6 col-sm-12 py-4 offset-md-1">
          <h5 className="font-w-extrabolditalic primary">
            2 lines of code for integration
          </h5>
          <h3 className="font-w-bold mt-2">Easy Integration</h3>
          <p className="content-medium d-grey mt-2">
            The CelerX SDK was designed with developers in mind. With just two
            lines of code, the integration process can be done in under 10
            minutes for HTML5 games. The integration for Unity and native
            Android/iOS games is also easy and smooth.
          </p>
        </div>
        <div className="col-md-5 col-lg-5 col-sm-12 py-4 order-md-first">
          <img src={Bullet2} width="90%" />
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-6 col-lg-6 col-sm-12 py-4">
          <h5 className="font-w-extrabolditalic primary">
            Multi payment methods supported
          </h5>
          <h3 className="font-w-bold mt-2 ">Frictionless Payment</h3>
          <p className="content-medium d-grey mt-2">
            Designed to enable real money competition, accepting payments from
            players has never been easier. With a growing selection of popular
            payment methods such as credit and debit cards, PayPal, and more,
            your players can quickly get in on the action.
          </p>
        </div>
        <div className="col-md-5 col-lg-5 col-sm-12 py-4 offset-md-1 offset-lg-1">
          <img src={Bullet3} width="100%" />
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-6 col-lg-6 col-sm-12 py-4 offset-md-1">
          <h3 className="font-w-bold mt-2">World Class Security</h3>
          <p className="content-medium d-grey mt-2">
            Deeply rooted in designing and deploying highly secured networks
            that scale, CelerX is powered by proprietary reinforcement learning
            matchmaking and cheating-detection algorithms and advanced game
            security solutions to provide a fair and fun platform for players
            around the world.
          </p>
        </div>
        <div className="col-md-5 col-lg-5 col-sm-12 py-4 order-md-first">
          <img src={Bullet4} width="100%" />
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-6 col-lg-6 col-sm-12 py-4">
          <h3 className="font-w-bold mt-2 ">Ready on Day 1</h3>
          <p className="content-medium d-grey mt-2">
            The CelerX SDK comes ready to support your game including payment
            processing, leaderboards, regular tournaments, player versus player,
            head-to-head competition, security and more.
          </p>
        </div>
        <div className="col-md-5 col-lg-5 col-sm-12 py-4 offset-md-1 offset-lg-1">
          <img src={Bullet5} width="100%" />
        </div>
      </div>
    </Section>
  )
}
