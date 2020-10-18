import React from "react"
import SectionFull from "../global/SectionFull"
import "../../components/style/main.scss"

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

import DownloadBtn from "../global/DownloadBtnCenter"


import bamBanner from "../../images/campaign/BAM_Banner.png"
import banner8 from "../../images/campaign/banner8.png"

export default function Hero() {
  return (
    <>
      <SectionFull secHeight={"sec-outer"} extraMargin={"80px"}>
        <div style={{ marginTop: "77px" }}>
          <Carousel
            showIndicators={true}
            showStatus={false}
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            interval={9000}
          >
      
            <div>
              <img src={banner8} alt="banner" />
            </div>
          </Carousel>
        </div>
        {/* <div className="row align-items-center">
          <div
            className="col-md-12 col-sm-12"
            style={{ background: "#f7f7f9" }}
          >
            <DownloadBtn />
          </div>
      
        </div> */}
      </SectionFull>
    </>
  )
}
