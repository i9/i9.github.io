import React from "react"
import Layout from "../components/layout"
import Hero from "../components/faq/Hero"
import List from "../components/faq/List"
import { graphql } from "gatsby"

export default function faq({ data }) {
  return (
    <Layout>
      <Hero />
      <List items={data} />
    </Layout>
  )
}
export const query = graphql`
  {
    allFaqJson {
      edges {
        node {
          id
          question
          category
          ans
        }
      }
    }
  }
`
