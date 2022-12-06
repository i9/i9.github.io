import React from "react"
import Section from "../global/Section"
import ios from "../../images/downloadBtn/ios.png"
import apk from "../../images/downloadBtn/Apk-button.png"
import AW from "../../images/home/arcadeWin.png"
import SW from "../../images/home/solitaireWin.png"
import FP from "../../images/home/fruitpunch.png"
import GC from "../../images/home/gemCash.png"
import FiJ from "../../images/home/fishjump.png"
import Foj from "../../images/home/frogjump.png"
import DB from "../../images/home/diamondbreak.png"
import DC from "../../images/home/daubcash.png"

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
          <div className="position-relative">
            <img src={AW} width="100%" />
          </div>
          <div
            className="position-absolute"
            style={{ top: "1.5rem", left: "2rem" }}
          >
            <h3
              className="w font-w-bold"
              style={{ textTransform: "uppercase" }}
            >
              Arcade Win
            </h3>
            <p className="content-small w">
              Play fun games and win prizes (The new CelerX)
            </p>
            <a
              href="https://app.appsflyer.com/app/cxioswebsite"
              className="d-block"
            >
              <img src={ios} width="140px" className="pt-4" />
            </a>
            <a
              href="https://celer.oss-cn-shanghai.aliyuncs.com/celer-app-celerx-release.apk"
              className="d-block"
            >
              <img src={apk} width="140px" className="pt-2" />
            </a>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 py-3">
          <div className="position-relative">
            <img src={DC} width="100%" />
          </div>
          <div
            className="position-absolute"
            style={{ top: "1.5rem", left: "2rem" }}
          >
            <h3
              className="w font-w-bold"
              style={{ textTransform: "uppercase" }}
            >
              Daub Cash
            </h3>
            <p className="content-small l-grey">Bingo-style Real Money Game</p>
            <a
              href="https://apps.apple.com/us/app/daub-cash/id1513396754"
              className="d-block"
            >
              <img src={ios} width="140px" className="pt-4" />
            </a>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 py-3">
          <div className="position-relative">
            <img src={SW} width="100%" />
          </div>
          <div
            className="position-absolute"
            style={{ top: "1.5rem", left: "2rem" }}
          >
            <h3
              className="w font-w-bold"
              style={{ textTransform: "uppercase" }}
            >
              Solitaire Win
            </h3>
            <p className="content-small l-grey">Classic Solitaire Game</p>
            <a href="https://apps.apple.com/us/app/solitaire-win/id1495854252">
              <img src={ios} width="140px" className="pt-4" />
            </a>
            {/* <img src={android} width="120px" className="pt-2" /> */}
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 py-3">
          <div className="position-relative">
            <img src={FP} width="100%" />
          </div>
          <div
            className="position-absolute"
            style={{ top: "1.5rem", left: "2rem" }}
          >
            <h3
              className="w font-w-bold"
              style={{ textTransform: "uppercase" }}
            >
              Fruit Punch
            </h3>
            <p className="content-small l-grey">Punch the juicy fruit!</p>
            {/* <a href="https://apps.apple.com/us/app/solitaire-win/id1495854252">
              <img src={ios} width="140px" className="pt-4" />
            </a> */}
            {/* <img src={android} width="120px" className="pt-2" /> */}
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 py-3">
          <div className="position-relative">
            <img src={GC} width="100%" />
          </div>
          <div
            className="position-absolute"
            style={{ top: "1.5rem", left: "2rem" }}
          >
            <h3
              className="w font-w-bold"
              style={{ textTransform: "uppercase" }}
            >
              Gem cash
            </h3>
            <p className="content-small l-grey">Gem Cash</p>
            {/* <a href="https://apps.apple.com/us/app/solitaire-win/id1495854252">
              <img src={ios} width="140px" className="pt-4" />
            </a> */}
            {/* <img src={android} width="120px" className="pt-2" /> */}
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 py-3">
          <div className="position-relative">
            <img src={Foj} width="100%" />
          </div>
          <div
            className="position-absolute"
            style={{ top: "1.5rem", left: "2rem" }}
          >
            <h3
              className="w font-w-bold"
              style={{ textTransform: "uppercase" }}
            >
              Frog Jump
            </h3>
            <p className="content-small l-grey">A world famous game</p>
            {/* <a href="https://apps.apple.com/us/app/solitaire-win/id1495854252">
              <img src={ios} width="140px" className="pt-4" />
            </a> */}
            {/* <img src={android} width="120px" className="pt-2" /> */}
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 py-3">
          <div className="position-relative">
            <img src={FiJ} width="100%" />
          </div>
          <div
            className="position-absolute"
            style={{ top: "1.5rem", left: "2rem" }}
          >
            <h3
              className="w font-w-bold"
              style={{ textTransform: "uppercase" }}
            >
              Fish Jump!
            </h3>
            <p className="content-small l-grey">
              Avoid being eaten by cats and pelicans
            </p>
            {/* <a href="https://apps.apple.com/us/app/solitaire-win/id1495854252">
              <img src={ios} width="140px" className="pt-4" />
            </a> */}
            {/* <img src={android} width="120px" className="pt-2" /> */}
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 py-3">
          <div className="position-relative">
            <img src={DB} width="100%" />
          </div>
          <div
            className="position-absolute"
            style={{ top: "1.5rem", left: "2rem" }}
          >
            <h3
              className="w font-w-bold"
              style={{ textTransform: "uppercase" }}
            >
              Diamond break
            </h3>
            <p className="content-small l-grey">Diamond break</p>
            {/* <a href="https://apps.apple.com/us/app/solitaire-win/id1495854252">
              <img src={ios} width="140px" className="pt-4" />
            </a> */}
            {/* <img src={android} width="120px" className="pt-2" /> */}
          </div>
        </div>
      </div>
    </Section>
  )
}
