// const queries = require("./src/utils/algolia");
// require("dotenv").config({
//   path: ".env.development"
// });

module.exports = {
  siteMetadata: {
    title: `CelerX Game Developer`,
    description: `Monetize your HTML5 game with two lines of code. Integrating with Celer Gaming SDK and launching with CelerX equips your HTML5 game with real-money competition and built-in monetization capability.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://network.us18.list-manage.com/subscribe/post?u=14515d7b0afa9164f775c4b8b&amp;id=0d1e5df173", // add your MC list endpoint here; see instructions below
      },
    },
  ],
};
