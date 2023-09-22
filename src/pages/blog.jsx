import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Button from '../components/Button'
import { Link } from 'gatsby'

import { createClient } from 'contentful'

// Iterate over list of Blogs (getEntries) and create getBlog function that will hae a prop/useRef that will take you to the blog page. I guess we should store all blogs for the aside? how will we keep from over fetching?

const BlogCard = () => (
  // probably a grid, could even be a list?
  <>
    {/* will have: */}
    {/* title */}
    {/* thumbnail */}
    {/* with a gatsby Link to the blog/:id */}
  </>
)

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([])

  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.DELIVERY_ACCESS_TOKEN,
  })

  // @TODO: get ready to uncomment this useEffect and have 10000000 errors. work through API traversal
  // useEffect(() => {
  //   const getAllEntries = async () => {
  //     try {
  //       await client.getEntries().then((entries) => {
  //         setBlogPosts(entries)
  //         // https://www.youtube.com/watch?v=4iCBlDqLBOQ&t=1s&ab_channel=TheCodeAngle
  //       })
  //     } catch (error) {
  //       console.log(error)
  //       // return "500: There was an error with our content service provider"
  //     }
  //   }
  //   getAllEntries()
  // }, [])

  return (
    <Layout>
      {/* This is moreso the blog/:id format. but we can glean some styling from here for the allBlogs page */}
      <main className="pt-36 mx-28">
        {/* https://www.youtube.com/watch?v=p3_xN2Zp1TY&ab_channel=KevinPowell */}
        {blogPosts?.items?.map(
          (
            post //could go inside section so Aside doesn't render O(n)
          ) => (
            <section className="mb-16" key={post.sys.id}>
              {console.log('new API, who dis?', post.sys.id)}
              <img
                src={post.fields.blogImage.field.file.url}
                alt={post.fields.title}
                width="576px"
              />
              <h1 className="text-4xl font-bold mb-6">{post.fields.title}</h1>
              <span>{post.fields.author}</span>
              {/* <cite>{post.fields.dateTime}?????</cite> */}
              <cite>{post.fields.createdDate}</cite>
              <div className="mb-10">
                <p>{post.fields.description}</p>
              </div>
              <div className="main-with-sidebar parent">
                <div className="children mb-6 pr-12">{post.fields.content}</div>
                <Link to={`/blog/${post.fields.slug}`}> // || post.sys.id but no SEO benefits here...
                  <Button order="primary">Read More</Button>
                </Link>
                {/* might not need content, just description and link to blog */}
                <aside className="children">
                  <h2 className="text-2xl mb-4">Other Posts</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Excepturi sunt voluptatum deleniti, assumenda autem quos.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum quo eligendi maxime dolor alias voluptates.
                  </p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sint, quas. Repellendus eum illum culpa laboriosam.
                  </p>
                </aside>
              </div>
            </section>
          )
        )}
      </main>
    </Layout>
  )
}

// Step 3: Export your component
export default BlogPage
