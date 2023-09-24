const path = require(`path`)
// https://github.com/contentful/starter-gatsby-blog/blob/master/gatsby-node.js
// https://www.gatsbyjs.com/docs/why-gatsby-uses-graphql/#create-pages-using-graphql


exports.createPages = async ({ actions, graphql }) => {
  const results = await graphql(`
    query BlogQuery {
      allContentfulBlogPost{
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
    const BlogDetails = path.resolve(`./src/templates/blogDetails.jsx`)

    const { createPage } = actions
    createPage({
      path: `/blog/${blog.slug}`,
      // any `component` assigned to a page gets access to the `pageContext` obj (named ReactComponent below)
      component: BlogDetails,
      context: {
          slug: blog.slug,
        // heroImage: 'PRETEND IMAGE',
        // .....,
      },
    })


  })
}
