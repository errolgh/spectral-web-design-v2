import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { Link, useParams } from 'gatsby'

import { createClient } from 'contentful'

// this turned out to be the blog detail page

/*
- Link back to /blog
- possibly using state management/usecontext to rehydrate components if gatsby's built in routing allows between all blogs and blog detail pages


*/

const BlogList = () => {
  // const [blogPosts, setBlogPosts] = useState([])
  const [singleBlogPost, setSingleBlogPost] = useState([])

  const { id } = useParams()

  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.DELIVERY_ACCESS_TOKEN,
  })

  // useEffect(() => {
  //   const getEntryById = async () => {
  //     try {
  //       // await client.getEntries().then((entries) => {
  //       //   console.log(entries)
  //       await client.getEntry(id).then((entry) => {
  //         setSingleBlogPost(entry)
  //       })
  //     } catch (error) {
  //       console.log(error)
  //     } //////////////////////////////////////////////// KEEP HTML FORMATTING ON THIS PAGE FOR SLUG STYLING
  //   }
  //   getEntryById()
  // }, [])
  return (
    <Layout>
      <main className="pt-36 mx-28">
        <Link to="/blog">
          <p>all blogs</p>
        </Link>
        <img
          src={singleBlogPost?.fields?.blogImage?.fields?.file?.url}
          alt={singleBlogPost?.fields?.blogImage?.fields?.title}
        />
        <h1>{singleBlogPost?.fields?.blogImage?.fields?.title} </h1>
        <span>{singleBlogPost?.fields?.author} </span>
        <small>{singleBlogPost?.fields?.createdDate} </small>
        <section>{singleBlogPost?.fields?.content} </section>
        {/* https://www.youtube.com/watch?v=p3_xN2Zp1TY&ab_channel=KevinPowell */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-6">Blog List</h1>
          <div className="mb-10">
            <p>
              Hi there! I'm the proud creator of this blog, which I built with
              Gatsby, TailwindCSS and Contentful CMS.
            </p>
          </div>
          <div className="main-with-sidebar parent">
            <div className="children mb-6 pr-12">
              <h2 className="text-2xl mb-4">Main Content</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloribus nam nisi ducimus soluta unde officiis, maiores labore
                ut dolore porro, eum eligendi exercitationem temporibus esse
                dolorem! Maxime, rem! Dolores, voluptatem?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloribus nam nisi ducimus soluta unde officiis, maiores labore
                ut dolore porro, eum eligendi exercitationem temporibus esse
                dolorem! Maxime, rem! Dolores, voluptatem?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloribus nam nisi ducimus soluta unde officiis, maiores labore
                ut dolore porro, eum eligendi exercitationem temporibus esse
                dolorem! Maxime, rem! Dolores, voluptatem?
              </p>
            </div>
            <aside className="children">
              <h2 className="text-2xl mb-4">Aside</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Excepturi sunt voluptatum deleniti, assumenda autem quos.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                quo eligendi maxime dolor alias voluptates.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
                quas. Repellendus eum illum culpa laboriosam.
              </p>
            </aside>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default BlogList
