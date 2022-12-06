import React from "react"
import Section from "../global/Section"
import feature1 from "../../images/home/ML.svg"
import feature2 from "../../images/home/anti-cheating.svg"
import feature3 from "../../images/home/battery.svg"
import feature4 from "../../images/home/code.svg"

export default function Feature() {
  return (
    <Section>
      <div className="row align-items-center py-5">
        <div className="col-md-6 col-lg-6 col-sm-12 py-4">
          <h3 className="font-w-bold mt-2">
            AI-powered Player Match-Making Engine
          </h3>
          <p className="content-medium featureText mt-2">
            At the core of any eSports experience is a match-making engine that
            pairs players in such a way that their matches are competitive yet
            fun and exciting. However, building an optimal match-making
            experience is fairly difficult. If a new player is matched with an
            experienced veteran player, neither of them can really enjoy the
            game. The new player will be frustrated and the veteran player will
            feel uninterested and bored in the one-sided “competition.” CelerX
            solves this by offering a skill-based match-making engine built
            using advanced reinforcement learning technology. Within three
            games, the AI algorithm can quickly analyze the skill level of a
            particular player and accurately match that player with other
            players of a similar skill level. That way, players are always able
            to enjoy the thrill of good competition resulting in a close win or
            loss. Being able to consistently provide this adrenaline rush is the
            key to improving your game’s engagement level among players.
          </p>
        </div>
        <div className="col-md-5 col-lg-5 col-sm-12 py-4 offset-md-1 offset-lg-1">
          <img src={feature1} width="120%" />
        </div>
      </div>
      <div className="row align-items-center py-5">
        <div className="col-md-6 col-lg-6 col-sm-12 py-4 offset-md-1">
          <h3 className="font-w-bold mt-2 ">Bullet-proof Anti-cheat System</h3>
          <p className="content-medium featureText mt-2">
            One of the biggest threats in any eSports gaming system is cheating.
            Even an extremely small number of cheaters can ruin the experience
            for all of the players on the platform. CelerX comes with an
            advanced anti-cheating mechanism built on top of blockchain and
            cloud gaming technology. Every player’s in-game move is streamed to
            a remote cloud system where the result of the gameplay can be
            accurately recreated with auditable proof on the blockchain. Any
            modification of the local game logic can be quickly identified and
            the cheating player will be swiftly dealt with. Using CelerX, you
            can give your players blockchain-verifiable proof that every
            tournament is a fair game where even you, as the host of the game,
            cannot alter the rules and results.
          </p>
        </div>
        <div className="col-md-5 col-lg-5 col-sm-12 py-4 order-md-first">
          <img src={feature2} width="125%" />
        </div>
      </div>
      <div className="row align-items-center py-5">
        <div className="col-md-6 col-lg-6 col-sm-12 py-4">
          <h3 className="font-w-bold mt-2">
            Batteries Included – Full-featured User Management System
          </h3>
          <p className="content-medium featureText mt-2">
            “But wait, do I need to integrate this with my existing user
            management game servers? Do I need to build the UI for matchmaking?”
            These are great questions! CelerX not only abstracts away all the
            complexities of player systems, matchmaking, and game security and
            compliance for you, but also includes a full-fledged UI flow as well
            as LiveOps and data analytic tools. So the short answer is, there is
            ZERO server-side logic needed, and only a simple app-side API
            integration is required in order to get your game up and running
            with CelerX.
          </p>
        </div>
        <div className="col-md-5 col-lg-5 col-sm-12 py-4 offset-md-1 offset-lg-1">
          <img src={feature3} width="100%" />
        </div>
      </div>
      <div className="row align-items-center py-5">
        <div className="col-md-6 col-lg-6 col-sm-12 py-4 offset-md-1">
          <h3 className="font-w-bold mt-2 ">
            Easy and Simple Integration—with Only Two Lines of Code
          </h3>
          <p className="content-medium featureText mt-2">
            Integrating CelerX is far simpler than integrating with IAP or ads
            SDKs.We support all popular gaming engines like Phaser, HTML5,
            Unity, Cocos, and native SDKs (coming soon). Register on our game
            developer portal and try it out 100% free!
          </p>
        </div>
        <div className="col-md-5 col-lg-5 col-sm-12 py-4 order-md-first ">
          <img src={feature4} width="100%" />
        </div>
      </div>
    </Section>
  )
}
