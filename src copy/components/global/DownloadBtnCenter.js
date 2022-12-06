import React, { Component } from "react"
import iosBtn from "../../images/downloadBtn/ios.png"
import apkBtn from "../../images/downloadBtn/Apk-button.png"
import { isIOS, isAndroid, isBrowser } from "react-device-detect"
import googleBtn from "../../images/downloadBtn/googleplay.png"
import iosComingBtn from "../../images/downloadBtn/ios-coming.png"
import btnStyle from "../style/downlondBtn.module.scss"

export default function DownloadBtnCenter() {
  //window will not work in server environment
  let pathArray =
    typeof window !== "undefined" && window.location.search.split("=")
  let inviteCode = pathArray[1]

  const download = () => {
    if (isIOS) {
      window.location.href = "https://go.onelink.me/N9wI/arcadewinreferral"
    } else if (isAndroid) {
      window.location.href =
        "https://celer.oss-cn-shanghai.aliyuncs.com/celer-app-celerx-release.apk"
    } else if (isBrowser) {
      window.location.href = "https://app.appsflyer.com/app/cxioswebsite"
    }
  }
  return (
    <div className="container" style={{ width: "20rem" }}>
      <div className="row space-both-small">
        <div className="col-sm-12">
          <a
            style={{
              margin: "auto",
              display: "block",
              width: "auto",
              height: "64px",
              backgroundImage:
                "linear-gradient(180deg, #82BFFF 0%, #4AA2FF 9.56%, #007CFF 85.07%, #1C71AA 96.44%)",
              boxShadow: "inset 0px 0px 0px 2px #ffff",
              border: "2px solid #dbdbdb",
              color: "white",
              borderRadius: "16px",
              cursor: "pointer",
              fontSize: "24px",
              textAlign: "center",
              padding: "0.75rem",
              fontWeight: "800",
            }}
            id="inviteSolitaireWin"
            onClick={download}
          >
            Play Now!
          </a>
        </div>
        <div className="py-3 px-1 col">
          <a href="https://app.appsflyer.com/app/cxioswebsite">
            <img
              src={iosBtn}
              height="36px"
              className={`mx-auto d-block ios_download ` + btnStyle.downloadBtn}
              alt="ios"
            />
          </a>
        </div>
        <div className="py-3 px-1 col">
          <a href="https://celer.oss-cn-shanghai.aliyuncs.com/celer-app-celerx-release.apk">
            <img
              src={apkBtn}
              height="36px"
              className={`mx-auto d-block apk_download ` + btnStyle.downloadBtn}
              alt="apk"
            />
          </a>
        </div>
      </div>
    </div>
  )
}
