// import type { GatsbyConfig } from 'gatsby'

// You can create additional environments beyond development and production through customizing dotenv’s path configuration. E.g. to add a staging environment you could run the Gatsby build command like:

// STAGING=true gatsby build

// gatsby-config.js:

// probably from jondjones:
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

// if (process.env.STAGING) {
//   require("dotenv").config({
//     path: `.env.${process.env.NODE_ENV}.staging`,
//   })
// } else {
//   require("dotenv").config({
//     path: `.env.${process.env.NODE_ENV}`,
//   })
// }


const config = {
  siteMetadata: {
    title: `Spectral Digital Labs`,
    // title: `Spectral Web Design v2`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-netlify',
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.DELIVERY_ACCESS_TOKEN,
        // for contentful preview
        // host: process.env.CONTENTFUL_HOST,
        // environment: process.env.CONTENTFUL_ENVIRONMENT || 'main',
        // he mentions possibly creating a preview environment, he also uses 'master' in his config file and .env file 17'15":
        // https://www.youtube.com/watch?v=zygumAuw1bg&ab_channel=jondjones
        // localhost:8000/__refresh in postman
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`, // Specify the path to your images folder
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images\/.*\.svg/,
        },
      },
    },
    // {
    //   resolve: 'gatsby-background-image-es5',
    //   options: {
    //     // add your own characters to escape, replacing the default ':/'
    //     specialChars: '/:',
    //   },
    // },
  ],
}

export default config
