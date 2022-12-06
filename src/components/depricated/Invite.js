import React from "react"
import Gift from "../../images/home/gift.png"
import Section from "../global/Section"
import { Link } from "gatsby"

export default function Invite() {
  return (
    <Section>
      <div
        className="row  justify-content-center"
        style={{ background: "#F8EEEC", borderRadius: "1rem", padding: "20px" }}
      >
        <div className="col-lg-10 col-md-10 col-sm-12">
          <div className="row align-items-center">
            <div className="col-md-5">
              <img
                src={Gift}
                className="mx-auto d-block"
                width="268px"
                alt="invite"
              />
            </div>
            <div className="col-md-7">
              <h3 className="text-center font-w-semibold mb-4">
                Play CelerX Games, <br />
                win $10,000 in ETH!
              </h3>
              {/* <p className="d-grey content-medium text-center text-md-left">
            
              </p> */}
              <p className="text-center">
                <Link to="/campaign" className="btn btn-celer">
                  Learn More
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
