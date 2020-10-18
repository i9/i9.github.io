import React, { Component } from "react";
import Section from "../global/Section";
import globalImg from "../../images/home/global.png";

export default class Global extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: ""
    };
  }
  componentDidMount() {
    fetch(
      "https://getcelerapp.s3-us-west-1.amazonaws.com/website-analytics.json"
    )
      .then(res => res.json())
      .then(res => {
        this.setState({
          isLoaded: true,
          data: res
        });
      });
  }
  render() {
    var { data, isLoaded } = this.state;
    return (
      <p className="content-medium d-grey mt-2">
        By integrating and launching with CelerX, your game will have a global
        user reach with more than {isLoaded ? data.countries : "loading"}{" "}
        countries in the world.
      </p>
    );
  }
}
