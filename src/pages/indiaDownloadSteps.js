import React, { Component } from 'react'
import layoutStyle from "../components/style/footer.module.scss"
import SectionFull from "../components/global/SectionFull"
import CTA from "../images/india/CTA.png"
import ApkdownloadTutorial from "../components/india/apkdownloadTurtorial"

export default class indiaDownloadSteps extends Component {
    render() {
        return (
            <div className={layoutStyle.main}>
                <div className={layoutStyle.mainContent}>
                <SectionFull>
                    <div className="row justify-content-center">
                        <div className="col-sm-6">
                            <ApkdownloadTutorial />
                            <div className="row justify-content-center">
                                <div className="col-sm-8">
                                    <a href="http://get.celer.app/india/android/celer-app-celerx-release-india.apk">
                                        <img src={CTA} width="80%" className="d-block mx-auto mt-4"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </SectionFull>
                </div>
            </div>
            
        )
    }
}
