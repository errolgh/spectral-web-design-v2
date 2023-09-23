const path = require(`path`)
const { createClient } = require('contentful')

const client = createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.DELIVERY_ACCESS_TOKEN,
})

// @TODO: Either fetch and filter from this back end with JSON or use GraphQL
// https://www.gatsbyjs.com/docs/why-gatsby-uses-graphql/#create-pages-using-graphql

// GraphQL or REST call
/*







*/

exports.createPages = async ({ actions, graphql }) => {
  const results = await graphql(`
    query BlogQuery {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  if (results.error) {
    console.error('GraphQL: Something went wrong!')
    return
  }

  results.data.allContentfulBlogPost.edges.forEach((edge) => {
    const blog = edge.node

    const { createPage } = actions
    createPage({
      path: `/blog/${blog.slug}`,
      //   path: '/blog/page-with-context',
      // any `component` assigned to a page gets access to the `pageContext` obj (check this ReactComponent in your local directory! \/)
      component: path.resolve(`./src/templates/blogDetails.jsx`),
      context: {
          //data you might need on your templated page
          slug: blog.slug,
        // title: "we don't need no stinkin' GraphQL",
        // heroImage: 'PRETEND IMAGE',
        // heroImageDescription: 'a pretend image.',
        // author: 'Icabod Crane',
        // authorAvatar: 'PRETEND AVATAR',
        // createdAt: '1 score, 15 years ago',
        // description: 'dope blog',
        // content: '<p>This is page content.</p><p>No GraphQL required.</p>',
      },
    })
  })
}
