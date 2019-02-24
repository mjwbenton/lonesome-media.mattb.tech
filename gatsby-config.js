require("ts-node/register");
require("dotenv").config();
const { largePicture } = require("./src/sizes");

module.exports = {
  siteMetadata: {
    navigationColumns: [["Photos"], ["Keyboards", "Playlists"], ["About"]]
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `@mattb.tech/gatsby-remark-flickr`,
            options: {
              sizes: largePicture
            }
          },
          `gatsby-remark-prismjs`
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/content`, name: "markdown-pages" }
    },
    `@mattb.tech/gatsby-transform-flickr-set`,
    `@mattb.tech/gatsby-transform-spotify-playlist`,
    `gatsby-plugin-catch-links`
  ]
};
