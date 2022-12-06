import React, { Component } from "react"
import ListItems from "./ListItems"
import Section from "../global/Section"

export default class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allFaq: props.items.allFaqJson.edges,
    }
  }
  render() {
    return (
      <Section>
        <div className="row">
          {this.state.allFaq.map(({ node }) => {
            return <ListItems key={node.id} data={node} />
          })}
        </div>
      </Section>
    )
  }
}
