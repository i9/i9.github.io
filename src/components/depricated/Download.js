import React from "react"
import Section from "../global/Section"
import DownloadBG from "../../images/home/download.png"
import DownloadBtn from "../global/DownloadBtn"
import downloadStyle from "../style/download.module.scss"

export default function Download() {
  return (
    <Section>
      <div className="row" id="download">
        <div className="col-sm-12">
          <div className="position-relative">
            <img src={DownloadBG} width="100%" alt="background" />
          </div>
          <div className={downloadStyle.downloadContent}>
            <h3 className="text-center font-w-bold mt-4 mt-md-4 mt-lg-0">
              Get CelerX Now
            </h3>
            <DownloadBtn />
          </div>
        </div>
      </div>
    </Section>
  )
}
