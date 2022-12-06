import React, { Component } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

export default class Newsletter extends Component {
  state = {
    email: null,
    msg: null,
  }

  _handleChange = e => {
    // console.log({
    //   [`${e.target.name}`]: e.target.value,
    // })
    this.setState({
      [`${e.target.name}`]: e.target.value,
    })
  }

  _handleSubmit = e => {
    e.preventDefault()
    // console.log("submit", this.state)

    addToMailchimp(this.state.email)
      .then(({ msg, result }) => {
        // console.log("msg", `${result}: ${msg}`)
        if (result !== "success") {
          throw msg
        }
        this.setState({
          msg: msg,
        })
      })
      .catch(err => {
        // console.log("err", err)
        this.setState({
          msg: err,
        })
      })
  }

  render() {
    return (
      <>
        <form onSubmit={this._handleSubmit}>
          <div className="d-flex">
            <input
              style={{
                flexGrow: "1",
                borderRadius: "4px 0px 0px 4px",
                border: "none",
                padding: "12px",
                fontSize: "12px",
              }}
              type="text"
              placeholder="Join CelerX community to stay updated"
              name="email"
              onChange={this._handleChange}
            />
            <input
              type="submit"
              value="Subscribe"
              style={{
                borderRadius: "0 4px 4px 0",
                border: "none",
                backgroundColor: "#007bff",
                color: "white",
                fontSize: "14px",
                padding: "12px",
              }}
            />
          </div>
        </form>
        <p
          dangerouslySetInnerHTML={{ __html: this.state.msg }}
          className="d-grey"
        />
      </>
    )
  }
}
