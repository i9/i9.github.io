import React, { Component } from "react"
// import AWCover from "../../images/player/AW.png"
import CCGCover from "../../images/player/CCG-cover.png"
import DCCover from "../../images/player/DC-cover.png"
import SWCover from "../../images/player/SW-cover.png"
import BAMCover from "../../images/player/BAM-cover.png"
import IosDownload from "../../images/player/applydownload.png"
import AndroidDownload from "../../images/player/androiddownload.png"

export default class GameList extends Component {
  render() {
    return (
      <div class="card-deck">
        <div className="card" style={{ maxWidth: 350 }}>
          <img className="card-img-top" src={CCGCover} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Cash Clash Games</h5>
            <p className="card-text">Play for Cash</p>
          </div>
          <div class="card-footer">
            <div className="d-flex justify-content-end">
              <a href="https://app.appsflyer.com/app/cxioswebsite">
                <img src={IosDownload} width="48px" />
              </a>
              <a href="https://celer.oss-cn-shanghai.aliyuncs.com/celer-app-celerx-release.apk">
                <img src={AndroidDownload} width="48px" />
              </a>
            </div>
          </div>
        </div>

        <div className="card" style={{ maxWidth: 350 }}>
          <img className="card-img-top" src={SWCover} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Solitaire Win!</h5>
            <p className="card-text">Cash Prizes!</p>
          </div>
          <div class="card-footer">
            <div className="d-flex justify-content-end">
              <a href="https://go.onelink.me/app/swreferral">
                <img src={IosDownload} width="48px" />
              </a>
            </div>
          </div>
        </div>
        <div className="card" style={{ maxWidth: 350 }}>
          <img className="card-img-top" src={BAMCover} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">BUST-A-MOVE RMT</h5>
            <p className="card-text">Real money tournament</p>
          </div>
          <div class="card-footer">
            <div className="d-flex justify-content-end">
              <a href="https://apps.apple.com/us/app/bust-a-move-rmt/id1521498538">
                <img src={IosDownload} width="48px" />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
