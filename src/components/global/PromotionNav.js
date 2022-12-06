import React from "react"
import { Link } from "gatsby"
import Parrot from "../../images/promot/parrot.gif"

export default function PromotionNav() {
  return (
    <div style={{ backgroundColor: "#FEB62A", opacity: ".9" }}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <p className="font-w-normal text-center py-3 ">
              <img
                src={Parrot}
                width="20px"
                style={{
                  marginRight: "0.25rem",
                  verticalAlign: "middle",
                  marginBottom: "0.5em",
                }}
              />{" "}
              <Link to="./campaign" className="subtitle" id="goToCampaignPage">
                Play CelerX games and win $10,000 in ETH.
              </Link>{" "}
              <img
                src={Parrot}
                width="20px"
                style={{
                  marginLeft: "0.25rem",
                  verticalAlign: "middle",
                  marginBottom: "0.5em",
                }}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
