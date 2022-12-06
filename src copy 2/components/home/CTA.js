import React from "react"
import Section from "../global/Section"
import { isIOS, isAndroid, isBrowser } from "react-device-detect"
// import AW from "../../images/logo/aw.png"
import CCG from "../../images/logo/ccg.png"
import BAM from "../../images/logo/bam.jpg"
import SW from "../../images/logo/sw.png"
import DC from "../../images/logo/dc.jpg"

export default function CTA() {
  const downloadAW = () => {
    if (isIOS) {
      window.location.href = "https://go.onelink.me/N9wI/arcadewinreferral"
    } else if (isAndroid) {
      window.location.href =
        "https://celer.oss-cn-shanghai.aliyuncs.com/celer-app-celerx-release.apk"
    } else if (isBrowser) {
      window.location.href = "https://app.appsflyer.com/app/cxioswebsite"
    }
  }
  const downloadDC = () => {
    if (isIOS) {
      window.location.href =
        "https://apps.apple.com/us/app/daub-cash/id1513396754"
    } else if (isAndroid) {
      window.location.href =
        "https://celer.oss-cn-shanghai.aliyuncs.com/celer-app-celerx-release.apk"
    } else if (isBrowser) {
      window.location.href =
        "https://apps.apple.com/us/app/daub-cash/id1513396754"
    }
  }
  const downloadSW = () => {
    if (isIOS) {
      window.location.href = "https://go.onelink.me/app/swreferral"
    } else if (isAndroid) {
      window.location.href =
        "https://celer.oss-cn-shanghai.aliyuncs.com/celer-app-celerx-release.apk"
    } else if (isBrowser) {
      window.location.href =
        "https://apps.apple.com/us/app/solitaire-win/id1495854252"
    }
  }
  const downloadBAM = () => {
    if (isIOS) {
      window.location.href =
        "https://apps.apple.com/us/app/bust-a-move-rmt/id1521498538"
    } else if (isAndroid) {
      window.location.href =
        "https://celer.oss-cn-shanghai.aliyuncs.com/celer-app-celerx-release.apk"
    } else if (isBrowser) {
      window.location.href =
        "https://apps.apple.com/us/app/bust-a-move-rmt/id1521498538"
    }
  }

  return (
    <Section secStyle={"sec-gridBg"}>
      <div className="row align-items-center justify-content-center">
        <div className="col-sm-12 py-4">
          <h3 className="font-w-extrabolditalic text-center mb-3">
            Welcome to CelerX
          </h3>
          <p className="text-center l-grey font-w-semibold">
            CelerX is a mobile eSports gaming engine that can turn single-player
            games like Solitaire, Bubble Shooters, Word Puzzlers, Match-3, or
            any other similar types of games into an exciting multiplayer
            eSports gaming and social experience—where players can compete
            against each other for fun! By significantly improving your game’s
            player engagement and retention, CelerX can help increase your
            game’s revenue to a whole new level.
          </p>
        </div>
      </div>
    </Section>
  )
}
