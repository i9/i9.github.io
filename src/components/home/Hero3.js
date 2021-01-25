import React from "react";
import Section from "../global/Section";
import iosBtn from "../../images/downloadBtn/ios.png"


export default function Hero() {
  return (
  
    <Section
      secHeight={"sec-backgroundImg"}
      extraMargin={"88px 0  0"}
    >
      <div className="row" >
        <div className="col-md-12 col-lg-12 col-sm-12">
          <h1 className="font-w-bold text-center d-block text-md-left text-lg-left">
            CelerX
            <br /> Mobile eSports
            <br /> Platform
          </h1>
        </div>
        {/* <div className="col-sm-12 mt-4">
          <a href="https://apps.apple.com/us/app/cash-clash-games-win-money/id1459895768">
            <img src={iosBtn} className="d-block mx-auto mx-md-0 mx-lg-0" width="180px"/>
          </a>
          
        </div> */}
      </div>
    </Section>
    
  );
}
