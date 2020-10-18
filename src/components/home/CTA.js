import React from "react";
import Section from "../../components/global/Section";
import AW from "../../images/logo/aw.png";
import BAM from "../../images/logo/bam.jpg";
import SW from "../../images/logo/sw.png";
import DC from "../../images/logo/dc.jpg";

export default function CTA() {
  return (
    <Section bgColor={"#f7f7f9"}>
      <div className="row align-items-center">
        <div className="col-md-6 col-lg-6 col-sm-12 py-3">
          <h3 className="font-w-bold text-center">Games built with CelerX</h3>
          <p className="text-center space-top-small">
            <a href="https://portal.celerx.app" className="btn btn-celer m-2">
              Integrate Now
            </a>
            <a
              href="https://apps.apple.com/us/developer/celer-network/id1459895767"
              className="btn btn-celer m-2"
              style={{ padding: "8px 40px" }}
            >
              Play Now
            </a>
          </p>
        </div>
        <div className="order-md-1 col-md-6 col-lg-6 col-sm-12 py-3">
          <div className="row">
            <div className="col">
              <img src={AW} width="80" style={{ borderRadius: "20%" }} />
            </div>
            <div className="col">
              <img src={DC} width="80" style={{ borderRadius: "20%" }} />
            </div>
            <div className="col">
              <img src={SW} width="80" style={{ borderRadius: "20%" }} />
            </div>
            <div className="col">
              <img src={BAM} width="80" style={{ borderRadius: "20%" }} />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
