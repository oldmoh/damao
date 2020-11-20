require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: '大貓日誌',
    titleTemplate: '%s | 大貓日誌',
    author: 'oldmoh',
    description: '這裡是大貓的日誌，記錄著大貓的學習筆記和生活點滴。',
    url: `https://damao.page`,
    image: '/src/assets/images/website-icon.png', // Path to your image you placed in the 'static' folder
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.API_URL,
        contentTypes: [`category`, `post`, `tag`, `user`],
        singleTypes: [`index`, `about-me`, `profile`],
        queryLimit: 1000,
        loginData: {
          identifier: process.env.STRAPI_ID,
          password: process.env.STRAPI_PWD,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: [`node_modules`, `src`],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
