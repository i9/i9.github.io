import React, { Component } from "react"
import Section from "../global/SectionFull"
import teamprofile1 from "../../images/about/mo.jpg"
import teamprofile2 from "../../images/about/qingkai.jpg"
import teamprofile3 from "../../images/about/junda.jpg"
import teamprofile4 from "../../images/about/xiaozhou.jpg"

export default class Team extends Component {
  render() {
    return (
      <Section>
        <div class="card-deck">
          <div className="card">
            <img
              className="card-img-top"
              src={teamprofile1}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Mo Dong</h5>
              <p className="card-text">Cofounder</p>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top"
              src={teamprofile2}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Qingkai Liang</h5>
              <p className="card-text">Cofounder</p>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top"
              src={teamprofile3}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Junda Liu</h5>
              <p className="card-text">Cofunder</p>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top"
              src={teamprofile4}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Xiaozhou Li</h5>
              <p className="card-text">Cofunder</p>
            </div>
          </div>
        </div>
      </Section>
    )
  }
}
