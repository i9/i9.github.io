import React from "react"
import Section from "../../components/global/Section"
import cnicorn from "../../images/404/cnicorn.gif"

import "bootstrap/dist/css/bootstrap.min.css"

export default function result() {
  return (
    <Section>
      <div className="row">
        <div className="col-6 mx-auto text-center">
          <h5 className="font-w-bold my-3 mt-md-5 mb-md-0">
            Please check your CelerX app for more details on your PayPal payment
            status.
          </h5>
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
