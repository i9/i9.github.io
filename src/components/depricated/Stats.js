import React, { Component } from "react"
import Section from "../global/Section"

var numeral = require("numeral")

export default class Stats extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      data: "",
    }
  }
  componentDidMount() {
    fetch(
      "https://getcelerapp.s3-us-west-1.amazonaws.com/website-analytics.json"
    )
      .then(res => res.json())
      .then(res => {
        this.setState({
          isLoaded: true,
          data: res,
        })
      })
  }
  render() {
    var { data, isLoaded } = this.state
    return (
      <Section bgColor={"#FF926E"} extraMargin={"80px"}>
        <div className="row">
          <div className="col-md-3 col-lg-3 col-6 py-3">
            <h1 className="w font-w-bold statsInfo">
              {isLoaded ? numeral(data.countries).format("0,0") : "loading"}
            </h1>
            <p className="w text-uppercase">countries</p>
          </div>
          <div className="col-md-3 col-lg-3 col-6 py-3">
            <h1 className="w font-w-bold statsInfo">
              {isLoaded ? numeral(data.totalPlayers).format("0,0") : "loading"}
            </h1>
            <p className="w text-uppercase">total Players</p>
          </div>
          <div className="col-md-3 col-lg-3 col-6 py-3">
            <h1 className="w font-w-bold statsInfo">
              {isLoaded ? numeral(data.totalMatches).format("0,0") : "loading"}
            </h1>
            <p className="w text-uppercase">total matches</p>
          </div>
          <div className="col-md-3 col-lg-3 col-6 py-3">
            <h1 className="w font-w-bold statsInfo">
              {isLoaded
                ? `$ ${numeral(data.totalPrizes).format("0,0")}`
                : "loading"}
            </h1>
            <p className="w text-uppercase">total prizes</p>
          </div>
        </div>
      </Section>
    )
  }
}
