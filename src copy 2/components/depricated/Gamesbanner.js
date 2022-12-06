import React from "react"
import Section from "../global/Section"

import gamebanner from "../../images/home/Group 1.svg"
import arcadeWin from "../../images/home/arcadeWin.png"
// import celerx from "../../images/home/celerx.png"
import celerxold from "../../images/home/celerxold.png"
import sgSolitaire from "../../images/home/sg-solitaire.png"
import DC from "../../images/home/daubcash.png"

import ios from "../../images/downloadBtn/ios.png"
import apkBtn from "../../images/downloadBtn/Apk-button.png"

export default function Gamesbanner() {
  return (
    <Section
      bgColor={
        "linear-gradient(180deg, rgba(15,26,55,1) 0%, rgba(56,56,56,1) 100%)"
      }
    >
      {/* <div className="row py-5">
        <div className="col-sm-12">
          <img src={gamebanner} className="d-block m-auto py-5" width="240px" />
        </div>
      </div> */}
      <div className="row pt-5">
        <div className="col-md-6 col-sm-12 col-lg-6 py-2">
          <div className="position-relative">
            <img src={arcadeWin} width="100%" className="rounded" />
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
            <a href="https://apps.apple.com/us/app/arcade-win-play-for-cash/id1459895768">
              <img src={ios} width="140px" className="pt-4 d-block" />
            </a>
            <a href="https://celer.oss-cn-shanghai.aliyuncs.com/celer-app-celerx-release.apk">
              <img src={apkBtn} width="140px" className="pt-4 d-block" />
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
        <div className="col-md-6 col-sm-12 col-lg-6 py-2">
          <div className="position-relative">
            <img src={sgSolitaire} width="100%" className="rounded" />
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
            <p className="content-small w">Classic Solitaire Game</p>
            <a href="https://apps.apple.com/us/app/solitaire-win/id1495854252">
              <img src={ios} width="140px" className="pt-4 d-block" />
            </a>
            {/* <img src={apkBtn} width="140px" className="pt-4 d-block" /> */}
          </div>
        </div>
      </div>
    </Section>
  )
}
