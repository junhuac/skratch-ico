module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
        resolve: `gatsby-source-contentful`,
        options: {
          spaceId: `j5zy0n17n2ql`,
          accessToken: `7aa029c0d7de6e8c2f44b56a8826c9d33acf0b6feebe48a8dd419115169dcd63`
        }
    }
  ]
}
