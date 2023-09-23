import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
// import GatsbyImage from 'gatsby-image'

// @TODO: configure childImageSharp/fluid/GatsbyImageFluidSharp

export const query = graphql`
# https://www.gatsbyjs.com/docs/why-gatsby-uses-graphql/#generate-pages-with-graphql 6'45" minutes in
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
    }
  }
`

const BlogDetails = ({ data, pageContext }) => {
  const blog = data.contentfulBlogPost
  return (
    <Layout>
      <main className="pt-36 mx-6 md:mx-28">
        <Link to="/blog">
          <p className='mb-8'>{'< Blog List'}</p>
        </Link>
        <div className="mb-16">
          <h1 className="text-xl md:text-3xl mb-6">{blog.title}</h1>
          {/* <h1 className="text-xl md:text-3xl mb-6">{pageContext.title}</h1> */}
          <div>
            <img
              src={pageContext.heroImage}
              alt={pageContext.heroImageDescription}
            />
            <div className="flex mt-5 items-center space-x-2">
              <div className="w-8">
                <img src={pageContext.authorAvatar} alt="" />
              </div>
              <span className="text-gray-500">by {pageContext.author}</span>
            </div>
            <cite className="text-gray-500 underline text-sm">
              {pageContext.createdAt}
            </cite>
          </div>
          <div className="mb-10">
            <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default BlogDetails
