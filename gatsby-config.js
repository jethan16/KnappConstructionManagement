require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "knapp_construction_management",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, 
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: process.env.GATSBY_DATO_CMS_KEY,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-fontawesome-css",
    {
      resolve: "gatsby-plugin-scroll-reveal",
      options: {
        once: true
      }
    }
  ],
};
