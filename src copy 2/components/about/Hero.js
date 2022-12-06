import React from "react"
import Section from "../global/Section"

export default function Hero() {
  return (
    <Section secStyle={"sec-heroBg"} secHeight={"sec-heroDev"}>
      <div className="row justify-content-center py-5 my-5">
        <div className="col-lg-8 col-md-8 col-sm-12">
          <h3 className="font-w-extrabolditalic text-center space-top-large">
            About Us
          </h3>
          <p className="text-center l-grey font-w-semibold">
            CelerX was developed by a team of highly regarded computer
            scientists not only with achievements in academia from MIT, UC
            Berkeley, Princeton and UIUC, but also with a track record of
            leadership in building large-scale consumer and enterprise softwares
            such as Google Fi, B4, Tensorflow, QUIC, Veriflow (acquired by
            VMWare) and Intel DPDK. The team has since attracted top talents
            from Gameloft, Netmarble, Nexon, Tencent Gaming, Groupon, Amazon,
            Baidu, Alibaba and Citadel.
          </p>
        </div>
      </div>
    </Section>
  )
}
