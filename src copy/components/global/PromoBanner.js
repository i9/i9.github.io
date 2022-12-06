import SectionFull from "./SectionFull"
import React, { Component } from "react"
import BannerImg from "../../images/campaign/banner6.png"
import { Link } from "gatsby"

export default class Banner extends Component {
  render() {
    return (
      <div
        className="mb-5 row align-items-center mx-2"
        style={{ background: "#f7f7f9", borderRadius: "1rem" }}
      >
        <div className="col-md-8 col-lg-8 col-sm-12 p-0">
          <img src={BannerImg} width="100%" style={{ borderRadius: "1rem" }} />
        </div>
        <div className="col-md-4 col-lg-4 col-sm-12 p-0">
          <div className="my-5">
            <h3 className="text-center font-w-semibold mb-4">
              Play CelerX games,
              <br />
              win $10,000 in ETH!
            </h3>
            <p className="text-center">
              <Link to="/campaign" className="btn btn-celer">
                Learn More
              </Link>
            </p>
          </div>
        </div>
      </div>
    )
  }
}
