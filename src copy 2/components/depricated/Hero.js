import React from "react"
import "../../components/style/main.scss"
import Section from "../../components/global/Section"

import DownloadBtn from "../global/DownloadBtn"
import ShowQr from "../../components/home/ShowQr"
import banner from "../../images/home/banner2.png"
// import PromoBanner from "../../components/global/PromoBanner"

export default function Hero() {
  return (
    <Section secHeight={"sec-hero"}>
      {/* <PromoBanner /> */}
      <div className="row align-items-center">
        <div className="col-md-6 col-lg-6 col-sm-12">
          <h2 className="font-w-bold text-center text-md-left text-lg-left">
            CelerX eSport
            <br />
            Gaming Platform
          </h2>
          <h3 className="d-grey mt-md-4 mt-2 font-w-thin text-center text-md-left text-lg-left">
            Have fun, play today!
          </h3>
          <div className="row">
            <div className="col-md-10 col-sm-12">
              <DownloadBtn />
            </div>
            <div className="col-sm-12">
              <ShowQr />
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 col-lg-6">
          <img
            src={banner}
            className="imgSize-banner_side mx-auto"
            alt="banner"
          />
        </div>
      </div>
    </Section>
  )
}
