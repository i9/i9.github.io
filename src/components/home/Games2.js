import React from "react"
import Section from "../global/Section"
import ios from "../../images/downloadBtn/ios.png"
import apk from "../../images/downloadBtn/Apk-button.png"
import CC from "../../images/gameslogo/cc.png"
import DC from "../../images/gameslogo/dc.jpg"
import BAM from "../../images/gameslogo/bam.jpg"
import SW from "../../images/gameslogo/sw.png"
import FJ from "../../images/gameslogo/fj.png"
import Frog from "../../images/gameslogo/frog.jpg"
import DB from "../../images/gameslogo/db.png"


export default function Games() {
  return (
    <Section
      bgColor={
        "linear-gradient(180deg, rgba(15,26,55,1) 0%, rgba(56,56,56,1) 100%)"
      }
    >
      <div className="row">
        <div className="col-sm-12">
          <h2
            className="font-w-bold text-center space-bottom-small w py-4"
            id="games"
          >
            OUR GAMES
          </h2>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 py-3">
          <div className="row p-2">
          <div className="col-3">
           <img src={FJ} width="100%" style={{borderRadius:"12px"}}/>
          </div>
          <div className="col-9">
            <h3 className="content-medium-title w font-w-bold">
              Fish Jump
            </h3>
            <p className="content-small l-grey">
              	Avoid being eaten by cats and pelicans!
            </p>
          </div>
          </div>
          
          </div>
           <div className="col-md-6 col-lg-6 col-sm-12 py-3">
          <div className="row p-2">
          <div className="col-3">
           <img src={Frog} width="100%" style={{borderRadius:"12px"}}/>
          </div>
          <div className="col-9">
            <h3 className="content-medium-title w font-w-bold">
              Frog Jump
            </h3>
            <p className="content-small l-grey">
              Press screen to make Mr. Frog jump. The longer you press, the further it jumps! Jump fast and jump to the middle to get bonus score!
            </p>
          </div>
          </div>
          
          </div>
           <div className="col-md-6 col-lg-6 col-sm-12 py-3">
          <div className="row p-2">
          <div className="col-3">
           <img src={SW} width="100%" style={{borderRadius:"12px"}}/>
          </div>
          <div className="col-9">
            <h3 className="content-medium-title w font-w-bold">
              Solitaire Win!
            </h3>
            <p className="content-small l-grey">
             Solitaire Win is the world's top classic Klondike Solitaire card game for your iPhone and iPad devices.
            </p>
          </div>
          </div>
          
          </div>
           <div className="col-md-6 col-lg-6 col-sm-12 py-3">
          <div className="row p-2">
          <div className="col-3">
           <img src={DB} width="100%" style={{borderRadius:"12px"}}/>
          </div>
          <div className="col-9">
            <h3 className="content-medium-title w font-w-bold">
              Diamond Break
            </h3>
            <p className="content-small l-grey">
             Match three or more gems to get gold coin rain and high score! Matching streaks will get you higher bonuses!
            </p>
          </div>
          </div>
          
          </div>
    
      </div>
    </Section>
  )
}
