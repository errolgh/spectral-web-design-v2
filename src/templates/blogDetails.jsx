import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'

// import GatsbyImage from 'gatsby-image'
// @TODO: configure childImageSharp/fluid/GatsbyImageFluidSharp whatever is hip nowadays

export const query = graphql`
  # https://www.gatsbyjs.com/docs/why-gatsby-uses-graphql/#generate-pages-with-graphql 6'45" minutes in
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      author
      heroImage {
        file {
          url
        }
      }
      heroImage {
        description
      }
      description {
        description
      }
      authorAvatar {
        file {
          url
        }
      }
      createdAt(formatString: "MMMM Do, YYYY")
      content {
        raw
      }
    }
  }
`

// https://www.youtube.com/watch?v=RnWmtpT6Ttg&ab_channel=AlexMerced-FullStackDeveloper RICH TEXT
// https://github.com/gatsbyjs/gatsby/discussions/28098
const richTextOptions = {
  renderMark: {
    [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="text-slate-700 mb-20">{children}</p>
    ),
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2 className="text-2xl font-bold mb-4">{children}</h2>
    },
  },
}

const BlogDetails = ({ data }) => {
  const blog = data.contentfulBlogPost
  // console.log('pulling content', JSON.parse(blog.content.raw))
  return (
    <Layout>
      <section className='flex flex-col items-center'>
        <main className="pt-36 mx-6 md:mx-28 mb-20 max-w-2xl">
          <Link to="/blog/">
            <p className="mb-8">{'< Blog List'}</p>
          </Link>
          <div className="mb-16">
            <h1 className="text-xl md:text-5xl mb-6 max-w-2xl">{blog.title}</h1>
            <div className="w-1/2 ml-24 mb-6">
              <img
                src={blog.heroImage.file.url}
                alt={blog.heroImage.description}
              />
              <div className="flex mt-5 items-center space-x-3">
                <div className="w-8">
                  <img src={blog.authorAvatar[0].file.url} alt="" />
                </div>
                <span className="text-gray-500">by {blog.author}</span>
              </div>
              <cite className="text-gray-500 underline text-sm">
                {blog.createdAt}
              </cite>
            </div>
            <div className="mb-10">
              <div>{renderRichText(blog.content, richTextOptions)}</div>
            </div>
          </div>
        </main>
      </section>
    </Layout>
  )
}

export default BlogDetails
