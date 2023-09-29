import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'

/*
@FIXME: just a reminder this highlighting exists on my vscode :)

John Smilga Gatsby Course fixed this component #73,74-ish


  @TODO: Remember to pull from the gatsby-contentful-netlify starter repo for plugins
  @TODO: This is at *least* 2 components. '<BlogList />' should not be defind in the UI layer

  Data Layer
  https://www.youtube.com/watch?v=4iCBlDqLBOQ&t=1s&ab_channel=TheCodeAngle

  Styling
  https://www.youtube.com/watch?v=p3_xN2Zp1TY&ab_channel=KevinPowell
*/

const query = graphql`
  query {
    allContentfulBlogPost(sort: { createdAt: DESC }) {
      nodes {
        id
        title
        author
        createdAt(formatString: "MMMM Do, YYYY")
        slug
        content {
          raw
        }
        description {
          description
        }
        heroImage {
          file {
            url
          }
        }
        authorAvatar {
          file {
            url
          }
        }
      }
    }
  }
`

const BlogList = () => {
  // const {allContentfulBlogPost: { nodes: blogPosts },} = useStaticQuery(query)
  const data = useStaticQuery(query)
  const blogPosts = data.allContentfulBlogPost.nodes
  return (
    <Layout>
      <section className="pt-36 p-6 mx-auto flex flex-col bg-gray-50 max-w-lg md:max-w-xl lg:max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-14">
          Spectral Digital Labs Blog
        </h1>
        <div className="flex flex-wrap gap-16 justify-center">
          {blogPosts?.map((post) => (
            <div key={post.id}>
              <Link to={`/blog/${post.slug}`}>
                <div className="flex flex-col py-6 mb-8 max-w-sm bg-white p-2 shadow-lg rounded-lg justify-between">
                  {/* move the key from this section? semantically-- does every blog need its own section? */}
                  {/* {console.log('blogPosts', blogPosts.items)} */}
                  <h2 className="text-xl md:text-2xl mb-6">{post.title}</h2>
                  <div className="max-w-sm mx-auto">
                    <img
                      src={post.heroImage.file.url}
                      alt={post.heroImage.description}
                    />
                  </div>
                  <div className="flex mt-5 items-center space-x-3">
                    <div className="w-8">
                      <img src={post.authorAvatar[0].file.url} alt="" />
                    </div>
                    <span className="text-gray-500">by {post.author}</span>
                  </div>
                  <cite className="text-gray-500 text-sm">
                    {post.createdAt}
                  </cite>
                  <div className="max-w-2xl mt-5 text-sm">
                    <p>{post.description.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default BlogList
