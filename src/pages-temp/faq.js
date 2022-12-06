import React from "react"
import Layout from "../components/layout"
import Hero from "../components/faq/Hero"
import List from "../components/faq/List"
import { graphql } from "gatsby"

export default function faq({ data }) {
  // let url = typeof window !== "undefined" && window.location.href

  // if (
  //   url === "https://celerx.app/faq/#socialchallenge" ||
  //   url === "https://celerx.app/faq#socialchallenge"
  // ) {
  //   return (
  //     <div
  //       style={{
  //         height: "100vh",
  //         backgroundColor: "white",
  //         position: "fixed",
  //         top: "0",
  //         transition: "0.3s",
  //         overflowX: "hidden",
  //       }}
  //     >
  //       <div className="container p-4">
  //         <div className="row mt-4" id="faq-ans"></div>
  //         <div className="row">
  //           <div className="col-sm-12">
  //             <p
  //               className="content-medium font-w-semibold text-left"
  //               style={{ wordWrap: "break-word", marginBottom: "20px" }}
  //             >
  //               What is challenge match? Am I eligible for proposing a
  //               challenge?
  //             </p>
  //             <p className="text-left content-small l-grey margin-bottom-exsmall mt-1">
  //               Challenge match is a private head-to-head match held betweeen
  //               you and a specific opponent. You can propose a challenge match
  //               to any other player in our app (e.g., via Live Feeds or
  //               Rematch). Currently, we have the following rules for proposing a
  //               challenge match: <br /> - You can only challenge a player with a
  //               similar or higher skill level.
  //               <br /> - You can propose at most 3 challenge matches to the same
  //               player every 24 hours. If your opponent does not respond your
  //               challenge within 24 hours, the challenge match will be canceled
  //               and the entry fee will be refunded.
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   )
  //}
  return (
    // <Layout>
    //   <Hero />
    //   <List items={data} />
    // </Layout>
    <div
      style={{
        height: "100vh",
        backgroundColor: "white",
        position: "fixed",
        top: "0",
        transition: "0.3s",
        overflowX: "hidden",
      }}
    >
      <div className="container">
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col-sm-12">
            <p
              className="text-left"
              style={{
                fontSize: "16px",
                fontStyle: "normal",
                fontStretch: "normal",
                lineHeight: "1.9",
                letterSpacing: "0.4px",
              }}
            >
              What is challenge match? Am I eligible for proposing a challenge?
            </p>
            <p
              className="text-left content-small l-grey margin-bottom-exsmall"
              style={{
                fontSize: "14px",
                fontStyle: "normal",
                fontStretch: "normal",
                lineHeight: "1.52",
                letterSpacing: "0.4px",
              }}
            >
              Challenge match is a private head-to-head match held betweeen you
              and a specific opponent. You can propose a challenge match to any
              other player in our app (e.g., via Live Feeds or Rematch).
              Currently, we have the following rules for proposing a challenge
              match:
              <br /> - You can only challenge a player with a similar or higher
              skill level.
              <br /> - You can propose at most 3 challenge matches to the same
              player every 24 hours.
              <br /> If your opponent declined your challenge or does not
              respond your challenge within 24 hours, the challenge match will
              be canceled and the entry fee will be refunded.
            </p>
          </div>
        </div>
      </div>
    </div>
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
