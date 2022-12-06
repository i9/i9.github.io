import React, { Component } from "react"
import {Link} from "gatsby"


import layoutStyle from "../components/style/footer.module.scss"
import SectionFull from "../components/global/SectionFull"
import Section from "../components/global/Section"
import BG from "../images/india/BG.png"
import CTA from "../images/india/CTA.png"
import qrCode from "../images/india/indiaqr.png"

import ApkdownloadTutorial from "../components/india/apkdownloadTurtorial"
import Appscreenshots from "../components/india/appscreenShots"

import SEO from "../components/seo"
import Bulletpoints from "../components/home/FeatureOpt2"

export default class india extends Component {
   constructor(props) {
          super(props);
          this.goToDownloadStep = this.goToDownloadStep.bind(this);
        }
      // function to handle the click
       goToDownloadStep() {
        window.location = `http://get.celer.app/india/android/celer-app-celerx-release-india.apk`
      }

  render() {
    return (
      <div style={{overflowX:"hidden", maxWidth:"100%"}}>
      <div className={layoutStyle.main}>
        <div className={layoutStyle.mainContent}>
          <main>
            <SEO title="Mobile eSports | CelerX - India" />
            {/* desktop view */}
            <div className="d-none d-lg-block">
              <Section secHeight={"sec-outer"} secStyle={"sec-heroBg"}>
                <div className="row justify-content-center py-5">
                  <div className="col-sm-12 py-5">
                    <h2 className="text-center font-w-extrabold">
                      Cash Clash Games
                    </h2>
                     <p className="text-center content-medium-title font-w-semibold">
                      Play for Cash 🕹️ 🤑
                    </p>
                  </div>
                  <div className="col-sm-12">
                    <img src={qrCode} className="d-block mx-auto"/>  
                     <p className="text-center content-medium font-w-semibold pt-3">
                      Scan to download!
                     </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <Appscreenshots />
                  </div>
                </div>
              </Section>
            </div>
            {/* mobile view */}
            <div className="d-lg-none">
            <SectionFull secHeight={"sec-nogap"}>
              <div className="row align-items-center">
                <div className="col-md-12 col-sm-12 col-lg-12 position-relative">
                  <img src={BG} className="mx-auto" width="100%" />
                </div>
                <div className="col-md-12 col-sm-12 col-lg-12 position-absolute mt-5" style={{transform:"translate(-50%, -50%)", left:"50%", top:"70%"}}>
                  <h2 className="text-center font-w-extrabold">
                    Cash Clash Games
                  </h2>
                  <p className="text-center content-medium-title font-w-semibold">
                    Play for Cash 🕹️ 🤑
                  </p>
                  
                    <Link to="/indiaDownloadSteps" onClick={this.goToDownloadStep}>
                      <img src={CTA} width="100%" className="d-block mx-auto mt-4"/>
                    </Link>
                  
                  <p className="l-grey font-w-bold text-center content-small mt-2">
                    ONCE YOU DOWNLOAD, YOU WILL BE PROMPTED WITH SOME SECURITY PERMISSIONS.
                  </p>
                </div>
              </div>
            </SectionFull>
            <ApkdownloadTutorial />
            <Appscreenshots />
            </div>

          </main>
        </div>
      </div>
      </div>
    )
  }
}
