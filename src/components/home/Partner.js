import React from "react"
import Section from "../global/SectionFull"
import partner1 from "../../images/partners/tt.png"
import partner2 from "../../images/partners/ng.png"
import partner3 from "../../images/partners/pc.png"
import partner4 from "../../images/partners/ab.png"
import partner5 from "../../images/partners/ig.png"

export default function Partner() {
  return (
    <Section>
      <div className="row">
        <div className="col-sm-12">
          <h3 className="text-center font-w-bold">Featured Partners</h3>
        </div>
        <div className="col">
          <img src={partner1} className="d-block mx-auto" />
        </div>
        <div className="col">
          <img src={partner2} className="d-block mx-auto" />
        </div>
        <div className="col">
          <img src={partner3} className="d-block mx-auto" />
        </div>
        <div className="col">
          <img src={partner4} className="d-block mx-auto" />
        </div>
        <div className="col">
          <img src={partner5} className="d-block mx-auto" />
        </div>
      </div>
    </Section>
  )
}
