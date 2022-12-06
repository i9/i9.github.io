import React, { Component } from "react"
import faqStyle from "../style/faq.scss"
import { FaChevronDown } from "react-icons/fa"

export default class ListItems extends Component {
  state = {
    toggle: false,
    style: `ans text-left content-small d-grey mb-3`,
    arrowStyle: "faAngleDown",
  }

  handleClick = () => {
    this.state.toggle
      ? this.setState({
          toggle: false,
          style: `ans text-left content-small d-grey mb-3`,
          arrowStyle: `faAngleDown`,
        })
      : this.setState({
          toggle: true,
          style: `ansActive text-left content-small d-grey mb-3`,
          arrowStyle: `faAngleDown flip`,
        })
  }
  render() {
    return (
      <div className="col-sm-12">
        <div className="qContainer" onClick={this.handleClick}>
          <div className="row">
            <div className="col-sm-12">
              <div className="question">
                <p className="content-medium font-w-medium text-left b space-both-exsmall flex-grow-1">
                  {this.props.data.question}
                </p>
                <div
                  style={{ color: "#a0a0a0" }}
                  className={this.state.arrowStyle}
                >
                  <FaChevronDown />
                </div>
              </div>
              <div className="col-sm-12">
                <p
                  className={this.state.style}
                  dangerouslySetInnerHTML={{
                    __html: this.props.data.ans,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
