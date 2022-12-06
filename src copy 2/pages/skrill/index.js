import React, { Component } from "react"
import Section from "../../components/global/Section"
import cnicorn from "../../images/404/cnicorn.gif"
import { navigate, replace } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"

import window from "global"

export default class index extends Component {
  componentDidMount() {
    var URL = window.location.href
    var index = URL.indexOf("?")
    var resultURL = URL
    var finalCharacter = URL.length

    if (index != -1) {
      resultURL = URL.substring(index, finalCharacter)
      //ios deep linking doesn't work with replace func
      // window.location.replace(window.location.pathname + "result" + resultURL)

      //navigate(window.location.pathname + "result" + resultURL)
      // window.location = window.location.pathname + "result" + resultURL
    }
  }
  render() {
    return (
      <Section>
        <div className="row">
          <div className="col-6 mx-auto text-center">
            <h2 className="font-w-bold my-3 mt-md-5 mb-md-0">
              Please check your CelerX app for more details on your Skrill
              payment status.
            </h2>
            <img
              src={cnicorn}
              width="40%"
              className="mt-5"
              alt="flying unicorn"
            />
          </div>
        </div>
      </Section>
    )
  }
}
