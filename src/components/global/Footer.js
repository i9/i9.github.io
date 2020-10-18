import React, { Component } from "react";
import logo from "../../images/logo/White.png";
import Section from "../global/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StaticQuery, graphql } from "gatsby";

export default class Footer extends Component {
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
      <Section bgColor={"black"} secHeight={"sec-footer"}>
        <div className="row align-items-center">
          <div className="col-md-7 col-sm-12 py-3">
            <div className="d-flex flex-wrap align-items-center">
              <a target="_blank" href="https://www.celer.network/">
                <img src={logo} width="80" />
              </a>
              <p className="d-grey ml-lg-3">
                © Copyright {new Date().getFullYear()} Celer Network. All Rights
                Reserved
              </p>
            </div>
          </div>

          <div className="col-md-5 col-sm-12 py-3">
            <div className="row flex-wrap justify-content-around">
              <Community />
            </div>
          </div>
        </div>
      </Section>
    );
  }
}
