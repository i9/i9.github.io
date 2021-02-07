import React, { Component } from "react";
import logo from "../../images/logo/White.svg";
import Section from "../global/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import footerStyle from "../style/footer.module.scss";
import { StaticQuery, graphql } from "gatsby";
import Newsletter from "./Newsletter";
import Mastercard from "../../images/footer/masterCard.svg";
import Visa from "../../images/footer/visa.png";

export default class Footer extends Component {
  state = {
    column: [
      {
        title: "Terms & Policy",
        items: [
          {
            //tos and privacy should put under celer.network
            item: "Terms of Service",
            url: "/doc/tos.pdf",
            target: "_blank",
            rel: "noopener noreferrer",
            
          },
          {
            item: "Privacy Policy",
            url: "/doc/Privacy-Policy.pdf",
            target: "_blank",
            rel: "noopener noreferrer",
            
          },
        ],
      },
      {
        title: "Payment Methods",
        items: [
          {
            img1: [Mastercard],
            img2: [Visa],
            width: "40px",
            url: "",
            target: "",
            rel: "noopener noreferrer",
          }
        ],
      },
      {
        title: "Contact",
        items: [
          {
            //tos and privacy should put under celer.network
            item: "Customer Support: support@chainscale.com",
            url: "mailto:support@celer.network",
            target: "_blank",
            rel: "noopener noreferrer",
          },
        ],
      },
    ],
  };
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
          render={(data) => {
            return data.allCommunityJson.edges.map((el) => {
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
              );
            });
          }}
        />
      );
    };

    return (
      <Section bgColor={"black"}>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="row">
              {this.state.column.map((el, index) => {
                return (
                  <div className="col-md" key={index}>
                    <ul className={footerStyle.footerColumn}>
                      <li className="w font-w-bold py-2 d-block">{el.title}</li>
                      {el.items.map((item, index) => {
                        return (
                          <a
                            key={index}
                            href={item.url}
                            target={item.target}
                            className="l-grey"
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
                              </div>

                              <p>{item.item}</p>
                            </li>
                          </a>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="row align-items-end space-top-medium">
          <div className="col-md-7 col-sm-12 py-3">
            <div className="d-flex flex-wrap align-items-center pb-1">
              <a target="_blank" href="/">
                <img src={logo} width="80" alt="logo" />
              </a>
              <p className="d-grey ml-lg-2 ml-0">
                © Copyright {new Date().getFullYear()} ChainScale. All Rights
                Reserved
              </p>
            </div>
          </div>
          <div className="col-md-5 col-lg-5 col-sm-12 ">
            <p className="w font-w-bold py-2">Sign up CelerX Newsletter</p>
            <Newsletter />
          </div>

          <div className="col-md-5 col-sm-12 py-3">
            <div className="row flex-wrap justify-content-around">
              {/* <Community /> */}
            </div>
          </div>
        </div>
      </Section>
    );
  }
}
