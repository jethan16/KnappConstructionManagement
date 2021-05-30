module.exports = {
  siteMetadata: {
    title: "knapp_construction_management",
  },
  plugins: [
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "699551ab06caaa07c712dfc53365f2",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
  ],
};
