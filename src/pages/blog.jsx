import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Button from '../components/Button'
import { Link } from 'gatsby'
import { createClient } from 'contentful'

/*
  @TODO: Remember to pull from the gatsby-contentful-netlify starter repo for plugins
  @TODO: This is at *least* 2 components. '<BlogList />' should not be defind in the UI layer

  Data Layer
  https://www.youtube.com/watch?v=4iCBlDqLBOQ&t=1s&ab_channel=TheCodeAngle

  Styling
  https://www.youtube.com/watch?v=p3_xN2Zp1TY&ab_channel=KevinPowell
*/

const BlogList = () => {
  const [blogPosts, setBlogPosts] = useState([])

  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.DELIVERY_ACCESS_TOKEN,
  })

  useEffect(() => {
    const getAllBlogs = async () => {
      try {
        await client.getEntries().then((entries) => {
          setBlogPosts(entries)
        })
      } catch (error) {
        console.log(error)
      }
    }
    getAllBlogs()
  }, [])

  return (
    <Layout>
      <main className="pt-36 mx-6 md:mx-28 flex flex-col items-center">
        {blogPosts?.items?.map((post) => (
          <section className="mb-16 max-w-2xl" key={post.sys.id}>
            <h1 className="text-xl font-bold mb-12">
              Spectral Digital Labs Latest Blog Posts
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              {post.fields.title}
            </h2>
            {console.log('blogPosts', blogPosts.items)}
            <img
              src={post.fields.heroImage.fields.file.url}
              alt={post.fields.heroImage.fields.description}
            />
            <div className="flex mt-5 items-center space-x-2">
              <div className="w-8">
                <img src={post.fields.authorAvatar[0].fields.file.url} alt="" />
              </div>
              <span className="text-gray-500">by {post.fields.author}</span>
            </div>
            <cite className="text-gray-500 underline text-sm">
              {post.sys.createdAt}
            </cite>
            <div className="max-w-2xl mt-5">
              <p>{post.fields.description}</p>
            </div>
            <div className="">
              <div className="mb-6 pr-12"></div>
              <Link to={`/blog/${post.fields.slug}`}>
                <Button order="primary">Read More</Button>
              </Link>
            </div>
          </section>
        ))}
      </main>
    </Layout>
  )
}

export default BlogList
