import React, { Component } from "react"
import iosBtn from "../../images/downloadBtn/ios.png"
import apkBtn from "../../images/downloadBtn/Apk-button.png"
import googleBtn from "../../images/downloadBtn/googleplay.png"
import iosComingBtn from "../../images/downloadBtn/ios-coming.png"
import btnStyle from "../style/downlondBtn.module.scss"

export default class DownloadBtn extends Component {
  render(props) {
    return (
      <div className="row space-top-small">
        {/* <div className="py-3 px-1 col-sm-12 col-md-12 col-lg-4"> */}
        {/* <a href="https://app.appsflyer.com/app/cxwebsite">
            <img
              src={googleBtn}
              className={
                `mx-auto mx-lg-0 d-block android_download ` +
                btnStyle.downloadBtn
              }
              alt="android"
            />
          </a> */}
        {/* </div> */}
        <div className="py-3 px-1 col-sm-12 col-md-12 col-lg-4">
          <a href="https://app.appsflyer.com/app/cxioswebsite">
            <img
              src={iosBtn}
              height="36px"
              className={
                `mx-lg-0 mx-auto d-block ios_download ` + btnStyle.downloadBtn
              }
              alt="ios"
            />
          </a>
        </div>
        <div className="py-3 px-1 col-sm-12 col-md-12 col-lg-4">
          <a href="https://celer.oss-cn-shanghai.aliyuncs.com/celer-app-celerx-release.apk">
            <img
              src={apkBtn}
              height="36px"
              className={
                `mx-lg-0 mx-auto d-block apk_download ` + btnStyle.downloadBtn
              }
              alt="apk"
            />
          </a>
        </div>
      </div>
    )
  }
}
