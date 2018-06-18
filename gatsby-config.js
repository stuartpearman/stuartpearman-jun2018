module.exports = {
  siteMetadata: {
    title: `Gatsby Redux`,
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/_posts`,
      },
    },
  ],
}
