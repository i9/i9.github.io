import React from "react"
import Section from "../global/Section"
import partner1 from "../../images/partners/tt.png"
import partner2 from "../../images/partners/ng.png"
import partner4 from "../../images/partners/ab.png"
import partner5 from "../../images/partners/ig.png"
import partner6 from "../../images/partners/linking.png"

export default function Partner() {
  return (
    <Section bgColor={"#EAEDF2"}>
      <div className="row">
        <div className="col-sm-12">
          <h3 className="font-w-extrabolditalic text-center mb-3">
            Featured Partners
          </h3>
        </div>
        <div className="col">
          <img src={partner1} className="d-block mx-auto" width="100%" />
        </div>
        <div className="col">
          <img src={partner2} className="d-block mx-auto" width="100%" />
        </div>
        <div className="col">
          <img src={partner4} className="d-block mx-auto" width="100%" />
        </div>
        <div className="col">
          <img src={partner6} className="d-block mx-auto" width="100%" />
        </div>
        <div className="col">
          <img src={partner5} className="d-block mx-auto" width="100%" />
        </div>
      </div>
    </Section>
  )
}
