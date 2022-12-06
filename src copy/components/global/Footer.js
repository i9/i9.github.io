import React, { Component } from "react"
import logo from "../../images/logo/White.png"
import Section from "../global/Section"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import footerStyle from "../style/footer.module.scss"
import { StaticQuery, graphql } from "gatsby"
import Newsletter from "./Newsletter"
import Mastercard from "../../images/footer/mastercard.png" 
import Visa from "../../images/footer/visa.png"
import Amex from "../../images/footer/amex.png"
import Discover from "../../images/footer/discover.png"
import Applepay from "../../images/footer/applepay.png"
import Skrill from "../../images/footer/skrill.png"
import Paypal from "../../images/footer/paypal.png"

export default class Footer extends Component {
  state = {
    column: [
      {
        title: "Contact",
        items: [
          {
            item: "Customer Support: ",
            link: "support@celerx.app",
            url: "mailto:support@celer.network",
            target: "_blank",
            rel: "noopener noreferrer",
          },
          {
            item: "Business Inquiries: ",
            link: "partner@celerx.app",
            url: "mailto:partner@celerx.app",
            target: "_blank",
            rel: "noopener noreferrer",
          },
          {
            item: "Headquartered in Mountain View, California",
            link: "",
            url: "",
            target: "",
            rel: "noopener noreferrer",
          },
        ],
      },
      {
        title: "Terms & Policy",
        items: [
          {
            //tos and privacy should put under celer.network
            item: "",
            link: "Terms of Service",
            url: "doc/tos.pdf",
            target: "_blank",
            rel: "noopener noreferrer",
          },
          {
            item: "",
            link: "Privacy Policy",
            url: "doc/Privacy-Policy.pdf",
            target: "_blank",
            rel: "noopener noreferrer",
          },
        ],
      }
    ],
  }
  render() {
    const Community = () => {
      return (
        <StaticQuery
          query={graphql`
            query {
              allCommunityJson {
                edges {
                  node {
                    id
                    url
                    name
                  }
                }
              }
            }
          `}
          render={data => {
            return data.allCommunityJson.edges.map(el => {
              return (
                <div className="col py-3" key={el.node.id}>
                  <a
                    href={el.node.url}
                    className="w"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={["fab", el.node.name]}
                      className="ml-md-auto d-block"
                      size="lg"
                    />
                  </a>
                </div>
              )
            })
          }}
        />
      )
    }

    return (
      <Section bgColor={"black"} style={{marginLeft:"0px", marginRight: "0px"}}>
        <div className="row align-items-top space-top-medium">
          <div className="col-md-5 col-sm-12 py-3">
            <div className="flex-wrap align-items-center pb-1">
              <a target="_blank" href="https://celerx.app">
                <img src={logo} width="100" alt="logo" />
              </a>
              <p className="d-grey ml-lg-1 ml-0">
                © Copyright {new Date().getFullYear()} ChainScale. All Rights
                Reserved
              </p>
            </div>
          </div>

          <div className="col-md-7 col-lg-7 col-sm-12 ">
            
            {/* terms */}
            <div className="row justify-content-center">
              {this.state.column.map((el, index) => {
                return (
                  <div
                    className="col"
                    style={{paddingLeft: "50px"}}
                    key={index}
                  >
                    <ul className={footerStyle.footerColumn}>
                      <li className="w font-w-bold py-2 d-block">{el.title}</li>
                      {el.items.map((item, index) => {
                        return (
                          <a
                            key={index}
                            href={item.url}
                            target={item.target}
                            className={footerStyle.footerLink}
                            rel="noopener noreferre"
                          >
                            <li
                              className="font-w-light"
                              style={{ fontSize: "14px" }}
                            >
                              <div className="d-flex align-items-center">
                                <img
                                  src={item.img1}
                                  width={item.width}
                                  className="d-block"
                                />
                                <img
                                  src={item.img2}
                                  width={item.width}
                                  className="d-block ml-3"
                                />
                                <img
                                  src={item.img3}
                                  width={item.width}
                                  className="d-block ml-3"
                                />
                                <img
                                  src={item.img4}
                                  width={item.width}
                                  className="d-block ml-3"
                                />
                                <img
                                  src={item.img5}
                                  width={item.width}
                                  className="d-block ml-3"
                                />
                                <img
                                  src={item.img6}
                                  width={item.width}
                                  className="d-block ml-3"
                                />
                              </div>

                              <p>{item.item}<a href={item.url} target="_blank" style={{color: "#277FF7"}}>{item.link}</a></p>
                            </li>
                          </a>
                        )
                      })}
                    </ul>
                  </div>
                )
              })}
            </div>

          </div>

        </div>
      </Section>
    )
  }
}
